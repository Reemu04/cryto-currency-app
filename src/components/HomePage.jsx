import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(globalStats);
  if (isFetching) return "Loading....";
  return (
    <>
      <Title level={2} className="heading">
        GLobal Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="T0tal CryptoCurrencies" value={globalStats.total} />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="T0tal Exchanges"
            value={millify(globalStats.totalExchanges)}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="T0tal Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="T0tal 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="T0tal Markets"
            value={millify(globalStats.totalMarkets)}
          />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
