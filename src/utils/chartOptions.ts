export const chartOptions = {
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
