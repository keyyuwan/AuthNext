import { withSSRAuth } from "../utils/withSSRAuth";
import { Chart } from "../components/Chart";
import styles from "../styles/pages/metrics.module.scss";

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
        <Chart
          title="New Users"
          type="area"
          height={160}
          options={options}
          series={series}
        />

        <Chart
          title="Social Authentication"
          type="area"
          height={160}
          options={options}
          series={series}
        />

        <Chart
          title="Github Authentication"
          type="bar"
          height={160}
          options={options}
          series={series}
        />

        <Chart
          title="Google Authentication"
          type="bar"
          height={160}
          options={options}
          series={series}
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
