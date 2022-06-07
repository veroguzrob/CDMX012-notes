import { db } from "./firebaseConfig";
import { collection, addDoc, onSnapshot  } from "firebase/firestore";


export const saveNotes = (title, note) => addDoc(collection(db, 'notes'), {title, note});

export const onGetNotes = (callback) => onSnapshot(collection(db, 'notes'), callback);
