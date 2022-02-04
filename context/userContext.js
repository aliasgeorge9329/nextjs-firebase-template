import { createContext, useContext, useState } from "react";
import useFirebaseAuth from "firebaseconfig/useFirebaseAuth";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const auth = useFirebaseAuth();

  return (
    <UserContext.Provider value={{ auth }}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
