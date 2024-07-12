import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import { CustomerServiceOutlined, MessageOutlined } from "@ant-design/icons";
import { FloatButton, Layout } from "antd";
const LayoutWrapper = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { Content } = Layout;
    return (
        <Router>
            <Layout>
                <Navbar collapsed = {collapsed} setCollapsed = {setCollapsed}/>
                <Content style={{
                    marginLeft:"80px",
                    transition:"ease-in-out 0.2s"
                }}>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                    </Routes>
                    <FloatButton
                        icon={<MessageOutlined />}
                        type="default"
                        tooltip="Schedule a visit"
                        style={{
                            right: 24,
                            bottom: 80,
                        }}
                    />
                    <FloatButton
                        icon={<CustomerServiceOutlined />}
                        type="primary"
                        tooltip="Contact Us"
                        style={{
                            right: 24,
                            bottom: 25,
                        }}
                    />
                </Content>
            </Layout>
        </Router>
    );
};

export default LayoutWrapper;
