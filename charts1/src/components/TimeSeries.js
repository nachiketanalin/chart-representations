import React, {useState, useEffect} from 'react'
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts'

function TimeSeries({xAxis, yAxis, mounted, setMounted}) {

  // function printGraph(){
  //     console.log("hi");
  //     var options = {
  //         series: [{
  //         name: 'Number of visitors',
  //         data: yAxis
  //       }],
  //         chart: {
  //         type: 'area',
  //         stacked: false,
  //         height: 350,
  //         width : 900
  //       },
  //       dataLabels: {
  //         enabled: false
  //       },
  //       markers: {
  //         size: 0,
  //       },
  //       title: {
  //         text: 'Time Series : Number of visitors per day',
  //         align: 'middle'
  //       },
  //       fill: {
  //         type: 'gradient',
  //         gradient: {
  //           shadeIntensity: 1,
  //           inverseColors: false,
  //           opacityFrom: 0.5,
  //           opacityTo: 0,
  //           stops: [0, 90, 100]
  //         },
  //       },
  //       yaxis: {
  //         title: {
  //           text: 'Number of visitors per day'
  //         },
  //       },
  //       xaxis: {
  //         type: 'category',
  //         categories : xAxis,
  //         position: 'bottom',
  //         title: {
  //           text: 'Dates',
  //         },
  //         y : 400,
          
  //         offsetX: 0,
  //         offsetY: 0,
  //       },
  //       tooltip: {
  //         shared: true,
  //       }
  //     };
  //     console.log(xAxis);
  //     var chart = new ApexCharts(document.querySelector("#chart"), options);
  //     chart.render();
  // }

  
  var options = {
    series: [{
    name: 'Number of visitors',
    data: yAxis
  }],
    chart: {
    type: 'area',
    stacked: false,
    height: 350,
    width : 900
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Time Series : Number of visitors per day',
    align: 'middle'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    title: {
      text: 'Number of visitors per day'
    },
  },
  xaxis: {
    type: 'category',
    categories : xAxis,
    position: 'bottom',
    title: {
      text: 'Dates',
    },
    y : 400,
    
    offsetX: 0,
    offsetY: 0,
  },
  tooltip: {
    shared: true,
  }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);

  // useEffect(() => {

  //     // if (!mounted) setMounted(true);
  //     // else {
          
  //       chart.render();
  //     // }
  //     console.log("hi");
  //     // console.log(mounted);
        
  // }, []);

  return (
    <div id='chart'>
        {/* <button onClick={printGraph}>SUBMIT</button> */}
        {/* <div id="chart">{printGraph}</div>         */}
        {chart.render()}
    </div>
  )
}

export default TimeSeries