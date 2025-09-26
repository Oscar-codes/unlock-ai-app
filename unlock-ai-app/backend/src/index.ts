import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { registrarArea } from "./controllers/AreaController";
import { seleccionarDocumento, obtenerDocumentoSeleccionado } from "./controllers/DocumentController";

const app = express();

// Middlewares
app.use(cors()); // permite peticiones desde cualquier origen
app.use(bodyParser.json());


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

// Levantar servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
