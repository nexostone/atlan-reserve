'use client';

/**
 * Smooth Scroll Provider - Atlan Reserve
 * Implementa Lenis para smooth scrolling ultra suave
 * Usado por sitios premium como Apple, Awwwards winners
 */

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duración de la animación (más alto = más suave)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing personalizado
      orientation: 'vertical', // Scroll vertical
      gestureOrientation: 'vertical',
      smoothWheel: true, // Smooth scroll con rueda del mouse
      wheelMultiplier: 1, // Multiplicador de velocidad
      touchMultiplier: 2, // Multiplicador para touch
      infinite: false, // No infinite scroll
    });

    lenisRef.current = lenis;

    // Función de animación
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
