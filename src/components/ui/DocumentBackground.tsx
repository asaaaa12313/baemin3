"use client";

import { useEffect, useRef } from "react";

export function DocumentBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        interface Item {
            type: 'doc' | 'shape' | 'plus';
            x: number;
            y: number;
            size: number;
            rotation: number;
            speedX: number;
            speedY: number;
            rotSpeed: number;
            color: string;
            variant?: number; // For diff doc styles
        }

        const items: Item[] = [];

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            items.length = 0;
            const count = Math.floor(width * height / 40000); // Density

            for (let i = 0; i < count; i++) {
                const typeRand = Math.random();
                let type: Item['type'] = 'shape';
                if (typeRand < 0.4) type = 'doc';
                else if (typeRand < 0.7) type = 'plus';

                items.push({
                    type,
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 20 + (type === 'doc' ? 30 : 10),
                    rotation: Math.random() * Math.PI * 2,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    rotSpeed: (Math.random() - 0.5) * 0.02,
                    color: type === 'doc' ?
                        `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})` :
                        (Math.random() > 0.5 ? `rgba(255, 87, 34, ${Math.random() * 0.2 + 0.1})` : `rgba(255, 255, 255, ${Math.random() * 0.1})`),
                    variant: Math.floor(Math.random() * 3)
                });
            }
        };

        const drawDoc = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, variant: number = 0) => {
            const w = size;
            const h = size * 1.4; // A4 aspect ratio approx

            ctx.fillStyle = `rgba(240, 240, 240, ${0.1})`;
            ctx.fillRect(-w / 2, -h / 2, w, h);

            // Content lines
            ctx.fillStyle = `rgba(255, 255, 255, ${0.2})`;
            const lines = 5;
            const lineHeight = h / (lines + 4);

            for (let i = 0; i < lines; i++) {
                const lw = w * (0.6 + Math.random() * 0.2);
                ctx.fillRect(-w / 2 + 4, -h / 2 + 10 + i * (lineHeight + 4), lw, lineHeight);
            }

            // Stamp or highlight
            if (variant === 1) {
                ctx.beginPath();
                ctx.arc(w / 4, h / 4, w / 6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 87, 34, 0.3)`; // Orange stamp
                ctx.fill();
            }
        };

        const drawPlus = (ctx: CanvasRenderingContext2D, size: number, color: string) => {
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-size / 2, 0);
            ctx.lineTo(size / 2, 0);
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(0, size / 2);
            ctx.stroke();
        };

        const drawShape = (ctx: CanvasRenderingContext2D, size: number, color: string, variant: number = 0) => {
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            if (variant === 0) {
                ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
            } else if (variant === 1) {
                ctx.rect(-size / 2, -size / 2, size, size);
            } else {
                ctx.moveTo(0, -size / 2);
                ctx.lineTo(size / 2, size / 2);
                ctx.lineTo(-size / 2, size / 2);
                ctx.closePath();
            }
            ctx.stroke();
        };

        const loop = () => {
            ctx.clearRect(0, 0, width, height);

            // Dark bg
            ctx.fillStyle = "#0A0A0A";
            ctx.fillRect(0, 0, width, height);

            items.forEach(item => {
                item.x += item.speedX;
                item.y += item.speedY;
                item.rotation += item.rotSpeed;

                // Wrap around
                if (item.x < -100) item.x = width + 100;
                if (item.x > width + 100) item.x = -100;
                if (item.y < -100) item.y = height + 100;
                if (item.y > height + 100) item.y = -100;

                ctx.save();
                ctx.translate(item.x, item.y);
                ctx.rotate(item.rotation);

                if (item.type === 'doc') {
                    drawDoc(ctx, 0, 0, item.size, 1, item.variant);
                } else if (item.type === 'plus') {
                    drawPlus(ctx, item.size, item.color);
                } else {
                    drawShape(ctx, item.size, item.color, item.variant);
                }

                ctx.restore();
            });

            // Gradient Overlay
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
            <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
        </div>
    );
}
