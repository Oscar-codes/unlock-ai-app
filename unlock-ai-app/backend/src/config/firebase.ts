import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

// Inicializar Firebase Admin
if (!admin.apps.length) {
    try {
        // Para producción (Render con variable de entorno)
        if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        const serviceAccount = JSON.parse(
            process.env.FIREBASE_SERVICE_ACCOUNT
        );
        
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://unlock-ai-app-default-rtdb.firebaseio.com"
        });
        
        console.log('✅ Firebase Admin inicializado con credenciales de servicio');
        } 
        // Para desarrollo local (con archivo JSON)
        else if (process.env.NODE_ENV === 'development') {
        const serviceAccount = require('../../serviceAccountKey.json');
        
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://unlock-ai-app-default-rtdb.firebaseio.com"
        });
        
        console.log('✅ Firebase Admin inicializado localmente');
        }
        // Fallback con Application Default Credentials
        else {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: "https://unlock-ai-app-default-rtdb.firebaseio.com"
        });
        
        console.log('✅ Firebase Admin inicializado con credenciales por defecto');
        }
    } catch (error) {
        console.error('❌ Error inicializando Firebase Admin:', error);
        process.exit(1);
    }
}

export const db = admin.firestore();
export const auth = admin.auth();
export default admin;