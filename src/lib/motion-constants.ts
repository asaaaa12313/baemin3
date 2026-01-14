export const SPRING_OPTIONS = {
    type: "spring",
    stiffness: 260,
    damping: 20,
};

export const SPRING_SLOW = {
    type: "spring",
    stiffness: 100,
    damping: 30,
};

export const SPRING_BOUNCY = {
    type: "spring",
    stiffness: 400,
    damping: 10,
};

export const FADE_UP_VARIANT = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: SPRING_OPTIONS
    },
};

export const STAGGER_CONTAINER = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
