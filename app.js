var options = {
  series: [
    {
      name: "Dishcharge by interval",
      type: "column",
      data: [0, 100, 700, 600, 227, 100, 0, 0, 0, 0],
      
    },
    {
      name: "Avg Time",
      type: "line",
      data: [0, 20, 40, 30, 20, 0]
    }
  ],
 
    colors: ['#ffc0cb', '#000075', '#000075','#ffc0cb'],

  chart: {
    height: 350,
    width: 1200,
    type: "line"
  },
  stroke: {
    curve:'smooth',
    width: [0]
  },
  title: {
    text: "Discharges Now"
  },
  
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#333']
  },
    dropShadow: {
        enabled: true,
        left: 2,
        top: 2,
    }
  },
  labels: [
    "01 Jan 2001",
    "02 Jan 2001",
    "03 Jan 2001",
    "04 Jan 2001",
    "05 Jan 2001",
    "06 Jan 2001",
  ],
  xaxis: {
    categories: ['12AM - 06AM','12AM - 06AM','12AM - 06AM','12AM - 06AM','12AM - 06AM','12AM - 06AM'],
  },
  grid: {
    show: true,     
    xaxis: {
      lines: {
        show: false  
       }
     },  
    yaxis: {
      lines: { 
        show: false  
       }
     },   
  },
  yaxis: [
    {
      labels: {
        show: false,
      }
    },
    {  
      opposite: true,
      labels: {
        show: false,
      }
    }
  ],
 
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'bottom'
      }
    }
  },
 
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

