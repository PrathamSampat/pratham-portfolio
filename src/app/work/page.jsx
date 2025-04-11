"use client";
import { motion } from "framer-motion";
import { useState } from "react";
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
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "MERN stack",
    title: "project 1",
    description:
      "Pawsitively Safe is a full-stack MERN based web and mobile application that provides a comprehensive solution for animal safety, health monitoring, adoption, and fostering. Developed as part of my final year degree project, this app integrates modern IoT capabilities with a robust backend to track animal vitals such as temperature, heart rate, and activity using sensors like MAX30100, MPU6050, and DHT11 connected via NodeMCU and ESP8266 modules. The frontend, built with React.js, offers user-friendly interfaces for real-time reporting, adoption listings, and smart analytics dashboards, while the backend leverages Node.js and Express.js to manage APIs, user data, and device integration securely. MongoDB stores structured information about animals, reports, users, and NGOs, supporting scalable and flexible data operations. This project showcases advanced full-stack development skills, real-time data handling, RESTful API design, third-party service integration, and responsive UI/UX. Pawsitively Safe was awarded First Prize in my degree final year project showcase for its innovation, technical depth, and social impact.",
    stack: ["MONGO DB", "EXPRESS.JS", "REACT.JS", "NODE.JS"],
    image: "/pawsitivelysafe.png",
    github: "https://www.sample.com",
  },
  {
    num: "02",
    category: "MERN stack",
    title: "project 2",
    description:
      "I designed and developed an award-winning IoT-based indoor farming system using the MERN stack—MongoDB, Express.js, React.js (with Ionic), and Node.js—along with Firebase and Arduino (NodeMCU ESP8266). This project automates key farming processes like lighting, irrigation, and climate control in indoor environments by integrating real-time sensor data and IoT hardware with a responsive web dashboard. I built the backend with Node.js and Express to handle device communication and data storage, utilized MongoDB for structured sensor data logging, and created an interactive frontend with React and Ionic for live monitoring and remote control. Real-time synchronization was achieved using Firebase, while the hardware logic was implemented using Arduino IDE and NodeMCU modules. The project was awarded 1st Prize in my Diploma Final Year Exhibition, showcasing both technical excellence and practical innovation.",
    stack: ["MONGO DB", "EXPRESS.JS", "REACT.JS", "NODE.JS"],
    image: "/iot.jpeg",
    live: "https://indoorfarming-cfb49.web.app/login",
    github: "https://github.com/PrathamSampat/Indoor-farming",
  },
  {
    num: "03",
    category: "full-stack",
    title: "project 3",
    description:
      "AI Virtual Mouse is an innovative application that replaces traditional hardware peripherals with an AI-driven, gesture-controlled interface. Utilizing computer vision and machine learning techniques, the system employs the MediaPipe library for real-time hand tracking, recognizing various gestures to perform actions such as cursor movement, clicking, scrolling, and system controls like brightness and volume adjustment. Developed using Python and OpenCV, this project showcases proficiency in integrating AI models with real-time video processing to enhance human-computer interaction.",
    stack: ["PYTHON"],
    image: "/ai-mouse.png",
    github: "https://www.sample.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIdx = swiper.activeIndex;
    setProject(projects[currentIdx]);
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
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white">
                {project.num ?? "01"}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all
                duration-500 capitalize"
              >
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
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
              {/* Slides */}
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative w-full h-[460px] overflow-hidden group">
                    <div className="absolute inset-0 z-10" />
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
