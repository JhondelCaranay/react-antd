import React from "react";
import { Layout, Flex } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import styles from "./LayoutBasic.module.scss";

const LayoutBasic = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      {/*  */}
      <Layout className={styles.layoutStyle}>
        <Header className={styles.headerStyle}>Header</Header>
        <Content className={styles.contentStyle}>Content</Content>
        <Footer className={styles.footerStyle}>Footer</Footer>
      </Layout>

      {/*  */}
      <Layout className={styles.layoutStyle}>
        <Header className={styles.headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" className={styles.siderStyle}>
            Sider
          </Sider>
          <Content className={styles.contentStyle}>Content</Content>
        </Layout>
        <Footer className={styles.footerStyle}>Footer</Footer>
      </Layout>

      {/*  */}
      <Layout className={styles.layoutStyle}>
        <Header className={styles.headerStyle}>Header</Header>
        <Layout>
          <Content className={styles.contentStyle}>Content</Content>
          <Sider width="25%" className={styles.siderStyle}>
            Sider
          </Sider>
        </Layout>
        <Footer className={styles.footerStyle}>Footer</Footer>
      </Layout>

      {/*    */}
      <Layout className={styles.layoutStyle}>
        <Sider width="25%" className={styles.siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Header className={styles.headerStyle}>Header</Header>
          <Content className={styles.contentStyle}>Content</Content>
          <Footer className={styles.footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Flex>
  );
};
export default LayoutBasic;
