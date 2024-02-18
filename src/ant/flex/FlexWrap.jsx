import React from "react";
import { Button, Flex } from "antd";
const FlexWrap = () => (
  <Flex wrap="wrap" gap="small">
    {Array.from(
      {
        length: 24,
      },
      (_, i) => (
        <Button key={i} type="primary">
          Button
        </Button>
      )
    )}
  </Flex>
);
export default FlexWrap;
