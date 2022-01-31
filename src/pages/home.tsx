import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/apiClient";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { SignOutButton } from "../components/SignOutButton";
import styles from "../styles/home.module.scss";

export default function Home() {
  const { user } = useAuth();

  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfoHeader}>
          <h1>User Information:</h1>
          <SignOutButton />
        </div>

        <div className={styles.userInfo}>
          <strong>
            <span>E-mail: </span> {user?.email}
          </strong>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});
