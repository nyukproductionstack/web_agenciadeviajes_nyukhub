# Rumbo / Viajes de Autor — Perú 🏔️✨

Sitio web oficial de **Rumbo / Viajes de Autor**, una plataforma editorial interactiva para la exploración y diseño de itinerarios *Full Day* personalizados por los principales destinos turísticos del Perú.

> 🌐 **URL de Producción en Vercel:**  
> **[https://agencia-viajes-theta.vercel.app](https://agencia-viajes-theta.vercel.app)**

---

## 🚀 Características Principales

* **Hero Inmersivo a Pantalla Completa:** Presentación limpia del concepto de marca con tipografía editorial.
* **Catálogo Interactivo de Rutas:** Fichas de destinos (*Machu Picchu, Vinicunca, Huacachina, Lago Titicaca, Cañón del Colca, Laguna Humantay, Paracas, Valle Sagrado*) con detalles de duración, dificultad, itinerario por horas e inclusión de servicios.
* **Experiencia Visual Responsiva:** Diseño adaptado para dispositivos móviles, tablets, laptops y pantallas de ultra alta resolución.
* **Efecto Scroll Overlap:** Transición visual hacia el formulario de contacto mediante solapamiento al finalizar las fichas de lugares.
* **Formulario de Contacto Directo:** Captura de requerimientos de viaje con notificaciones interactivas.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Empacketador & Tooling:** [Vite 7](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Iconografía:** [Lucide React](https://lucide.dev/)
* **Notificaciones:** [Sonner](https://sonner.emilkowal.ski/)
* **Despliegue:** [Vercel](https://vercel.com/) (Vite SPA Preset + `vercel.json`)

---

## 📁 Estructura del Proyecto

```text
agencia-viajes/
├── client/
│   ├── public/
│   │   └── imagenes/          # Galería de imágenes estáticas locales (.png)
│   ├── src/
│   │   ├── components/        # Componentes reutilizables e interfaz
│   │   ├── hooks/             # Hooks personalizados
│   │   ├── pages/
│   │   │   └── Home.tsx       # Página principal con catálogo e itinerarios
│   │   ├── index.css          # Sistema de diseño y efectos responsive
│   │   └── main.tsx           # Punto de entrada de React
│   └── index.html             # Documento HTML base
├── vercel.json                # Configuración de compilación y rewrites para Vercel
├── vite.config.ts             # Configuración de Vite y alias
└── package.json               # Dependencias y scripts del proyecto
```

---

## 💻 Desarrollo Local

### 1. Requisitos Previos
* Node.js v18 o superior.
* npm o pnpm.

### 2. Instalación de Dependencias
```bash
npm install
```
*(o usando pnpm)*
```bash
pnpm install
```

### 3. Iniciar Servidor de Desarrollo
```bash
npm run dev
```
Accede a `http://localhost:3000` en tu navegador.

### 4. Compilar para Producción
```bash
npm run build
```
Genera la carpeta optimizada en `dist/public`.

---

## ☁️ Despliegue en Vercel

El proyecto está configurado para desplegarse directamente usando la CLI de Vercel:

```bash
npx vercel --prod
```

* **Build Command:** `vite build`
* **Output Directory:** `dist/public`

---

## 📄 Licencia

Licencia MIT — Desarrollado para Rumbo / Viajes de Autor.
