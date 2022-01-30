import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Home() {
  const { user } = useAuth();

  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <br />
      <h2>{user?.email}</h2>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
