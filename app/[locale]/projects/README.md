# Projects Section - Atlan Reserve

## Descripción
Sección completa de proyectos/desarrollos para Atlan Reserve con diseño de tarjetas rectangulares, filtros y páginas de detalle individuales.

## Estructura

### Página Principal de Proyectos (`/projects`)
- **ProjectsHero**: Hero con título "Curated Residences"
- **ProjectsFilter**: Filtros por estado (All, Available, Coming Soon)
- **ProjectsGrid**: Grid de tarjetas de proyectos
- **ProjectsCTA**: Call to action final

### Página de Detalle (`/projects/[id]`)
- **ProjectDetailHero**: Hero fullscreen con imagen del proyecto
- **ProjectOverview**: Descripción y especificaciones
- **ProjectFeatures**: Lista de amenidades exclusivas
- **ProjectInquiry**: Formulario de contacto específico

## Proyectos Incluidos

### 1. Pa'Lo Alto (Featured)
- **Precio**: From $8M USD
- **Bedrooms**: 4-12
- **Status**: Available
- **Destacado**: Proyecto principal del master plan

### 2. Lake Estates
- **Precio**: From $8M USD
- **Bedrooms**: 4-6
- **Status**: Available
- Residencias frente al lago

### 3. Sky Ranch
- **Precio**: $28M USD
- **Bedrooms**: 6
- **Status**: Available
- Vistas panorámicas de montaña

### 4. River Estates
- **Precio**: From $8M USD
- **Bedrooms**: 4-6
- **Status**: Available
- Ubicación junto al río

### 5. Haciendas
- **Precio**: From $40M USD
- **Bedrooms**: 8-12
- **Status**: Available
- Propiedades de gran escala

### 6. Lake Ranch
- **Precio**: Price Upon Request
- **Bedrooms**: 8-12
- **Status**: Coming Soon
- Compound ultra-exclusivo

## Componentes Principales

### ProjectCard
Tarjeta rectangular con:
- Imagen con hover effect (scale 1.05)
- Status badge (Available, Coming Soon, Sold Out)
- Featured badge (para Pa'Lo Alto)
- Título y subtítulo
- Descripción con line-clamp-3
- Grid de especificaciones (3 columnas)
- Precio y flecha animada
- Border hover (ash → champagne)
- Aspect ratio 16:10

### ProjectsFilter
- Filtros horizontales centrados
- Estados: All, Available, Coming Soon
- Estilo activo: bg-navy con texto blanco
- Estilo inactivo: border con hover

### ProjectsGrid
- Proyecto destacado: Full width al inicio
- Otros proyectos: Grid 2 columnas (lg)
- Separador con título "Available Residences"
- Stagger animations

## Características de Diseño

### Colores de Status
```typescript
available: 'bg-green-600'      // Verde para disponibles
coming-soon: 'bg-champagne'    // Champagne para próximos
sold-out: 'bg-slate'          // Gris para vendidos
```

### Animaciones
- **fadeInUp**: Entrada de tarjetas
- **staggerContainer**: Grid animado
- **Hover effects**: 
  - Image scale: 1.05
  - Border color: ash → champagne
  - Arrow translate: +4px

### Layout Responsivo
- **Mobile**: 1 columna
- **Tablet (md)**: 2 columnas
- **Desktop (lg)**: 2 columnas (para mantener tarjetas grandes)

## Rutas

```
/projects                    → Lista de todos los proyectos
/projects/palo-alto         → Detalle de Pa'Lo Alto
/projects/lake-estates      → Detalle de Lake Estates
/projects/sky-ranch         → Detalle de Sky Ranch
/projects/river-estates     → Detalle de River Estates
/projects/haciendas         → Detalle de Haciendas
/projects/lake-ranch        → Detalle de Lake Ranch
```

## Archivos Creados

```
data/
└── projects.ts                    # Datos de proyectos

app/[locale]/projects/
├── page.tsx                       # Página principal con filtros
├── components/
│   ├── index.ts
│   ├── ProjectCard.tsx           # Tarjeta de proyecto
│   ├── ProjectsHero.tsx          # Hero de proyectos
│   ├── ProjectsGrid.tsx          # Grid con featured
│   ├── ProjectsFilter.tsx        # Filtros de estado
│   └── ProjectsCTA.tsx           # CTA final
└── [id]/
    ├── page.tsx                  # Página de detalle
    └── components/
        ├── index.ts
        ├── ProjectDetailHero.tsx # Hero fullscreen
        ├── ProjectOverview.tsx   # Descripción + specs
        ├── ProjectFeatures.tsx   # Amenidades
        └── ProjectInquiry.tsx    # Contacto

```

## Funcionalidades

### Filtrado Dinámico
```typescript
const [activeFilter, setActiveFilter] = useState('all');
const filteredProjects = activeFilter === 'all' 
  ? projects 
  : projects.filter(p => p.status === activeFilter);
```

### SEO y Performance
- **generateMetadata**: Metadata dinámica por proyecto
- **generateStaticParams**: Pre-renderizado de rutas
- **notFound()**: 404 para proyectos inexistentes
- **Image optimization**: Next.js Image component
- **Lazy loading**: viewport={{ once: true }}

## Próximos Pasos Sugeridos

1. **Galería de Imágenes**: Agregar múltiples imágenes por proyecto
2. **Floor Plans**: Sección con planos arquitectónicos
3. **Virtual Tour**: Integración de tours 360°
4. **Comparador**: Comparar múltiples proyectos
5. **Availability Calendar**: Calendario de disponibilidad
6. **PDF Download**: Brochure descargable
7. **Social Share**: Compartir proyectos en redes
8. **Favoritos**: Sistema de wishlist

## Notas Técnicas

- TypeScript estricto sin `any`
- Interface `Project` bien definida
- Responsive design mobile-first
- Animaciones con Framer Motion
- Client components para interactividad
- Server components para páginas de detalle
- Optimización de imágenes con Next.js Image
