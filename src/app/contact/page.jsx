"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectLabel,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaStar } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 9867292169",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "prathamsampat2002.ps@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Tilekar Nagar, Pune, India",
    },
];

const SparkleTrail = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.5, 0], scale: [1, 1.2, 1], y: [-2, -5, -8] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute right-4 top-1/2 -translate-y-1/2"
        >
            <FaStar className="text-yellow-400 text-xs animate-ping" />
        </motion.div>
    );
};

const PaperPlane = ({ isFlying }) => {
    return (
        <AnimatePresence>
            {isFlying && (
                <motion.div
                    initial={{ x: 200, opacity: 1 }}
                    animate={{ x: 500, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                >
                    <div className="relative">
                        <FaPaperPlane className="text-accent text-xl" />
                        <SparkleTrail />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Contact = () => {
    const form = useRef(null);
    const [isFlying, setIsFlying] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_6snkmta",
                "template_fnzj7sj",
                form.current,
                "Cqn96CvPptklkx4Xq"
            )
            .then(
                () => {
                    setIsFlying(true);
                    toast.success("Message sent successfully!");

                    setTimeout(() => {
                        setIsFlying(false);
                    }, 1500);
                },
                (error) => {
                    console.error(error.text);
                    toast.error("Something went wrong.");
                }
            );
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 1, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl relative overflow-hidden"
                        >
                            <h3 className="text-4xl text-accent">Let&apos;s Work together</h3>
                            <p className="text-white/60">Feel free to reach out through this form.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Firstname" required />
                                <Input type="text" name="lastname" placeholder="Lastname" required />
                                <Input type="email" name="email" placeholder="Email address" required />
                                <Input type="text" name="phone" placeholder="Phone number" />
                            </div>

                            <Select name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="frontend">Frontend Development</SelectItem>
                                        <SelectItem value="backend">Backend Development</SelectItem>
                                        <SelectItem value="fullstack">Full Stack Development</SelectItem>
                                        <SelectItem value="software">Software Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your Message here"
                                required
                            />

                            <div className="relative w-fit">
                                <Button className="max-w-40" size="default" type="submit">
                                    Send Message
                                </Button>
                                <PaperPlane isFlying={isFlying} />
                            </div>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1 max-w-full">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl break-all">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
