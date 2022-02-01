import dynamic from "next/dynamic";
import { withSSRAuth } from "../utils/withSSRAuth";
import styles from "../styles/pages/metrics.module.scss";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Metrics() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: "var(--pink)",
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        color: "var(--light-dark)",
      },
      axisTicks: {
        color: "var(--gray-50)",
      },
      categories: ["Jan", "Fev", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.8,
        opacityTo: 0.5,
      },
    },
  };

  const series = [{ name: "New users", data: [3, 7, 9, 15, 30, 37] }];

  return (
    <div className={styles.container}>
      <h1>Metrics</h1>

      <div className={styles.content}>
        <div className={styles.chart}>
          <h2>New users</h2>
          <Chart type="area" height={160} options={options} series={series} />
        </div>

        <div className={styles.chart}>
          <h2>Social Authentication</h2>
          <Chart type="area" height={160} options={options} series={series} />
        </div>

        <div className={styles.chart}>
          <h2>Github Authentication</h2>
          <Chart type="bar" height={160} options={options} series={series} />
        </div>

        <div className={styles.chart}>
          <h2>Google Authentication</h2>
          <Chart type="bar" height={160} options={options} series={series} />
        </div>
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
