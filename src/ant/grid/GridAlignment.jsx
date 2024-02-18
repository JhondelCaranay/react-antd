import React from "react";
import { Col, Divider, Row } from "antd";
import "./GridAlignment.css";
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const GridAlignment = () => (
  <>
    <Divider orientation="left">Align Top</Divider>
    <Row
      justify="center"
      align="top"
      style={{ backgroundColor: "gray", height: "100px" }}
    >
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Middle</Divider>
    <Row
      justify="space-around"
      align="middle"
      style={{ backgroundColor: "gray", height: "100px" }}
    >
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Bottom</Divider>
    <Row
      justify="space-between"
      align="bottom"
      style={{ backgroundColor: "gray", height: "100px" }}
    >
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </>
);
export default GridAlignment;
