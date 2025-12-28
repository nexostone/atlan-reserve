# 🖼️ Guía de Imágenes para Experiencias

## 📐 Especificaciones Técnicas

### Dimensiones Recomendadas
- **Mínimo**: 800x800px (1:1 ratio)
- **Recomendado**: 1200x1200px
- **Óptimo**: 1600x1600px

### Formato
- **Formato**: JPG o WebP
- **Calidad**: 80-85%
- **Peso máximo**: 300KB por imagen
- **Optimización**: Usar herramientas como TinyPNG o ImageOptim

### Aspect Ratio
- **Ratio**: 1:1 (Cuadrado)
- Las tarjetas son cuadradas, así que las imágenes deben ser cuadradas
- Si tienes imágenes rectangulares, se recortarán al centro

## 📂 Ubicación en S3

Sugiero organizar las imágenes así en tu bucket S3:

```
nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/
├── Images/
│   └── experiences/
│       ├── beach-club-privado.jpg
│       ├── spa-wellness.jpg
│       ├── golf-championship.jpg
│       ├── gastronomia-gourmet.jpg
│       ├── expediciones-marinas.jpg
│       ├── concierge-247.jpg
│       ├── fitness-center.jpg
│       ├── kids-club.jpg
│       ├── wine-cellar.jpg
│       └── seguridad-premium.jpg
```

## ✏️ Cómo Actualizar las URLs

Edita el archivo `data/experiences.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Beach Club Privado',
    subtitle: 'Acceso exclusivo a la playa',
    description: '...',
    // Cambiar esta línea:
    imageUrl: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/experiences/beach-club-privado.jpg',
    slug: 'beach-club-privado',
    category: 'amenity',
  },
  // ... repetir para todas las experiencias
];
```

## 🎨 Recomendaciones Fotográficas

### Para Mejores Resultados:

1. **Iluminación Natural**: Fotos con luz del día
2. **Composición**: Punto focal claro en el centro
3. **Perspectiva**: Ángulos amplios que muestren el espacio
4. **Personas**: Opcional, pero agrega vida (evitar multitudes)
5. **Colores**: Colores vibrantes pero naturales
6. **Calidad**: Alta resolución, bien enfocadas

### Ejemplos por Categoría:

**Amenidades** (Beach Club, Spa, Gym):
- Fotos amplias del espacio
- Mostrar instalaciones y equipamiento
- Ambiente limpio y ordenado

**Experiencias** (Golf, Expediciones):
- Acción y movimiento
- Paisajes espectaculares
- Personas disfrutando la actividad

**Beneficios** (Wine Cellar, Concierge):
- Detalles premium
- Atmósfera sofisticada
- Close-ups de calidad

**Servicios** (Seguridad, Kids Club):
- Profesionalismo
- Instalaciones modernas
- Ambiente acogedor

## 🛠️ Herramientas de Optimización

### Online:
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimizador de imágenes
- [ImageOptim](https://imageoptim.com/) - Mac app

### Command Line:
```bash
# Convertir a WebP (mejor compresión)
cwebp input.jpg -q 85 -o output.webp

# Redimensionar a 1200x1200
convert input.jpg -resize 1200x1200^ -gravity center -extent 1200x1200 output.jpg
```

## 📊 Checklist de Imágenes

Por cada experiencia necesitas:

- [ ] Beach Club Privado
- [ ] Spa & Wellness
- [ ] Golf Championship
- [ ] Gastronomía Gourmet
- [ ] Expediciones Marinas
- [ ] Concierge 24/7
- [ ] Fitness Center
- [ ] Kids Club
- [ ] Wine Cellar
- [ ] Seguridad Premium

## 🎯 Optimización Avanzada (Opcional)

### Next.js Image Optimization
Las imágenes se optimizan automáticamente con Next.js Image component:
- Lazy loading
- Responsive images
- WebP automático (si el navegador lo soporta)
- Blur placeholder

### Configurar dominios externos en next.config.ts:
```typescript
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexostone-media.s3.us-east-2.amazonaws.com',
      },
    ],
  },
};
```

## 📱 Testing

Después de actualizar las imágenes, verifica:

1. ✅ Se cargan correctamente en todas las tarjetas
2. ✅ Buen aspecto en mobile y desktop
3. ✅ Tiempo de carga aceptable (< 2s)
4. ✅ No hay errores 404 en consola
5. ✅ Hover effects funcionan correctamente

## 🚀 Deploy

Después de actualizar las URLs:

```bash
# Verificar que no haya errores de TypeScript
npm run build

# Deploy a Vercel
git add .
git commit -m "Update experience images with real assets"
git push
```

## 💡 Tips Pro

1. **Nombres consistentes**: Usa el mismo patrón para todos los archivos
2. **Versioning**: Si actualizas una imagen, cambia el nombre (ej: `-v2.jpg`)
3. **Backup**: Guarda las originales antes de optimizar
4. **CDN**: S3 + CloudFront para mejor rendimiento
5. **Alt text**: Actualiza los alt attributes para SEO

## 🎨 Mockup Rápido

Si no tienes fotos profesionales aún, puedes usar:
- Stock photos de alta calidad (Unsplash, Pexels)
- Renders 3D del proyecto
- Fotos de propiedades similares de Punta Mita
- Imágenes de placeholder temporales

Las URLs actuales de Unsplash funcionan bien como placeholder hasta que tengas las fotos reales.
