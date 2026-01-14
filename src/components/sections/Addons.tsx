import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export function Addons() {
    return (
        <section className="py-24 bg-white px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h3 className="mb-8 text-2xl font-bold text-center text-deep-navy">
                    필요한 것만 골라 담으세요 (Add-ons)
                </h3>

                <Accordion className="space-y-2">
                    <AccordionItem title="[+] 메뉴 수정/관리">
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm text-gray-700">
                            <p className="flex justify-between"><span>30개 이하</span> <span className="font-bold">30,000원</span></p>
                            <p className="flex justify-between"><span>50개 이하</span> <span className="font-bold">50,000원</span></p>
                            <p className="text-gray-400 text-xs mt-2">* 플랫폼 추가(대구로, 먹깨비)는 별도 문의 바랍니다.</p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="[+] 리뷰 이벤트 배너">
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm text-gray-700">
                            <p className="flex justify-between"><span>1단</span> <span className="font-bold">10,000원</span></p>
                            <p className="flex justify-between"><span>2단</span> <span className="font-bold">20,000원</span></p>
                            <p className="flex justify-between"><span>3단</span> <span className="font-bold">30,000원</span></p>
                            <p className="text-vivid-orange text-xs mt-2 font-semibold">* 1개월 내 3회 수정 무료 제공</p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="[+] 음식 사진 촬영">
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm text-gray-700">
                            <p className="flex justify-between"><span>10컷</span> <span className="font-bold text-gray-400">상담 필요</span></p>
                            <p className="flex justify-between"><span>30컷</span> <span className="font-bold text-gray-400">상담 필요</span></p>
                            <p className="flex justify-between"><span>50컷</span> <span className="font-bold text-gray-400">상담 필요</span></p>
                            <p className="text-gray-400 text-xs mt-2">* 지역별 출장비가 상이하여 상담이 필요합니다.</p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="[+] 원포인트 컨설팅">
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm text-gray-700">
                            <p className="flex justify-between font-medium"><span>최적화 없이 진단만 진행</span> <span className="font-bold">100,000원</span></p>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
