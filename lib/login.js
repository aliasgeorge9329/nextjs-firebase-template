import { auth, db } from "firebaseconfig/clientApp";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  doc,
  where,
  setDoc,
} from "firebase/firestore";

const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    localStorage.setItem("uid", user.uid);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      const ref = doc(db, "users", user.uid);
      await setDoc(ref, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { signInWithGoogle };
