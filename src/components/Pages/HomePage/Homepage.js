import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Swiper from "../../Swiper/SwiperBox";

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | Designing with Tega";
  });
  return (
    <div>
      <Header />
      <Swiper />
    </div>
  );
};

export default Homepage;
