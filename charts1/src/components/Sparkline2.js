import React, { useEffect } from 'react'
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts'

function Sparkline2({yAxis, totalChildren}) {

  useEffect(()=>{
    var options = {
        series: [{
        data: yAxis
      }],
        chart: {
        type: 'area',
        height: 160,
        with : 1000,
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
        text: totalChildren,
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'Total children visitors over given time',
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#sparkline2"), options);
      chart.render();
  });
  return (
    <div id='sparkline2' style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:'80vh',
    }}>
        {/* <button onClick={printGraph}>SUBMIT</button> */}
        {/* <div id="charts">{printGraph}</div>         */}
    </div>
  )
}

export default Sparkline2