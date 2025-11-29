import { db } from "../config/firebase";
import axios from "axios";
import pdfParse from "pdf-parse";

// Marcar documento como seleccionado y desmarcar los demás
export const seleccionarDocumento = async (docId: string) => {
    try {
        const docsSnapshot = await db.collection("documents").get();
        
        // Usar batch para operaciones atómicas (más eficiente)
        const batch = db.batch();
        
        docsSnapshot.docs.forEach(doc => {
            const docRef = db.collection("documents").doc(doc.id);
            batch.update(docRef, {
                selected: doc.id === docId
            });
        });
        
        await batch.commit();
        console.log(`✅ Documento ${docId} seleccionado`);
    } catch (error) {
        console.error("❌ Error seleccionando documento:", error);
        throw error;
    }
};

// Obtener documento seleccionado
export const obtenerDocumentoSeleccionado = async () => {
    try {
        const docsSnapshot = await db.collection("documents")
            .where("selected", "==", true)
            .limit(1)
            .get();
        
        if (docsSnapshot.empty) {
            return null;
        }
        
        const doc = docsSnapshot.docs[0];
        return {
            id: doc.id,
            ...doc.data()
        };
    } catch (error) {
        console.error("❌ Error obteniendo documento seleccionado:", error);
        throw error;
    }
};

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