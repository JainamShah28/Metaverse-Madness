const navbarVariant = {
    hidden: {
        y: -30,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 340,
            damping: 100
        }
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: 1
        }
    }
};

const slideIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type, delay, duration, ease: 'easeOut'
        }
    }
});

const staggerContainer = (staggerChildren: number) => ({
    hidden: {},
    show: {
        transition: {
            when: 'beforeChildren',
            staggerChildren
        }
    }
});

const textVariant = (delay: number) => ({
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay,
            type: "spring",
            duration: 1
        }
    }
});

const typingTextVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1
    }
};

const planetVariants = (direction: string) => ({
    hidden: {
        x: direction === "left" ? "150%" : "-150%",
        rotate: 120
    },
    show: {
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.8,
            delay: 0.5,
        },
    }
});

const zoomIn = (delay: number, duration: number) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};

export { navbarVariant, slideIn, staggerContainer, textVariant, typingTextVariant, planetVariants, zoomIn, footerVariants };