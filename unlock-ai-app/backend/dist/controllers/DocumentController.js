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
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../config/firebase");
// Marcar documento como seleccionado y desmarcar los demás
const seleccionarDocumento = (docId) => __awaiter(void 0, void 0, void 0, function* () {
    const docsSnap = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(firebase_1.db, "documents"));
    for (const d of docsSnap.docs) {
        yield (0, firestore_1.updateDoc)((0, firestore_1.doc)(firebase_1.db, "documents", d.id), {
            selected: d.id === docId
        });
    }
});
exports.seleccionarDocumento = seleccionarDocumento;
// Obtener documento seleccionado
const obtenerDocumentoSeleccionado = () => __awaiter(void 0, void 0, void 0, function* () {
    const docsSnap = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(firebase_1.db, "documents"));
    const seleccionado = docsSnap.docs.find(d => d.data().selected);
    return seleccionado ? seleccionado.data() : null;
});
exports.obtenerDocumentoSeleccionado = obtenerDocumentoSeleccionado;
