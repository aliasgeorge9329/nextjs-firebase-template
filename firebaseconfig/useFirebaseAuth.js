import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "./clientApp";

const formatAuthUser = (user) => ({
  uid: user.uid,
  name: user.displayName,
  email: user.email,
  profileImageUrl: user.photoURL,
});

export default function useFirebaseAuth() {
  const [user, setAuthUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userIsLogIn, setUserIsLogIn] = useState(false);
  const router = useRouter();

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setUserLoading(false);
      setUserIsLogIn(false);
      router.push("/");
      return;
    }
    setUserLoading(true);
    let formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setUserIsLogIn(true);
    setUserLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    userLoading,
    userIsLogIn,
  };
}
