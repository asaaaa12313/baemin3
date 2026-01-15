import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { ParallaxBackground } from '@/components/ui/motion/ParallaxBackground';
import { Magnetic } from '@/components/ui/motion/Magnetic';

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">
            {/* Background with Parallax */}
            {/* Background with Parallax */}
            <ParallaxBackground
                images={[
                    '/images/1.png',
                    '/images/2.png',
                    '/images/3.png',
                    '/images/4.png',
                    '/images/5.png',
                    '/images/6.png'
                ]}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-deep-navy/90"></div>
            </ParallaxBackground>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        마케팅, 왜 1년 치를<br />
                        <span className="text-vivid-orange">미리 약속합니까?</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="mb-12 text-lg font-normal text-gray-200 md:text-2xl leading-relaxed max-w-3xl mx-auto">
                        불확실한 서명 대신, <b className="text-white">명확한 검증</b>이 먼저입니다.<br />
                        필요한 전략을 먼저 수행해 보십시오.<br className="hidden md:block" />
                        <span className="opacity-80 block mt-4 md:mt-2">장기 계약은 결과에 만족하신 후, 그때 논의해도 늦지 않습니다.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Magnetic>
                        <Button size="xl" variant="accent" className="rounded-full text-lg shadow-[0_0_40px_-5px_rgba(255,87,34,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,87,34,0.7)] hover:scale-105 transition-transform duration-300">
                            내 가게 문제점 무료 진단받기 &gt;
                        </Button>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <span className="text-sm">Scroll Down</span>
            </motion.div>
        </section>
    );
}
