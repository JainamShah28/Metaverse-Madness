import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer } from '../util/variants';
import { exploreWorlds } from '../constants/constants.ts';
 
import TypingText from '../components/TypingText';
import ExploreWorldCard from '../components/ExploreWorldCard.tsx';

const Explore: React.FC = () => {
    const [activeWorld, setActiveWorld] = React.useState<string>('world-2');

    return (
        <section className="explore-section relative z-30 py-16 px-6 md:px-14 md:py-32 lg:px-24 xl:px-32">
            <motion.div 
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="explore-container"
            >
                <TypingText
                    text="| The World"
                    styles="text-center relative text-[#C7C7C7] opacity-50 text-xs mb-2 md:mb-4 xl:text-sm"
                />

                <h1 className="title text-center font-bold text-2xl leading-9 mb-6 md:mb-8 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-7xl xl:leading-[88px]">Choose the world you want<br></br> to explore</h1>

                <motion.div 
                    variants={staggerContainer(0.08)}
                    className="explore-worlds-container flex flex-col gap-4 min-h-[70vh] relative md:gap-8 lg:gap-5 lg:flex-row lg:justify-between lg:items-center"
                >
                    {
                        exploreWorlds.map((world, index) => {
                            return (
                                <ExploreWorldCard
                                    key={world.id}
                                    id={world.id}
                                    title={world.title}
                                    imgUrl={world.imgUrl}
                                    activeWorld={activeWorld}
                                    setActiveWorld={setActiveWorld}
                                    index={index}
                                />
                            );
                        })
                    }
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Explore;