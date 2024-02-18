import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LayoutBasic from "./ant/layout/LayoutBasic.jsx";
import HeaderContentFooter from "./ant/layout/HeaderContentFooter.jsx";
import HeaderSider from "./ant/layout/HeaderSider.jsx";
import HeaderSider2 from "./ant/layout/HeaderSider2.jsx";
import LayoutSider from "./ant/layout/LayoutSider.jsx";
import CustomTrigger from "./ant/layout/CustomTrigger.jsx";
import Responsive from "./ant/layout/Responsive.jsx";
import FixedHeader from "./ant/layout/FixedHeader.jsx";
import FixedSider from "./ant/layout/FixedSider.jsx";
import FlexBasic from "./ant/flex/FlexBasic.jsx";
import FlexAlign from "./ant/flex/FlexAlign.jsx";
import FlexGap from "./ant/flex/FlexGap.jsx";
import FlexWrap from "./ant/flex/FlexWrap.jsx";
import FlexCombination from "./ant/flex/FlexCombination.jsx";
import GridBasic from "./ant/grid/GridBasic.jsx";
import GridColumnOffset from "./ant/grid/GridColumnOffset.jsx";
import GridGutter from "./ant/grid/GridGutter.jsx";
import GridSort from "./ant/grid/GridSort.jsx";
import GridTypeSetting from "./ant/grid/GridTypeSetting.jsx";
import GridAlignment from "./ant/grid/GridAlignment.jsx";
import GridOrder from "./ant/grid/GridOrder.jsx";
import GridStretch from "./ant/grid/GridStretch.jsx";
import { ConfigProvider } from "antd";
import FormMethods from "./ant/form/FormMethods.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#00b96b",

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
        components: {
          Table: {
            borderColor: "#1677ff",
          },
        },
      }}
    >
      <App />
    </ConfigProvider> */}
    {/* Flex ******************************************************************/}
    {/* <FlexBasic /> */}
    {/* <FlexAlign /> */}
    {/* <FlexGap /> */}
    {/* <FlexWrap /> */}
    {/* <FlexCombination /> */}
    {/* GRID ******************************************************************/}
    {/* <GridBasic /> */}
    {/* <GridGutter /> */}
    {/* <GridColumnOffset /> */}
    {/* <GridSort /> */}
    {/* <GridTypeSetting /> */}
    {/* <GridAlignment /> */}
    {/* <GridOrder /> */}
    {/* <GridStretch /> */}

    {/* LAYOUTS ******************************************************************/}
    {/* <LayoutBasic /> */}
    {/* <HeaderContentFooter /> */}
    {/* <HeaderSider /> */}
    {/* <HeaderSider2 /> */}
    {/* <LayoutSider /> */}
    {/* <CustomTrigger /> */}
    {/* <Responsive /> */}
    {/* <FixedHeader /> */}
    {/* <FixedSider /> */}

    {/* LAYOUTS ******************************************************************/}
    <FormMethods />
  </React.StrictMode>
);
