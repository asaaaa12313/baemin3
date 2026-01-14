import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "위즈더플래닝 - 배달앱 매출 최적화 & 컨설팅 전문",
  description: "배민, 쿠팡이츠, 요기요 앱 최적화부터 메뉴 사진 촬영까지. 1개월 내 전환 시 비용 전액 환급.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
