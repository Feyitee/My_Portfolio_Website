import React from "react";
import { words } from "../components/constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10" />
      <img src="/images/bg.png" alt="background" />

      <div className="hero layout">
        <header className="flex flex-col justify-around md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text"></div>

            <h1>
              Shaping
              <span
                className="slide"
                style={{
                  display: "inline-block",
                  height: "48px",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                }}
              >
                <span className="wrapper">
                  {words.map((word, idx) => (
                    <span
                      key={word.text + idx}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                      style={{ height: "48px", alignItems: "center" }}
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1>Into real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
