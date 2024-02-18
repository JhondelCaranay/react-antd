import React from "react";
import { Button, Flex, Radio, Slider } from "antd";
const FlexGap = () => {
  const [gapSize, setGapSize] = React.useState("small");
  const [customGapSize, setCustomGapSize] = React.useState(0);
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={gapSize} onChange={(e) => setGapSize(e.target.value)}>
        {["small", "middle", "large", "customize"].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      {gapSize === "customize" && (
        <Slider value={customGapSize} onChange={setCustomGapSize} />
      )}
      <Flex gap={gapSize !== "customize" ? gapSize : customGapSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Flex>
    </Flex>
  );
};
export default FlexGap;
