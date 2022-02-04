import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getMe from "@/lib/getMe";

export default function Register() {
  const { auth } = useUserContext();
  const router = useRouter();

  // Protected Route
  useEffect(() => {
    if (!auth.userLoading) {
      if (!auth.userIsLogIn) router.push("/");
    }
  }, [auth]);

  return <div>Hello</div>;
}
