"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["Active" + " React & Next.js " + " Learner"],
        autoStart: true,
        loop: true,
        delay: 85,
        wrapperClassName: "text-secondary-foreground",
      }}
    />
  );
};

export default TypewriterEffect;
