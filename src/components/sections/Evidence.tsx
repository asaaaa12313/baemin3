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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Review 1: Kakao Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-[#FAFAFA]">
                            <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
                                <MessageCircle className="w-4 h-4" />
                                <span>카카오톡 실제 후기</span>
                            </div>

                            {/* Fake Chat UI */}
                            <div className="bg-[#bacee0] p-4 rounded-xl space-y-4 mb-4 font-sans text-sm">
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                    <div>
                                        <div className="text-gray-600 text-xs mb-1">OO떡볶이 사장님</div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm rounded-tl-none relative">
                                            팀장님, 오늘 점심 주문 터졌어요! 🔥<br />
                                            리뷰 배너만 바꿨는데 클릭율이 확실히 다르네요 ㄷㄷ
                                            <span className="absolute bottom-0 right-full mr-2 text-[10px] text-gray-500 whitespace-nowrap self-end">오후 12:42</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-row-reverse">
                                    <div className="bg-[#fef01b] p-3 rounded-lg shadow-sm rounded-tr-none text-black">
                                        다행입니다 사장님! ㅎㅎ<br />
                                        저녁 장사도 기대해보시죠!
                                    </div>
                                </div>
                            </div>
                            <p className="font-bold text-deep-navy text-lg">"리뷰 배너만 바꿨는데 클릭율이 달라지네요."</p>
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
                        <Card className="h-full relative overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <div className="font-bold text-gray-400 text-sm">배민 사장님 광장</div>
                                <div className="text-green-500 font-bold bg-green-50 px-2 py-1 rounded text-xs">
                                    +<CountUp to={124} />% 상승
                                </div>
                            </div>

                            {/* CSS Graph */}
                            <div className="h-40 flex items-end gap-2 mb-6 px-4">
                                <div className="w-1/6 bg-gray-100 rounded-t h-[30%]"></div>
                                <div className="w-1/6 bg-gray-100 rounded-t h-[40%]"></div>
                                <div className="w-1/6 bg-gray-200 rounded-t h-[35%]"></div>
                                <div className="w-1/6 bg-gray-200 rounded-t h-[50%]"></div>
                                <div className="w-1/6 bg-deep-navy/40 rounded-t h-[70%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">컨설팅 시작</div>
                                </div>
                                <div className="w-1/6 bg-vivid-orange rounded-t h-[90%] relative shadow-lg shadow-orange-200">
                                    <div className="absolute top-2 w-full text-center text-white font-bold text-xs">Best</div>
                                </div>
                            </div>

                            <p className="font-bold text-deep-navy text-lg">"컨설팅대로 깃발 위치 옮기고 매출 2배 뛰었습니다."</p>
                            <p className="text-gray-500 text-sm">OO족발 사장님</p>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
