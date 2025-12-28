# 🎨 Hero Variants - Ejemplos de Uso

## Diferentes configuraciones del VideoHero component

---

## 1️⃣ **Default Hero** (Full Screen, Centered)

```tsx
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

**Resultado:**
- Altura: 100vh (pantalla completa)
- Texto: Centrado
- Overlay: 40% opacidad
- Botones: Ambos mostrados

---

## 2️⃣ **Minimal Hero** (Solo título, sin botones)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Atlan Reserve"
  overlayOpacity={0.3}
  height="90vh"
/>
```

**Resultado:**
- Sin subtítulo
- Sin botones
- Overlay más suave (30%)
- Altura: 90vh

---

## 3️⃣ **Left Aligned Hero** (Estilo editorial)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Discover Paradise"
  subtitle="An exclusive collection of luxury villas in the Mexican Caribbean"
  textAlign="left"
  primaryButton={{
    text: "View Properties",
    href: "/properties"
  }}
  overlayOpacity={0.5}
/>
```

**Resultado:**
- Texto alineado a la izquierda
- Overlay más oscuro (50%)
- Solo un botón

---

## 4️⃣ **Dramatic Hero** (Overlay oscuro)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Experience Luxury"
  subtitle="Redefined"
  overlayOpacity={0.65}
  primaryButton={{
    text: "Book Your Stay",
    href: "/reservations"
  }}
  secondaryButton={{
    text: "Virtual Tour",
    href: "/tour"
  }}
/>
```

**Resultado:**
- Overlay muy oscuro (65%)
- Contraste dramático
- Video menos prominente

---

## 5️⃣ **Compact Hero** (80vh para landing pages)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Welcome"
  height="80vh"
  overlayOpacity={0.35}
  primaryButton={{
    text: "Get Started",
    href: "/start"
  }}
/>
```

**Resultado:**
- Altura reducida (80vh)
- Más espacio para contenido debajo
- Ideal para landing pages

---

## 6️⃣ **Minimalist Hero** (Overlay suave)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Atlan Reserve"
  overlayOpacity={0.2}
  height="100vh"
/>
```

**Resultado:**
- Overlay muy suave (20%)
- Video muy prominente
- Estilo ultra minimalista

---

## 7️⃣ **Right Aligned Hero** (Alternativo)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Luxury Awaits"
  subtitle="Your exclusive escape"
  textAlign="right"
  secondaryButton={{
    text: "Learn More",
    href: "/about"
  }}
  overlayOpacity={0.45}
/>
```

**Resultado:**
- Texto alineado a la derecha
- Solo botón secundario (outline)
- Layout asimétrico

---

## 8️⃣ **Two-Button Hero** (Call to Action fuerte)

```tsx
<VideoHero
  videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
  title="Book Your Dream Vacation"
  subtitle="Limited availability - Reserve today"
  primaryButton={{
    text: "Reserve Now",
    href: "/reservations"
  }}
  secondaryButton={{
    text: "View Availability",
    href: "/availability"
  }}
  overlayOpacity={0.5}
/>
```

**Resultado:**
- Énfasis en conversión
- Dos CTAs claros
- Subtítulo con urgencia

---

## 🎨 Combinaciones Recomendadas por Tipo de Página

### Homepage
```tsx
<VideoHero
  videoUrl="..."
  title="Atlan Reserve"
  subtitle="Where Nature Meets Luxury"
  primaryButton={{ text: "Explore", href: "/experiences" }}
  secondaryButton={{ text: "Book", href: "/reservations" }}
  overlayOpacity={0.4}
  height="100vh"
  textAlign="center"
/>
```

### Landing Page de Campaña
```tsx
<VideoHero
  videoUrl="..."
  title="Summer Collection 2025"
  subtitle="Exclusive villas now available"
  primaryButton={{ text: "View Collection", href: "/summer" }}
  overlayOpacity={0.5}
  height="85vh"
  textAlign="left"
/>
```

### Página de Experiencias
```tsx
<VideoHero
  videoUrl="..."
  title="Curated Experiences"
  subtitle="Discover the extraordinary"
  primaryButton={{ text: "Explore Experiences", href: "/experiences" }}
  overlayOpacity={0.45}
  height="90vh"
  textAlign="center"
/>
```

### About Page
```tsx
<VideoHero
  videoUrl="..."
  title="Our Story"
  overlayOpacity={0.35}
  height="70vh"
  textAlign="left"
/>
```

---

## 🎯 Tips de Diseño

### Overlay Opacity Guidelines:

- **0.2 - 0.3**: Video muy visible, minimalista
- **0.4 - 0.5**: Balance perfecto (recomendado)
- **0.6 - 0.7**: Énfasis en texto, video de ambiente

### Text Alignment:

- **Center**: Clásico, elegante, equilibrado
- **Left**: Editorial, moderno, asimétrico
- **Right**: Único, llamativo, diferente

### Height:

- **100vh**: Full screen, impactante
- **90vh**: Navegación visible, moderno
- **80vh**: Más contenido visible, landing pages
- **70vh**: Compacto, múltiples secciones

---

## 🔧 Personalización Avanzada

### Custom className

```tsx
<VideoHero
  videoUrl="..."
  title="Custom Styled"
  className="custom-hero-class"
  overlayOpacity={0.4}
/>
```

```css
/* En tu archivo CSS */
.custom-hero-class {
  /* Tus estilos personalizados */
}
```

### Dinámico con i18n

```tsx
import { useTranslations } from 'next-intl';

export function HomePage() {
  const t = useTranslations('hero');
  
  return (
    <VideoHero
      videoUrl="..."
      title={t('title')}
      subtitle={t('subtitle')}
      primaryButton={{
        text: t('primaryButton'),
        href: '/experiences'
      }}
    />
  );
}
```

---

## 📱 Responsive Behavior

El componente es **100% responsive** automáticamente:

**Mobile (< 768px)**
- Texto: 3xl (título), lg (subtítulo)
- Botones: Stack verticalmente
- Padding: Reducido

**Tablet (768px - 1024px)**
- Texto: 5xl (título), xl (subtítulo)
- Botones: Lado a lado
- Padding: Medio

**Desktop (> 1024px)**
- Texto: 8xl (título), 2xl (subtítulo)
- Botones: Lado a lado con más gap
- Padding: Amplio

---

**Última Actualización**: 28 Diciembre 2024
