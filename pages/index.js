import { signInWithGoogle } from "@/lib/login";
import logout from "@/lib/logout";

export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}
