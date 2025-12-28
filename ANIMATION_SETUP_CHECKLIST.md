# 🎬 Checklist: Configuración de Animaciones & Hero Component - Atlan Reserve

## 📅 Fecha de Inicio: 28 Diciembre 2024

---

## ✅ **Fase 1: Instalación de Dependencias**

- [ ] Instalar Framer Motion (`framer-motion`)
- [ ] Instalar Lenis para smooth scrolling (`lenis`)
- [ ] Instalar GSAP (opcional, para animaciones avanzadas)
- [ ] Instalar Intersection Observer helper (`react-intersection-observer`)
- [ ] Verificar compatibilidad con Next.js 15

**Comando:**
```bash
npm install framer-motion lenis react-intersection-observer
```

---

## ✅ **Fase 2: Componente Hero con Video**

- [ ] Crear `/app/components/hero/VideoHero.tsx`
- [ ] Implementar video de fondo optimizado
- [ ] Agregar overlay sutil (degradado oscuro)
- [ ] Implementar texto principal con animación fade-in
- [ ] Crear botones cuadrados con hover effect
- [ ] Hacer componente reutilizable con props
- [ ] Agregar controles de video (mute/unmute)
- [ ] Optimizar carga de video (lazy loading)
- [ ] Agregar fallback image mientras carga video
- [ ] Responsive design (video en mobile)

**Props del componente:**
- `videoUrl: string`
- `title: string`
- `subtitle?: string`
- `primaryButton?: { text: string, href: string }`
- `secondaryButton?: { text: string, href: string }`
- `overlayOpacity?: number (default: 0.4)`
- `height?: string (default: "100vh")`

---

## ✅ **Fase 3: Sistema de Animaciones Global**

### 3.1 Configuración Base
- [ ] Crear `/lib/animations/variants.ts` (variantes reutilizables)
- [ ] Crear `/lib/animations/transitions.ts` (transiciones custom)
- [ ] Crear `/hooks/useScrollAnimation.ts`
- [ ] Crear `/hooks/useParallax.ts`
- [ ] Crear provider de Lenis smooth scroll

### 3.2 Variantes de Animación
- [ ] `fadeIn` - Fade in básico
- [ ] `fadeInUp` - Fade in desde abajo
- [ ] `fadeInDown` - Fade in desde arriba
- [ ] `scaleIn` - Scale con fade
- [ ] `slideInLeft` - Slide desde izquierda
- [ ] `slideInRight` - Slide desde derecha
- [ ] `staggerChildren` - Para listas/grids
- [ ] `parallax` - Efecto parallax

### 3.3 Componentes Animados Reutilizables
- [ ] `<AnimatedSection>` - Wrapper con intersection observer
- [ ] `<AnimatedText>` - Para títulos/párrafos
- [ ] `<AnimatedButton>` - Botones con hover effects
- [ ] `<ParallaxImage>` - Imágenes con parallax
- [ ] `<ScrollProgress>` - Barra de progreso de scroll

---

## ✅ **Fase 4: Smooth Scrolling (Lenis)**

- [ ] Crear `/app/components/providers/SmoothScrollProvider.tsx`
- [ ] Integrar Lenis en layout principal
- [ ] Configurar opciones de smooth scroll
- [ ] Probar compatibilidad con Next.js App Router
- [ ] Agregar scroll to top button (opcional)

---

## ✅ **Fase 5: Botones Cuadrados con Animaciones**

- [ ] Crear `/app/components/ui/Button.tsx`
- [ ] Variante: Primary (relleno sólido)
- [ ] Variante: Secondary (outline)
- [ ] Variante: Ghost (transparente)
- [ ] Hover effect: Border reveal
- [ ] Hover effect: Background slide
- [ ] Hover effect: Scale subtle
- [ ] Active state
- [ ] Disabled state
- [ ] Loading state con spinner

---

## ✅ **Fase 6: Tipografía & Estilos Base**

- [ ] Configurar fuentes serif elegantes (Playfair Display / Cormorant)
- [ ] Configurar fuentes sans-serif (Inter / Montserrat)
- [ ] Crear sistema de tamaños de texto
- [ ] Definir color palette minimalista
- [ ] Configurar spacing system
- [ ] Agregar CSS variables en `globals.css`

**Paleta sugerida:**
```css
--color-primary: #1a1a1a;      /* Negro elegante */
--color-secondary: #f8f8f8;    /* Blanco roto */
--color-accent: #c9a96e;       /* Dorado sutil */
--color-text: #2d2d2d;
--color-text-light: #6b6b6b;
```

---

## ✅ **Fase 7: Optimizaciones**

- [ ] Lazy load de video (IntersectionObserver)
- [ ] Preload de fuentes críticas
- [ ] Optimizar animaciones para 60fps
- [ ] Reducir layout shift (CLS)
- [ ] Agregar `will-change` para elementos animados
- [ ] Reducir motion para usuarios con `prefers-reduced-motion`
- [ ] Comprimir video (multiple resoluciones)
- [ ] Agregar poster image para video

---

## ✅ **Fase 8: Internacionalización de Contenido**

- [ ] Agregar traducciones para hero en `/messages/en.json`
- [ ] Agregar traducciones para hero en `/messages/es.json`
- [ ] Crear hook `useHeroContent()` para contenido dinámico
- [ ] Probar cambio de idioma sin romper animaciones

---

## ✅ **Fase 9: Testing & QA**

- [ ] Probar en Chrome
- [ ] Probar en Safari
- [ ] Probar en Firefox
- [ ] Probar en mobile (iOS)
- [ ] Probar en mobile (Android)
- [ ] Verificar performance (Lighthouse)
- [ ] Verificar accesibilidad (a11y)
- [ ] Probar con slow 3G
- [ ] Verificar que video no autoplay con sonido

---

## ✅ **Fase 10: Documentación**

- [ ] Documentar uso del componente VideoHero
- [ ] Crear Storybook o ejemplos de uso
- [ ] Documentar variantes de animación
- [ ] Crear guía de estilos para botones
- [ ] Documentar best practices

---

## 📝 **Notas de Implementación**

### Video de Fondo
- URL: `https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4`
- Formato: MP4
- Autoplay: Sí (muted)
- Loop: Sí
- Controls: No (solo botón mute/unmute sutil)

### Referencias de Diseño
- **Cuixmala**: Elegancia minimalista, espacios abiertos
- **Aman Resorts**: Tipografía serif, animaciones sutiles
- **Kind Worldwide**: Layout asimétrico, imágenes full-screen

---

## 🎯 **Próximos Pasos Después de Esta Fase**

1. Crear componente de Gallery con parallax
2. Implementar sección de "Experiences" con scroll-triggered animations
3. Crear footer minimalista con mapa
4. Integrar Mapbox para ubicación
5. Crear página de reservas con Pardivelle OAuth

---

## 🐛 **Issues & Troubleshooting**

### Issue #1: Video no carga en Safari
- **Status**: Pendiente
- **Solución**: Agregar múltiples formatos (webm, mp4)

### Issue #2: Animaciones laggy en mobile
- **Status**: Pendiente  
- **Solución**: Reducir complejidad, usar `transform` en lugar de `top/left`

---

## 📊 **Progreso General**

- **Total de tareas**: 60+
- **Completadas**: 0
- **En progreso**: 0
- **Bloqueadas**: 0

---

**Última actualización**: 28 Diciembre 2024
**Responsable**: Alberto Camargo
**Stack**: Next.js 15 + Framer Motion + Lenis + Tailwind CSS 4
