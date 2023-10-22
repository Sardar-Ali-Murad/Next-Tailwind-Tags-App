import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Comment from "@/components/Comments";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-[100px] px-[30px] py-[100px] md:px-[100px] lg:px-[200px]">
        <Hero />
        <Info />
        <Comment />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
