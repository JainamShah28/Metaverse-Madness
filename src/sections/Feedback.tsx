import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, slideIn, zoomIn } from '../util/variants.ts';

import Planet09 from '../assets/planet-09.png';
import Stamp from '../assets/stamp.png';

const Feedback: React.FC = () => {
    return (
        <section className="feedback-section">
            <motion.div
                variants={staggerContainer(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="feedback-container flex flex-col gap-6 px-6 relative z-10 my-16 md:px-14 md:my-32 lg:px-24 lg:flex-row xl:px-32 xl:gap-8 xl:my-40"
            >
                <motion.div
                    variants={slideIn("right", "tween", 0.3, 1)}
                    className="flex-[0.5] flex flex-col justify-end rounded-3xl gradient-05 border-[1px] border-[#6A6A6A] p-6 md:p-10"
                >
                    <div className="feedback-gradient" />

                    <h3 className="title text-xl font-semibold md:text-2xl lg:text-3xl">Samantha</h3>

                    <p className="posting text-normal text-sm mt-[6px] md:text-base md:mt-2">Founder Metaversus</p>

                    <p className="feedback-text mt-[10px] md:text-xl md:leading-8 md:mt-4 xl:mt-8">
                        “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
                    </p>
                </motion.div>

                <motion.div
                    variants={slideIn("left", "spring", 0.3, 1)}
                    className="flex-1 relative"
                >
                    <img src={Planet09} alt="planet" className="rounded-3xl min-h-[240px] object-cover lg:h-[560px]" />

                    <motion.div
                        variants={zoomIn(1, 1)}
                        className="hidden absolute top-8 -left-20 lg:block"
                    >
                        <img src={Stamp} alt="stamp" className="w-[128px] h-[128px]" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Feedback;