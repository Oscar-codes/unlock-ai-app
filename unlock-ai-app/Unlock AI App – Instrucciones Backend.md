# Unlock AI App – Instrucciones Backend

# Unlock AI App – Instrucciones Backend

Este documento define las pautas de desarrollo del **backend** para Unlock AI App utilizando **TypeScript** y **Firebase**.

El objetivo es gestionar la lógica de negocio que conecta las pantallas del frontend con la persistencia y extracción de datos.

---

## 🛠️ Tecnologías principales

- **TypeScript** (Node.js) → tipado fuerte, modularidad y buenas prácticas.
- **Firebase**:Crear la base (Responsable:Ronald)
    - **Firestore** → almacenar áreas seleccionadas, documentos seleccionados, datasets. (Responsable: Kenia)
    - **Storage** 
    → Seleccionar archivos/documentos (Responsables Oscar)
    → Almancenar en cloudinary los archivos/documentos (Responsable Kenia) 
    → Guardar la ruta en el Storage y servir archivos/documentos (PDF, imágenes) (Responsable: Ronald). 
    - **Cloud Functions** → para procesar extracción y transformación de datos.

---

## 📂 Estructura de carpetas Backend

```markdown
/backend
│── /src
│ │── index.ts → punto de entrada
│ │── config/firebase.ts → inicialización de Firebase
│ │── controllers/ → lógica de negocio (áreas, documentos, procesos)
│ │── services/ → servicios externos (IA, extracción, parsing)
│ │── models/ → interfaces y tipados TS
│ │── utils/ → helpers y funciones comunes
│ │── routes/ → endpoints expuestos (si usamos Express)
│── tsconfig.json
│── package.json
│── INSTRUCTIONS_BACKEND.md
```

---

## 🎯 Funcionalidades clave por pantalla


### 1. Pantalla 4 – Selección de Área (Responsable: Kenia )

- Al seleccionar un ícono de **Área**:
    - Guardar en Firestore el área seleccionada (`areas/{id}`).
    - Contabilizar cuántas veces se seleccionó cada área (campo `count`).
- Al final, debe ser posible generar un **reporte de áreas seleccionadas**.

**Modelo sugerido (Firestore):**

```tsx
interface AreaSelection {
  areaId: string;       // id del área (ej. "educacion")
  timestamp: Date;      // cuándo se seleccionó
}

```

Contador agregado (en documento resumen):

```tsx
areas_stats/{areaId} → { count: number }

```

### 2. Pantalla 5 – Selección de Documento (Responsable: Ronald)

- Al seleccionar un ícono de documento:
    - Guardar en Firestore qué documento se eligió.
    - Asociarlo a la sesión actual del usuario/tótem.

**Modelo sugerido:**

```tsx
interface DocumentSelection {
  docId: string;        // ej. "cv", "contrato"
  timestamp: Date;
  sessionId: string;    // id de sesión para seguimiento
}

```

### 3. Pantalla 6 – Proceso (mostrar documento seleccionado Responsable: Kenia) 

- Recuperar de Firestore/Storage el **documento seleccionado en Pantalla 5**.
- Mostrar el ícono y metadata en `06-process.html`.

---

### 4. Pantalla 7 – Previsualización (Responsable: Kenia)

- Renderizar el documento real desde **Firebase Storage** (ej. un PDF).
- Asociar el `docId` con el archivo real (`storage/documents/{docId}.pdf`).
- Permitir descarga/visualización con un `<iframe>` o `<embed>`.

---

### 5. Pantalla 8 – Extracción (Responsable: Ronald y Kenia revisa)

- Al presionar “Extraer”:
    - Invocar una **Cloud Function** que:
        1. Simule escaneo del documento  (con el DocID seleccionado se asocia el dataset).
        2. Extraiga los valores (parseo de texto o mock de dataset).
        3. Guarde los resultados en Firestore bajo `datasets/{sessionId}`.

**Ejemplo de resultado guardado:**

```tsx
interface Dataset {
  sessionId: string;
  docId: string;
  extractedAt: Date;
  fields: { [key: string]: string | number };
}

```

### 6. Pantalla 9 – Resultados (Responsable Ronald y Kenia revisa)

- Recuperar el **dataset** generado en Pantalla 8.
- Visualizarlo en una tabla en el frontend.
- Asegurar que los datos correspondan al `sessionId` actual.

---

## ⚙️ Buenas prácticas de desarrollo

1. **Tipado fuerte**
    - Usar `interfaces` y `types` de TypeScript en `models/`.
    - Validar datos antes de guardarlos en Firestore.
2. **Modularización**
    - `controllers/areaController.ts` → manejar selección y conteo de áreas.
    - `controllers/documentController.ts` → manejar documentos seleccionados.
    - `controllers/processController.ts` → lógica de extracción/datasets.
3. **Sesiones**
    - Generar un `sessionId` único por flujo de usuario (ej. UUID).
    - Guardar todas las selecciones y resultados bajo esa sesión.
4. **Firebase Rules**
    - Limitar escritura a rutas necesarias (`areas/`, `documents/`, `datasets/`).
    - Hacer que los datasets sean de solo lectura para el frontend.
5. **Logs y depuración**
    - Usar `console.log` en Cloud Functions solo para desarrollo.
    - En producción, implementar un logger más robusto.

---

## 🚀 Uso con GitHub Copilot

- **Copilot puede generar controladores y servicios** siguiendo estos prompts:
    - *“Crea un servicio en TypeScript que registre un área seleccionada en Firestore con contador incremental”*.
    - *“Genera una Cloud Function en TypeScript que reciba un documento, lo procese y guarde un dataset en Firestore”*.
- Siempre tener este archivo abierto (`INSTRUCTIONS_BACKEND.md`) para que Copilot entienda la arquitectura.

---

## ✅ Checklist Backend

- [ ]  Inicializar Firebase (`firebase.ts` con SDK).
- [ ]  Crear modelos (`AreaSelection`, `DocumentSelection`, `Dataset`).
- [ ]  Implementar controladores (`areas`, `documents`, `process`).
- [ ]  Configurar Cloud Functions para extracción.
- [ ]  Probar flujo completo (selección → proceso → dataset → resultados).
- [ ]  Validar datos con `sessionId`.
- [ ]  Asegurar reporte de áreas seleccionadas.

```yaml

---

✅ Con esto tendrás un **manual completo** para que Copilot genere el backend en TypeScript con Firebase.  

👉 ¿Quieres que te prepare también un **ejemplo inicial de `firebase.ts` y un controlador `areaController.ts`** para que Copilot ya tenga un punto de partida?

```