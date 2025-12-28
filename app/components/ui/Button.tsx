'use client';

/**
 * Button Component - Atlan Reserve
 * Botón cuadrado minimalista con animaciones hover elegantes
 * SOLO usa Tailwind CSS - sin estilos inline
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonHover } from '@/lib/animations/variants';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  // Clases base
  const baseClasses = 'relative inline-flex items-center justify-center font-light tracking-wide transition-all overflow-hidden group';

  // Variantes
  const variantClasses = {
    primary: 'bg-white text-black border border-white hover:bg-transparent hover:text-white',
    secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-white border border-transparent hover:border-white',
  };

  // Tamaños con padding explícito
  const sizeClasses = {
    small: 'text-sm [padding:0.75rem_1.5rem]',
    medium: 'text-base [padding:1rem_2rem]',
    large: 'text-md px-4 py-3',
  };

  // Estados
  const stateClasses = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : 'cursor-pointer';
  
  const widthClasses = fullWidth ? 'w-full' : '';

  // Combinar todas las clases
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${stateClasses} ${widthClasses} ${className}`;

  // Contenido del botón
  const buttonContent = (
    <>
      {/* Background Animation Layer */}
      <span
        className={`absolute inset-0 transition-transform duration-500 ease-out ${
          variant === 'primary'
            ? 'bg-white translate-y-0 group-hover:translate-y-full'
            : variant === 'secondary'
              ? 'bg-white -translate-y-full group-hover:translate-y-0'
              : 'bg-white/10 scale-x-0 group-hover:scale-x-100'
        }`}
      />

      {/* Border Animation - Secuencial */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
        <span className="absolute right-0 top-0 h-0 w-px bg-white transition-all duration-300 delay-150 group-hover:h-full" />
        <span className="absolute bottom-0 right-0 h-px w-0 bg-white transition-all duration-300 delay-300 group-hover:w-full" />
        <span className="absolute bottom-0 left-0 h-0 w-px bg-white transition-all duration-300 delay-[450ms] group-hover:h-full" />
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{children}</span>
      </span>
    </>
  );

  // Si tiene href, renderizar como Link
  if (href && !disabled) {
    return (
      <Link href={href} className="inline-block">
        <motion.span
          variants={buttonHover}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className={buttonClasses}
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  // Renderizar como button
  return (
    <motion.button
      variants={buttonHover}
      initial="initial"
      whileHover={!disabled && !loading ? 'hover' : undefined}
      whileTap={!disabled && !loading ? 'tap' : undefined}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {buttonContent}
    </motion.button>
  );
}
