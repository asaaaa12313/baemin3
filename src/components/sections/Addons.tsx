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
                    필요한 것만 골라 담으세요 (Add-ons)
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Addon 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full p-6 flex flex-col items-start bg-gray-50 border border-gray-100 hover:border-vivid-orange/30 transition-colors">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 text-vivid-orange">
                                    <LayoutTemplate size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-deep-navy">메뉴 수정/관리</h4>
                                <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1">
                                    <p className="flex justify-between"><span>30개 이하</span> <span className="font-bold">30,000원</span></p>
                                    <p className="flex justify-between"><span>50개 이하</span> <span className="font-bold">50,000원</span></p>
                                </div>
                                <p className="text-xs text-gray-400 mt-auto">* 플랫폼 별도 문의</p>
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
                            <Card className="h-full p-6 flex flex-col items-start bg-gray-50 border border-gray-100 hover:border-vivid-orange/30 transition-colors">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 text-vivid-orange">
                                    <Plus size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-deep-navy">리뷰 이벤트 배너</h4>
                                <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1 w-full">
                                    <p className="flex justify-between"><span>1단</span> <span className="font-bold">10,000원</span></p>
                                    <p className="flex justify-between"><span>2단</span> <span className="font-bold">20,000원</span></p>
                                    <p className="flex justify-between"><span>3단</span> <span className="font-bold">30,000원</span></p>
                                </div>
                                <p className="text-xs text-vivid-orange font-semibold mt-auto">* 1개월 내 3회 수정 무료</p>
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
                            <Card className="h-full p-6 flex flex-col items-start bg-gray-50 border border-gray-100 hover:border-vivid-orange/30 transition-colors">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 text-vivid-orange">
                                    <Camera size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-deep-navy">음식 사진 촬영</h4>
                                <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1 w-full">
                                    <p className="flex justify-between"><span>10컷</span> <span className="text-gray-400">상담 필요</span></p>
                                    <p className="flex justify-between"><span>30컷</span> <span className="text-gray-400">상담 필요</span></p>
                                    <p className="flex justify-between"><span>50컷</span> <span className="text-gray-400">상담 필요</span></p>
                                </div>
                                <p className="text-xs text-gray-400 mt-auto">* 지역별 출장비 상이</p>
                            </Card>
                        </TiltCard>
                    </motion.div>

                    {/* Addon 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full p-6 flex flex-col items-start bg-gray-50 border border-gray-100 hover:border-vivid-orange/30 transition-colors">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 text-vivid-orange">
                                    <MessageSquare size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-deep-navy">원포인트 컨설팅</h4>
                                <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1 w-full">
                                    <p className="font-medium text-gray-800">최적화 없이 진단만 진행</p>
                                    <p className="font-bold text-lg text-deep-navy mt-1">100,000원</p>
                                </div>
                                <p className="text-xs text-gray-400 mt-auto">* 1회성 정밀 진단</p>
                            </Card>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
