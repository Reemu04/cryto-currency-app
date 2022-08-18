import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
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
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies"> Show More</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news"> Show More</Link>
        </Title>
      </div>
      <News />
    </>
  );
};

export default HomePage;
