import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, slideIn, textVariant } from '../util/variants';

import Map from '../assets/map.png';
import User1 from '../assets/people-01.png';
import User2 from '../assets/people-02.png';
import User3 from '../assets/people-03.png';

import TypingText from '../components/TypingText.tsx';

const World: React.FC = () => {
    return (
        <section className="world-section">
            <motion.div
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="whats-new-container px-6 relative z-10 my-16 md:px-14 md:my-32 lg:px-24 xl:px-32"
            >
                <TypingText
                    text="| People on the World"
                    styles="text-center text-[#C7C7C7] opacity-50 text-xs mb-2 md:mb-4 xl:text-sm"
                />

                <motion.h1 
                    variants={textVariant(0.3)}
                    className="title text-center font-bold text-2xl leading-9 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-7xl xl:leading-[88px]"
                >Track friends around you and invite them to play together in the same world</motion.h1>

                <motion.div 
                    variants={slideIn("up", "tween", 0.3, 1)}
                    className="map-container relative w-full mt-4 h-[560px] md:mt-8 lg:mt-10 lg:h-fit"
                >
                    <img src={Map} alt="map" className="h-full w-full object-cover" />

                    <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#5D6680] rounded-full p-[6px]">
                        <img src={User1} alt="user" />
                    </div>

                    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#5D6680] rounded-full p-[6px]">
                        <img src={User2} alt="user" />
                    </div>

                    <div className="absolute top-20 left-16 w-20 h-20 bg-[#5D6680] rounded-full p-[6px]">
                        <img src={User3} alt="user" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default World;