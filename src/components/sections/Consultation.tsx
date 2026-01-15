"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useState } from "react";

export function Consultation() {
    const [formData, setFormData] = useState({
        businessName: "",
        applicantName: "",
        contact: "",
        address: "",
        inquiry: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwMnOjbtLDAvywlEiDLBGq0s0NJ1k1pm0gr9qboVlks5XtxSqiITHN4SOKySu8z17hyLA/exec";

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Crucial for Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            alert("상담 신청이 접수되었습니다. 빠르게 확인 후 연락드리겠습니다.");
            setFormData({
                businessName: "",
                applicantName: "",
                contact: "",
                address: "",
                inquiry: "",
            });
        } catch (error) {
            console.error("Error:", error);
            alert("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="consultation" className="py-24 bg-gray-50 px-4">
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-deep-navy md:text-5xl mb-4"
                    >
                        무료 상담 신청
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg mb-8"
                    >
                        망설이지 마세요. 지금이 가장 빠른 변화의 시작입니다.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="http://pf.kakao.com/_DXNxjK/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#FEE500] text-[#191919] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FDD835] transition-colors shadow-lg"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3C5.925 3 1 6.925 1 11.775C1 14.5375 2.9125 16.9875 5.8625 18.525L4.55 23.325C4.4625 23.6375 4.8125 23.8875 5.0875 23.6875L10.6625 19.85C11.1 19.9 11.55 19.925 12 19.925C18.075 19.925 23 16 23 11.15C23 6.3 18.075 3 12 3Z" />
                            </svg>
                            카카오톡으로 간편 상담하기
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-8 md:p-12 bg-white shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="businessName" className="text-sm font-bold text-deep-navy">
                                        업체명 <span className="text-vivid-orange">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        required
                                        placeholder="가게 이름을 입력하세요"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-400 text-black font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="applicantName" className="text-sm font-bold text-deep-navy">
                                        신청자 성함 <span className="text-vivid-orange">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="applicantName"
                                        name="applicantName"
                                        required
                                        placeholder="성함을 입력하세요"
                                        value={formData.applicantName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-400 text-black font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact" className="text-sm font-bold text-deep-navy">
                                    연락처 <span className="text-vivid-orange">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    required
                                    placeholder="010-0000-0000"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-400 text-black font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-bold text-deep-navy">
                                    가게 주소
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="가게 주소를 입력하세요 (선택)"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-400 text-black font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="inquiry" className="text-sm font-bold text-deep-navy">
                                    상담 내용 / 고민거리 <span className="text-vivid-orange">*</span>
                                </label>
                                <textarea
                                    id="inquiry"
                                    name="inquiry"
                                    required
                                    rows={5}
                                    placeholder="현재 가장 고민되는 부분이나 해결하고 싶은 점을 자유롭게 적어주세요."
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-400 text-black font-medium resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" variant="primary" size="lg" className="w-full text-lg font-bold py-6 shadow-xl shadow-orange-200 hover:shadow-orange-300 transition-all">
                                    무료 상담 신청하기
                                </Button>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
