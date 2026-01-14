import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    image?: string;
    speed?: number; // 0 to 1, higher is faster parallax
}

export function ParallaxBackground({
    children,
    className = "",
    image,
    speed = 0.5
}: ParallaxBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Map scroll progress to vertical offset
    // Moving from -10% to +10% creates a subtle parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {image && (
                <motion.div
                    className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url(${image})`,
                        y
                    }}
                />
            )}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
