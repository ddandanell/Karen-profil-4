import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-refined transition-all duration-300 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-deep-charcoal text-off-white hover:bg-soft-gold hover:text-deep-charcoal',
    secondary: 'bg-off-white border-2 border-deep-charcoal text-deep-charcoal hover:bg-deep-charcoal hover:text-off-white',
    tertiary: 'bg-transparent text-deep-charcoal underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'h-12 px-6 md:px-8 text-sm md:text-base rounded-luxury',
    md: 'h-14 px-8 md:px-10 text-base md:text-lg rounded-luxury-md',
    lg: 'h-16 px-12 md:px-14 text-lg md:text-xl rounded-luxury-lg',
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};
