import { ApexOptions } from 'apexcharts';
import ConfigDB from '../../../Config/ThemeConfig';
export var bitcoinChart:ApexOptions = {
    series: [{
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chart: {
      width: 120,
      height: 120,
      type: 'line',
      toolbar: {
        show: false
      },
      offsetY: 10,
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 6,
        left: 0,
        blur: 6,
        color: "#FFA941",
        opacity: 0.3
      }
    },
    grid: {
      show: false
    },
    colors: ["#FFA941"],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
      'aug', 'sep', 'oct', 'nov'],
    markers: {
      size: 0
    },
    xaxis: {
      // type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
    //   y: {
    //     show: false,
    //     labels: {
    //       show: false
    //     }
    //   },
    },
    responsive: [
      {
        breakpoint: 1790,
        options: {
          chart: {
            width: 100,
            height: 100,
          }
        }
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            width: "100%",
            height: 100,
          }
        }
      },
    ]
  }

  export var bitcoinChart2:ApexOptions = {
    series: [{
      data: [30, 25, 30, 25, 64, 40, 59, 52, 64]
    }],
    chart: {
      width: 120,
      height: 120,
      type: 'line',
      toolbar: {
        show: false
      },
      offsetY: 10,
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 6,
        left: 0,
        blur: 6,
        color: "var(--theme-default)",
        opacity: 0.3
      }
    },
    grid: {
      show: false
    },
    colors: ["var(--theme-default)"],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
      'aug', 'sep'],
    markers: {
      size: 0
    },
    xaxis: {
      // type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
    //   y: {
    //     show: false,
    //     labels: {
    //       show: false
    //     }
    //   },
    },
    responsive: [
      {
        breakpoint: 1790,
        options: {
          chart: {
            width: 100,
            height: 100,
          }
        }
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            width: "100%",
            height: 100,
          }
        }
      },
    ]
  }
  export var bitcoinChart3:ApexOptions = {
    series: [{
      data: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64]
    }],
    chart: {
      width: 120,
      height: 120,
      type: 'line',
      toolbar: {
        show: false
      },
      offsetY: 10,
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 6,
        left: 0,
        blur: 6,
        color: "#54BA4A",
        opacity: 0.3
      }
    },
    grid: {
      show: false
    },
    colors: ["#54BA4A"],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
      'aug', 'sep', 'oct'],
    markers: {
      size: 0
    },
    xaxis: {
      // type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
    //   y: {
    //     // show: false,
    //     labels: {
    //       show: false
    //     }
    //   },
    },
    responsive: [
      {
        breakpoint: 1790,
        options: {
          chart: {
            width: 100,
            height: 100,
          }
        }
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            width: "100%",
            height: 100,
          }
        }
      },
    ]
  }

export var averageSaleChart:ApexOptions = {
    series: [70],
    chart: {
      height: 130,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: "var(--theme-default)",
        opacity: 0.35
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '45%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
        //   showOn: "always",
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -8,
          }
        }
      },
    },
    colors: ["var(--theme-default)"],
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          }
        }
      },
    ]
  }

  export var averageProfitChart :ApexOptions = {
    series: [60],
    chart: {
      height: 130,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: "var(--theme-secondary)",
        opacity: 0.35
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '45%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
        //   showOn: "always",
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -8,
          }
        }
      },
    },
    colors: ["var(--theme-secondary)"],
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          }
        }
      },
    ]
  }

  export const ordersChart:ApexOptions = {
    series: [
    {
    name: 'Daily',
    data: [2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1],
    },
    {
    name: 'Weekly',
    data: [-2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2, -2.15, -3, -1.1],
    },
    {
    name: 'Monthly',
    data: [-2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1, -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75],
    },
    {
    name: 'Yearly',
    data: [2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25, 3.1, 3.0, 2.95, 2.85, 2.75],
    },
    ],
    chart: {
    type: 'bar',
    width: 180,
    height: 120,
    stacked: true,
    toolbar: {
    show: false,
    },
    },
    plotOptions: {
    bar: {
    columnWidth: '40%',
    barHeight: '80%',
    // startingShape: 'rounded',
    // endingShape: 'rounded',
    },
    },
    colors: [ConfigDB.data.color.primary_color , ConfigDB.data.color.primary_color , "#F2F3F7", "#F2F3F7"],
    dataLabels: {
    enabled: false,
    },
    stroke: {
    width: 0,
    },
    legend: {
    show: false,
    },
    grid: {
    xaxis: {
    // offsetX: -2,
    lines: {
    show: false,
    },
    },
    yaxis: {
    lines: {
    show: false,
    },
    },
    },
    yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
    show: false,
    },
    axisTicks: {
    show: false,
    },
    },
    tooltip: {
    shared: false,
    x: {
    show: false,
    },
    y: {
    // show: false,
    },
    z: {
    // show: false,
    },
    },
    xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    offsetX: 0,
    offsetY: 0,
    labels: {
    offsetX: 0,
    offsetY: 0,
    show: false,
    },
    axisBorder: {
    offsetX: 0,
    offsetY: 0,
    show: false,
    },
    axisTicks: {
    offsetX: 0,
    offsetY: 0,
    show: false,
    },
    },
    responsive: [
    {
    breakpoint: 1760,
    options: {
    chart: {
    width: 160,
    },
    },
    },
    {
    breakpoint: 1601,
    options: {
    chart: {
    height: 110,
    },
    },
    },
    {
    breakpoint: 1560,
    options: {
    chart: {
    width: 140,
    },
    },
    },
    {
    breakpoint: 1460,
    options: {
    chart: {
    width: 120,
    },
    },
    },
    {
    breakpoint: 1400,
    options: {
    chart: {
    width: 150,
    },
    },
    },
    {
    breakpoint: 1110,
    options: {
    chart: {
    width: 200,
    },
    },
    },
    {
    breakpoint: 700,
    options: {
    chart: {
    width: 150,
    },
    },
    },
    {
    breakpoint: 576,
    options: {
    chart: {
    width: 220,
    },
    },
    },
    {
    breakpoint: 420,
    options: {
    chart: {
    width: 150,
    },
    },
    },
    ],
    };

  export var profitChart:ApexOptions = {
    series: [{
      name: "Desktops",
      data: [210, 180, 650, 200, 600, 100, 800, 300, 500]
    }],
    chart: {
      width: 200,
      height: 150,
      type: 'line',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: '#16C7F9',
        opacity: 0.3
      },
      zoom: {
        enabled: false
      }
    },
    colors: ["#16C7F9"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    grid: {
      show: false
    },
    tooltip: {
      x: {
        show: false,
      },
    //   y: {
    //     show: false,
    //   },
    //   z: {
    //     show: false,
    //   },
      marker: {
        show: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    responsive: [{
      breakpoint: 1780,
      options: {
        chart: {
          width: 180,
        }
      },
    },
    {
      breakpoint: 1680,
      options: {
        chart: {
          width: 160,
        }
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        }
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        }
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        }
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 150,
        }
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        }
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        }
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        }
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        }
      },
    },
    ]
  };

export var radialCommonOption:ApexOptions =
  {
    series: [78],
    chart: {
      height: 130,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: "var(--theme-default)",
        opacity: 0.35
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '60%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
        //   showOn: "always",
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -10,
          }
        }
      },
    },
    colors: ["var(--theme-default)"],
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          }
        }
      },
    ]
  }

  export var radialCommonOption2:ApexOptions =
  {
    series: [70],
    chart: {
      height: 130,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: "#FFA941",
        opacity: 0.35
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '60%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
        //   showOn: "always",
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -10,
          }
        }
      },
    },
    colors: ["#FFA941"],
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          }
        }
      },
    ]
  }
  
  export var radialCommonOption3:ApexOptions =
  {
    series: [50],
    chart: {
      height: 130,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: "#57B9F6",
        opacity: 0.35
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '60%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
        //   showOn: "always",
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -10,
          }
        }
      },
    },
    colors: ["#57B9F6"],
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          }
        }
      },
    ]
  }

  export var radialCommonOption4:ApexOptions =
  {
    series: [80],
    chart: {
      height: 130,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: "#FF6150",
        opacity: 0.35
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '60%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
        //   showOn: "always",
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -10,
          }
        }
      },
    },
    colors: ["#FF3364"],
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          }
        }
      },
    ]
  }

export const growthOptions:ApexOptions = {
    series: [{
    name: 'Growth',
    data: [10, 5, 15, 0, 15, 12, 29, 29, 29, 12, 15,5]
  }],
    chart: {
      height: 80,
      type: 'line',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 4,
        color: '#35bfbf',
        opacity: 0.22
      },
    },
  grid: {
    yaxis: {
      lines: {
          show: false
      }
    },  
  },
  colors: ["#5527FF"],
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  xaxis: {
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    tickAmount: 10,
    labels: {
      style: {
          fontFamily: 'Nunito, sans-serif',
      },
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    tooltip: {
      enabled: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#5527FF' ],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: "#5527FF",
          opacity: 1
        },
        {
          offset: 100,
          color: "#E069AE",
          opacity: 1
        },
      ]
      // stops: [0, 100, 100, 100]
    },
  },
  yaxis: {
    min: -10,
    max: 40,
    labels: {
      show: false
    }
  },
   responsive: [
     {
    breakpoint: 992,
    options: {
      chart: {
        height: 150,
      }
    },
  },
  {
    breakpoint: 768,
    options: {
      chart: {
        height: 180,
      }
    },
  }
  ]
};

export const optionsVisitor:ApexOptions = {
    series: [{
    name: 'Active',
    data: [18, 10, 65, 18, 28, 10]
  }, {
    name: 'Bounce',
    data: [25, 50, 30, 30, 25, 45]
  }],
    chart: {
      type: 'bar',
      height: 270,
      toolbar: {
        show: false
      },
    },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 6,
    colors: ['transparent']
  },
  grid: {
    show: true,
    borderColor: 'var(--chart-border)',
    xaxis: {
        lines: {
            show: true
        }
    }, 
  },
  colors: [ConfigDB.data.color.primary_color , ConfigDB.data.color.secondary_color],
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    tickAmount: 4,
    tickPlacement: 'between',
    labels: {
      style: {
        fontFamily: 'Nunito, sans-serif',
      },
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    // tickPlacement: 'between',
    labels: {
      style: {
        fontFamily: 'Nunito, sans-serif',
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left', 
    fontFamily: "Nunito, sans-serif",
    fontSize: '14px',
    fontWeight: 500,
    labels: {
          colors: "var(--chart-text-color)",
    },
    markers: {
    },
    itemMargin: {
      horizontal: 10,
    }
  },
  responsive: [{
    breakpoint: 1366,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '80%',
        },
      },
      grid: {
        padding: {
          right: 0,
        }
      }
    },
  },
  {
    breakpoint: 1200,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '50%',
        },
      },
      grid: {
        padding: {
          right: 0,
        }
      }
    },
  },
  {
    breakpoint: 576,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '60%',
        },
      },
      grid: {
        padding: {
          right: 5,
        }
      }
    },
  }
  ]
};