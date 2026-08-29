import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle' | 'interactive' | 'elevated';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  className,
  variant = 'default',
  children,
  ...props
}, ref) => {
  const baseStyles = "rounded-lg border text-text-primary transition-all";

  const variantStyles = {
    default: "bg-surface border-border-subtle shadow-card",
    subtle: "bg-subtle border-border-subtle",
    interactive: "bg-surface border-border-subtle shadow-card hover:border-brand-primary/40 hover:shadow-modal active:scale-[0.99] cursor-pointer",
    elevated: "bg-surface border-border-default shadow-modal",
  };

  return (
    <div
      ref={ref}
      className={twMerge(clsx(baseStyles, variantStyles[variant], className))}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => (
  <div ref={ref} className={twMerge("flex flex-col space-y-1.5 p-5", className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({
  className,
  ...props
}, ref) => (
  <h3 ref={ref} className={twMerge("text-base font-semibold tracking-tight text-text-primary", className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({
  className,
  ...props
}, ref) => (
  <p ref={ref} className={twMerge("text-xs text-text-secondary leading-relaxed", className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => (
  <div ref={ref} className={twMerge("p-5 pt-0", className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => (
  <div ref={ref} className={twMerge("flex items-center p-5 pt-0", className)} {...props} />
));
CardFooter.displayName = 'CardFooter';
