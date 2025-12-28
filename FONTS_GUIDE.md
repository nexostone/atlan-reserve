# 🔤 Guía de Fuentes - Atlan Reserve

## 📚 Fuentes Configuradas

Tienes 3 fuentes disponibles en el proyecto:

1. **Cormorant** - Serif elegante (para títulos)
2. **Inter** - Sans-serif moderna (para textos generales)
3. **Manrope** - Sans-serif redondeada (opcional)

---

## 🎯 Cómo Usar las Fuentes

### Método 1: Clases de Tailwind (Recomendado)

```tsx
// Cormorant (serif elegante - para títulos)
<h1 className="font-cormorant text-6xl">
  Título Elegante
</h1>

// Inter (sans-serif - texto general)
<p className="font-inter text-base">
  Texto de párrafo
</p>

// Manrope (sans-serif alternativa)
<p className="font-manrope text-base">
  Texto alternativo
</p>

// También puedes usar font-serif (apunta a Cormorant)
<h1 className="font-serif text-6xl">
  Título Elegante
</h1>

// O font-sans (apunta a Inter)
<p className="font-sans text-base">
  Texto general
</p>
```

---

## 📖 Uso Recomendado por Elemento

### Títulos Principales (H1, H2)
```tsx
<h1 className="font-cormorant text-7xl font-light">
  Palo Alto
</h1>

<h2 className="font-cormorant text-5xl font-normal">
  Experiencias Exclusivas
</h2>
```

### Subtítulos (H3, H4)
```tsx
<h3 className="font-cormorant text-3xl font-light">
  Subtítulo Elegante
</h3>

// O usa Inter para subtítulos más modernos
<h4 className="font-inter text-2xl font-medium">
  Subtítulo Moderno
</h4>
```

### Párrafos y Texto General
```tsx
<p className="font-inter text-base font-light">
  Texto de párrafo con Inter
</p>

<span className="font-inter text-sm">
  Texto pequeño
</span>
```

### Navegación
```tsx
<nav className="font-inter text-sm font-light tracking-wide">
  <a href="/">Inicio</a>
</nav>
```

### Botones
```tsx
<button className="font-inter text-base font-light tracking-wide">
  Reservar Ahora
</button>
```

---

## 🎨 Pesos de Fuente Disponibles

Todas las fuentes tienen los siguientes pesos:

```css
300 - Light (font-light)
400 - Regular (font-normal)
500 - Medium (font-medium)
600 - Semibold (font-semibold)
700 - Bold (font-bold)
```

### Ejemplos:

```tsx
// Cormorant Light (recomendado para títulos)
<h1 className="font-cormorant font-light">Elegante</h1>

// Cormorant Normal
<h2 className="font-cormorant font-normal">Título</h2>

// Inter Light (recomendado para cuerpo)
<p className="font-inter font-light">Texto</p>

// Inter Medium (para énfasis)
<strong className="font-inter font-medium">Importante</strong>
```

---

## 🏗️ Configuración Técnica

### En `globals.css`:

```css
/* Variables de fuentes */
--font-family-sans: var(--font-inter), system-ui, sans-serif;
--font-family-serif: var(--font-cormorant), Georgia, serif;
--font-family-manrope: var(--font-manrope), system-ui, sans-serif;

/* Clases personalizadas */
.font-cormorant {
  font-family: var(--font-cormorant), Georgia, serif;
}

.font-inter {
  font-family: var(--font-inter), system-ui, sans-serif;
}

.font-manrope {
  font-family: var(--font-manrope), system-ui, sans-serif;
}
```

### En `layout.tsx`:

```tsx
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
```

---

## 🎯 Estilo de Diseño Recomendado

### Para sitio de lujo minimalista:

```tsx
// Títulos grandes - Cormorant Light
<h1 className="font-cormorant text-8xl font-light tracking-wide">
  Atlan Reserve
</h1>

// Subtítulos - Cormorant Light o Normal
<h2 className="font-cormorant text-4xl font-light">
  Where Nature Meets Luxury
</h2>

// Texto general - Inter Light
<p className="font-inter text-lg font-light leading-relaxed">
  Experience unparalleled luxury...
</p>

// Navegación - Inter Light con tracking
<nav className="font-inter text-sm font-light tracking-wider uppercase">
  <a>Experiencias</a>
</nav>

// Botones - Inter Light
<button className="font-inter text-base font-light tracking-wide">
  Explorar
</button>
```

---

## 📱 Responsive Font Sizes

### Títulos Responsive:

```tsx
// H1 - Hero Title
<h1 className="font-cormorant 
  text-5xl md:text-7xl lg:text-8xl 
  font-light">
  Título
</h1>

// H2 - Section Title
<h2 className="font-cormorant 
  text-3xl md:text-5xl lg:text-6xl 
  font-light">
  Sección
</h2>

// Paragraph
<p className="font-inter 
  text-base md:text-lg lg:text-xl 
  font-light">
  Texto
</p>
```

---

## ✨ Combinaciones Recomendadas

### Combo 1: Elegancia Clásica
```tsx
<h1 className="font-cormorant text-7xl font-light">Título</h1>
<p className="font-inter text-lg font-light">Párrafo</p>
```

### Combo 2: Moderno Minimalista
```tsx
<h1 className="font-inter text-6xl font-light">Título</h1>
<p className="font-inter text-base font-light">Párrafo</p>
```

### Combo 3: Contraste Fuerte
```tsx
<h1 className="font-cormorant text-8xl font-bold">Título</h1>
<p className="font-inter text-sm font-light">Párrafo</p>
```

---

## 🚫 Errores Comunes

### ❌ Incorrecto:
```tsx
// No usar font-serif genérico si quieres Cormorant específicamente
<h1 className="font-serif">Título</h1>

// No mezclar demasiadas fuentes
<div>
  <h1 className="font-cormorant">Título</h1>
  <h2 className="font-manrope">Subtítulo</h2>
  <p className="font-inter">Texto</p>
</div>
```

### ✅ Correcto:
```tsx
// Usar font-cormorant explícitamente
<h1 className="font-cormorant">Título</h1>

// Consistencia: Cormorant para títulos, Inter para texto
<div>
  <h1 className="font-cormorant">Título</h1>
  <h2 className="font-cormorant">Subtítulo</h2>
  <p className="font-inter">Texto</p>
</div>
```

---

## 🎨 Tracking (Letter Spacing)

Para un look más elegante:

```tsx
// Tracking amplio para títulos
<h1 className="font-cormorant tracking-wide">
  Espaciado Normal
</h1>

<h1 className="font-cormorant tracking-wider">
  Espaciado Amplio
</h1>

<h1 className="font-cormorant tracking-widest">
  Espaciado Extra Amplio
</h1>

// Para navegación
<nav className="font-inter text-xs tracking-widest uppercase">
  MENÚ
</nav>
```

---

## 📝 Cheat Sheet Rápido

```tsx
// TÍTULOS PRINCIPALES
font-cormorant text-8xl font-light tracking-wide

// SUBTÍTULOS
font-cormorant text-4xl font-light

// NAVEGACIÓN
font-inter text-sm font-light tracking-wide

// PÁRRAFOS
font-inter text-base font-light leading-relaxed

// BOTONES
font-inter text-base font-light tracking-wide

// LABELS
font-inter text-xs font-medium tracking-widest uppercase
```

---

**Última actualización**: 28 Diciembre 2024
