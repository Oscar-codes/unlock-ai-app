import * as admin from "firebase-admin";
import { db } from "../config/firebase";

export const registrarArea = async (areaId:string) => {
    try {
        const areaRef = db.collection("areas").doc(areaId);
        const areaSnap = await areaRef.get();

        if (areaSnap.exists) {
            // Admin SDK usa FieldValue.increment()
            await areaRef.update({
                count: admin.firestore.FieldValue.increment(1),
                timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
            console.log(`✅ Área ${areaId} actualizada`);
        } else {
            // Si no existe, créala
            await areaRef.set({
                count: 1,
                timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
            console.log(`✅ Área ${areaId} creada`);
        }
    } catch (error) {
        console.error("❌ Error registrando área:", error);
        throw error;
    }
}