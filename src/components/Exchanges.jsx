import { Avatar, Col, Collapse, Row, Spin, Typography } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  console.log(data?.data?.coins);
  if (isFetching) return "Loading...";
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {data?.data?.coins.map((coin, i) => (
          <>
            <Col span={24}>
              <Collapse>
                <Panel
                  key={coin.id}
                  showArrow={false}
                  header={
                    <Row key={coin.id}>
                      <Col span={6}>
                        <Text>
                          <strong>{coin.rank}.</strong>
                        </Text>
                        <Avatar className="exchange-image" src={coin.iconUrl} />
                        <Text>
                          <strong>{coin.name}.</strong>
                        </Text>
                      </Col>
                      <Col span={6}>$ {millify(coin.price)}</Col>
                      <Col span={6}>{millify(coin.marketCap)}</Col>
                      <Col span={6}> {millify(coin.change)}</Col>
                    </Row>
                  }
                >
                  <Title level={4}>Coin Raking URL</Title>
                  {HTMLReactParser(coin.coinrankingUrl || "")}
                </Panel>
              </Collapse>
            </Col>
          </>
        ))}
        <Col></Col>
      </Row>
    </>
  );
};

export default Exchanges;
