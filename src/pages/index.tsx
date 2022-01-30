import { FormEvent, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "../components/Input";
import { SocialButton } from "../components/SocialButton";
import { useAuth } from "../contexts/AuthContext";
import styles from "./auth.module.scss";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

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
            Sign In
          </button>
        </form>
      </div>

      <div className={styles.divider} />

      <div className={styles.socialButtonsContainer}>
        <SocialButton
          icon={<FaGithub size="24" />}
          title="Sign In with Github"
        />
        <SocialButton
          icon={<FaGoogle size="24" />}
          title="Sign In with Google"
        />
      </div>
    </div>
  );
}
