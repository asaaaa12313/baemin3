import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    image?: string;
    images?: string[];
    speed?: number;
}

export function ParallaxBackground({
    children,
    className = "",
    image,
    images,
    speed = 0.5
}: ParallaxBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images]);

    // Map scroll progress to vertical offset
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {images ? (
                <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
                    {images.map((img, index) => (
                        <motion.div
                            key={img}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${img})`,
                                y
                            }}
                        />
                    ))}
                </div>
            ) : (
                image && (
                    <motion.div
                        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${image})`,
                            y
                        }}
                    />
                )
            )}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
