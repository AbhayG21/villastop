import React, { useState } from "react";
import "./index.css"
import {
    LeftOutlined,
    RightOutlined,
    InfoCircleOutlined,
    HomeOutlined,
    PropertySafetyOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Image, Flex, Typography, Space } from "antd";
import villa from "../../Assets/villaStop.png";
import vs from "../../Assets/vs.png";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const Navbar = ({collapsed,setCollapsed}) => {
    
    const items = [
        {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
        },
        {
            key: "2",
            icon: <PropertySafetyOutlined />,
            label: "Properties",
        },
        {
            key: "3",
            icon: <InfoCircleOutlined />,
            label: "Property Details",
        },
    ];
    return (
        <Sider
            style={{
                minHeight: "100vh",
                position: "fixed",
                zIndex: 51,
                // borderRight:"0.5px solid gray"
            }}
            collapsed={collapsed}
        >
            <Flex
                vertical
                style={{
                    width: "100%",
                }}
            >
                <Flex
                    justify="center"
                    align="center"
                    className="h-12"
                >
                    <img
                        src={collapsed ? vs : villa}
                        className="min-w-80"
                        alt=""
                    />
                </Flex>

                <Menu
                    mode="vertical"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Flex>
            <Button
                type="primary"
                shape="circle"
                icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "-15px",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                }}
            />
        </Sider>
    );
};
export default Navbar;
