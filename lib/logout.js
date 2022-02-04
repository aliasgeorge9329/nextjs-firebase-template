import { auth } from "firebaseconfig/clientApp";
import { signOut } from "firebase/auth";

export default function logout() {
  signOut(auth);
  localStorage.removeItem("uid");
}
