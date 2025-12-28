# Sección de Experiencias - Atlan Reserve

## 📋 Descripción General

La sección de experiencias presenta un carrusel horizontal de tarjetas cuadradas que muestran las amenidades, servicios y perks exclusivos del desarrollo Palo Alto. Cada tarjeta enlaza a una página descriptiva individual.

## 🎨 Características de Diseño

### Paleta de Colores
- **Navy** (#0C1945) - Overlays y textos
- **White** (#FFFFFF) - Fondo del carrusel
- **Champagne** (#BFA27A) - Acentos y categorías
- **Pearl** (#F5F6F8) - Fondos alternos
- **Ash** (#E1E4EA) - Bordes sutiles

### Layout
- Carrusel horizontal con scroll suave
- Tarjetas cuadradas (aspect-ratio: 1:1)
- Responsive: diferentes anchos por breakpoint
- Navegación con botones (desktop) y swipe (mobile)

## 📁 Estructura de Componentes

```
app/components/experiences/
├── index.ts                    # Exportaciones
├── ExperienceCard.tsx          # Tarjeta individual
└── ExperiencesCarousel.tsx     # Carrusel principal

app/[locale]/experiences/
├── page.tsx                    # Página índice (todas las experiencias)
└── [slug]/
    └── page.tsx                # Página individual de experiencia

data/
└── experiences.ts              # Datos de experiencias
```

## 🧩 Componentes

### 1. ExperienceCard
Tarjeta individual con imagen, overlay y hover effects.

**Props:**
```typescript
interface ExperienceCardProps {
  experience: Experience;
  index?: number; // Para animaciones secuenciales
}
```

**Características:**
- ✅ Imagen de fondo con aspect ratio cuadrado
- ✅ Overlay gradient de navy
- ✅ Tag de categoría (Amenidad/Experiencia/Beneficio/Servicio)
- ✅ Título en tipografía serif
- ✅ Subtitle descriptivo
- ✅ Hover effect con escala de imagen
- ✅ Arrow "Descubrir" aparece en hover
- ✅ Acento decorativo en esquina superior derecha
- ✅ Link a página individual

**Animaciones:**
- Scale 1.05 en imagen al hover (700ms)
- Fade in secuencial por index
- Translate X en arrow al hover

### 2. ExperiencesCarousel
Carrusel completo con navegación y controles.

**Props:**
```typescript
interface ExperiencesCarouselProps {
  experiences: Experience[];
}
```

**Características:**
- ✅ Header con título y descripción
- ✅ Botones de navegación (desktop only)
- ✅ Scroll horizontal suave
- ✅ Estados disabled en botones
- ✅ Indicador de scroll (mobile)
- ✅ Link "Ver Todas las Experiencias"
- ✅ Scrollbar oculto

**Anchos de tarjetas por breakpoint:**
- Mobile (< 640px): 85vw
- Small (640px - 768px): 70vw
- Medium (768px - 1024px): 45vw
- Large (1024px - 1280px): 30vw
- XL (> 1280px): 25vw

**Navegación:**
- Scroll programático con smooth behavior
- Detección automática de scroll limits
- Disabled states en botones

## 📊 Modelo de Datos

### Experience Interface
```typescript
interface Experience {
  id: string;
  title: string;              // "Beach Club Privado"
  subtitle: string;           // "Acceso exclusivo a la playa"
  description: string;        // Descripción larga
  imageUrl: string;           // URL de imagen
  slug: string;               // "beach-club-privado"
  category: 'amenity' | 'experience' | 'perk' | 'service';
}
```

### Categorías
- **amenity**: Amenidades físicas (Beach Club, Spa, Gimnasio)
- **experience**: Experiencias activas (Golf, Expediciones)
- **perk**: Beneficios exclusivos (Wine Cellar, Concierge)
- **service**: Servicios (Seguridad, Kids Club)

## 📄 Páginas

### 1. Página Principal (/)
Incluye el carrusel de experiencias entre otras secciones.

**Orden de secciones:**
1. VideoHero
2. Welcome to Paradise
3. **ExperiencesCarousel** ← Nueva
4. ContactSection

### 2. Página Índice (/experiences)
Muestra todas las experiencias en grid.

**Secciones:**
- Hero Section (navy con gradiente)
- Grid de todas las experiencias (2-4 columnas)
- CTA Section (navy con botones)

### 3. Páginas Individuales (/experiences/[slug])
Página detallada de cada experiencia.

**Secciones:**
- Hero con imagen de fondo
- Descripción y detalles
- Grid de características (4 items)
- CTA para contacto
- Experiencias relacionadas

## 🎯 Datos de Ejemplo

Actualmente incluye 10 experiencias:

1. **Beach Club Privado** (amenity)
2. **Spa & Wellness** (amenity)
3. **Golf Championship** (experience)
4. **Gastronomía Gourmet** (amenity)
5. **Expediciones Marinas** (experience)
6. **Concierge 24/7** (service)
7. **Fitness Center** (amenity)
8. **Kids Club** (amenity)
9. **Wine Cellar** (perk)
10. **Seguridad Premium** (service)

## 🔧 Integraciones Pendientes

### 1. Imágenes Reales
```typescript
// TODO: Reemplazar URLs de Unsplash con imágenes del proyecto
imageUrl: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/beach-club.jpg'
```

### 2. Base de Datos (Supabase)
Crear tabla para gestión dinámica:

```sql
create table experiences (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subtitle text not null,
  description text not null,
  image_url text not null,
  slug text unique not null,
  category text not null check (category in ('amenity', 'experience', 'perk', 'service')),
  created_at timestamp default now(),
  updated_at timestamp default now()
);
```

### 3. Internacionalización (i18n)
- Traducir categorías
- Soportar contenido en ES/EN
- Usar archivos de traducción

### 4. CMS
Integrar con Supabase o CMS headless para:
- Gestión de contenido
- Carga de imágenes
- Orden personalizado
- Featured experiences

### 5. Contenido Expandido
Para páginas individuales agregar:
- Galería de imágenes (lightbox)
- Video tours
- Horarios detallados
- Precios (si aplica)
- Formulario de reservación
- Testimonios
- FAQ section

## 🎭 Animaciones

### Carrusel
```typescript
// Scroll suave con JavaScript
container.scrollTo({
  left: newScrollLeft,
  behavior: 'smooth',
});
```

### Tarjetas
```typescript
// Framer Motion
variants={fadeInUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
```

### Hover Effects
- Imagen: `scale-105` (700ms)
- Overlay: `opacity-95` (500ms)
- Arrow: `translate-x-1` (300ms)
- Corner accent: `opacity-100` (500ms)

## 📱 Responsive

### Mobile (< 768px)
- Scroll horizontal con swipe
- Tarjetas 85vw de ancho
- Indicador "Desliza para ver más"
- Sin botones de navegación
- Padding reducido

### Tablet (768px - 1024px)
- Tarjetas 45vw de ancho
- Botones de navegación visibles
- 2 tarjetas visibles por pantalla

### Desktop (> 1024px)
- Tarjetas 30vw o 25vw
- 3-4 tarjetas visibles
- Hover effects completos
- Navegación por botones

## 🎨 Estilos Clave

### Tarjeta Base
```css
aspect-ratio: 1 / 1;
position: relative;
overflow: hidden;
background: navy;
```

### Overlay Gradient
```css
background: linear-gradient(
  to top,
  rgba(12, 25, 69, 0.9) 0%,
  rgba(12, 25, 69, 0.4) 50%,
  transparent 100%
);
```

### Scrollbar Oculto
```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
scrollbar-width: none;
-ms-overflow-style: none;
```

## ✅ Checklist de Implementación

- [x] Estructura de componentes
- [x] ExperienceCard con hover effects
- [x] ExperiencesCarousel con navegación
- [x] Datos de ejemplo (10 experiencias)
- [x] Página índice de experiencias
- [x] Páginas dinámicas individuales
- [x] Integración en home page
- [x] Diseño responsive
- [x] Animaciones Framer Motion
- [ ] Imágenes reales del proyecto
- [ ] Integración con Supabase
- [ ] i18n (traducciones)
- [ ] CMS para gestión de contenido
- [ ] Galería de imágenes en páginas individuales
- [ ] Video tours
- [ ] Sistema de favoritos
- [ ] Filtros por categoría

## 🚀 Uso

### En la página principal:
```typescript
import { ExperiencesCarousel } from '@/app/components/experiences';
import { experiences } from '@/data/experiences';

<ExperiencesCarousel experiences={experiences} />
```

### Agregar nueva experiencia:
```typescript
// En data/experiences.ts
{
  id: '11',
  title: 'Nueva Experiencia',
  subtitle: 'Descripción corta',
  description: 'Descripción larga detallada...',
  imageUrl: 'https://...',
  slug: 'nueva-experiencia',
  category: 'amenity',
}
```

### Helper functions:
```typescript
import { getExperiencesByCategory, getExperienceBySlug } from '@/data/experiences';

// Obtener por categoría
const amenities = getExperiencesByCategory('amenity');

// Obtener por slug
const experience = getExperienceBySlug('beach-club-privado');
```

## 📞 URLs de Navegación

- **Home carousel**: `/` (scroll a la sección)
- **Todas las experiencias**: `/experiences`
- **Individual**: `/experiences/beach-club-privado`
- **Categoría específica**: Implementar filtro en `/experiences`

## 🎯 Mejoras Futuras

1. **Búsqueda y Filtros**
   - Por categoría
   - Por palabras clave
   - Favoritos

2. **Interactividad**
   - Sistema de likes
   - Compartir en redes
   - Calendario de disponibilidad

3. **Multimedia**
   - Video backgrounds
   - 360° tours
   - Galería expandida

4. **Personalización**
   - Recomendaciones basadas en intereses
   - Tours guiados virtuales
   - Itinerarios personalizados

5. **Integración**
   - Sistema de reservaciones
   - Calendario de eventos
   - Notificaciones
