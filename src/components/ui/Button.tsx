import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-deep-navy text-white hover:bg-deep-navy/90 shadow-md',
            secondary: 'bg-white text-deep-navy border border-gray-200 hover:bg-gray-50 shadow-sm',
            outline: 'border-2 border-deep-navy text-deep-navy hover:bg-deep-navy/5',
            ghost: 'text-deep-navy hover:bg-deep-navy/5',
            accent: 'bg-vivid-orange text-white hover:bg-vivid-orange/90 shadow-md',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-5 py-2.5 text-base',
            lg: 'px-8 py-3.5 text-lg font-semibold',
            xl: 'px-10 py-4 text-xl font-bold',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'inline-flex items-center justify-center rounded-xl transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
