import { Avatar, Col, Collapse, Row, Typography } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  if (isFetching) return <Loader />;

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
                  key={coin.uuid}
                  showArrow={false}
                  header={
                    <Row key={coin.uuid}>
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
