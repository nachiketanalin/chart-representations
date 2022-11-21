import React, { useEffect } from 'react'
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts'

function ColumnChart({xAxis, yAxis}) {

  useEffect(() => {
      // console.log("hi");
      var options = {
        series: [{
        name: 'Total visitors',
        data: yAxis
      }],
        chart: {
        height: 500,
        width : 1000,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //   return val + "%";
        // },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: xAxis,
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        //   formatter: function (val) {
        //     return val + "%";
        //   }
        }
      
      },
      title: {
        text: 'Column Chart: Number of visitors per country',
        floating: false,
        offsetY: 480,
        align: 'center',
        style: {
          color: '#444'
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#columnchart"), options);
      chart.render();
  });
  return (
    <div id='columnchart' style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:'80vh',
    }}>
    </div>
  )
}

export default ColumnChart