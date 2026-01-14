import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    className?: string;
    prefix?: string;
    suffix?: string;
}

export function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    className = "",
    prefix = "",
    suffix = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            // Small delay if requested
            const timeoutId = setTimeout(() => {
                motionValue.set(to);
            }, delay * 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [isInView, motionValue, to, delay]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Format with commas
                ref.current.textContent = `${prefix}${latest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span className={className} ref={ref} />;
}
