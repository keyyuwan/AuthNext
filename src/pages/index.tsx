import { FormEvent, useState } from "react";
import { Input } from "../components/Input";
import { useAuth } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";
import styles from "./auth.module.scss";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isAuthLoading } = useAuth();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    const userInfo = {
      email,
      password,
    };

    await signIn(userInfo);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <form autoComplete="off" onSubmit={handleSignIn}>
          <Input
            label="E-mail"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className={styles.signInButton}>
            {isAuthLoading ? "..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
