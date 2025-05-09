"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.3,
                        duration: 0.4,
                        ease: "easeIn",
                    },
                }}
            >
                {/* Clipped container */}
                <motion.div
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute rounded-full overflow-hidden flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1.7,
                            duration: 0.4,
                            ease: "easeInOut",
                        }
                    }
                    }
                >
                    {/* Smaller Image */}
                    <motion.div
                        className="relative w-full h-full"
                        style={{
                            transform: "scale()", // Adjust the vertical position further
                        }}
                    >
                        <Image
                            src="/profile_photo.png"
                            priority
                            quality={100}
                            fill
                            alt="profile picture"
                            className="object-cover object-[50%_12%] translate-y-[45px]"
                        />
                    </motion.div>
                </motion.div>

                {/* Animated circle */}
                <motion.svg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
