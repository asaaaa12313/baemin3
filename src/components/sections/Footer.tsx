import { Button } from '@/components/ui/Button';

export function Footer() {
    return (
        <>
            <footer className="bg-gray-100 py-12 text-sm text-gray-500 px-4">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-deep-navy text-lg mb-4">위즈더플래닝</h4>
                            <p>배달앱 매출 최적화 & 컨설팅 전문 기업</p>
                        </div>
                        <div className="md:text-right">
                            <p>이용약관 | 개인정보처리방침</p>
                            <p className="mt-2">Copyright © 2024 Wiz The Planning. All rights reserved.</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400">
                        본 사이트의 모든 콘텐츠는 저작권보호법에 따라 보호받습니다. 무단 전재 및 복제 시 법적 처벌을 받을 수 있습니다.
                    </p>
                </div>
            </footer>

            {/* Sticky Bottom Bar (Mobile/Desktop Action) */}
            <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/90 p-4 backdrop-blur-lg z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-bold text-deep-navy">
                        고민하는 시간에도<br />
                        <span className="text-vivid-orange">경쟁 업체는 앞서갑니다.</span>
                    </div>
                    <Button size="md" variant="accent" className="rounded-full shadow-lg">
                        무료 상담 신청
                    </Button>
                </div>
            </div>

            {/* Desktop Floating CTA (Optional, using simple bottom right button if needed, but PRD focused on sticky bar) */}
            {/* Usually sticky bar is better for conversions on mobile. Desktop usually has header/hero visible or sticky header. */}
        </>
    );
}
