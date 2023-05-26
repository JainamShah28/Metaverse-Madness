import React from 'react';
import { motion } from 'framer-motion';

import { footerVariants } from '../util/variants.ts';
import { socials } from '../constants/constants.ts';

import HeadSet from '../assets/headset.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="footer-container flex flex-col px-6 relative z-10 mt-16 md:px-14 md:mt-32 lg:px-24 xl:px-32 xl:mt-40"
            >
                <div className="footer-gradient" />

                <div className="flex flex-col gap-y-4 md:gap-y-6 lg:flex-row lg:justify-between lg:items-center">
                    <h1 className="title font-bold text-2xl leading-9 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-7xl xl:leading-[88px]">
                        Enter the Metaverse
                    </h1>

                    <button className="bg-[#25618B] flex justify-start items-center w-fit h-fit rounded-full px-8 py-4">
                        <img src={HeadSet} alt="headset" className="mr-4" />
                        <span className="font-semibold">Enter Metaverse</span>
                    </button>
                </div>

                <div className="bg-white opacity-10 h-[2px] my-4 md:my-6"></div>

                <div className="flex flex-col gap-y-4 mb-8 md:gap-y-6 lg:flex-row lg:justify-between lg:items-center xl:mb-12">
                    <h2 className="website-logo uppercase font-extrabold lg:text-2xl">metaversus</h2>

                    <p className="copyright-text text-xs text-[#B0B0B0]">Copyright © 2023. Made with ♥ by <span className="font-bold">Jainam Shah</span></p>

                    <div className="socials flex justify-start items-center gap-x-4">
                        {
                            socials.map((social) => (
                                <img
                                    src={social.url}
                                    alt={social.name}
                                    key={social.name}
                                    className=""
                                />
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;