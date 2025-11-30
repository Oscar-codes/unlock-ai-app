"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const AreaController_1 = require("./controllers/AreaController");
const DocumentController_1 = require("./controllers/DocumentController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 10000;
// Middlewares
app.use((0, cors_1.default)({ origin: '*' }));
app.use(body_parser_1.default.json());
// Health check endpoint (útil para Render)
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});
// Endpoint para registrar un área
app.post("/registrar-area", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield (0, AreaController_1.registrarArea)(id);
        res.json({ success: true, message: "Área registrada con éxito" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al registrar área" });
    }
}));
// Marcar un documento como seleccionado
app.post("/seleccionar-documento", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { docId } = req.body;
        yield (0, DocumentController_1.seleccionarDocumento)(docId);
        res.json({ success: true, message: "Documento seleccionado con éxito" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al seleccionar documento" });
    }
}));
// Obtener documento seleccionado
app.get("/documento-seleccionado", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield (0, DocumentController_1.obtenerDocumentoSeleccionado)();
        res.json({ success: true, doc });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al obtener documento seleccionado" });
    }
}));
// Fallback para rutas del frontend
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../frontend/public', '01-splash.html'));
// });
// Levantar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
