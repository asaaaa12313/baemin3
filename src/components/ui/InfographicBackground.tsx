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
        const time = { current: 0 };
        const bars: number[] = [];
        const lineData: number[] = [];
        const particles: { x: number, y: number, v: number, text: string, opacity: number }[] = [];

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Init bars
            bars.length = 0;
            for (let i = 0; i < 20; i++) {
                bars.push(Math.random());
            }

            // Init line data
            lineData.length = 0;
            for (let i = 0; i < 50; i++) {
                lineData.push(Math.sin(i * 0.2) * 50);
            }
        };

        const drawGrid = () => {
            ctx.strokeStyle = "rgba(40, 40, 40, 0.5)";
            ctx.lineWidth = 1;
            const gridSize = 100;

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const drawBarChart = (timestamp: number) => {
            const barWidth = 15;
            const spacing = 30;
            const startX = width * 0.1;
            const bottomY = height * 0.8;

            ctx.fillStyle = "rgba(255, 87, 34, 0.2)"; // Brand Orange

            bars.forEach((targetHeight, i) => {
                // Animate height
                const currentHeight = Math.sin(timestamp * 0.002 + i) * 50 + 100;
                const x = startX + i * spacing;

                ctx.fillRect(x, bottomY - currentHeight, barWidth, currentHeight);

                // Draw top text
                ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
                ctx.font = "10px monospace";
                ctx.fillText(`${Math.floor(currentHeight)}`, x, bottomY - currentHeight - 5);
                ctx.fillStyle = "rgba(255, 87, 34, 0.2)";
            });
        };

        const drawLineChart = (timestamp: number) => {
            const centerY = height * 0.3;
            const step = width / 50;

            ctx.beginPath();
            ctx.strokeStyle = "#FF5722"; // Brand Orange
            ctx.lineWidth = 2;

            for (let i = 0; i < 50; i++) {
                // Moving wave
                const y = centerY + Math.sin(i * 0.2 + timestamp * 0.001) * 100 + Math.cos(i * 0.5) * 30;
                if (i === 0) ctx.moveTo(0, y);
                else ctx.lineTo(i * step, y);

                // Draw dots
                if (i % 5 === 0) {
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(i * step - 2, y - 2, 4, 4);
                }
            }
            ctx.stroke();
        };

        const drawFloatingData = () => {
            if (Math.random() < 0.02) {
                particles.push({
                    x: Math.random() * width,
                    y: height,
                    v: Math.random() * 1 + 0.5,
                    text: `+${Math.floor(Math.random() * 50)}%`,
                    opacity: 1
                });
            }

            ctx.font = "12px monospace";

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.y -= p.v;
                p.opacity -= 0.005;

                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
                ctx.fillText(p.text, p.x, p.y);

                if (p.opacity <= 0) {
                    particles.splice(i, 1);
                }
            }
        };

        const loop = (timestamp: number) => {
            ctx.clearRect(0, 0, width, height);

            // Background
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            drawGrid();
            drawBarChart(timestamp);
            drawLineChart(timestamp);
            drawFloatingData();

            // Gradient Overlay for content readability
            const fadeGradient = ctx.createLinearGradient(0, 0, 0, height);
            fadeGradient.addColorStop(0, "rgba(0,0,0,0.8)");
            fadeGradient.addColorStop(0.5, "rgba(0,0,0,0.4)");
            fadeGradient.addColorStop(1, "rgba(0,0,0,0.8)");
            ctx.fillStyle = fadeGradient;
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
            <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
        </div>
    );
}
