import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-deep-navy/90"></div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        맛은 기본입니다.<br />
                        <span className="text-vivid-orange">왜 주문은 옆 가게로 갈까요?</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="mb-10 text-lg font-light text-gray-200 md:text-2xl">
                        배민/쿠팡/요기요 깃발만 꽂는다고 주문이 들어오지 않습니다.<br className="hidden md:block" />
                        클릭을 주문으로 바꾸는 위즈더플래닝의 <b>앱 최적화 솔루션</b>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Button size="xl" variant="accent" className="rounded-full text-lg shadow-[0_0_40px_-5px_rgba(255,87,34,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,87,34,0.7)]">
                        내 가게 문제점 무료 진단받기 &gt;
                    </Button>
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
