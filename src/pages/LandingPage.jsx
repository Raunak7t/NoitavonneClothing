import React from "react";
import { StyledText } from "../components/";
import img from "../assets/bg.gif";
import { Link } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, #110022cc, #0005), url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen flex items-center px-40 sm:px-10 justify-center  backdrop-blur-xl ">
        <div className="flex sm:flex-col items-center justify-center gap-20 flex-wrap">
          <div className="left">
            <h1 className="text-8xl sm:text-5xl">
              <StyledText>Noitavonne</StyledText>
            </h1>
            <h2 className="text-7xl sm:text-4xl text-right">
              <StyledText>Clothing</StyledText>
            </h2>
            <h3 className="text-4xl sm:text-2xl font-semibold mt-12 sm:mt-5">
              <StyledText>Timeless</StyledText> Fashion,{" "}
              <StyledText>Modern</StyledText> Touch.
            </h3>
            <p className="mt-12 max-w-md sm:mt-5">
              [An E-Commerce website, built as an task assignment for Noitavonne
              React Dev interview. Click "Get Started" to explore.]
            </p>
          </div>
          <div className="right">
            <Link
              to="/app"
              className="text-2xl sm:text-xl font-bold bg-slate-800/50 py-3 px-12 rounded-2xl border transition-all duration-500 hover:bg-purple-400/40"
            >
              Get Started <FaRightLong className="inline text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
