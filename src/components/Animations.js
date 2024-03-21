// export const hover = {
//     whileHover: {
//         backgroundColor: "#c46210",
//         color: "#F8F8FF",
//         transition: {
//             duration: 0.75,
//         },
//     },
// };
//
// export const scaleUp = {
//     hidden: {
//         x: -100,
//         opacity: 0,
//     },
//     animate: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 2,
//             staggerChildren: 1,
//         },
//     },
// };

export const hover = {
    whileHover: {
        backgroundColor: "#c46210",
        color: "#F8F8FF",
        transition: {
            duration: 0.75,
        },
    },
};

// export const scaleUp = {
//   hidden: {
//     scale: 0.8,
//   },
//   animate: {
//     scale: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 1,
//     },
//   },
// };

export const scaleUp = {
    initial: {
        scale: 0.5,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.25,
            staggerChildren: 0.5,
        },
    },
    // exit: {
    //     scale: 0.5,
    //     opacity: 0,
    //     transition: {
    //         duration: 0.75,
    //     },
    // },
};