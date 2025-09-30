import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { registrarArea } from "./controllers/AreaController";
import { seleccionarDocumento, obtenerDocumentoSeleccionado } from "./controllers/DocumentController";

const app = express();

// Middlewares
app.use(cors()); // permite peticiones desde cualquier origen
app.use(bodyParser.json());

// Servir archivos estáticos del frontend
// __dirname se refiere al directorio del script actual (ej: unlock-ai-app/backend/dist)
// Usamos path.join para construir una ruta relativa a la carpeta 'frontend'
app.use(express.static(path.join(__dirname, '../../frontend')));


// Endpoint para registrar un área
app.post("/registrar-area", async (req, res) => {
    try {
        const { id } = req.body;
        await registrarArea(id);
        res.json({ success: true, message: "Área registrada con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al registrar área" });
    }
});

//marcar un documento como seleccionado
app.post("/seleccionar-documento", async (req, res) => {
    try {
        const { docId } = req.body;
        await seleccionarDocumento(docId);
        res.json({ success: true, message: "Documento seleccionado con éxito" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al seleccionar documento" });
    }
});

// Obtener documento seleccionado
app.get("/documento-seleccionado", async (req, res) => {
    try {
        const doc = await obtenerDocumentoSeleccionado();
        res.json({ success: true, doc });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
});

// Fallback para que las rutas del frontend funcionen con la navegación del cliente (opcional pero recomendado)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/02-welcome.html')); // O el html principal
});


// Levantar servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
