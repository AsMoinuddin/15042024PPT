import React from "react";
import { Row, Col, Typography, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BarChartOutlined,
  SolutionOutlined,
  FilePptOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--main-green)",
        padding: "20px",
        color: "#fff",
      }}
    >
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={16} lg={16}>
            <div>
              <Title level={2}>Personal Data</Title>
              <Paragraph
                style={{
                  color: "var(--light-green)",
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "var(--dark-green)",
                  }}
                >
                  <span style={{ width: "50%" }}>
                    <h2
                      style={{
                        color: "var(--dark-green)",
                        fontSize: "1.5rem",
                        marginBottom: "5px",
                      }}
                    >
                      Swathi Manikyam
                    </h2>
                    <p style={{ marginBottom: "5px" }}>
                      Role:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Front Line Campaigner
                      </span>
                    </p>
                    <p style={{ marginBottom: "5px" }}>
                      Company:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Direct Dialogue Initiatives Private Limited
                      </span>
                    </p>
                    <p style={{ marginBottom: "5px" }}>
                      Employee ID:{" "}
                      <span style={{ fontWeight: "bold" }}>DD1220</span>
                    </p>
                  </span>
                  <span style={{ width: "50%" }}></span>
                </div>
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div>
              {/* Quick links section */}
              <Title level={2}>Quick Links</Title>
              <Menu
                theme="dark"
                mode="inline"
                style={{
                  lineHeight: "64px",
                  backgroundColor: "transparent",
                  margin: 0,
                }}
                selectedKeys={[]}
              >
                <Menu.Item
                  key="1"
                  icon={
                    <HomeOutlined
                      style={{ fontSize: "1.1rem", color: "var(--dark-green)" }}
                    />
                  }
                  style={{ width: "50%" }}
                >
                  <Link to="/" style={{ color: "var(--dark-green)" }}>
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={
                    <BarChartOutlined
                      style={{ fontSize: "1.1rem", color: "var(--dark-green)" }}
                    />
                  }
                  style={{ width: "50%" }}
                >
                  <Link to="/stats" style={{ color: "var(--dark-green)" }}>
                    KPI Statistics
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={
                    <SolutionOutlined
                      style={{ fontSize: "1.1rem", color: "var(--dark-green)" }}
                    />
                  }
                  style={{ width: "50%" }}
                >
                  <Link to="/solution" style={{ color: "var(--dark-green)" }}>
                    Solution
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="4"
                  icon={
                    <FilePptOutlined
                      style={{ fontSize: "1.1rem", color: "var(--dark-green)" }}
                    />
                  }
                  style={{ width: "50%" }}
                >
                  <Link to="/ppt" style={{ color: "var(--dark-green)" }}>
                    PPT
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
