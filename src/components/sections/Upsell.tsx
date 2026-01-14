import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { TiltCard } from '@/components/ui/motion/TiltCard';

export function Upsell() {
    return (
        <section className="py-24 bg-deep-navy text-white px-4 md:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            "잠깐! 단건 이용 후, 1개월 내 정기 관리 전환 시..."
                        </h2>
                        <div className="inline-block bg-vivid-orange/20 border border-vivid-orange rounded-full px-6 py-2">
                            <h3 className="text-xl md:text-3xl font-bold text-vivid-orange">
                                이미 내신 비용을 100% 돌려드립니다.
                            </h3>
                        </div>
                    </motion.div>
                </div>

                {/* Process Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
                    <div className="md:hidden absolute left-8 top-10 bottom-10 w-0.5 bg-white/20"></div>

                    <motion.div
                        className="relative bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                        whileHover={{ y: -5 }}
                    >
                        <TiltCard className="flex flex-col items-center p-6 h-full">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4 border border-white/20">1</div>
                            <h4 className="font-bold text-lg mb-2">단건 상품 이용</h4>
                            <p className="text-gray-400 text-center text-sm">최적화/컨설팅<br />19.9만원 결제</p>
                            <div className="absolute -bottom-6 md:bottom-auto md:-right-6 text-white/50 z-10 rotate-90 md:rotate-0">
                                <ArrowDown size={24} />
                            </div>
                        </TiltCard>
                    </motion.div>

                    <motion.div
                        className="relative bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                        whileHover={{ y: -5 }}
                        transition={{ delay: 0.1 }}
                    >
                        <TiltCard className="flex flex-col items-center p-6 h-full">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4 border border-white/20">2</div>
                            <h4 className="font-bold text-lg mb-2">만족 후 전환</h4>
                            <p className="text-gray-400 text-center text-sm">1개월 내<br />통합 관리 계약</p>
                            <div className="absolute -bottom-6 md:bottom-auto md:-right-6 text-white/50 z-10 rotate-90 md:rotate-0">
                                <ArrowDown size={24} />
                            </div>
                        </TiltCard>
                    </motion.div>

                    <motion.div
                        className="relative bg-vivid-orange rounded-2xl shadow-2xl border border-vivid-orange"
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: 0.2 }}
                    >
                        <TiltCard className="flex flex-col items-center p-6 h-full">
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-xl font-bold mb-4 text-vivid-orange">3</div>
                            <h4 className="font-bold text-lg mb-2">100% 환급 혜택</h4>
                            <p className="text-white/90 text-center text-sm font-semibold">첫 달 결제 금액<br />199,000원 즉시 차감</p>
                        </TiltCard>
                    </motion.div>
                </div>

                {/* Pricing Table */}
                <Card className="bg-white text-deep-navy overflow-hidden p-0 border-none shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100/50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-500 w-1/4">기간</th>
                                    <th className="p-6 font-bold text-gray-400 text-center w-1/3 line-through decoration-gray-400">정상가</th>
                                    <th className="p-6 font-bold text-deep-navy text-right w-1/3 relative">
                                        1회성 이용 고객 할인가
                                        <span className="absolute top-2 right-2 text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-bold">MAX BENEFIT</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="p-6 font-bold text-lg">3개월</td>
                                    <td className="p-6 text-center text-gray-400 line-through">990,000원</td>
                                    <td className="p-6 text-right">
                                        <span className="block text-2xl font-bold text-vivid-orange">791,000원</span>
                                        <span className="text-xs text-gray-400">월 26만원 대</span>
                                    </td>
                                </tr>
                                <tr className="bg-blue-50/30">
                                    <td className="p-6 font-bold text-lg">6개월</td>
                                    <td className="p-6 text-center text-gray-400 line-through">1,320,000원</td>
                                    <td className="p-6 text-right">
                                        <span className="block text-2xl font-bold text-vivid-orange">1,121,000원</span>
                                        <span className="text-xs text-gray-400">월 18만원 대</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-lg">12개월</td>
                                    <td className="p-6 text-center text-gray-400 line-through">1,980,000원</td>
                                    <td className="p-6 text-right">
                                        <span className="block text-2xl font-bold text-vivid-orange">1,781,000원</span>
                                        <span className="text-xs text-gray-400">월 14만원 대</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
                        💡 1년 계약 시, 알바비 하루치도 안 되는 비용으로 전문 마케터를 고용하세요.
                    </div>
                </Card>

            </div>
        </section>
    );
}
