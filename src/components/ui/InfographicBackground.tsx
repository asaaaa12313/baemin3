"use client";

import { useEffect, useRef } from "react";

export function InfographicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        // Data for animations
        const bars: { h: number, speed: number }[] = [];
        const particles: { x: number, y: number, r: number, a: number, speed: number }[] = [];
        const waves: { offset: number, freq: number, amp: number, speed: number, color: string }[] = [];
        const radar = { angle: 0, x: 0, y: 0 };

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Init audio-spectrum style bars
            bars.length = 0;
            const barCount = Math.floor(width / 20);
            for (let i = 0; i < barCount; i++) {
                bars.push({ h: Math.random() * 100, speed: Math.random() * 2 + 0.5 });
            }

            // Init connecting particles (scatter plot)
            particles.length = 0;
            for (let i = 0; i < 40; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 3 + 1,
                    a: Math.random(),
                    speed: Math.random() * 0.5 + 0.1
                });
            }

            // Init waves (market trends)
            waves.length = 0;
            waves.push({ offset: 0, freq: 0.01, amp: 80, speed: 0.02, color: "rgba(255, 87, 34, 0.5)" }); // Orange
            waves.push({ offset: 0, freq: 0.02, amp: 50, speed: 0.03, color: "rgba(33, 150, 243, 0.5)" }); // Blue
            waves.push({ offset: 0, freq: 0.015, amp: 60, speed: 0.025, color: "rgba(156, 39, 176, 0.5)" }); // Purple

            // Init Radar position
            radar.x = width * 0.85;
            radar.y = height * 0.2;
        };

        const drawGrid = (t: number) => {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            const gridSize = 80;
            const scrollY = (t * 20) % gridSize;

            // Perspective Grid effect
            // Horizontal lines moving down
            for (let y = -gridSize; y <= height; y += gridSize) {
                const drawY = y + scrollY;
                ctx.beginPath();
                ctx.moveTo(0, drawY);
                ctx.lineTo(width, drawY);
                ctx.stroke();
            }

            // Vertical lines fixed
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
        };

        const drawSpectumBars = (t: number) => {
            const barWidth = 8;
            const gap = 12;
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)";

            bars.forEach((bar, i) => {
                // Perlin noise-ish animation
                const activeH = Math.sin(t * bar.speed + i * 0.1) * 40 + 60;
                // Draw mirrored bars from center line? No, let's do bottom up
                const x = i * (barWidth + gap);

                // Color gradient
                const grad = ctx.createLinearGradient(0, height - activeH, 0, height);
                grad.addColorStop(0, "rgba(255, 87, 34, 0.8)"); // Brand Orange top
                grad.addColorStop(1, "rgba(255, 87, 34, 0.0)");

                ctx.fillStyle = grad;
                ctx.fillRect(x, height, barWidth, -activeH);

                // Reflection?
                // ctx.fillStyle = "rgba(255,87,34,0.1)";
                // ctx.fillRect(x, height, barWidth, activeH * 0.2);
            });
        };

        const drawWaves = (t: number) => {
            waves.forEach(w => {
                ctx.beginPath();
                ctx.strokeStyle = w.color;
                ctx.lineWidth = 2;

                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = w.color;

                for (let x = 0; x <= width; x += 10) {
                    const y = height * 0.5 + Math.sin(x * w.freq + t * w.speed) * w.amp;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                // Reset shadow
                ctx.shadowBlur = 0;
            });
        };

        const drawRadar = (t: number) => {
            const radius = 80;
            ctx.translate(radar.x, radar.y);

            // Circles
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(0, 0, radius, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, radius * 0.6, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2); ctx.stroke();

            // Crosshair
            ctx.beginPath(); ctx.moveTo(-radius, 0); ctx.lineTo(radius, 0); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, -radius); ctx.lineTo(0, radius); ctx.stroke();

            // Sweep
            ctx.rotate(t * 2);
            const grad = ctx.createConicGradient(0, 0, 0);
            grad.addColorStop(0, "rgba(33, 150, 243, 0)");
            grad.addColorStop(0.8, "rgba(33, 150, 243, 0)");
            grad.addColorStop(1, "rgba(33, 150, 243, 0.5)");

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.fill();

            // Cleanup
            ctx.rotate(-t * 2);
            ctx.translate(-radar.x, -radar.y);
        };

        const drawScatter = (t: number) => {
            // Draw connections
            ctx.strokeStyle = "rgba(100, 100, 100, 0.2)";
            ctx.lineWidth = 0.5;

            particles.forEach((p, i) => {
                p.y -= p.speed;
                if (p.y < 0) p.y = height;

                ctx.fillStyle = `rgba(255, 255, 255, ${p.a * 0.5})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                // Connect near
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    if (Math.abs(dx) < 100 && Math.abs(dy) < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
        };

        const drawDonutCharts = (t: number) => {
            // Floating percentages
            const donuts = [
                { x: width * 0.15, y: height * 0.25, val: 75, color: "#FF5722" },
                { x: width * 0.25, y: height * 0.15, val: 42, color: "#2196F3" },
            ];

            donuts.forEach(d => {
                const r = 30;
                ctx.translate(d.x, d.y);

                // Background ring
                ctx.strokeStyle = "rgba(255,255,255,0.1)";
                ctx.lineWidth = 4;
                ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();

                // Value ring
                ctx.strokeStyle = d.color;
                ctx.lineCap = "round";
                ctx.beginPath();
                // Animate value
                const dynamicVal = d.val + Math.sin(t) * 5;
                const endAngle = (Math.PI * 2 * dynamicVal) / 100 - Math.PI / 2;
                ctx.arc(0, 0, r, -Math.PI / 2, endAngle);
                ctx.stroke();

                // Text
                ctx.fillStyle = "rgba(255,255,255,0.7)";
                ctx.font = "bold 12px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(`${Math.floor(dynamicVal)}%`, 0, 0);

                ctx.translate(-d.x, -d.y);
            });
        };

        const loop = (timestamp: number) => {
            const t = timestamp * 0.001;
            ctx.clearRect(0, 0, width, height);

            // Dark Background
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, width, height);

            drawGrid(t);
            drawScatter(t);
            drawSpectumBars(t);
            drawWaves(t);
            drawRadar(t);
            drawDonutCharts(t);

            // Vignette & Scanlines
            const grad = ctx.createRadialGradient(width / 2, height / 2, height / 2, width / 2, height / 2, width);
            grad.addColorStop(0, "rgba(0,0,0,0)");
            grad.addColorStop(1, "rgba(0,0,0,0.8)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);

            animationFrameId = requestAnimationFrame(loop);
        };

        window.addEventListener("resize", init);
        init();
        animationFrameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("resize", init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <canvas ref={canvasRef} className="block w-full h-full opacity-50" />
        </div>
    );
}
