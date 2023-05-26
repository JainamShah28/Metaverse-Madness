import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, typingTextVariant } from '../util/variants.ts';

interface TypingTextProps {
    text: string,
    styles?: string
};

const TypingText: React.FC<TypingTextProps> = ({ text, styles }) => {
    return (
        <motion.div 
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            className={`typing-text-container ${styles}`}
        >
            {
                Array.from(text).map((letter, index) => {
                    return (
                        <motion.span
                            variants={typingTextVariant}
                            key={index}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    );
                })
            }
        </motion.div>
    );
};

export default TypingText;