import { motion } from "framer-motion";
import { SPRING_OPTIONS, STAGGER_CONTAINER } from "@/lib/motion-constants";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    // Split text into words/characters. For simplicity and elegance, let's do word split.
    // Unless user specifically asked for char split. Request said "Letter unit or word unit".
    // Let's do word unit for slightly better readability, or maybe chars if short.
    // Let's stick to Words for sentences.

    const words = children.split(" ");

    const wordVariant = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: SPRING_OPTIONS as any
        },
    };

    return (
        <motion.h1
            className={`inline-block overflow-hidden ${className}`}
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={wordVariant}
                    className="inline-block mr-[0.25em]"
                    style={{ willChange: "transform, filter, opacity" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
