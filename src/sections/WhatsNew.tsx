import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, slideIn, planetVariants } from '../util/variants.ts';
import { newFeatures } from '../constants/constants.ts';

import WhatsNewImg from '../assets/whats-new.png';

const WhatsNew: React.FC = () => {
    return (
        <section className="whats-new-section">
            <motion.div
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="whats-new-container px-6 relative z-10 flex flex-col gap-8 my-16 md:px-14 md:my-32 lg:px-24 lg:flex-row-reverse lg:justify-between xl:px-32"
            >
                <motion.div
                    variants={planetVariants("left")}
                    className="flex justify-center items-center flex-1 lg:justify-end"
                >
                    <img src={WhatsNewImg} alt="getStarted" className="object-contain w-full h-full" />
                </motion.div>

                <motion.div
                    variants={slideIn('right', 'spring', 0.2, 1.75)}
                    className="flex-[0.95] flex flex-col justify-start gap-4 md:gap-8 xl:gap-12"
                >
                    <p className="text-[#C7C7C7] opacity-50 text-xs xl:text-sm">| What's New?</p>

                    <h1 className="title font-bold text-2xl leading-9 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-7xl xl:leading-[88px]">What's new about Metaversus?</h1>

                    <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                        {
                            newFeatures.map((feature, index) => {
                                return (
                                    <div className="flex flex-col items-start gap-3 xl:gap-6" key={index} >
                                        <div className="bg-[#323F5D] flex justify-center items-center w-12 h-12 rounded-xl mt-1 md:w-16 md:h-16 md:text-lg xl:w-20 xl:h-20 xl:rounded-2xl xl:text-xl">
                                            <img src={feature.imgUrl} alt="feature" className="w-1/2 h-1/2" />
                                        </div>

                                        <p className="flex-1 font-bold text-[18px] md:text-xl xl:text-3xl">
                                            {feature.title}
                                        </p>

                                        <p className="font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] md:text-xl md:leading-[36px] xl:text-2xl xl:leading-[38px]">
                                            {feature.subtitle}
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

export default WhatsNew;