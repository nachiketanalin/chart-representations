import React from 'react'
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts'

function Sparkline1({yAxis, totalAdults}) {

  function printGraph(){
    var options = {
        series: [{
        data: yAxis
      }],
        chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0
      },
      colors: ['#DCE6EC'],
      title: {
        text: totalAdults,
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'Total adult visitors over given time',
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
  }
  return (
    <div id='chart'>
        <button onClick={printGraph}>SUBMIT</button>
        {/* <div id="charts">{printGraph}</div>         */}
    </div>
  )
}

export default Sparkline1