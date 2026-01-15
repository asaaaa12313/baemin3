"use client";

import { motion } from "framer-motion";
import { MapPin, LayoutList, PenTool, MessageSquareQuote } from "lucide-react";
import { Card } from "@/components/ui/Card";



export function ServiceDetail() {
    const executionDetails = [
        {
            icon: <MapPin className="w-8 h-8 text-vivid-orange" />,
            title: "1. 배달 앱 노출 최적화",
            description: "수만 개의 가게 중 우리 가게를 '디지털 1열'로 옮깁니다. 노출과 클릭을 극대화하여 주문 기회를 확 넓혀드립니다."
        },
        {
            icon: <LayoutList className="w-8 h-8 text-vivid-orange" />,
            title: "2. 메뉴 엔지니어링",
            description: "고민은 줄이고 객단가는 높이는 전략입니다. 구매 동선을 설계하여 손님이 망설임 없이 결제하게 만듭니다."
        },
        {
            icon: <PenTool className="w-8 h-8 text-vivid-orange" />,
            title: "3. 세일즈 카피라이팅",
            description: "글자가 영업을 뜁니다. 음식의 매력을 고객 언어로 통역해, 지금 당장 주문해야 할 확실한 이유를 심어줍니다."
        },
        {
            icon: <MessageSquareQuote className="w-8 h-8 text-vivid-orange" />,
            title: "4. 리뷰 유도 디자인",
            description: "주문의 선순환을 만드는 시각적 장치입니다. 자연스러운 참여를 유도하여 가게의 소중한 자산을 쌓아줍니다."
        }
    ];

    const consultingDetails = [
        {
            icon: <MapPin className="w-8 h-8 text-blue-500" />,
            title: "가게 현황 정밀 진단",
            description: "'왜 주문이 없을까?' 막막함에 데이터로 답합니다. 노출, 클릭, 주문율을 분석해 매출 누수를 정확히 찾아냅니다."
        },
        {
            icon: <LayoutList className="w-8 h-8 text-blue-500" />,
            title: "경쟁 상권 심층 분석",
            description: "1등 가게는 무엇이 다를까요? 경쟁사를 낱낱이 해부하여 사장님이 파고들 확실한 빈틈을 찾아냅니다."
        },
        {
            icon: <PenTool className="w-8 h-8 text-blue-500" />,
            title: "맞춤형 개선 리포트 (PDF)",
            description: "두루뭉술한 조언은 빼고, 당장 실천해야 할 구체적인 행동 지침이 담긴 전략 문서를 제공합니다."
        },
        {
            icon: <MessageSquareQuote className="w-8 h-8 text-blue-500" />,
            title: "1:1 전문가 솔루션 (30분)",
            description: "리포트만으로 부족한 궁금증을 해소하는 골든타임. 현 상황의 최우선 순위를 명쾌하게 정리해 드립니다."
        },
        {
            icon: <MapPin className="w-8 h-8 text-gray-400" />,
            title: "실무 최적화 제외 (안내)",
            description: "문제 발견과 처방에 집중하는 컨설팅입니다. 앱 설정 변경이나 이미지 제작 등 대행 업무는 별도입니다."
        },
        {
            icon: <LayoutList className="w-8 h-8 text-gray-400" />,
            title: "1회성 집중 진단",
            description: "장기 계약 부담 없이 단 1회 점검으로 가게 체질을 파악하는 핵심 요약 솔루션입니다."
        }
    ];

    return (
        <section className="py-24 bg-white px-4">
            <div className="mx-auto max-w-5xl">
                {/* Section 1: Execution Service */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-deep-navy md:text-4xl leading-tight mb-6">
                        사장님은 <span className="text-vivid-orange">주방</span>에만 집중하세요.<br />
                        복잡한 앱 관리는 저희가 맡겠습니다.
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        매출을 바꾸는 4가지 핵심 최적화 전략
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {executionDetails.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-deep-navy mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Section 2: Consulting Service */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-deep-navy md:text-4xl leading-tight mb-6">
                        <span className="text-blue-600">데이터 기반</span> 진단 컨설팅<br />
                        막막한 매출 고민, 명쾌하게 답을 드립니다.
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        감에 의존하지 않고 숫자로 증명하는 1회성 집중 진단 솔루션
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {consultingDetails.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="mb-4 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-deep-navy mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-lg font-medium text-deep-navy">
                        결국 이 모든 과정은 사장님이 주방에서 요리에만 집중하실 수 있도록,<br className="hidden md:block" />
                        복잡한 모바일 세상 속 <span className="text-vivid-orange font-bold">호객 행위와 접객을 저희가 도맡아 매출로 연결해 드리는 일</span>입니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
