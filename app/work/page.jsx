"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Equipacare",
    description:
      "Transforming hospital management with Equipacare, an innovative solution that scales necessary sterilization equipment, optimizing processes and ensuring efficiency. This tool not only automates complex calculations but also captures qualified leads through an intuitive and responsive interface. Ideal for hospitals seeking precision and practicality, Equipacare revolutionizes the way we manage essential equipment.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "MySQL" },
    ],
    image: "/Assets/works/equipawork.png",
    live: "https://equipacare-cme.vercel.app",
    github: "https://github.com/rodrigmeira/Equipacare-CME",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Morais & Ribeiro",
    description:
      "Presenting Morais&Ribeiro, an innovative frontend solution crafted to deliver a seamless and visually striking user experience. Utilizing state-of-the-art technologies, this project ensures a responsive, efficient, and modern web application that truly stands out. Ideal for businesses aiming to elevate their digital presence, Morais&Ribeiro merges elegant design with robust performance.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
    ],
    image: "/Assets/works/moraiswork.png",
    live: "https://moraisribeiro.vercel.app",
    github: "https://github.com/rodrigmeira/moraisribeiro",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Wefashion",
    description:
      "Introducing Wefashion, an innovative frontend solution designed to enhance the digital experience for a fashion school. By leveraging cutting-edge technologies, this project offers a responsive, stylish, and user-friendly web application that elevates online learning and engagement. Perfect for educational institutions looking to create an impactful digital presence, Wefashion combines elegant design with robust functionality.",
    stack: [{ name: "ReactJS" }, { name: "SCSS" }, { name: "Javascript" }],
    image: "/Assets/works/wefashionwork.png",
    live: "https://wefashion.vercel.app",
    github: "https://github.com/rodrigmeira/web-wefashion",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 text-justify">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex itemx-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>Live project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt="project"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
