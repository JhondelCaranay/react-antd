import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "./HeaderContentFooter.module.scss";
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `navigation ${index + 1}`,
  href: "#" + index,
}));
const HeaderContentFooter = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles["demo-logo"]} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items.map((item) => ({
            ...item,
            onClick: () => console.log(item),
          }))}
          className={styles.menu}
        />
      </Header>
      <Content className={styles.content}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className={styles["content-inner"]}
        >
          Content
        </div>
      </Content>
      <Footer className={styles.footer}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HeaderContentFooter;
