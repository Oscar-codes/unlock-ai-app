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
const AreaController_1 = require("./controllers/AreaController");
const DocumentController_1 = require("./controllers/DocumentController");
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)()); // permite peticiones desde cualquier origen
app.use(body_parser_1.default.json());
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
//marcar un documento como seleccionado
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
        res.status(500).json({ success: false, error });
    }
}));
// Levantar servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
