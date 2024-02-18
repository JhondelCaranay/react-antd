import React from "react";
import { Col, Row } from "antd";
const GridColumnOffset = () => (
  <>
    <Row>
      <Col className="gutter-box" span={8}>
        col-8
      </Col>
      <Col className="gutter-box" span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col className="gutter-box" span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col className="gutter-box" span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col className="gutter-box" span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);
export default GridColumnOffset;
