/**
 * Animation Transitions - Atlan Reserve
 * Transiciones custom para animaciones elegantes
 */

import { Transition } from 'framer-motion';

/**
 * Easing curves personalizadas para movimientos suaves
 * Basadas en curvas bezier de sitios de lujo
 */
export const easings = {
  // Suave y elegante (default para la mayoría de animaciones)
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  
  // Más pronunciado al inicio
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  
  // Más pronunciado al final
  easeIn: [0.7, 0, 0.84, 0] as [number, number, number, number],
  
  // Para movimientos sutiles
  gentle: [0.45, 0, 0.55, 1] as [number, number, number, number],
  
  // Para efectos dramáticos
  dramatic: [0.87, 0, 0.13, 1] as [number, number, number, number],
};

/**
 * Durations estándar (en segundos)
 */
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  verySlow: 1.2,
};

/**
 * Transición por defecto para elementos
 */
export const defaultTransition: Transition = {
  duration: durations.normal,
  ease: easings.smooth,
};

/**
 * Transición para hover states
 */
export const hoverTransition: Transition = {
  duration: durations.fast,
  ease: easings.smooth,
};

/**
 * Transición para scroll animations
 */
export const scrollTransition: Transition = {
  duration: durations.slow,
  ease: easings.smooth,
};

/**
 * Transición con spring physics (para efectos más naturales)
 */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

/**
 * Spring suave para hovers
 */
export const softSpring: Transition = {
  type: 'spring',
  stiffness: 150,
  damping: 20,
};

/**
 * Spring para elementos que rebotan ligeramente
 */
export const bouncySpring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 10,
};

/**
 * Delays estándar (en segundos)
 */
export const delays = {
  none: 0,
  short: 0.1,
  medium: 0.3,
  long: 0.5,
};

/**
 * Función para crear stagger delays personalizados
 */
export const createStagger = (itemCount: number, totalDuration: number = 0.6) => {
  return {
    staggerChildren: totalDuration / itemCount,
    delayChildren: 0.2,
  };
};

/**
 * Transición para page transitions
 */
export const pageTransitionConfig: Transition = {
  duration: durations.slow,
  ease: easings.smooth,
  when: 'beforeChildren',
};
