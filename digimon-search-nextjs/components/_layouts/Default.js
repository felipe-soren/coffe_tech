import React, { useState } from "react";
import { Layout, Menu, Input } from "antd";

const { Header, Content, Footer } = Layout;

export default function DefaultLayout({ children }) {
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal"></Menu>
      </Header>
      <Content style={{ padding: "50px" }}>
        <div
          className="site-layout-content"
          style={{
            backgroundColor: "#fff",
            height: "100%",
            padding: "90px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Digimon Search ©2021</Footer>
    </Layout>
  );
}
