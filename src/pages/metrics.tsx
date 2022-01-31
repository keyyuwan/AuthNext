import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  return (
    <div>
      <h1>Metrics</h1>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(
  async () => {
    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
  }
);
