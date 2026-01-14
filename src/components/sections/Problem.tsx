import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';

export function Problem() {
    return (
        <section className="py-24 bg-white px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge variant="accent" className="mb-4">Problem Awareness</Badge>
                        <h2 className="mb-6 text-3xl font-bold leading-tight text-deep-navy md:text-5xl">
                            고객은 <span className="text-vivid-orange">3초 만에</span><br />
                            결정합니다.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                맛있는 음식을 만드는 것만큼,<br />
                                <b>'맛있어 보이는 것'</b>도 중요합니다.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500 text-sm font-bold">X</span>
                                    식욕을 떨어뜨리는 흐릿한 메뉴 사진
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500 text-sm font-bold">X</span>
                                    눈에 띄지 않는 텍스트형 리뷰 배너
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500 text-sm font-bold">X</span>
                                    우리 동네 맛집 랭킹에 없는 가게
                                </li>
                            </ul>
                            <p className="border-l-4 border-deep-navy pl-4 italic text-deep-navy font-semibold">
                                이 사소한 차이가<br className="md:hidden" />월 매출 300만 원의 차이를 만듭니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Content - Slider */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <BeforeAfter
                            // Using generic food placeholders for demonstration
                            beforeImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                            afterImage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
                            beforeLabel="Before: 흔한 메뉴판"
                            afterLabel="After: 위즈더플래닝"
                            className="shadow-2xl"
                        />
                        <p className="mt-4 text-center text-sm text-gray-400">
                            👆 슬라이더를 좌우로 움직여 차이를 확인해보세요
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
