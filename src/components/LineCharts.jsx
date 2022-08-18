import { Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;
const LineCharts = ({ coinHistory, coinName, currentPrice }) => {
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          {/* <Title level={5} className="price-change">
            {coinHistory?.data?.change}
          </Title> */}
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default LineCharts;
