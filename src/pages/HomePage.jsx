import React from "react";
import HeroSection from "../components/home/HeroSection";
import Step from "../components/home/Step";
import Content from "../components/home/Content";
import Statistic from "../components/home/Statistic";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Statistic />
      <Step />
      <Content />
    </React.Fragment>
  );
};

export default HomePage;
