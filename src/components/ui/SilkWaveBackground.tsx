"use client";

import { useEffect, useRef } from "react";

export function SilkWaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let time = 0;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        // Configuration for the waves
        const waves = [
            { color: "rgba(124, 58, 237, 0.4)", speed: 0.002, amplitude: 80, frequency: 0.001, yOffset: 0 },   // Purple
            { color: "rgba(37, 99, 235, 0.3)", speed: 0.003, amplitude: 60, frequency: 0.0015, yOffset: 10 },  // Blue
            { color: "rgba(6, 182, 212, 0.2)", speed: 0.001, amplitude: 100, frequency: 0.0008, yOffset: -10 }, // Cyan
            { color: "rgba(139, 92, 246, 0.15)", speed: 0.0025, amplitude: 50, frequency: 0.002, yOffset: 20 }, // Violet light
        ];

        const drawWave = (yBase: number, wave: typeof waves[0], t: number) => {
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 2; // Fine lines for that "thread" look, or thicker for ribbon. Let's try filling for ribbon.

            // Let's draw multiple lines for each "wave" group to create the ribbon texture
            for (let i = 0; i < 20; i++) {
                ctx.beginPath();
                const offset = i * 2; // Spacing between threads
                ctx.lineWidth = 1;
                // Vary opacity for depth
                const alpha = (1 - i / 20) * 0.5;
                ctx.strokeStyle = wave.color.replace('0.4', alpha.toString()).replace('0.3', alpha.toString());

                for (let x = 0; x <= width; x += 10) {
                    const effectiveX = x;
                    // Complex wave function
                    const y = yBase + wave.yOffset + offset
                        + Math.sin(effectiveX * wave.frequency + t * wave.speed) * wave.amplitude
                        + Math.cos(effectiveX * wave.frequency * 0.5 + t * wave.speed * 0.5) * (wave.amplitude * 0.5);

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
        };

        const drawSolidRibbon = (yBase: number, t: number) => {
            // Gradient Ribbon
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, "rgba(59, 130, 246, 0)");
            gradient.addColorStop(0.2, "rgba(139, 92, 246, 0.5)"); // Purple
            gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.8)"); // Cyan highlight
            gradient.addColorStop(0.8, "rgba(59, 130, 246, 0.5)"); // Blue
            gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();

            // Top edge
            for (let x = 0; x <= width; x += 5) {
                const y = yBase
                    + Math.sin(x * 0.001 + t * 0.002) * 100
                    + Math.sin(x * 0.003 + t * 0.001) * 50;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            // Bottom edge (connected)
            for (let x = width; x >= 0; x -= 5) {
                const y = yBase + 100 // Ribbon width
                    + Math.sin(x * 0.001 + t * 0.002 + 0.5) * 90 // Slightly different phase for twisting effect
                    + Math.sin(x * 0.003 + t * 0.001) * 50;
                ctx.lineTo(x, y);
            }

            ctx.closePath();
            ctx.fill();

            // Shine overlay
            ctx.strokeStyle = "rgba(255,255,255,0.1)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let x = 0; x <= width; x += 5) {
                const y = yBase + 20
                    + Math.sin(x * 0.001 + t * 0.002) * 100
                    + Math.sin(x * 0.003 + t * 0.001) * 50;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const loop = (timestamp: number) => {
            time = timestamp;
            ctx.clearRect(0, 0, width, height);

            // Deep background
            ctx.fillStyle = "#030014"; // Very dark midnight/purple black
            ctx.fillRect(0, 0, width, height);

            // Draw multiple ribbon layers
            // Layer 1: Faint background flow
            ctx.globalCompositeOperation = "screen";
            drawSolidRibbon(height * 0.6, time + 2000);

            // Layer 2: Main foreground flow
            drawSolidRibbon(height * 0.7, time);

            // Vignette
            ctx.globalCompositeOperation = "source-over";
            const grad = ctx.createRadialGradient(width / 2, height / 2, height / 3, width / 2, height / 2, width);
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
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
