"use client";

import { cn } from "@/lib/utils"; // assuming cn is a utility function
import React, { useEffect, useState } from "react";
import { toolbox } from "@/data"; // import your toolbox data
import { TechIcon } from "./TechIcon"; // assuming TechIcon is your icon component

export const ToolboxInfiniteScroller = ({
  items = toolbox,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { title: string; iconType: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="inline-flex items-center justify-center gap-2 py-1 px-3 outline outline-2 outline-white-100 rounded-lg mr-3"
          >
            <div className="text-white">
              <div className="inline-flex items-center gap-2">
                <TechIcon component={item.iconType} />
                <span className="font-semibold text-lg">{item.title}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
