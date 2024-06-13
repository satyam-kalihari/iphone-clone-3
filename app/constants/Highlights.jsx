"use client";

import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";


import { rightImg, watchImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const highlightsRef = useRef();
  useGSAP(() => {

    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        start: "bottom bottom",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".link",
        start: "bottom bottom",
        end: "top 70%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div
          id="highlightTitles"
          className="mb-12 w-full items-end md:flex justify-between"
          ref={highlightsRef}
        >
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div id="subTitle" className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film{" "}
              <Image src={watchImg} alt="watchImag" className="ml-2" />
            </p>
            <p className="link">
              Watch the event{" "}
              <Image src={rightImg} alt="rightImag" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
