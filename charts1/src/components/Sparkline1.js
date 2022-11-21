import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

function Sparkline1({ yAxis, totalAdults }) {
  useEffect(() => {
    var options = {
      series: [
        {
          data: yAxis,
        },
      ],
      chart: {
        type: "area",
        height: 500,
        width: 1000,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#DCE6EC"],
      title: {
        text: totalAdults,
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Total adult visitors over given time",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#sparkline1"), options);
    chart.render();
  });
  return (
    <div
      id="sparkline1"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    ></div>
  );
}

export default Sparkline1;
