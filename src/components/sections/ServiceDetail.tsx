"use client";

import { motion } from "framer-motion";
import { MapPin, LayoutList, PenTool, MessageSquareQuote } from "lucide-react";
import { Card } from "@/components/ui/Card";

function MarqueeImage({ images }: { images: string[] }) {
    // Determine multiplication factor to ensure seamless loop
    // Ensure at least 12 items or sufficient width for smoothness
    const filledImages = images.length === 0 ? [] :
        images.length < 5 ? [...images, ...images, ...images, ...images, ...images, ...images] :
            [...images, ...images, ...images];

    return (
        <div className="w-full overflow-hidden mt-4">
            <div className="relative w-full h-[150px] md:h-[200px]">
                <motion.div
                    className="flex gap-3 absolute top-0 left-0 h-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30, // Consistent speed
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {filledImages.map((src, i) => (
                        <div key={i} className="relative w-[100px] h-[150px] md:w-[140px] md:h-[200px] flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                            <img
                                src={src}
                                alt={`Service Image ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export function ServiceDetail() {
    const details = [
        {
            icon: <MapPin className="w-8 h-8 text-vivid-orange" />,
            title: "1. 배달 앱 최적화 (명당 자리 선점)",
            description: "배달 앱 최적화는 사장님의 가게를 눈에 띄는 명당자리로 옮기는 작업입니다. 배달의민족이나 쿠팡이츠 같은 앱은 수만 개의 가게가 입점해 있는 거대한 상가와 같습니다. 지금 사장님의 가게가 골목 안쪽 보이지 않는 곳에 있었다면, 저희는 그 가게를 손님들이 가장 많이 지나다니는 대로변, 그것도 가장 잘 보이는 1층 입구로 옮겨드리는 역할을 합니다. 복잡한 앱 설정을 만져서 우리 동네 손님들이 떡볶이나 치킨을 검색했을 때 사장님 가게가 가장 먼저, 가장 매력적으로 보이도록 만드는 기초 공사입니다."
        },
        {
            icon: <LayoutList className="w-8 h-8 text-vivid-orange" />,
            title: "2. 메뉴 카테고리 & 이름 수정 (메뉴판 정돈)",
            description: "메뉴 카테고리와 이름 수정은 손님이 보기 편하도록 메뉴판을 새로 정돈하는 일입니다. 벽에 붙은 메뉴판 글씨가 너무 작거나 순서가 뒤죽박죽이면 손님이 주문하기 힘든 것과 같은 이치입니다. 인기 있는 메뉴를 맨 위로 올리고, 함께 시키면 좋은 음식들을 묶어주고, 이름만 봐도 어떤 음식인지 단번에 알 수 있도록 정리해 드립니다. 손님이 고민하는 시간을 줄여주면 주문은 자연스럽게 늘어납니다."
        },
        {
            icon: <PenTool className="w-8 h-8 text-vivid-orange" />,
            title: "3. 고객 소구점 기반 주문 글 수정 (세일즈 카피)",
            description: "고객 소구점 기반 주문 글 수정은 점원을 대신해 음식의 매력을 맛깔나게 설명해 주는 것입니다. 홀에서는 사장님이 이 메뉴는 매콤해서 술안주로 딱이다 혹은 양이 푸짐해서 둘이 먹기 좋다라고 직접 설명해 주실 수 있지만, 배달 앱에서는 오직 글자만으로 손님을 설득해야 합니다. 저희는 사장님 음식의 장점을 찾아내어, 손님이 글을 읽는 순간 입안에 군침이 돌고 당장 결제 버튼을 누르고 싶게 만드는 영업 멘트를 적어드립니다."
        },
        {
            icon: <MessageSquareQuote className="w-8 h-8 text-vivid-orange" />,
            title: "4. 리뷰 배너 디자인 제작 (리뷰 유도)",
            description: "리뷰 배너 디자인 제작은 손님에게 기분 좋은 칭찬을 유도하는 장치입니다. 다른 손님이 남긴 좋은 리뷰는 매장을 찾아온 손님에게 옆 테이블에서 들려오는 맛있다라는 감탄사와 같습니다. 저희는 손님이 음식을 다 먹고 난 후 기꺼이 별점 5개와 좋은 사진 리뷰를 남길 수 있도록, 눈에 확 띄면서도 기분 좋은 약속이 담긴 근사한 안내판을 만들어 앱 상단에 걸어드립니다."
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

                                {index === 0 && (
                                    <MarqueeImage images={[
                                        "/images/app1.png", "/images/app2.png", "/images/app3.png", "/images/app6.png",
                                    ]} />
                                )}

                                {index === 1 && (
                                    <MarqueeImage images={[
                                        "/images/app4.png", "/images/app5.png"
                                    ]} />
                                )}

                                {index === 2 && (
                                    <MarqueeImage images={[
                                        "/images/app7.png"
                                    ]} />
                                )}

                                {index === 3 && (
                                    <MarqueeImage images={[
                                        "/images/banner1.jpg", "/images/banner2.jpg"
                                    ]} />
                                )}
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
