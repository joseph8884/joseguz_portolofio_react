import firebaseServices from "./intialize";
import { getDatabase, ref, set, push, get, child } from "firebase/database";

const db = getDatabase(firebaseServices.app);

const addComentToDB = async (name, message) => {
    try {
        const newCommentRef = push(ref(db, "posts"));
        await set(newCommentRef, {
            name: name,
            message: message,
            timestamp: new Date().toISOString()
        });
        console.log("Document written with ID: ", newCommentRef.key);
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
            console.log("No data available");
            return [];
        }
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
};

const firebaseManage = {
    addComentToDB,
    getCommentsFromDB
};

export default firebaseManage;