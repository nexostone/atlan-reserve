# 🎬 Componentes de Animación - Atlan Reserve

## 📦 Instalación

Primero, instala las dependencias necesarias:

```bash
npm install framer-motion lenis react-intersection-observer
```

## 🎯 Componentes Creados

### 1. VideoHero Component

Componente hero reutilizable con video de fondo y animaciones elegantes.

**Ubicación:** `/app/components/hero/VideoHero.tsx`

#### Uso Básico:

```tsx
import { VideoHero } from '@/app/components/hero/VideoHero';

<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Atlan Reserve"
  subtitle="Where Nature Meets Luxury"
  primaryButton={{
    text: "Explore Experiences",
    href: "/experiences"
  }}
  secondaryButton={{
    text: "Reserve Now",
    href: "/reservations"
  }}
/>
```

#### Props Disponibles:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `videoUrl` | string | - | **Requerido**. URL del video de fondo |
| `title` | string | - | **Requerido**. Título principal |
| `subtitle` | string | - | Subtítulo (opcional) |
| `primaryButton` | object | - | Botón principal `{ text, href }` |
| `secondaryButton` | object | - | Botón secundario `{ text, href }` |
| `overlayOpacity` | number | 0.4 | Opacidad del overlay (0-1) |
| `height` | string | "100vh" | Altura del hero |
| `textAlign` | string | "center" | Alineación: left, center, right |

#### Características:

- ✅ Video autoplay (muted)
- ✅ Botón mute/unmute
- ✅ Overlay con gradiente personalizable
- ✅ Animaciones fade-in elegantes
- ✅ Indicador de scroll animado
- ✅ Responsive design
- ✅ Lazy loading del video
- ✅ Accesibilidad (ARIA labels)

---

### 2. Button Component

Botones cuadrados minimalistas con animaciones hover sofisticadas.

**Ubicación:** `/app/components/ui/Button.tsx`

#### Uso Básico:

```tsx
import { Button } from '@/app/components/ui/Button';

// Como link
<Button 
  href="/experiences" 
  variant="primary"
  size="large"
>
  Explore Now
</Button>

// Como button
<Button 
  onClick={() => console.log('clicked')} 
  variant="secondary"
>
  Learn More
</Button>
```

#### Props Disponibles:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | ReactNode | - | **Requerido**. Contenido del botón |
| `href` | string | - | URL (convierte a Link) |
| `onClick` | function | - | Click handler |
| `variant` | string | "primary" | Estilo: primary, secondary, ghost |
| `size` | string | "medium" | Tamaño: small, medium, large |
| `disabled` | boolean | false | Estado deshabilitado |
| `loading` | boolean | false | Estado de carga con spinner |
| `fullWidth` | boolean | false | Ancho completo |

#### Variantes:

- **primary**: Fondo blanco, texto negro → hover invierte
- **secondary**: Outline blanco → hover rellena
- **ghost**: Transparente → hover muestra borde

#### Animaciones Hover:

1. **Border Reveal**: Bordes se revelan secuencialmente
2. **Background Slide**: Fondo se desliza suavemente
3. **Scale**: Escala sutil al hover/click

---

### 3. SmoothScrollProvider

Provider para smooth scrolling ultra suave usando Lenis.

**Ubicación:** `/app/components/providers/SmoothScrollProvider.tsx`

#### Implementación:

Ya está integrado en el layout principal:

```tsx
// app/[locale]/layout.tsx
import { SmoothScrollProvider } from '@/app/components/providers/SmoothScrollProvider';

<SmoothScrollProvider>
  {children}
</SmoothScrollProvider>
```

#### Configuración:

- **Duration**: 1.2s (ajustable)
- **Easing**: Custom cubic-bezier
- **Smooth Wheel**: Activado
- **Touch Multiplier**: 2x

---

## 🎨 Sistema de Animaciones

### Variants Disponibles

**Ubicación:** `/lib/animations/variants.ts`

```tsx
import { fadeIn, fadeInUp, scaleIn, slideInLeft } from '@/lib/animations/variants';

<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
>
  Contenido
</motion.div>
```

#### Variantes Principales:

- `fadeIn` - Fade simple
- `fadeInUp` - Desde abajo (hero sections)
- `fadeInDown` - Desde arriba
- `scaleIn` - Zoom con fade
- `slideInLeft` / `slideInRight` - Lateral
- `staggerContainer` / `staggerItem` - Listas animadas
- `buttonHover` - Hover de botones
- `imageZoom` - Hover de imágenes
- `pageTransition` - Transiciones de página

### Transitions

**Ubicación:** `/lib/animations/transitions.ts`

```tsx
import { easings, durations } from '@/lib/animations/transitions';

// Usar en animaciones custom
transition={{
  duration: durations.slow,
  ease: easings.smooth
}}
```

#### Easings Disponibles:

- `smooth` - Default elegante
- `easeOut` / `easeIn`
- `gentle` - Sutiles
- `dramatic` - Pronunciados

---

## 🎣 Hooks Personalizados

### useScrollAnimation

Hook para trigger animaciones con Intersection Observer.

**Ubicación:** `/hooks/useScrollAnimation.ts`

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp } from '@/lib/animations/variants';

function MyComponent() {
  const { ref, controls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
    >
      Contenido que anima al hacer scroll
    </motion.div>
  );
}
```

#### Opciones:

- `threshold`: % visible para trigger (0-1)
- `triggerOnce`: Solo animar una vez
- `rootMargin`: Offset del trigger

---

## 🎨 Estilos Globales

### Variables CSS

Definidas en `app/globals.css`:

```css
--color-primary: #1a1a1a;
--color-secondary: #f8f8f8;
--color-accent: #c9a96e;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

### Utilidades Personalizadas:

```tsx
<div className="container-luxury">
  {/* Max-width 1400px con padding responsive */}
</div>

<div className="gradient-overlay">
  {/* Degradado negro personalizado */}
</div>

<div className="backdrop-blur-luxury">
  {/* Blur + saturación */}
</div>
```

---

## 🎭 Ejemplos de Uso

### Ejemplo 1: Hero Completo

```tsx
<VideoHero
  videoUrl="https://..."
  title="Atlan Reserve"
  subtitle="Luxury & Nature"
  primaryButton={{ text: "Explore", href: "/experiences" }}
  secondaryButton={{ text: "Book", href: "/reservations" }}
  overlayOpacity={0.45}
  height="100vh"
  textAlign="center"
/>
```

### Ejemplo 2: Sección con Animación Scroll

```tsx
'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/variants';

export function FeaturesSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-3 gap-8"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={staggerItem}
            className="p-8"
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
```

### Ejemplo 3: Botones con Estados

```tsx
<Button variant="primary" size="large" href="/booking">
  Reserve Now
</Button>

<Button variant="secondary" size="medium" onClick={handleClick}>
  Learn More
</Button>

<Button variant="ghost" loading={true}>
  Processing...
</Button>

<Button variant="primary" disabled={true}>
  Sold Out
</Button>
```

---

## ♿ Accesibilidad

- ✅ ARIA labels en todos los elementos interactivos
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Contraste de colores AAA
- ✅ Navegación por teclado
- ✅ Focus states visibles

---

## 📱 Responsive Design

Todos los componentes son completamente responsive:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1400px

---

## 🚀 Performance

### Optimizaciones Implementadas:

- ✅ Lazy loading de video
- ✅ `will-change` para elementos animados
- ✅ Intersection Observer para animaciones
- ✅ Smooth scrolling con Lenis (60fps)
- ✅ Reducción de layout shift
- ✅ Preload de fuentes críticas

### Tips:

```tsx
// Usar will-change solo cuando necesario
<div className="will-change-transform">
  {/* Contenido animado */}
</div>

// Lazy load de secciones pesadas
const HeavySection = dynamic(() => import('./HeavySection'), {
  loading: () => <p>Loading...</p>
});
```

---

## 🎓 Próximos Pasos

1. ✅ Instalar dependencias
2. ✅ Verificar que todo funciona
3. [ ] Crear más secciones con animaciones
4. [ ] Implementar Gallery con parallax
5. [ ] Crear footer minimalista
6. [ ] Integrar con Pardivelle

---

## 📚 Recursos

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org)

---

## 🐛 Troubleshooting

### Video no carga en Safari
```tsx
// Asegúrate de tener el atributo playsInline
<video playsInline muted autoPlay loop>
```

### Animaciones laggy
```tsx
// Reduce complejidad, usa transform en lugar de top/left
// Activa hardware acceleration
<div style={{ transform: 'translateZ(0)' }}>
```

### Smooth scroll no funciona
```bash
# Verifica que Lenis está instalado
npm install lenis

# Verifica que el provider está en el layout
```

---

**Última actualización**: 28 Diciembre 2024
