import dynamic from "next/dynamic";
import { Props as ApexChartProps } from "react-apexcharts";
import styles from "./styles.module.scss";

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartProps extends ApexChartProps {
  title: string;
}

export function Chart({ title, ...rest }: ChartProps) {
  return (
    <div className={styles.chart}>
      <h2>{title}</h2>
      <ApexChart {...rest} />
    </div>
  );
}
