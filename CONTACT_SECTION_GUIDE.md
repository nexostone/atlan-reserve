# Sección de Contacto - Atlan Reserve

## 📋 Descripción General

La sección de contacto de Atlan Reserve sigue el diseño minimalista, limpio y moderno del sitio web, con énfasis en la elegancia y la experiencia de usuario premium.

## 🎨 Características de Diseño

### Paleta de Colores
- **Navy** (#0C1945) - Color principal para texto y elementos destacados
- **Pearl** (#F5F6F8) - Fondo suave y elegante
- **Champagne** (#BFA27A) - Acentos y detalles de lujo
- **Slate** (#8998B6) - Texto secundario
- **Ash** (#E1E4EA) - Bordes y divisores sutiles
- **White** (#FFFFFF) - Contraste y áreas de formulario

### Tipografía
- **Cormorant** (serif) - Títulos y headings
- **Inter** (sans-serif) - Texto del cuerpo y formularios
- Font weights: Light (300) y Regular (400)
- Tracking amplio para elegancia

### Layout
- Diseño de dos columnas en desktop (información + formulario)
- Responsive: columna única en mobile
- Espaciado generoso (py-20 md:py-32)
- Container personalizado con max-width de 1400px

## 📁 Estructura de Componentes

```
app/components/contact/
├── index.ts                 # Exportaciones centralizadas
├── ContactSection.tsx       # Componente principal de la sección
├── ContactForm.tsx          # Formulario de contacto
└── ContactInfo.tsx          # Información de contacto
```

## 🧩 Componentes

### 1. ContactSection
Componente principal que orquesta toda la sección de contacto.

**Props:** Ninguna (standalone component)

**Características:**
- Header con título y línea decorativa champagne
- Grid de dos columnas (lg:grid-cols-2)
- Animaciones con Framer Motion
- Fondo pearl (#F5F6F8)

### 2. ContactForm
Formulario completo con validación y manejo de estados.

**Campos:**
- Nombre (requerido)
- Apellido (requerido)
- Email (requerido, validado)
- Teléfono (opcional)
- Interés (select con opciones)
- Mensaje (requerido)

**Estados:**
- Validación en tiempo real
- Loading state durante submit
- Success/Error messages
- Disabled state

**Validaciones:**
- Email format validation
- Required fields
- Error messages en español

**Diseño:**
- Inputs cuadrados minimalistas
- Bordes ash (#E1E4EA)
- Focus state: border navy
- Hover transitions suaves (300ms)
- Grid responsive para campos nombre/apellido y email/teléfono

### 3. ContactInfo
Panel de información con métodos de contacto y redes sociales.

**Información incluida:**
- Email (con link mailto)
- Teléfono (con link tel)
- Ubicación (Punta de Mita)
- Horario de atención

**Redes sociales:**
- Instagram
- Facebook
- LinkedIn

**Diseño:**
- Iconos SVG personalizados
- Cards con hover effects
- Animaciones secuenciales (delay: index * 0.1)
- Transiciones elegantes en hover

## 📄 Página de Contacto

Ubicación: `app/[locale]/contact/page.tsx`

**Secciones:**
1. **Hero Section**
   - Fondo navy con gradiente
   - Título "Contacto" en tipografía serif
   - Línea decorativa champagne
   - Altura: 50vh (mínimo 400px)

2. **ContactSection**
   - Formulario e información

3. **Map Section** (Placeholder)
   - Altura fija de 96 (384px)
   - Fondo ash
   - Preparado para integración con Google Maps

## 🎭 Animaciones

Todas las animaciones usan Framer Motion y siguen el patrón del sitio:

```typescript
import { fadeInUp } from '@/lib/animations/variants';

// Uso básico
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
```

**Tipos de animaciones:**
- `fadeInUp` - Aparición desde abajo
- Delays secuenciales para elementos en lista
- Hover states en botones y links
- Transiciones de 300ms para suavidad

## 🔧 Integración Pendiente

### 1. Backend API
```typescript
// TODO: Integrar con Supabase
const handleSubmit = async (e: React.FormEvent) => {
  // Actualmente usa simulación con setTimeout
  // Implementar llamada real a API
};
```

### 2. Internacionalización (i18n)
Los textos están hardcodeados en español. Necesita:
- Archivos de traducción en `messages/`
- useTranslations hook
- Soporte para EN/ES

### 3. Google Maps
Reemplazar el placeholder del mapa con:
```typescript
import { GoogleMap } from '@react-google-maps/api';
```

### 4. Validación de Servidor
Agregar validación en el backend:
- Rate limiting
- Sanitización de inputs
- CAPTCHA (opcional)

## 🎯 Uso

### En la página principal:
```typescript
import { ContactSection } from '@/app/components/contact';

export default function HomePage() {
  return (
    <main>
      {/* Otras secciones */}
      <ContactSection />
    </main>
  );
}
```

### Página dedicada:
```
/contact (español)
/en/contact (inglés)
```

## 📱 Responsive

### Mobile (< 768px)
- Columna única
- Formulario a ancho completo
- Stack vertical de información
- Padding reducido

### Tablet (768px - 1024px)
- Transición gradual
- Grid de 2 columnas en algunos campos

### Desktop (> 1024px)
- Grid completo de 2 columnas
- Espaciado máximo
- Hover effects completos

## ✅ Checklist de Implementación

- [x] Estructura de componentes
- [x] Diseño responsive
- [x] Formulario con validación
- [x] Animaciones Framer Motion
- [x] Información de contacto
- [x] Página dedicada `/contact`
- [x] Hero section
- [ ] Integración con Supabase
- [ ] i18n (traducciones)
- [ ] Google Maps
- [ ] Testing de formulario
- [ ] Analytics tracking
- [ ] CAPTCHA (si es necesario)

## 🎨 Ejemplos de Estilo

### Input Focus State
```css
border: 1px solid #E1E4EA; /* ash */
transition: all 300ms;

&:focus {
  border-color: #0C1945; /* navy */
  outline: none;
}
```

### Button Hover
```css
background: white;
color: black;
border: 1px solid white;

&:hover {
  background: transparent;
  color: white;
}
```

## 📞 Datos de Contacto

Los datos de contacto están en `ContactInfo.tsx`:
- **Email**: info@atlanreserve.com
- **Teléfono**: +52 329 XXX XXXX (actualizar)
- **Ubicación**: Punta de Mita, Nayarit, México
- **Horario**: Lun - Dom: 9:00 AM - 6:00 PM

## 🚀 Próximos Pasos

1. **Conectar con Supabase**
   - Crear tabla `contact_submissions`
   - Configurar Row Level Security
   - Implementar función serverless

2. **Agregar i18n**
   - Crear archivos en `messages/en.json` y `messages/es.json`
   - Traducir todos los textos

3. **Google Maps**
   - Obtener API key
   - Configurar mapa centrado en Punta de Mita
   - Agregar marcador personalizado

4. **Email Notifications**
   - Configurar servicio de email (SendGrid/Resend)
   - Templates HTML para confirmación
   - Auto-responder al usuario
