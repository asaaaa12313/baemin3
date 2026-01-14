import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from '@/components/ui/motion/TiltCard';

export function Solution() {
    return (
        <section className="py-24 bg-gray-50 px-4 md:px-8">
            <div className="mx-auto max-w-7xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-deep-navy md:text-5xl">
                        시작이 부담스럽다면,<br />
                        <span className="text-vivid-orange">최적화부터 경험해보세요.</span>
                    </h2>
                    <p className="mb-16 text-gray-500 text-lg">
                        합리적인 가격으로 즉각적인 변화를 만들어드립니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
                    {/* Basic Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full flex flex-col items-start p-8 hover:border-deep-navy/30 transition-all duration-300">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-deep-navy">Basic Plan</h3>
                                    <p className="text-gray-500">핵심만 쏙 골라 담았습니다</p>
                                </div>
                                <div className="mb-8 flex items-end gap-1">
                                    <span className="text-4xl font-bold text-deep-navy">119,000</span>
                                    <span className="text-lg text-gray-400 mb-1">원</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1 w-full text-left">
                                    {[
                                        "앱 최적화 (배민/쿠팡/요기요/땡겨요)",
                                        "리뷰배너 디자인 제작",
                                        "메뉴 카테고리 & 메뉴명 수정",
                                        "고객 소구점 기반 주문 글 수정"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <Check className="h-5 w-5 text-deep-navy shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="secondary" className="w-full">
                                    신청하기
                                </Button>
                            </Card>
                        </TiltCard>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-full"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="h-full"
                        >
                            <TiltCard className="h-full">
                                <Card className="relative h-full flex flex-col items-start p-8 border-vivid-orange/50 ring-2 ring-vivid-orange/20 shadow-2xl bg-white scale-105 z-10">
                                    <div className="absolute top-0 right-0 -mt-3 mr-4">
                                        <Badge variant="accent" className="bg-vivid-orange text-white px-3 py-1 shadow-lg">BEST CHOICE</Badge>
                                    </div>

                                    <div className="mb-4 text-left">
                                        <h3 className="text-xl font-bold text-deep-navy">Premium Plan</h3>
                                        <p className="text-vivid-orange font-medium">전문 컨설팅이 포함된 패키지</p>
                                    </div>
                                    <div className="mb-8 flex items-end gap-1">
                                        <span className="text-4xl font-bold text-deep-navy">199,000</span>
                                        <span className="text-lg text-gray-400 mb-1">원</span>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1 w-full text-left">
                                        <li className="flex items-start gap-3 font-semibold text-deep-navy">
                                            <Check className="h-5 w-5 text-vivid-orange shrink-0 mt-0.5" />
                                            <span>Basic 상품 전체 포함</span>
                                        </li>
                                        {[
                                            "가게 문제점 정밀 파악",
                                            "주변 경쟁 업체 심층 분석",
                                            "개선점 제안 레포트 (PDF)",
                                            "1:1 맞춤형 컨설팅 (30분)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <Check className="h-5 w-5 text-vivid-orange shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button variant="accent" className="w-full text-lg py-6 shadow-orange-200">
                                        지금 혜택받고 신청하기
                                    </Button>
                                </Card>
                            </TiltCard>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
