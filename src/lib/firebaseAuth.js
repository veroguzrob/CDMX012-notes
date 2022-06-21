import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from './firebaseConfig';

export function loginWithGoogle() {
  return signInWithPopup(auth, provider)
    .then(() => {

    }).catch(() => {

    });
}

export function logOut() {
  signOut(auth).then(() => {

  }).catch(() => {

  });
}