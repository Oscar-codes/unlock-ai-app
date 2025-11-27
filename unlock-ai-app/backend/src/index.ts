import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { registrarArea } from "./controllers/AreaController";
import { seleccionarDocumento, obtenerDocumentoSeleccionado } from "./controllers/DocumentController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middlewares
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// Health check endpoint (útil para Render)
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

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

// Marcar un documento como seleccionado
app.post("/seleccionar-documento", async (req, res) => {
    try {
        const { docId } = req.body;
        await seleccionarDocumento(docId);
        res.json({ success: true, message: "Documento seleccionado con éxito" });
    } catch (error) {
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
        console.error(error);
        res.status(500).json({ success: false, message: "Error al obtener documento seleccionado" });
    }
});

// Fallback para rutas del frontend
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../frontend/public', '01-splash.html'));
// });

// Levantar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
