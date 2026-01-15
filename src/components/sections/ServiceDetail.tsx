"use client";

import { motion } from "framer-motion";
import { MapPin, LayoutList, PenTool, MessageSquareQuote } from "lucide-react";
import { Card } from "@/components/ui/Card";



export function ServiceDetail() {
    const details = [
        {
            icon: <MapPin className="w-8 h-8 text-vivid-orange" />,
            title: "1. 배달 앱 노출 최적화",
            description: "수만 개의 경쟁사 중 우리 가게를 고객이 가장 먼저 마주하는 1열로 옮겨 놓습니다. 뒷골목에 숨겨진 맛집을 유동 인구가 폭발하는 디지털 대로변으로 입지를 변경하여 클릭과 주문의 기회를 극대화하는 작업입니다."
        },
        {
            icon: <LayoutList className="w-8 h-8 text-vivid-orange" />,
            title: "2. 메뉴 엔지니어링 및 카테고리 설계",
            description: "고객의 고민은 줄이고 객단가는 높이는 메뉴판 전략입니다. 시선의 흐름에 맞춰 주력 메뉴를 배치하고 매력적인 세트 구성을 제안하여, 들어온 손님이 망설임 없이 결제까지 도달하게 만드는 구매 동선을 설계합니다."
        },
        {
            icon: <PenTool className="w-8 h-8 text-vivid-orange" />,
            title: "3. 소구점 기반 세일즈 카피라이팅",
            description: "점원이 없는 배달 앱에서 글자가 대신 영업을 뜁니다. 음식의 맛과 특징을 고객의 언어로 번역해 식욕을 자극하고, 이 메뉴를 지금 당장 먹어야 할 확실한 명분을 심어주어 구매 전환율을 끌어올립니다."
        },
        {
            icon: <MessageSquareQuote className="w-8 h-8 text-vivid-orange" />,
            title: "4. 리뷰 유도 배너 디자인",
            description: "주문의 선순환을 만드는 시각적 넛지입니다. 고객의 시선을 단번에 사로잡는 디자인으로 이벤트 참여를 독려하고, 긍정적인 평가와 양질의 포토 리뷰를 자연스럽게 이끌어내어 가게의 자산을 쌓아줍니다."
        }
    ];

    return (
        <section className="py-24 bg-white px-4">
            <div className="mx-auto max-w-5xl">
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
                        사장님, 음식 맛은 누구보다 자신 있는데 배달 앱 주문이 생각만큼 들어오지 않아 답답하셨을 겁니다.
                        스마트폰 화면 속 장사는 오프라인 매장과는 문법이 조금 다릅니다.
                        손님이 가게 문을 열고 들어오게 만드는 것부터, 메뉴판을 보고 주문을 결심하게 만드는 과정까지
                        저희가 대신 챙겨드리는 네 가지 핵심 과정을 알기 쉽게 설명해 드리겠습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {details.map((item, index) => (
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
                                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                    {item.description}
                                </p>

                                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg font-medium text-deep-navy">
                        결국 이 모든 과정은 사장님이 주방에서 요리에만 집중하실 수 있도록,<br className="hidden md:block" />
                        복잡한 모바일 세상 속 <span className="text-vivid-orange font-bold">호객 행위와 접객을 저희가 도맡아 매출로 연결해 드리는 일</span>입니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
