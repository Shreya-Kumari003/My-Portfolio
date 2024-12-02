"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData1 from "@/data/confetti.json";
import animationData from "@/data/3d.json";
import MagicButton from "../MagicButton";
import { Hobbies, Tools } from "../Hobbies";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-8 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Availability", "Quality", "Reliability"];
  const rightLists = ["User Friendly", "Efficient", "Scalable"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "shreyarajput600@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {" "}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col ",
            id !== 7 && "px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={cn(
              "font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10",
              id === 8 && "absolute !!top-[30px] !!right-[10px]"
            )}
          >
            {description}
          </div>
          <div
            className={cn(
              "font-sans text-lg lg:text-3xl font-bold z-10",
              !(id === 7 || id === 8) && "max-w-96",
              (id === 1) &&
                "max-w-full lg:text-5xl text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
                (id===2) && 
                "text-lg lg:text-3xl text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            )}
          >
            {title}
          </div>
          {/* <div
            className={cn(
              "font-sans font-bold z-10",
              !(id === 7 || id === 8) && "max-w-96",
              id === 1 && "max-w-full lg:text-5xl text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
              (id === 2) &&
                "text-lg lg:text-3xl text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            )}
          >
            {title}
          </div> */}

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="absolute">
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "90%", height: "auto" }}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <img src="/confetti.gif" alt="confetti" />
                <Lottie
                  animationData={animationData1}
                  loop={copied}
                  autoplay={copied}
                  style={{ width: "100%", height: "auto" }}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
          {/* {id === 7 && (
            <div className="relative">
              <Tools />
            </div>
          )} */}
          {id === 7 && (
            <div className="relative">
              {/* <div className="absolute top-0 left-0 flex items-center justify-center text-white text-lg font-bold">
                Your Text Here
              </div> */}
              <Tools />
            </div>
          )}

          {id === 8 && (
            <div className="mt-5 relative">
              <Hobbies />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
