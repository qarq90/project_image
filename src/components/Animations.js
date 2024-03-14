export const hover = {
    whileHover: {
        backgroundColor: "#c46210",
        color: "#F8F8FF",
        transition: {
            duration: 0.75,
        },
    },
};

export const scaleUp = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.25,
            staggerChildren: 1,
        },
    },
};
