import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

// Marcar documento como seleccionado y desmarcar los demás
export const seleccionarDocumento = async (docId: string) => {
    const docsSnap = await getDocs(collection(db, "documents"));
    for (const d of docsSnap.docs) {
        await updateDoc(doc(db, "documents", d.id), {
            selected: d.id === docId
        });
    }
};

// Obtener documento seleccionado
export const obtenerDocumentoSeleccionado = async () => {
    const docsSnap = await getDocs(collection(db, "documents"));
    const seleccionado = docsSnap.docs.find(d => d.data().selected);
    return seleccionado ? seleccionado.data() : null;
};