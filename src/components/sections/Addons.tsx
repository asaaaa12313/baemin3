import { TiltCard } from '@/components/ui/motion/TiltCard';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Plus, Camera, MessageSquare, LayoutTemplate } from 'lucide-react';

export function Addons() {
    return (
        <section className="py-24 bg-white px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-2xl font-bold text-center text-deep-navy md:text-3xl"
                >
                    필요한 것만 골라 담으세요
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {/* Addon 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full p-8 flex flex-col items-start bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-vivid-orange/30 transition-all duration-300">
                                <div className="p-4 bg-gray-50 rounded-2xl mb-6 text-vivid-orange">
                                    <LayoutTemplate size={32} />
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-deep-navy">메뉴 수정/관리</h4>
                                <div className="space-y-2 text-base text-gray-600 mb-6 flex-1 w-full">
                                    <p className="flex justify-between items-center"><span className="text-gray-500">30개 이하</span> <span className="font-bold text-deep-navy">30,000원</span></p>
                                    <p className="flex justify-between items-center"><span className="text-gray-500">50개 이하</span> <span className="font-bold text-deep-navy">50,000원</span></p>
                                </div>
                                <p className="text-sm text-gray-400 mt-auto bg-gray-50 px-3 py-1 rounded-full">* 플랫폼 별도 문의</p>
                            </Card>
                        </TiltCard>
                    </motion.div>

                    {/* Addon 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full p-8 flex flex-col items-start bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-vivid-orange/30 transition-all duration-300">
                                <div className="p-4 bg-gray-50 rounded-2xl mb-6 text-vivid-orange">
                                    <Plus size={32} />
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-deep-navy">리뷰 이벤트 배너</h4>
                                <div className="space-y-2 text-base text-gray-600 mb-6 flex-1 w-full">
                                    <p className="flex justify-between items-center"><span className="text-gray-500">1단</span> <span className="font-bold text-deep-navy">10,000원</span></p>
                                    <p className="flex justify-between items-center"><span className="text-gray-500">2단</span> <span className="font-bold text-deep-navy">20,000원</span></p>
                                    <p className="flex justify-between items-center"><span className="text-gray-500">3단</span> <span className="font-bold text-deep-navy">30,000원</span></p>
                                </div>
                                <p className="text-sm text-vivid-orange font-semibold mt-auto bg-orange-50 px-3 py-1 rounded-full">* 1개월 내 3회 수정 무료</p>
                            </Card>
                        </TiltCard>
                    </motion.div>

                    {/* Addon 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full p-8 flex flex-col items-start bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-vivid-orange/30 transition-all duration-300">
                                <div className="p-4 bg-gray-50 rounded-2xl mb-6 text-vivid-orange">
                                    <Camera size={32} />
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-deep-navy">음식 사진 촬영</h4>
                                <div className="space-y-2 text-base text-gray-600 mb-6 flex-1 w-full">
                                    <p className="flex justify-between items-center"><span className="text-gray-500">10컷</span> <span className="text-gray-400 border border-gray-200 px-2 py-0.5 rounded text-xs">상담 필요</span></p>
                                    <p className="flex justify-between items-center"><span className="text-gray-500">30컷</span> <span className="text-gray-400 border border-gray-200 px-2 py-0.5 rounded text-xs">상담 필요</span></p>
                                    <p className="flex justify-between items-center"><span className="text-gray-500">50컷</span> <span className="text-gray-400 border border-gray-200 px-2 py-0.5 rounded text-xs">상담 필요</span></p>
                                </div>
                                <p className="text-sm text-gray-400 mt-auto bg-gray-50 px-3 py-1 rounded-full">* 지역별 출장비 상이</p>
                            </Card>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
