"use client";

import { motion } from "framer-motion";

export function AppleStyleBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
            {/* Ambient Gradient Blobs - Increased Opacity and Size for 'Marketing' Vibe */}
            <div className="absolute inset-0 opacity-60">
                {/* Blob 1: Deep Corporate Blue - Top Left */}
                <motion.div
                    className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-[#1a237e] rounded-full blur-[100px] mix-blend-screen"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Blob 2: Brand Vivid Orange - Center Right (Key accent) */}
                <motion.div
                    className="absolute top-[20%] right-[10%] w-[60vw] h-[60vw] bg-[#FF5722]/30 rounded-full blur-[120px] mix-blend-screen"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Blob 3: Sophisticated Purple - Bottom Left */}
                <motion.div
                    className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[#4a148c]/40 rounded-full blur-[100px] mix-blend-screen"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                    }}
                />

                {/* Blob 4: Cyan/Teal Highlight - Top Right (For 'Tech/Data' feel) */}
                <motion.div
                    className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] bg-[#006064]/30 rounded-full blur-[80px] mix-blend-screen"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                />
            </div>

            {/* Noise Overlay for Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)] opacity-80"></div>
        </div>
    );
}
