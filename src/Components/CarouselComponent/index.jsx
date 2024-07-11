import React from "react";
import { Carousel, Flex, Typography } from "antd";
import "./index.css";
import banner1 from "../../Assets/banner-01.jpg";
import banner2 from "../../Assets/banner-02.jpg";
import banner3 from "../../Assets/banner-03.jpg";

const carItems = [
    {
        image: banner1,
        state: "Toronto",
        country: "Canada",
        description: "HURRY! GET THE BEST VILLA FOR YOU",
    },
    {
        image: banner2,
        state: "Melbourne",
        country: "Australia",
        description: "BE QUICK! GET THE BEST VILLA IN TOWN",
    },
    {
        image: banner3,
        state: "Miami",
        country: "South Florida",
        description: "ACT NOW! GET THE HIGHEST LEVEL PENTHOUSE",
    },
];
const CarouselComponent = () => {
    return (
        <Carousel autoplay arrows={false} className="carousel">
            {carItems.map((item, i) => (
                <div>
                    <div
                        className="layer1"
                        key={i}
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }}
                    >
                        <div className="layer2">
                            <Flex className="overFlex">
                                <div className="infoDiv">
                                    <div className="location">
                                        {item.state},{" "}
                                        <span style={{ color: "#E85123" }}>
                                            {item.country}
                                        </span>
                                    </div>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
