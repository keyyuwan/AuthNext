import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.module.scss";

export function SignOutButton() {
  const { signOut } = useAuth();

  return (
    <button className={styles.container} onClick={signOut}>
      <FaSignOutAlt />
    </button>
  );
}
