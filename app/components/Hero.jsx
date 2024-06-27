"use client";

import React, { useState, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [heroVideoSrc, setHeroVideoSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setHeroVideoSrc(
        window.innerWidth < 760
          ? "/assets/videos/smallHero.mp4"
          : "/assets/videos/hero.mp4"
      );
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    // for cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 2.5,
      duration: 1,
    });
    gsap.to("#cta", { opacity: 1, delay: 2.5, duration: 1 });
  }, []);

  return (
    <section className="w-full bg-black nav-height relative pt-10">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title" className="hero-title">
          iPhone 15 pro
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-event-none"
            autoPlay
            loop
            playsInline={true}
            muted
            key={heroVideoSrc}
          >
            <source src={heroVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0">
          <a href="#Highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
