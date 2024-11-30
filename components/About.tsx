"use client";

import { personalData } from "@/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Animation

import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <div
        id="me"
        className="relative z-50 border-t
    border-[#25213b] overflow-clip"
      >
        <Image
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 -z-10"
        />

        <div className="flex justify-center -translate-y-[-1px">
          <div className="w-3/4">
            <div
              className="h-[1px] bg-gradient-to-r from-transparent
        via-violet-500 to-transparent w-full"
            />
          </div>
        </div>
        <Fade
          direction="down"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div className="text-purple text-[14px] my-3 flex justify-center tracking-widest mt-[36px]">
            <h1 className="heading">
              Get to
              <span className=" text-pink-500"> Know </span>
              Me
            </h1>
          </div>
        </Fade>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center mt-[-16px] w-[40rem] mb-5">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Fade
            direction="left"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className="font-medium mb-5 text-[#16f2b3] text-3xl mt-5">
              Shreya
            </div>
          </Fade>
          <Fade
            direction="left"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-gray-200 text-sm lg:text-lg !leading-10">
              {personalData.description}
            </p>
          </Fade>

          <Fade
            direction="left"
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className="my-6 flex items-center gap-5 ml-2">
              <Link
                href={personalData.github}
                target="_blank"
                className="transition-all text-white hover:scale-125 bg-pink-500 w-[40px] h-[40px]
              rounded-full flex justify-center pt-2 duration-300"
              >
                <BsGithub size={24} />
              </Link>
              <Link
                href={personalData.LinkedIn}
                target="_blank"
                className="transition-all text-white hover:scale-125 bg-pink-500 w-[40px] h-[40px]
              rounded-full flex justify-center pt-2 duration-300"
              >
                <BsLinkedin size={24} />
              </Link>
              <a
                href="mailto:shreyarajput600@gmail.com"
                target="_blank"
                className="transition-all text-white hover:scale-125 bg-pink-500 w-[40px] h-[40px]
              rounded-full flex justify-center pt-2 duration-300"
              >
                <SiGmail size={24} />
              </a>
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="transition-all text-white hover:scale-125 bg-pink-500 w-[40px] h-[40px]
              rounded-full flex justify-center pt-2 duration-300"
              >
                <SiLeetcode size={24} />
              </Link>
              <Link
                href={personalData.twitter}
                target="_blank"
                className="transition-all text-white hover:scale-125 bg-pink-500 w-[40px] h-[40px]
              rounded-full flex justify-center pt-2 duration-300"
              >
                <FaTwitterSquare size={24} />
              </Link>
            </div>
          </Fade>
        </div>

        {/* <div className="flex justify-center order-1 lg:order-2">
          <Fade
            direction="right"
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <CardContainer className="inter-var">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={personalData.profile}
                    height="2000"
                    width="2000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
            </CardContainer>
            
          </Fade>
        </div> */}
        <div className="flex justify-center order-1 lg:order-2">
  <Fade
    direction="right"
    delay={800}
    cascade
    damping={1e-1}
    triggerOnce={true}
  >
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className="w-full mt-4">
        <img
          src={personalData.profile}
          height="1000" // You can adjust this value based on your needs
          width="1000" // Adjust width accordingly
          className="h-[400px] w-[400px] object-cover rounded-xl group-hover/card:shadow-xl grayscale
          hover:grayscale-0 cursor-pointer" // Adjust size with Tailwind classes
          alt="thumbnail"
        />
      </CardItem>
    </CardContainer>
  </Fade>
</div>

      </div>
    </div>
  );
};

export default About;
