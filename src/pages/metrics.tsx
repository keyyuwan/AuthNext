import { withSSRAuth } from "../utils/withSSRAuth";
import { chartOptions } from "../utils/chartOptions";
import { Chart } from "../components/Chart";
import styles from "../styles/pages/metrics.module.scss";

export default function Metrics() {
  const newUsersSeries = [{ data: [5, 10, 16, 22, 30, 34] }];
  const monthlyVisitsSeries = [{ data: [2, 5, 6, 13, 22, 31] }];
  const weeklyVisitsSeries = [{ data: [1, 3, 3, 6, 11, 25] }];
  const dailyVisitsSeries = [{ data: [1, 2, 3, 7, 11, 6] }];

  return (
    <div className={styles.container}>
      <h1>Metrics</h1>

      <div className={styles.content}>
        <Chart
          title="New Users"
          type="area"
          height={160}
          options={chartOptions}
          series={newUsersSeries}
        />

        <Chart
          title="Monthly Visits"
          type="area"
          height={160}
          options={chartOptions}
          series={monthlyVisitsSeries}
        />

        <Chart
          title="Weekly Visits"
          type="bar"
          height={160}
          options={chartOptions}
          series={weeklyVisitsSeries}
        />

        <Chart
          title="Daily Visits"
          type="bar"
          height={160}
          options={chartOptions}
          series={dailyVisitsSeries}
        />
      </div>
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
