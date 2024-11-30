"use client";

import React, { useRef } from "react";
import { toolbox } from "@/data";
import { ToolboxInfiniteScroller } from "./ui/ToolboxInfiniteScroller";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Painiting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Dancing",
    emoji: "💃",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Shopping",
    emoji: "👗",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const Tools = () => {
  return (
    <div>
      <div className="min-h-[180px]">
        {/* <div className="mb-6 text-center">
          <h1>My toolbox</h1>
          <p>
            Explore my technologies and tools I use to craft exceptional digital
            experiences
          </p>
        </div> */}
        <ToolboxInfiniteScroller
          items={toolbox} // Pass the original toolbox data
          direction="left" // Scroll left
          speed="normal" // Set scroll speed
          pauseOnHover={true} // Pause on hover
          className="custom-scroll-class mt-3" // Add custom styles if necessary
        />
        <ToolboxInfiniteScroller
          items={toolbox} // Pass the original toolbox data
          direction="right" // Scroll left
          speed="normal" // Set scroll speed
          pauseOnHover={true} // Pause on hover
          className="custom-scroll-class" // Add custom styles if necessary
        />
      </div>
    </div>
  );
};

export const Hobbies = () => {
  const contraintRef = useRef(null);
  return (
    <div
        id="hobbies"
        className="h-[150px] flex flex-col p-0"
      >
        {/* <div className="px-6 py-4">
          <h3 className="text-center">Beyond the code</h3>
          <p>Explore my interests and hobbies beyond the digital realm</p>
        </div> */}
        <div className="relative flex-1" ref={contraintRef}>
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              className="inline-flex items-center gap-2 px-6
            bg-gradient-to-r from-emerald-300 to to-sky-400 rounded-full py-1.5 absolute"
              style={{
                left: hobby.left,
                top: hobby.top,
              }}
              drag
              dragConstraints={contraintRef}
            >
              <span className="font-medium text-gray-950">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </motion.div>
          ))}
        </div>
      </div>
  );
};
