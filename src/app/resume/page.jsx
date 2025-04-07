"use client";

import {
    FaHtml5,
    FaCss3,
    FaPython,
    FaReact,
    FaNodeJs,
    FaVuejs,
    FaJava,
    FaJs
} from 'react-icons/fa'

import {
    SiTailwindcss,
    SiNextdotjs,
    SiMongodb,
    SiTypescript,
    SiFlask,
    SiRuby
} from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
    title: 'About Me',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos error eum atque, enim voluptatibus sit itaque hic voluptate illum possimus nesciunt animi mollitia neque, numquam consequatur autem culpa perferendis.",
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Pratham Sampat'
        },
        {
            fieldName: 'Phone Number',
            fieldValue: '+91 9867292169'
        },
        {
            fieldName: 'Experience',
            fieldValue: '2 years'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Indian'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English, Hindi, Gujarati'
        },
        {
            fieldName: 'Email',
            fieldValue: 'prathamsampat2002.ps@gmail.com'
        },
    ]
}

const experience = {
    icon: '/photo.jpg',
    title: 'My Experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium voluptatibus numquam quod beatae ab amet asperiores nam, voluptates, maiores natus ipsa consequatur ut? Totam architecto et dolore quod quos.',
    items: [
        {
            company: 'Metron Security',
            position: 'Full Stack Developer',
            duration: '03/2024 - Present'
        },
        {
            company: 'RNS Technologies',
            position: 'Full Stack Developer',
            duration: '07/2023 - 03/2024'
        },
        {
            company: 'RYR Consultancy',
            position: 'Full Stack Web Developer Intern',
            duration: '08/2022 - 10/2022'
        },
        {
            company: 'DigiPlusIT',
            position: 'Frontend Developer Intern',
            duration: '09/2021 - 11/2021'
        },
    ]
}

const education = {
    icon: '/photo.jpg',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium voluptatibus numquam quod beatae ab amet asperiores nam, voluptates, maiores natus ipsa consequatur ut? Totam architecto et dolore quod quos.',
    items: [
        {
            institution: 'Vishwakarma University',
            degree: 'B.TECH in Computer Engineering',
            result: '9.4 CGPA',
            duration: '2021 - 2024',
        },
        {
            institution: 'Vidyalankar Polytechnic',
            degree: 'Diploma in Computer Engineering',
            result: '95.04 %',
            duration: '2018 - 2021'
        }
    ]
}

const skills = {
    title: 'My Skills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium voluptatibus numquam quod beatae ab amet asperiores nam, voluptates, maiores natus ipsa consequatur ut? Totam architecto et dolore quod quos.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5'
        },
        {
            icon: <FaCss3 />,
            name: 'css 3'
        },
        {
            icon: <FaJs />,
            name: 'javascript'
        },
        {
            icon: <FaReact />,
            name: 'react.js'
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js'
        },
        {
            icon: <FaVuejs />,
            name: 'vue.js'
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js'
        },
        {
            icon: <SiMongodb />,
            name: 'mongo db'
        },
        {
            icon: <SiTypescript />,
            name: 'typescript'
        },
        {
            icon: <FaPython />,
            name: 'python'
        },
        {
            icon: <FaJava />,
            name: 'java'
        },
        {
            icon: <SiRuby />,
            name: 'ruby'
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind css'
        },
        {
            icon: <SiFlask />,
            name: 'flask'
        },
    ]
}

const resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className='min-h-[8ovh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="aboutme">About Me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] xl:text-left text-center'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className='w-full'>
                            <div className='felxflex-col gap-[30px] xl:text-left text-center'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.result}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className='w-full'>
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="aboutme"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                                    {about.info.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default resume
