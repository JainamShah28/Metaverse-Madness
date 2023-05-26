import React from 'react';
import { motion } from 'framer-motion';

import ArrowDown from '../assets/arrow-down.svg';

import { staggerContainer, slideIn } from '../util/variants';

import TypingText from '../components/TypingText.tsx';

const About: React.FC = () => {
    return (
        <section className="about-section">
            <div className="gradient-02 z-0" />

            <motion.div 
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                className="about-container px-6 relative z-10 my-16 md:px-14 md:my-32 lg:px-24 xl:px-32"
                viewport={{ once: false, amount: 0.25 }}
            >
                <TypingText
                    text="| About Metaverus"
                    styles="text-center text-[#C7C7C7] opacity-50 text-xs mb-2 md:mb-4 xl:text-sm"
                />

                <motion.p 
                    variants={slideIn("up", "tween", 0, 1)}
                    className="text-center text-[#C7C7C7] leading-7 mb-2 md:text-xl md:leading-9 md:mb-4 xl:text-2xl xl:leading-[52px]"
                ><span className="bold-text">Metaverse &nbsp;</span>is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the<span className="bold-text">&nbsp; madness of the metaverse &nbsp;</span>of today, using only<span className="bold-text">&nbsp; VR &nbsp;</span>devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's<span className="bold-text">&nbsp; explore &nbsp;</span>the madness of the metaverse by scrolling down.</motion.p>

                <motion.img 
                    variants={slideIn("up", "tween", 0.8, 1)}
                    src={ArrowDown} 
                    alt="arrowDown" 
                    className="block mx-auto w-3 xl:w-5" 
                />
            </motion.div>
        </section>
    );
};

export default About;