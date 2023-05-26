import React from 'react';
import { motion } from 'framer-motion';

import SearchIcon from '../assets/search.svg';
import Bars from '../assets/menu.svg';

import { navbarVariant } from '../util/variants.ts';

const Navbar: React.FC = () => {
    return (
        <motion.nav 
            variants={navbarVariant}
            initial="hidden"
            whileInView="show"
            className="navbar relative pt-4 lg:pt-6 xl:pt-9"
        >
            <div className="absolute w-1/2 inset-0 gradient-01"></div>

            <div className="flex justify-between items-center px-8 md:px-16 lg:px-20 xl:px-28">
                <img src={SearchIcon} alt="search" className="cursor-pointer scale-75 md:scale-110" />
                <h2 className="website-logo uppercase font-extrabold lg:text-2xl">metaversus</h2>
                <img src={Bars} alt="bars" className="cursor-pointer scale-105 md:scale-110 xl:scale-125" />
            </div>
        </motion.nav>
    );
};

export default Navbar;