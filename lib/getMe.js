import { query, getDocs, collection, where } from "firebase/firestore";
import { db } from "firebaseconfig/clientApp";

export default async function getMe(uid) {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));

    const res = await getDocs(q).then((doc) => {
      return doc.docs[0].data();
    });
    return res;
  } catch (err) {
    console.error(err);
    return "nouser";
  }
}

// getMe(auth.user.uid).then((res) => {
//     console.log(res);
//   });
