# 🎯 Sección de Experiencias - Quick Start

## ✨ ¿Qué se creó?

Un carrusel horizontal de experiencias con tarjetas cuadradas que muestran las amenidades, servicios y perks del desarrollo. Cada tarjeta lleva a su página descriptiva individual.

## 📁 Archivos Creados

```
app/components/experiences/
├── ExperienceCard.tsx          ← Tarjeta individual cuadrada
├── ExperiencesCarousel.tsx     ← Carrusel horizontal
└── index.ts

app/[locale]/experiences/
├── page.tsx                    ← Página con todas las experiencias
└── [slug]/page.tsx             ← Página individual de cada experiencia

data/
└── experiences.ts              ← Datos (10 experiencias de ejemplo)

docs/
└── EXPERIENCES_SECTION_GUIDE.md ← Documentación completa
```

## 🚀 Cómo Ver

1. **En el Home**: El carrusel ya está integrado después de "Welcome to Paradise"
2. **Todas las experiencias**: Ve a `/experiences`
3. **Experiencia individual**: Click en cualquier tarjeta o ve a `/experiences/beach-club-privado`

## 🎨 Diseño

- ✅ Tarjetas cuadradas con imagen de fondo
- ✅ Overlay gradient navy elegante
- ✅ Hover effects sutiles (scale 1.05 en imagen)
- ✅ Categorías: Amenidad, Experiencia, Beneficio, Servicio
- ✅ Navegación con botones (desktop) y swipe (mobile)
- ✅ Totalmente responsive
- ✅ Animaciones con Framer Motion

## 📝 Experiencias Incluidas (Ejemplo)

1. Beach Club Privado
2. Spa & Wellness
3. Golf Championship
4. Gastronomía Gourmet
5. Expediciones Marinas
6. Concierge 24/7
7. Fitness Center
8. Kids Club
9. Wine Cellar
10. Seguridad Premium

## 🔧 Próximos Pasos

### 1. Reemplazar Imágenes
Edita `data/experiences.ts` y cambia las URLs de Unsplash por tus imágenes reales:

```typescript
imageUrl: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/beach-club.jpg'
```

### 2. Agregar Más Experiencias
En `data/experiences.ts`:

```typescript
export const experiences: Experience[] = [
  // ... experiencias existentes
  {
    id: '11',
    title: 'Tu Nueva Experiencia',
    subtitle: 'Descripción corta',
    description: 'Descripción detallada...',
    imageUrl: 'https://...',
    slug: 'tu-nueva-experiencia',
    category: 'amenity', // o 'experience', 'perk', 'service'
  },
];
```

### 3. Conectar con Supabase (Opcional)
Para gestión dinámica, migra los datos a Supabase:

```sql
create table experiences (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subtitle text not null,
  description text not null,
  image_url text not null,
  slug text unique not null,
  category text not null,
  created_at timestamp default now()
);
```

### 4. Agregar i18n
Los textos están en español. Para soporte multiidioma, agregar traducciones.

## 🎯 Características Clave

✨ **Carrusel Suave**: Scroll horizontal con animación smooth
✨ **Tarjetas Interactivas**: Hover effects elegantes
✨ **Páginas Dinámicas**: Cada experiencia tiene su propia página
✨ **Navegación Inteligente**: Botones disabled cuando no hay más scroll
✨ **Mobile First**: Swipe en mobile, botones en desktop
✨ **Performance**: Code splitting y lazy loading
✨ **SEO Ready**: Static generation con generateStaticParams

## 📱 Responsive

- **Mobile**: Tarjetas 85vw, swipe horizontal
- **Tablet**: Tarjetas 45vw, 2 visibles
- **Desktop**: Tarjetas 25-30vw, 3-4 visibles

## 🎨 Customización Rápida

### Cambiar colores del overlay:
`ExperienceCard.tsx` línea 35-36

### Ajustar tamaños de tarjeta:
`ExperiencesCarousel.tsx` línea 109-114

### Modificar animaciones:
Usa las variants de `@/lib/animations/variants`

## ❓ Troubleshooting

**Las imágenes no cargan**: Verifica que las URLs sean accesibles
**El carrusel no hace scroll**: Verifica que haya suficientes experiencias
**Error en página individual**: Verifica que el slug exista en los datos

## 📚 Documentación Completa

Ver `EXPERIENCES_SECTION_GUIDE.md` para:
- Estructura detallada de componentes
- Modelo de datos completo
- Integraciones pendientes
- Mejoras futuras
- Guía de estilos

## 🎉 ¡Listo para Usar!

La sección está completamente funcional y lista para producción. Solo necesitas reemplazar las imágenes de ejemplo con las reales del proyecto.
