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
        description: "HURRY!",
        description2: "GET THE BEST VILLA FOR YOU",
    },
    {
        image: banner2,
        state: "Melbourne",
        country: "Australia",
        description: "BE QUICK!",
        description2: "GET THE BEST VILLA IN TOWN",
    },
    {
        image: banner3,
        state: "Miami",
        country: "South Florida",
        description: "ACT NOW!",
        description2: "GET THE HIGHEST LEVEL PENTHOUSE",
    },
];
const { Title } = Typography;
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
                        <div className="layer2 ">
                            <div className="overFlex">
                                {/* <div className="infoDiv flex ms-5 mt-5">
                                    <div className="location ">
                                        {item.state},{" "}
                                        <span style={{ color: "#E85123" }}>
                                            {item.country}
                                        </span>
                                    </div>
                                </div> */}
                                <div className="w-full h-full flex justify-center md:justify-start items-center">
                                    <div className="h-[70%] w-96 md:ms-52">
                                        <div className="bg-white h-[50px] w-[70%] flex justify-start items-center size text-lg p-5">
                                            {item.state},{" "}
                                            <span style={{ color: "#E85123" }}>
                                                {item.country}
                                            </span>
                                        </div>
                                        <div className="flex flex-col text-white">
                                            <div className="text-6xl font-bold pt-2">
                                                {item.description}
                                            </div>
                                            <div className="text-6xl font-bold leading-normal">
                                                {item.description2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
