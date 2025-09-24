# Unlock AI App – Instrucciones Frontend

Este documento guía a los desarrolladores (y a GitHub Copilot) en la construcción y mantenimiento del **frontend** de la aplicación Unlock AI.

---

## 🎯 Objetivo

Crear una experiencia interactiva en un **tótem vertical (1080x1920)** y también compatible con **monitores horizontales (1920x1080)** que muestre el flujo de pantallas del evento Unlock AI:

1. Splash
2. Welcome
3. Agent
4. Selección de área
5. Selección de documento
6. Proceso inicial
7. Previsualización
8. Extracción
9. Resultados
10. Saber más
11. Pantalla final

---

## 📂 Estructura de carpetas

```jsx
Crea unapagina con esto: **📂 Estructura sugerida del proyecto**

/unlock-ai-app
│── /frontend
│   │── /assets
│   │   │── /images
│   │   │── /icons
│   │   │── /videos
│   │   │── /styles
│   │   │── /scripts
│   │── /views
│   │   │── 01-splash.html
│   │   │── 02-welcome.html
│   │   │── 03-agent.html
│   │   │── ...
│── /backend
│   │── src/ (TypeScript + Firebase)
│── README.md
│── INSTRUCTIONS.md   ← aquí va el archivo
│── package.json
```

---

## 🛠️ Tecnologías

- **HTML5** para vistas (una por pantalla).
- **CSS3** con Bootstrap 5 como base.
- **JavaScript (vanilla)** para interacciones (carrusel, slide button, animaciones).
- **Responsive Design** con `vh`, `vw` y media queries.
- **Fuentes y colores:**
    - Degradado base: `linear-gradient(180deg, #000000, #8C52FF, #FA7EF8)`.
    - Color primario: `#9b4dff`.
    - Color hover: `#7a39cc`.

---

## 📜 Estándares de desarrollo

1. **Cada pantalla tiene su propio HTML + CSS + JS** (si necesita lógica).
    
    Ejemplo:
    
    - `views/02-welcome.html`
    - `assets/styles/welcome.css`
    - `assets/scripts/welcome.js`
2. **Consistencia visual**:
    - Footer siempre con **ondas (`footer-waves.png`)** y logo Unlock AI.
    - Burbujas con color `#EDE0FF` y efecto flotante.
3. **Responsividad**:
    - En `@media (orientation: portrait)` → optimizar para tótem (1080x1920).
    - En `@media (orientation: landscape)` → optimizar para monitor (1920x1080).
4. **Accesibilidad**:
    - Texto legible (≥1rem).
    - Botones principales con gradiente y secundarios con borde.

---

## ⚙️ Lógica de interacción

- **Splash (01)**: autoplay video (10s) → redirige automáticamente a `02-welcome.html`.
- **Welcome (02)**: carrusel de cards + slide button desbloquea `03-agent.html`.
- **Agent (03)**: burbujas de conversación + botón “Probar IA” → `04-area.html`.
- **Área (04)**: selección de categoría → activa botón “Siguiente” → `05-documents.html`.
- **Documentos (05)**: selección de tipo de documento → activa botón → `06-process.html`.
- **Proceso (06)**: muestra doc seleccionado y botón “Comenzar” → `07-preview.html`.
- **Preview (07)**: QR + documento → botón “Extraer” → `08-extraction.html`.
- **Extracción (08)**: animación de progreso → `09-results.html`.
- **Resultados (09)**: tabla con datos extraídos → `10-learnmore.html`.
- **Saber más (10)**: botones (redirigir a formulario o reinicio).
- **Final (11)**: QR + lista de cursos.

---

## 🚀 Uso con Copilot

Cuando uses GitHub Copilot:

- Abre el archivo `INSTRUCTIONS.md` para que Copilot lo use como contexto.
- Pídele: *“Crea la pantalla 04 siguiendo la guía de [INSTRUCTIONS.md](http://instructions.md/)”*.
- Copilot generará el `HTML + CSS + JS` respetando la estructura definida.

---

## ✅ Checklist para nuevas pantallas

- [ ]  Crear archivo HTML en `/frontend/views/`.
- [ ]  Crear CSS en `/frontend/assets/styles/`.
- [ ]  Crear JS en `/frontend/assets/scripts/` (si aplica).
- [ ]  Agregar rutas correctas a imágenes e íconos.
- [ ]  Probar en 1080x1920 (portrait) y 1920x1080 (landscape).
- [ ]  Verificar footer y consistencia visual.