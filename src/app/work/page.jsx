"use client";
import { delay, motion } from "framer-motion";
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
        category: "frontend",
        title: "project 1",
        description:
            "Sunt esse adipisicing aliquip id enim amet dolor deserunt culpa minim ut.",
        stack: ["HTML5", "CSS3", "JS", "REACT"],
        image: "/iot.jpeg",
        live: "https://www.sample.com",
        github: "https://www.sample.com",
    },
    {
        num: "02",
        category: "backend",
        title: "project 2",
        description:
            "Sunt esse adipisicing aliquip id enim amet dolor deserunt culpa minim ut.",
        stack: ["HTML5", "CSS3", "JS", "REACT"],
        image: "/restaurant.jpeg",
        live: "https://www.sample.com",
        github: "https://www.sample.com",
    },
    {
        num: "03",
        category: "full-stack",
        title: "project 3",
        description:
            "Sunt esse adipisicing aliquip id enim amet dolor deserunt culpa minim ut.",
        stack: ["HTML5", "CSS3", "JS", "REACT"],
        image: "/aimouse.jpeg",
        live: "https://www.sample.com",
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
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
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
                                    <div className="relative w-full h-[460px] overflow-hidden bg-black/10 group">
                                        <div className="absolute inset-0 z-10 bg-black/10" />
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
