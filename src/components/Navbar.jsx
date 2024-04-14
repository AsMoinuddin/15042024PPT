import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  BarChartOutlined,
  SolutionOutlined,
  FilePptOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.svg";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        backgroundColor: "var(--dark-green)",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: "auto", height: "30px" }}
        />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          lineHeight: "64px",
          backgroundColor: "var(--dark-green)",
          width: "28rem",
        }}
        selectedKeys={[]}
      >
        <Menu.Item
          key="1"
          icon={
            <HomeOutlined
              style={{
                fontSize: "1.1rem",
                color: "var(--main-green)",
              }}
            />
          }
        >
          <Link to="/" style={{ color: "var(--main-green)" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <BarChartOutlined
              style={{ fontSize: "1.1rem", color: "var(--main-green)" }}
            />
          }
        >
          <Link to="/stats" style={{ color: "var(--main-green)" }}>
            KPI Statistics
          </Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={
            <SolutionOutlined
              style={{ fontSize: "1.1rem", color: "var(--main-green)" }}
            />
          }
        >
          <Link to="/solution" style={{ color: "var(--main-green)" }}>
            Solution
          </Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <FilePptOutlined
              style={{ fontSize: "1.1rem", color: "var(--main-green)" }}
            />
          }
        >
          <Link to="/ppt" style={{ color: "var(--main-green)" }}>
            PPT
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
