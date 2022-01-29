import { FormEvent } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "../components/Input";
import { SocialButton } from "../components/SocialButton";
import styles from "./auth.module.scss";

export default function Auth() {
  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form autoComplete="off" onSubmit={handleSignIn}>
        <Input label="E-mail" name="email" />
        <Input label="Password" name="password" />

        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
      </form>

      <div className={styles.divider} />

      <div className={styles.socialButtonsContainer}>
        <SocialButton icon={<FaGithub />} title="Sign In with Github" />
        <SocialButton icon={<FaGoogle />} title="Sign In with Google" />
      </div>
    </div>
  );
}
