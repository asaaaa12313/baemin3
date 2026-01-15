"use client";

import { motion } from "framer-motion";

export function AppleStyleBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            {/* Ambient Gradient Blobs */}
            <div className="absolute inset-0 opacity-40">
                {/* Blob 1: Deep Blue - Top Left */}
                <motion.div
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/30 rounded-full blur-[120px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Blob 2: Brand Orange Accent - Center/Bottom (Subtle) */}
                <motion.div
                    className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-[#FF5722]/10 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Blob 3: Deep Purple - Bottom Right */}
                <motion.div
                    className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-900/30 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                />
            </div>

            {/* Glassmorphism Overlay (Subtle) */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

            {/* Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
        </div>
    );
}
