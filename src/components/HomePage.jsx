import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import React from "react";

const { Title } = Typography;
const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        GLobal Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="T0tal CryptoCurrencies" value="5" />{" "}
        </Col>
        <Col span={12}>
          <Statistic title="T0tal Exchanges" value="5" />{" "}
        </Col>
        <Col span={12}>
          <Statistic title="T0tal Market Cap" value="5" />{" "}
        </Col>
        <Col span={12}>
          <Statistic title="T0tal 24h Volume" value="5" />{" "}
        </Col>
        <Col span={12}>
          <Statistic title="T0tal Markets" value="5" />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
