"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Developing websites that serve as powerful marketing tools and bricks to engage your audience.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Building a product from concept to completion is what I do best. I help to bring your vision to life.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "Creating responsive and high-performing mobile applications for both iOS and Android platforms.",
    href: "/contact",
  },
  {
    num: "04",
    title: "API Integration",
    description:
      "Seamlessly integrating third-party APIs to enhance functionality and improve the applications efficiency.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-6 justify-center group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">{service.title}</h2>
                <p className="text-justify text-white/50">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
