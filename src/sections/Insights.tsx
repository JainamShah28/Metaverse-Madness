import React from 'react';
import { motion } from 'framer-motion';

import { slideIn, staggerContainer, textVariant } from '../util/variants.ts';
import { insights } from '../constants/constants.ts';

import TypingText from '../components/TypingText.tsx';

import Arrow from '../assets/arrow.svg';

const Insights: React.FC = () => {
    return (
        <section className="insights-section">
            <motion.div
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                className="insights-container px-6 relative z-10 my-16 md:px-14 md:my-32 lg:px-24 xl:px-32"
            >
                <TypingText
                    text="| Insight"
                    styles="text-center text-[#C7C7C7] opacity-50 text-xs mb-2 md:mb-4 xl:text-sm"
                />

                <motion.h1
                    variants={textVariant(0.3)}
                    className="title text-center font-bold text-2xl leading-9 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-7xl xl:leading-[88px]"
                >
                    Insight about Metaverse
                </motion.h1>

                <motion.h1
                    variants={staggerContainer(0.09)}
                    className="flex flex-col mt-8 gap-y-8 md:gap-y-12 md:mt-12 lg:gap-y-16 xl:gap-y-20 xl:mt-20"
                >
                    {
                        insights.map((insight, index) => (
                            <motion.div
                                key={index}
                                variants={slideIn("up", "tween", index * 0.5, 0.75)}
                                className="relative flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center md:gap-x-12"
                            >
                                <img src={insight.imgUrl} alt="insight" className="w-full h-[160px] object-cover rounded-3xl md:w-[240px] md:h-[240px]" />

                                <div className="insight-content flex-1 flex flex-col gap-y-4 max-w-[650px]">
                                    <h3 className="title font-normal text-2xl md:text-3xl md:leading-[48px] xl:text-4xl xl:leading-[56px]">{insight.title}</h3>

                                    <p className="font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] md:text-xl md:leading-[36px] xl:text-2xl xl:leading-[38px]">
                                        {insight.subtitle}
                                    </p>
                                </div>

                                <div className="hidden h-[100px] w-[100px] rounded-full border-2 border-[#fff] lg:flex lg:justify-center lg:items-center">
                                    <img src={Arrow} alt="arrow" className="w-2/5 h-2/5" />
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.h1>

            </motion.div>
        </section>
    );
};

export default Insights;