import firebaseServices from "./intialize";
import { getDatabase, ref, set, push, get, child } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
const db = getDatabase(firebaseServices.app);

const addComentToDB = async (name, message, photoURL) => {
    try {
        const newCommentRef = push(ref(db, "posts"));
        await set(newCommentRef, {
            name: name,
            message: message,
            photoURL: photoURL,
            timestamp: new Date().toISOString()
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getCommentsFromDB = async () => {
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, "posts"));
        if (snapshot.exists()) {
            const comments = [];
            snapshot.forEach((childSnapshot) => {
                comments.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            return comments;
        } else {
            return [];
        }
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
};
// Función para subir una imagen a Firebase Storage
const uploadImageToStorage = async (fileName,file) => {
    const storage = getStorage();
    const imageStorageRef = storageRef(storage, `posts_images/${fileName}`);
    await uploadBytes(imageStorageRef, file);
    const downloadURL = await getDownloadURL(imageStorageRef);
    return downloadURL;
};

// Función para descargar una imagen desde Firebase Storage
const getImageFromStorage = async (folder,file_) => {
    const storage = getStorage();
    const imageStorageRef = storageRef(storage, `${folder}/${file_}`);
    const downloadURL = await getDownloadURL(imageStorageRef);
    return downloadURL;
};


const firebaseManage = {
    uploadImageToStorage,
    getImageFromStorage,
    addComentToDB,
    getCommentsFromDB
};

export default firebaseManage;