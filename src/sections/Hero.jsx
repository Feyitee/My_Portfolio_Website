import React from "react";
import { words } from "../components/constants";
import Button from "../components/Button";
import HeroExperience from "../components/Hero Models/HeroExperience";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10" />
      <img src="/images/bg.png" alt="background" />

      <div className="hero layout">
        <header className="flex flex-col justify-around md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
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
            <p>
              Hi, I'm Tobi, a passionate software developer with over 3 years
              experience.
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />
            </p>
          </div>
        </header>
        {/* 3D Experience */}
        <figure>
          <div className="hero-3d-layout border-red-400">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
