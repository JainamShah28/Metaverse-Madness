import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, slideIn, planetVariants } from '../util/variants.ts';
import { startingFeatures } from '../constants/constants.ts';

import GetStartedImg from '../assets/get-started.png';

const GetStarted: React.FC = () => {
    return (
        <section className="get-started-section">
            <motion.div
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="about-container px-6 relative z-10 flex flex-col gap-8 my-16 md:px-14 md:my-32 lg:px-24 lg:flex-row lg:justify-between xl:px-32"
            >
                <motion.div
                    variants={planetVariants("right")}
                    className="flex justify-center items-center flex-1 lg:justify-start"
                >
                    <img src={GetStartedImg} alt="getStarted" className="object-contain w-full h-full" />
                </motion.div>

                <motion.div
                    variants={slideIn('left', 'spring', 0.2, 1.75)}
                    className="flex-[0.95] flex flex-col justify-start gap-4 md:gap-8 xl:gap-12"
                >
                    <p className="text-[#C7C7C7] opacity-50 text-xs xl:text-sm">| How Metaverus Works</p>

                    <h1 className="title font-bold text-2xl leading-9 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-7xl xl:leading-[88px]">Get started with just a few clicks</h1>

                    <div className="flex flex-col gap-4 md:gap-8 xl:gap-12">
                        {
                            startingFeatures.map((feature, index) => {
                                return (
                                    <div className="flex items-start justify-start" key={index} >
                                        <div className="bg-[#323F5D] flex justify-center items-center w-12 h-12 rounded-xl mt-1 md:w-16 md:h-16 md:text-lg xl:w-20 xl:h-20 xl:rounded-2xl xl:text-xl">
                                            <p className="font-bold">0{index + 1}</p>
                                        </div>

                                        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] md:ml-[36px] md:text-xl md:leading-[36px] xl:text-2xl xl:leading-[38px] xl:ml-[48px] xl:max-w-[370px]">
                                            {feature}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default GetStarted;