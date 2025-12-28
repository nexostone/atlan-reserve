/**
 * useScrollAnimation Hook - Atlan Reserve
 * Hook para trigger animaciones cuando elementos entran en viewport
 * Usa Intersection Observer para mejor performance
 */

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number; // 0 a 1 - % del elemento visible para trigger
  triggerOnce?: boolean; // Solo animar una vez?
  rootMargin?: string; // Offset para el trigger (ej: "-100px")
}

export function useScrollAnimation({
  threshold = 0.2,
  triggerOnce = true,
  rootMargin = '0px',
}: UseScrollAnimationOptions = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [inView, controls, triggerOnce]);

  return { ref, controls, inView };
}
