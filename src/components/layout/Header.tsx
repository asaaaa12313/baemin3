import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '서비스 소개', href: '#pricing' },
        { name: '성공 사례', href: '#reviews' },
        { name: '가격', href: '#pricing' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <div className={cn("text-2xl font-bold transition-colors", isScrolled ? "text-deep-navy" : "text-white")}>
                    Wiz<span className="text-vivid-orange">.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-vivid-orange",
                                isScrolled ? "text-deep-navy" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant={isScrolled ? "primary" : "accent"}
                        size="sm"
                        className="rounded-full"
                        onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        무료 진단 신청
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className={cn("h-6 w-6", isScrolled ? "text-deep-navy" : "text-white")} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[60] bg-white p-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-2xl font-bold text-deep-navy">Wiz.</span>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X className="h-6 w-6 text-deep-navy" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-lg font-medium text-deep-navy">
                            {navLinks.map((link) => (
                                <a key={link.name} href="#" onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
                            ))}
                            <div className="h-px bg-gray-100 my-2"></div>
                            <Button className="w-full">무료 진단 신청</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
