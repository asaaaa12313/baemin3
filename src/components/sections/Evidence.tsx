import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CountUp } from '@/components/ui/motion/CountUp';

export function Evidence() {
    return (
        <section className="py-24 bg-gray-50 px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-deep-navy md:text-5xl">
                        사장님들의 매출 그래프가<br />
                        <span className="text-vivid-orange">증명합니다.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Review 1: Kakao Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-white border border-gray-100 shadow-xl p-8">
                            <div className="flex items-center gap-2 mb-8 text-gray-500 font-medium">
                                <MessageCircle className="w-5 h-5" />
                                <span>카카오톡 실제 후기</span>
                            </div>

                            {/* Fake Chat UI */}
                            <div className="bg-[#bacee0] p-6 rounded-2xl space-y-4 mb-8 font-sans text-sm shadow-inner">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-[14px] bg-gray-300 flex-shrink-0"></div>
                                    <div className="flex flex-col gap-1 items-start max-w-[80%]">
                                        <div className="text-gray-600 text-xs px-1">OO떡볶이 사장님</div>
                                        <div className="bg-white p-3.5 rounded-xl text-gray-900 shadow-sm rounded-tl-none relative leading-relaxed">
                                            팀장님, 오늘 점심 주문 터졌어요! 🔥<br />
                                            리뷰 배너만 바꿨는데 클릭율이 확실히 다르네요 ㄷㄷ
                                        </div>
                                        <span className="text-[10px] text-gray-500 px-1">오후 12:42</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 flex-row-reverse">
                                    <div className="flex flex-col gap-1 items-end max-w-[80%]">
                                        <div className="bg-[#fef01b] p-3.5 rounded-xl shadow-sm rounded-tr-none text-black leading-relaxed">
                                            다행입니다 사장님! ㅎㅎ<br />
                                            저녁 장사도 기대해보시죠!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="font-bold text-deep-navy text-xl mb-1">"리뷰 배너만 바꿨는데 클릭율이 달라지네요."</p>
                            <p className="text-gray-500 text-sm">OO떡볶이 사장님</p>
                        </Card>
                    </motion.div>

                    {/* Review 2: Graph Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full relative overflow-hidden bg-white border border-gray-100 shadow-xl p-8">
                            <div className="flex items-center justify-between mb-12">
                                <div className="font-medium text-gray-500">배민 사장님 광장</div>
                                <div className="text-[#00C73C] font-bold bg-[#E5F9ED] px-3 py-1.5 rounded-lg text-sm flex items-center gap-1">
                                    +<CountUp to={124} />% 상승
                                </div>
                            </div>

                            {/* CSS Graph */}
                            <div className="h-52 flex items-end gap-3 mb-8 px-2">
                                <div className="w-1/6 bg-gray-100 rounded-t-lg h-[30%]"></div>
                                <div className="w-1/6 bg-gray-100 rounded-t-lg h-[40%]"></div>
                                <div className="w-1/6 bg-gray-200 rounded-t-lg h-[35%]"></div>
                                <div className="w-1/6 bg-gray-200 rounded-t-lg h-[50%]"></div>
                                <div className="w-1/6 bg-[#9CA3AF] rounded-t-lg h-[70%] relative group">
                                </div>
                                <div className="w-1/6 bg-vivid-orange rounded-t-lg h-[90%] relative shadow-[0_-4px_20px_rgba(255,87,34,0.3)]">
                                    <div className="absolute top-2 w-full text-center text-white font-bold text-xs">Best</div>
                                </div>
                            </div>

                            <p className="font-bold text-deep-navy text-xl mb-1">"컨설팅대로 깃발 위치 옮기고 매출 2배 뛰었습니다."</p>
                            <p className="text-gray-500 text-sm">OO족발 사장님</p>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
