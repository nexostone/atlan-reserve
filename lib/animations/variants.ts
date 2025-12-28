/**
 * Animation Variants - Atlan Reserve
 * Variantes de animación reutilizables para Framer Motion
 * Diseñadas para sitios de lujo con movimientos sutiles y elegantes
 */

import { Variants } from 'framer-motion';

/**
 * Fade In - Aparición simple con opacidad
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing suave
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Fade In Up - Aparición desde abajo (hero sections)
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Fade In Down - Aparición desde arriba
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Scale In - Zoom suave con fade
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Slide In Left - Entrada desde la izquierda
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Slide In Right - Entrada desde la derecha
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Stagger Children - Para listas y grids
 * Anima elementos hijos con delay escalonado
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Hover Effects - Para elementos interactivos
 */
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
};

export const hoverLift = {
  y: -5,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
};

/**
 * Button Hover - Efecto de expansión de borde
 */
export const buttonHover: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  tap: {
    scale: 0.98,
  },
};

/**
 * Image Zoom - Para hover en imágenes
 */
export const imageZoom: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Parallax Effect - Para scroll parallax
 */
export const parallaxVariant = (offset: number = 50): Variants => ({
  initial: {
    y: 0,
  },
  scrolled: {
    y: offset,
  },
});

/**
 * Page Transition - Para transiciones entre páginas
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Reveal Line - Para revelar líneas de texto
 */
export const revealLine: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Border Reveal - Para revelar bordes en hover
 */
export const borderReveal: Variants = {
  initial: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
