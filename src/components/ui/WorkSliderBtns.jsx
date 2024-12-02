"use client";

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import React from 'react'


const WorkSliderBtns = () => {
    const swiper = useSwiper();
    return (
        <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
        xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
            <button className="bg-accent hover:bg-accent-hover text-primary 
            text-[22px] w-[35px] flex justify-center items-center transition-all" onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className="" />
            </button>
            <button className="bg-accent hover:bg-accent-hover text-primary 
            text-[22px] w-[35px] flex justify-center items-center transition-all" onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className="{iconStyles}" />
            </button>

        </div>
    )
}

export default WorkSliderBtns
