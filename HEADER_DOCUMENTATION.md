# 🎯 Header Component - Atlan Reserve

## ✨ Características

- **Logo animado**: Intercambia entre logo completo y pequeño al hacer scroll
- **Sticky header**: Siempre visible en la parte superior
- **Backdrop blur**: Fondo con efecto glassmorphism cuando hay scroll
- **Animaciones suaves**: Slide up/down al cambiar logos
- **Responsive**: Menú hamburguesa en mobile
- **Estado dinámico**: Cambia de colores según scroll (transparente → blanco)

---

## 🎬 Comportamiento de Scroll

### Scroll hacia abajo (> 100px)
```
Logo Full → slide up (sale hacia arriba)
Logo Small → slide down (entra desde arriba)
Background: transparent → white/80 + blur
Text: white → black
```

### Scroll hacia arriba (< 100px)
```
Logo Small → slide down (sale hacia abajo)
Logo Full → slide up (entra desde abajo)
Background: white/80 + blur → transparent
Text: black → white
```

---

## 🎨 Estados del Header

### Estado inicial (scroll = 0)
- Logo: **Full Logo** (200px ancho)
- Background: **Transparente**
- Text color: **Blanco**
- Shadow: **Ninguno**

### Estado scrolled (scroll > 100px)
- Logo: **Small Logo** (48px)
- Background: **Blanco 80% + backdrop blur**
- Text color: **Negro**
- Shadow: **Sutil sombra**

---

## 📐 Estructura del Header

```tsx
<Header>
  ├── Logo (animado)
  ├── Navigation (desktop)
  │   ├── Experiencias
  │   ├── Propiedades
  │   ├── Acerca de
  │   └── Contacto
  └── CTA + Menu
      ├── Botón "Reservar" (desktop)
      └── Hamburger Menu (mobile)
</Header>
```

---

## 🔧 Configuración

### URLs de los logos
```typescript
const FULL_LOGO_URL = 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Logos/full-logo-atlan-reserve.png';
const SMALL_LOGO_URL = 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Logos/small-logo-atlan-reserve.png';
```

### Threshold de scroll
```typescript
const threshold = 100; // Pixels para activar el cambio
```

Ajusta este valor para cambiar cuando se activa la transición.

---

## 🎯 Navegación

### Links actuales:
- `/experiences` - Experiencias
- `/properties` - Propiedades
- `/about` - Acerca de
- `/contact` - Contacto
- `/reservations` - CTA principal

### Agregar nuevos links:

```tsx
<nav className="hidden md:flex items-center gap-8">
  <NavLink href="/experiences">Experiencias</NavLink>
  <NavLink href="/nuevo-link">Nuevo Link</NavLink>
</nav>
```

---

## 📱 Responsive

### Desktop (> 768px)
- Logo full: 64px altura
- Logo small: 48px altura
- Navegación completa visible
- Botón CTA visible

### Mobile (< 768px)
- Logo full: 48px altura
- Logo small: 40px altura
- Menú hamburguesa
- Navegación oculta (por implementar)

---

## 🎨 Animaciones

### Logo Slide Variants
```typescript
slideVariants = {
  enter: (direction) => ({
    y: direction > 0 ? 20 : -20,  // Entra desde arriba o abajo
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction > 0 ? -20 : 20,  // Sale hacia arriba o abajo
    opacity: 0,
  }),
}
```

### Header Entrance
```typescript
initial={{ y: -100 }}      // Fuera de pantalla arriba
animate={{ y: 0 }}          // Desliza hacia posición
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
```

### Nav Link Underline
```css
hover:w-full    /* Línea se expande de izquierda a derecha */
duration-300    /* Transición suave */
```

---

## 🎨 Estilos de Backdrop Blur

```css
/* Estado scrolled */
bg-white/80         /* Fondo blanco 80% opacidad */
backdrop-blur-lg    /* Blur intenso */
shadow-sm          /* Sombra sutil */
```

### Efecto Glassmorphism
- Fondo semi-transparente
- Blur del contenido detrás
- Borde sutil (opcional)

---

## ⚙️ Customización

### Cambiar colores del header

```tsx
// Estado no scrolled (transparente)
className="text-white border-white"

// Estado scrolled (blanco)
className="text-black border-black bg-white/80"
```

### Ajustar altura del header

```tsx
className="py-4 md:py-6"  // Padding vertical
```

### Cambiar threshold de scroll

```typescript
const threshold = 150; // Cambia de 100 a 150px
```

---

## 🚀 Próximos pasos

### Mobile Menu
- [ ] Crear componente MobileMenu
- [ ] Animación slide desde derecha
- [ ] Backdrop oscuro
- [ ] Links de navegación
- [ ] Botón cerrar

### Language Switcher
- [ ] Integrar con i18n
- [ ] Dropdown de idiomas
- [ ] Flags o texto

### Animaciones adicionales
- [ ] Scroll progress bar
- [ ] Hover effects en logo
- [ ] Transiciones de página

---

## 🐛 Troubleshooting

### Los logos no cargan
```
Verifica:
1. URLs de S3 accesibles
2. CORS configurado en S3
3. Next.js Image optimization habilitado
```

### El header no se hace sticky
```
Verifica:
1. Clase "fixed" en el header
2. z-index suficientemente alto (z-50)
3. No hay overflow hidden en parent
```

### Las animaciones se ven cortadas
```
Verifica:
1. overflow-hidden en el contenedor del logo
2. AnimatePresence con mode="wait"
3. Transiciones con ease suave
```

---

## 📚 Recursos

- Logos: S3 Bucket (nexostone-media)
- Framer Motion: Animaciones
- Next.js Image: Optimización de imágenes
- Tailwind: Estilos

---

**Última actualización**: 28 Diciembre 2024
