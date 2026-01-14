import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

const Card = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => (
        <motion.div
            ref={ref}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                'rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-md shadow-lg text-card-foreground p-6',
                className
            )}
            {...props}
        />
    )
);
Card.displayName = 'Card';

export { Card };
