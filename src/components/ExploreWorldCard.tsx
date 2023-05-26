import React from 'react';
import { motion } from 'framer-motion';

import { slideIn } from '../util/variants';

import HeadSet from '../assets/headset.svg';

interface CardProps {
    id: string,
    imgUrl: string,
    title: string,
    activeWorld: string,
    setActiveWorld: React.Dispatch<React.SetStateAction<string>>,
    index: number
};

const ExploreWorldCard: React.FC<CardProps> = ({ id, imgUrl, title, activeWorld, setActiveWorld, index }) => {
    return (
        <motion.div
            variants={slideIn("right", "spring", index * 0.5, 0.75)}
            className={`explore-world-card rounded-3xl relative h-[54px] transition-[flex] ease-out duration-[0.7s] cursor-pointer md:h-[88px] lg:h-[560px] xl:h-[700px] ${activeWorld === id ? "flex-[10] lg:flex-[2]" : "flex-2 lg:flex-[0.5]"}`}
            onClick={() => setActiveWorld(id)}
        >
            <img src={imgUrl} alt="world" className="absolute w-full h-full rounded-3xl object-cover" />

            {
                activeWorld !== id ?
                    <h3 className="absolute z-0 bottom-4 left-6 font-bold md:text-2xl md:left-12 md:bottom-7 lg:bottom-20 lg:left-0 lg:rotate-[-90deg] lg:origin-[0,0] lg:text-xl xl:text-3xl">{title}</h3> :
                    <div className="absolute flex flex-col justify-between bottom-0 p-6 w-full h-full bg-[rgba(0,0,0,0.6)] rounded-3xl md:p-12 lg:h-fit lg:p-8 lg:gap-8 lg:rounded-t-none xl:gap-12">
                        <div>
                            <div className="w-10 h-10 rounded-xl glassmorphism flex justify-center items-center md:w-14 md:h-14 xl:w-18 xl:h-18 xl:rounded-2xl">
                                <img src={HeadSet} alt="headset" className="w-1/2 h-1/2 object-contain" />
                            </div>

                            <p className="uppercase mt-3 font-normal text-xs md:text-base md:mt-6 lg:mt-4">enter the metaverse</p>
                        </div>

                        <h3 className="font-bold align-bottom md:text-2xl lg:text-xl xl:text-3xl">{title}</h3>
                    </div>
            }
        </motion.div>
    );
};

export default ExploreWorldCard;