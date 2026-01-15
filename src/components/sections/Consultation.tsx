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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since the user will likely connect this later, we'll just log it for now
        // or provide a basic Google Form action if they provide a direct URL.
        // For now, based on instructions, we build the UI for reception.
        console.log("Form Submitted:", formData);
        alert("상담 신청이 접수되었습니다. 빠르게 확인 후 연락드리겠습니다.");
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
                        className="text-gray-500 text-lg"
                    >
                        망설이지 마세요. 지금이 가장 빠른 변화의 시작입니다.
                    </motion.p>
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
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-300 text-gray-900"
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
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-300 text-gray-900"
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-300"
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-300"
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vivid-orange focus:ring-2 focus:ring-vivid-orange/20 outline-none transition-all placeholder:text-gray-300 text-gray-900 resize-none"
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
