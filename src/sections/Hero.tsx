import React from 'react';
import { motion } from 'framer-motion';

import CoverImage from '../assets/cover.png';
import Stamp from '../assets/stamp.png';

import { slideIn, staggerContainer, textVariant } from '../util/variants';

const Hero: React.FC = () => {
    return (
        <section className="hero-section relative py-16 w-screen h-fit overflow-hidden md:py-32">
            <motion.div
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                className="hero-container"
                viewport={{ once: false }}
            >
                <motion.h1 
                    variants={textVariant(1.1)}
                    className="hero-heading mb-2 z-30 relative"
                >metaverse</motion.h1>

                <motion.div 
                    variants={textVariant(1.2)}
                    className="flex justify-center mt-1 z-30 relative md:mt-2 xl:mt-3"
                >
                    <h1 className="hero-heading">ma</h1>
                    <div className="letterD border-[5.6px] border-[#fff] rounded-r-full h-[29px] w-[53px] mx-[2px] mt-[6px] md:border-[11px] md:h-14 md:mt-[9px] md:w-[108px] md:mx-[3px] xl:border-[18px] xl:h-[98px] xl:mt-[18px] xl:mx-1 xl:w-[196px]"></div>
                    <h1 className="hero-heading">ness</h1>
                </motion.div>

                <motion.div
                    variants={slideIn("left", "inerita", 0, 1)}
                    className="cover-image z-20 relative top-[-14px] md:top-[-24px] xl:top-[-38px]"
                >
                    <img src={CoverImage} alt="cover" className="w-full h-full object-cover rounded-tl-[64px] rounded-bl-3xl relative left-8 md:rounded-tl-[128px] md:left-16 md:h-[360px] lg:left-20 lg:h-[400px] xl:h-[496px] xl:left-28" />
                    
                    <img src={Stamp} alt="stamp" className="absolute -bottom-6 right-[10%] w-[16%] md:w-[14%] md:-bottom-12 lg:w-[10%] xl:-bottom-16" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;