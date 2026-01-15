import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export function Footer() {
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <>
            <footer className="bg-gray-100 py-12 text-sm text-gray-500 px-4">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-deep-navy text-lg mb-4">(주)위즈더플래닝 | 대표: 정현우</h4>
                            <div className="space-y-1 text-xs md:text-sm">
                                <p>사업자등록번호: 668-81-00391</p>
                                <p>주소: 서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호, 2519호</p>
                                <p>개인정보 보호책임자: 김민우 (qpqpqp@wiztheplanning.com)</p>
                                <p>호스팅 서비스: Vercel Inc.</p>
                            </div>
                        </div>
                        <div className="md:text-right">
                            <div className="mb-2">
                                <button
                                    onClick={() => setIsTermsOpen(true)}
                                    className="hover:text-deep-navy hover:underline transition-colors"
                                >
                                    이용약관
                                </button>
                                <span className="mx-2">|</span>
                                <span>개인정보처리방침</span>
                            </div>
                            <p className="mt-2">Copyright © 2026 Wiz The Planning. All rights reserved.</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400">
                        본 사이트의 모든 콘텐츠는 저작권보호법에 따라 보호받습니다. 무단 전재 및 복제 시 법적 처벌을 받을 수 있습니다.
                    </p>
                </div>
            </footer>

            {/* Terms of Service Modal */}
            <Modal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
                title="이용약관"
            >
                <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제1조 (목적)</h4>
                        <p>본 약관은 주식회사 위즈더플래닝(이하 "회사")이 제공하는 댓다라 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제2조 (정의)</h4>
                        <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>"서비스"란 회사가 제공하는 배달 플랫폼 리뷰 자동 답변 및 관리 서비스를 의미합니다.</li>
                            <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원을 말합니다.</li>
                            <li>"플랫폼 계정"이란 배달의민족, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스 등 배달 플랫폼의 사업자 계정을 의미합니다.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제3조 (약관의 효력 및 변경)</h4>
                        <p>1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</p>
                        <p>2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 약관을 변경할 경우 적용일자 및 변경사유를 명시하여 서비스 내 공지사항을 통해 공지합니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제4조 (서비스의 제공)</h4>
                        <p>회사는 다음과 같은 서비스를 제공합니다:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>배달 플랫폼 리뷰 자동 수집 및 분석</li>
                            <li>AI 기반 리뷰 자동 답변 생성 및 등록</li>
                            <li>저평점 리뷰 자동 숨김 기능</li>
                            <li>리뷰 분석 대시보드 제공</li>
                            <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 제공하는 서비스</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제5조 (플랫폼 계정 정보 제공 및 동의)</h4>
                        <p>1. 이용자는 서비스 이용을 위해 배달 플랫폼 계정 정보(ID, 비밀번호)를 회사에 제공해야 합니다.</p>
                        <p>2. 이용자는 본 약관 동의 시, 회사가 제공받은 플랫폼 계정 정보를 이용하여 다음의 행위를 수행하는 것에 명시적으로 동의합니다:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>배달 플랫폼 로그인 및 리뷰 조회</li>
                            <li>리뷰에 대한 자동 답변 작성 및 등록</li>
                            <li>저평점 리뷰 숨김 처리</li>
                        </ul>
                        <p className="mt-1">3. 이용자가 제공한 플랫폼 계정 정보로 인해 발생하는 모든 서비스 이용 행위는 이용자 본인의 동의 하에 이루어진 것으로 간주됩니다.</p>
                        <p>4. 회사는 제공받은 플랫폼 계정 정보를 서비스 제공 목적 외에는 사용하지 않으며, 안전하게 보관합니다.</p>
                        <p>5. 이용자는 언제든지 서비스 해지를 통해 플랫폼 계정 정보 제공 동의를 철회할 수 있습니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제6조 (이용 요금 및 결제)</h4>
                        <p>1. 서비스 이용 요금은 회사가 정한 요금제에 따르며, 요금제는 서비스 페이지에 명시됩니다.</p>
                        <p>2. 요금 결제는 월 단위 자동 결제 방식으로 진행됩니다.</p>
                        <p>3. 회사는 필요한 경우 요금을 조정할 수 있으며, 변경 시 30일 전 공지합니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제7조 (서비스 해지 및 환불)</h4>
                        <p>1. 이용자는 언제든지 서비스 해지를 요청할 수 있습니다.</p>
                        <p>2. 당월 결제가 완료된 경우, 해당 월의 말일까지 서비스를 이용할 수 있으며, 환불은 불가합니다.</p>
                        <p>3. 서비스 해지 시 다음 달 자동 갱신이 중단됩니다.</p>
                        <p>4. 회사의 귀책사유로 서비스를 제공하지 못한 경우, 이용하지 못한 기간에 대해 일할 계산하여 환불합니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제8조 (이용자의 의무)</h4>
                        <p>이용자는 다음 행위를 해서는 안 됩니다:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>타인의 정보 도용</li>
                            <li>회사가 게시한 정보의 변경</li>
                            <li>회사 및 제3자의 저작권 등 지적재산권에 대한 침해</li>
                            <li>서비스를 이용한 불법적이거나 부당한 행위</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제9조 (회사의 의무)</h4>
                        <p>1. 회사는 안정적인 서비스 제공을 위해 최선을 다합니다.</p>
                        <p>2. 회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 준수합니다.</p>
                        <p>3. 회사는 서비스 이용과 관련한 이용자의 불만사항을 신속하게 처리합니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제10조 (면책사항)</h4>
                        <p>1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</p>
                        <p>2. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</p>
                        <p>3. 회사는 배달 플랫폼의 정책 변경, API 차단 등으로 인한 서비스 제한에 대해 책임을 지지 않습니다.</p>
                        <p>4. 이용자가 제공한 플랫폼 계정 정보를 통해 수행된 모든 행위는 이용자의 동의 하에 이루어진 것으로 간주되며, 이로 인한 배달 플랫폼과의 분쟁에 대해 회사는 책임을 지지 않습니다.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-deep-navy mb-2">제11조 (분쟁 해결)</h4>
                        <p>1. 회사와 이용자 간 발생한 분쟁에 대해서는 상호 협의하여 해결합니다.</p>
                        <p>2. 협의가 이루어지지 않을 경우, 회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <p className="font-bold">본 약관은 2025년 1월 1일부터 시행됩니다.</p>
                        <p className="font-bold mt-1">(주)위즈더플래닝</p>
                    </div>
                </div>
            </Modal>

            {/* Sticky Bottom Bar (Mobile/Desktop Action) */}
            <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/90 p-4 backdrop-blur-lg z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-bold text-deep-navy">
                        고민하는 시간에도<br />
                        <span className="text-vivid-orange">경쟁 업체는 앞서갑니다.</span>
                    </div>
                    <Button
                        size="md"
                        variant="accent"
                        className="rounded-full shadow-lg"
                        onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        무료 상담 신청
                    </Button>
                </div>
            </div>

            {/* Desktop Floating CTA (Optional, using simple bottom right button if needed, but PRD focused on sticky bar) */}
            {/* Usually sticky bar is better for conversions on mobile. Desktop usually has header/hero visible or sticky header. */}
        </>
    );
}
