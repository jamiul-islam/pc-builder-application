import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  display: "flex",
  justifyContent: "center",
};

const Slide = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp"
          width="982"
          height="500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="desktop-deal-live-now-home-banner"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-delivery-on-app-may-home-banner-982x500.webp"
          width="982"
          height="500"
          alt="free-delivery-on-app-may-home-banner"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
          width="982"
          height="500"
          alt="express-delivery-home-banner-june"
        />
      </h3>
    </div>
  </Carousel>
);
export default Slide;
