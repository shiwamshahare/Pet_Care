import React from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Booking from "./components/Booking/Booking";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import TestiMonials from "./components/Testimonials/TestiMonials";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import CopyRight from "./components/Footer/CopyRight";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Booking />
      <About />
      <OurServices />
      <Features />
      <Pricing />
      <Team />
      <TestiMonials />
      <Blogs />
      <Footer />
      <CopyRight />
    </>
  );
};

export default App;
