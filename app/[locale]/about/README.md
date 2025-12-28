# About Page - Atlan Reserve

## Descripción
Página completa "About" (Acerca de) para Atlan Reserve con diseño minimalista y elegante que sigue la línea visual del sitio web.

## Estructura de Componentes

La página está dividida en 9 secciones principales:

### 1. HeroSection
- Hero principal con fondo navy
- Título "The Art of Nature Perfected by Design"
- Descripción general de Atlan Reserve (3,000 hectáreas)

### 2. VisionSection
- Layout de dos columnas
- Quote destacado sobre "vision questers"
- "Custodians of the Rare" - explicación de la misión
- Fondo pearl

### 3. LocationSection
- Información sobre Eagle Mountain y Costalegre
- Grid de conectividad (Air & Earth)
- Tiempos de viaje desde diferentes puntos
- Fondo blanco

### 4. AmenitiesSection
- Lista completa de 19 amenidades
- Grid responsive (1/2/3 columnas)
- Fondo navy con texto blanco
- Efectos hover en cada amenidad

### 5. MuseumSection
- Layout de dos columnas
- A'AM Museum (arte pre-hispánico y contemporáneo)
- Pauls Restaurant (alta cocina)
- Fondo pearl

### 6. WellnessSection
- "Body Mind Soul"
- 3 características principales:
  - Atl Longevity Spa
  - Knowledge Archive & Learning Center
  - Sports Center
- Grid de 3 columnas con íconos
- Fondo blanco

### 7. PlaygroundsSection
- "Elemental Playgrounds"
- 3 tipos de actividades:
  - Water Playground (actividades acuáticas)
  - Mountain Playground (hiking, biking, horseback)
  - Air Playground (hidroplano, parapente)
- Cada uno con gradiente de color único
- Fondo pearl

### 8. PrinciplesSection
- "Principles & Commitment"
- 3 principios fundamentales:
  - Guiding Principles
  - Investing Commitment
  - Environmental Stewards
- Grid de 3 columnas
- Fondo navy con bordes sutiles

### 9. TeamSection
- "Development Team"
- 2 desarrolladores principales (M2 Equity Holdings, M Fundatio)
- 7 arquitectos y diseñadores con links a sus sitios web
- Grid responsive
- Fondo pearl

## Características de Diseño

### Colores
- **Navy** (`#0C1945`): Secciones principales con impacto
- **Pearl** (`#F5F6F8`): Secciones alternas, fondo suave
- **White** (`#FFFFFF`): Secciones limpias
- **Champagne** (`#BFA27A`): Acentos, líneas divisoras, highlights
- **Slate** (`#8998B6`): Texto secundario

### Tipografía
- **Font Serif (Cormorant)**: Títulos principales
- **Font Sans (Inter)**: Texto de cuerpo
- **Font Light**: Peso predominante para elegancia

### Animaciones
- **Framer Motion**: Todas las secciones usan `fadeInUp`
- **staggerContainer**: Para grids y listas
- **viewport={{ once: true }}**: Animaciones se ejecutan una sola vez
- Transiciones suaves con easing personalizado

### Layout
- **container-luxury**: Contenedor máximo 1400px con padding responsive
- **Grid responsive**: 1/2/3 columnas según viewport
- **Spacing consistente**: py-24 md:py-32 para secciones

## Archivos Creados

```
app/[locale]/about/
├── page.tsx                          # Página principal
└── components/
    ├── index.ts                      # Barrel export
    ├── HeroSection.tsx
    ├── VisionSection.tsx
    ├── LocationSection.tsx
    ├── AmenitiesSection.tsx
    ├── MuseumSection.tsx
    ├── WellnessSection.tsx
    ├── PlaygroundsSection.tsx
    ├── PrinciplesSection.tsx
    └── TeamSection.tsx
```

## Navegación

El header ya incluye el link "Acerca de" que apunta a `/about`.

## Próximos Pasos Sugeridos

1. **Imágenes**: Agregar imágenes reales de las secciones
2. **i18n**: Traducir todo el contenido a español e inglés
3. **SEO**: Agregar metadata y Open Graph tags
4. **Optimización**: Lazy loading de imágenes
5. **Interactividad**: Agregar lightbox para galería de imágenes del museo

## Notas Técnicas

- Todos los componentes son "use client" para animaciones
- TypeScript estricto sin `any`
- Responsive design mobile-first
- Accesibilidad con aria-labels donde sea necesario
- Performance optimizado con `viewport={{ once: true }}`
