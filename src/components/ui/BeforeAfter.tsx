import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
}

export function BeforeAfter({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className
}: BeforeAfterProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleWindowMouseUp = () => setIsDragging(false);
        const handleWindowMouseMove = (e: globalThis.MouseEvent) => {
            if (isDragging && containerRef.current) {
                const { left, width } = containerRef.current.getBoundingClientRect();
                const position = ((e.clientX - left) / width) * 100;
                setSliderPosition(Math.min(100, Math.max(0, position)));
            }
        }

        if (isDragging) {
            window.addEventListener('mouseup', handleWindowMouseUp);
            window.addEventListener('mousemove', handleWindowMouseMove);
            window.addEventListener('touchend', handleWindowMouseUp);
        }

        return () => {
            window.removeEventListener('mouseup', handleWindowMouseUp);
            window.removeEventListener('mousemove', handleWindowMouseMove);
            window.removeEventListener('touchend', handleWindowMouseUp);
        };
    }, [isDragging]);


    return (
        <div
            className={cn("relative w-full aspect-video overflow-hidden rounded-2xl select-none cursor-ew-resize shadow-2xl bg-gray-100", className)}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onTouchMove={(e) => handleMove(e)}
        >
            {/* After Image (Background) - The "Outcome" */}
            <Image
                src={afterImage}
                alt="After"
                fill
                className="object-cover"
                priority
            />
            {afterLabel && (
                <Badge variant="accent" className="absolute top-4 right-4 z-10 pointer-events-none">
                    {afterLabel}
                </Badge>
            )}

            {/* Before Image (Foreground) - The "Problem" */}
            <div
                className="absolute inset-0 overflow-hidden border-r-2 border-white/50"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="absolute inset-0 h-full w-full" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }}>
                    <Image
                        src={beforeImage}
                        alt="Before"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'left' }}
                    />
                </div>
                {beforeLabel && (
                    <Badge className="absolute top-4 left-4 bg-gray-900/80 text-white border-none z-10 pointer-events-none">
                        {beforeLabel}
                    </Badge>
                )}
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="bg-white rounded-full p-1.5 shadow-xl border border-gray-200">
                    <ChevronsLeftRight className="w-4 h-4 text-deep-navy" />
                </div>
            </div>
        </div>
    );
}
