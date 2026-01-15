"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
];

export function Portfolio() {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="mx-auto max-w-7xl px-4 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white md:text-5xl"
                >
                    <span className="text-vivid-orange">고퀄리티 촬영</span>까지 한 번에.
                </motion.h2>
                <p className="mt-4 text-gray-400">
                    음식 사진, 더 이상 고민하지 마세요. 전문 포토그래퍼가 직접 촬영합니다.
                </p>
            </div>

            <div className="flex w-full">
                <motion.div
                    className="flex gap-4 flex-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Double the images for seamless loop */}
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500">
                            <Image
                                src={src}
                                alt={`Portfolio ${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </section>
    );
}
