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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDocumentoSeleccionado = exports.seleccionarDocumento = void 0;
const firebase_1 = require("../config/firebase");
// Marcar documento como seleccionado y desmarcar los demás
const seleccionarDocumento = (docId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docsSnapshot = yield firebase_1.db.collection("documents").get();
        // Usar batch para operaciones atómicas (más eficiente)
        const batch = firebase_1.db.batch();
        docsSnapshot.docs.forEach(doc => {
            const docRef = firebase_1.db.collection("documents").doc(doc.id);
            batch.update(docRef, {
                selected: doc.id === docId
            });
        });
        yield batch.commit();
        console.log(`✅ Documento ${docId} seleccionado`);
    }
    catch (error) {
        console.error("❌ Error seleccionando documento:", error);
        throw error;
    }
});
exports.seleccionarDocumento = seleccionarDocumento;
// Obtener documento seleccionado
const obtenerDocumentoSeleccionado = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docsSnapshot = yield firebase_1.db.collection("documents")
            .where("selected", "==", true)
            .limit(1)
            .get();
        if (docsSnapshot.empty) {
            return null;
        }
        const doc = docsSnapshot.docs[0];
        return Object.assign({ id: doc.id }, doc.data());
    }
    catch (error) {
        console.error("❌ Error obteniendo documento seleccionado:", error);
        throw error;
    }
});
exports.obtenerDocumentoSeleccionado = obtenerDocumentoSeleccionado;
// Procesar documentos seleccionados
/*export const procesarDocumentosSeleccionados = async () => {
    try {
        // Obtener documentos seleccionados desde Firestore
        const docsSnap = await getDocs(collection(db, "documents"));
        const documentosSeleccionados = docsSnap.docs
            .filter(d => d.data().selected)
            .map(d => ({ id: d.id, ...d.data() as { name: string; url: string; selected: boolean } }));

        const resultados = [];

        for (const doc of documentosSeleccionados) {
            const response = await axios.get(doc.url, { responseType: "arraybuffer" });
            const pdfBuffer = Buffer.from(response.data as ArrayBuffer);
            const pdfData = await pdfParse(pdfBuffer);

            resultados.push({
                id: doc.id,
                name: doc.name,
                text: pdfData.text // Aquí puedes personalizar la extracción de datos relevantes
            });
        }

        return { success: true, documentos: resultados };
    } catch (error) {
        console.error("Error al procesar documentos seleccionados:", error);
        return { success: false, error: "No se pudieron procesar los documentos seleccionados." };
    }
};*/ 
