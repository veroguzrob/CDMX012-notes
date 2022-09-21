import { db } from "./firebaseConfig";
import { collection, addDoc, onSnapshot, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";


export const saveNotes = (title, note) => addDoc(collection(db, 'notes'), { title, note });

export const onGetNotes = (callback) => onSnapshot(collection(db, 'notes'), callback);

export const getNote = async (idNote) => {
  const docRef = doc(db, "notes", idNote);
  const notesList = await getDoc(docRef);

  if (notesList.exists()) {

    return notesList.data()

  } else {

  }
}

export const updateOneNote = async (idNote, objStateNote) => {
  const noteRef = doc(db, "notes", idNote);
  return await updateDoc(noteRef, objStateNote);
}

export const deleteOneNote = (idNote) => deleteDoc(doc(db, "notes", idNote));