import ConfigDB from "../../Config/ThemeConfig";
import {
     Chart as ChartJS,
    CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Colors, 
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ArcElement,
  RadialLinearScale
  } from "chart.js";

const secondary = ConfigDB.data.color.secondary_color;
const primary = ConfigDB.data.color.primary_color;
ChartJS.register(
    CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Colors, 
  Title,
  Tooltip,
  Legend,
  LineElement,
  BarController,
  BarElement,
  ArcElement,
  RadialLinearScale
  );
export const barChartData = {
    labels: ["Mon", "Tue", "Wen", "Thus", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "y",
        lagend: "y",
        data: [35, 59, 80, 81, 56, 55, 40],
        borderColor: primary,
        backgroundColor: "rgba(51, 191, 191, 0.4)",
        highlightFill: "rgba(51, 191, 191, 0.6)",
        highlightStroke: primary,
        borderWidth: 2,
      },
      {
        label: "z",
        lagend: "z",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: secondary,
        backgroundColor: "rgba(255, 97, 80, 0.4)",
        highlightFill: "rgba(255, 97, 80, 0.6)",
        highlightStroke: secondary,
        borderWidth: 2,
      },
    ],
    plugins: {
      datalabels: {
        display: false,
        color: "white",
      },
    },
  };

  export const barChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
  };

  export const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        strokeColor: primary ,
        pointColor: primary ,
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000",
        data: [10, 59, 80, 81, 56, 55, 40],
        fill: {
          target: "origin", 
          above: "rgba(51, 191, 191, 0.3)"
        }
    }, {
        label: "My Second dataset",
        strokeColor: secondary ,
        pointColor: secondary ,
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        highlightStroke: secondary,
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: {
          target: "origin", 
          above: "rgba(255, 97, 80, 0.3)"
        }
    }]
  }

  export const lineChartOptions  = {
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,.05)',
          lineWidth: 1,
        },
        display: true,
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,.05)',
          lineWidth: 1,
        },
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 1,
        hoverRadius: 20,
      },
      line: {
        tension: 0.4,
      },
    },
  }

  export const radarChartData = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(115, 102 ,255, 0.4)",
        strokeColor: primary,
        pointColor: primary,
        pointStrokeColor: primary,
        pointHighlightFill: primary ,
        pointHighlightStroke: "rgba(115, 102 ,255, 0.4)",
        data: [12, 3, 5, 18, 7]
    }]
  };

  export const lineChart2Data = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        backgroundColor: "rgba(51, 191, 191, 0.2)",
        strokeColor: "#717171",
        pointColor: "#717171",
        borderColor: secondary,
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        fill: {
          target: "origin", 
          above: "rgba(51, 191, 191, 0.2)"
        }
      },
      {
        backgroundColor: "rgba(94, 187, 37, 0.2)",
        strokeColor: secondary,
        pointColor: secondary,
        borderColor: "#51bb25",
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        fill: {
          target: "origin", 
          above: "rgba(94, 187, 37, 0.2)"
        }
  
      },
      {
        backgroundColor: "rgba(101, 90, 243, 0.2)",
        borderColor: primary,
        pointColor: primary,
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
        fill: {
          target: "origin", 
          above: "rgba(101, 90, 243, 0.2)"
        }
      },
    ],
  };

  export const lineChart2Option = {
    responsive: true,
  
    animation: {
      duration: 0,
    },
    legend: {
      display: false,
    },
    scaleShowVerticalLines: false,
  };

  export const doughnutData = {
    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [primary, secondary, "#51bb25"],
      },
    ],
  };

  export const doughnutOption = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };

  export const polarData = {
    labels: [
      "Download Sales",
      "In-Store Sales",
      "Mail Sales",
      "Telesales",
      "Corporate Sales",
    ],
    datasets: [
      {
        data: [300, 500, 100, 40, 120],
        backgroundColor: [primary, secondary, "#f8d62b", "#51bb25", "#a927f9"],
      },
    ],
  };
  
  export const polarOption = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };