import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SplineChart() {
  const options = {
    animationEnabled: true,

    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "No of Shipments",
      includeZero: false,
    },
    axisY2: {
      titleFontColor: "#51CDA0",
      lineColor: "#51CDA0",
      labelFontColor: "#51CDA0",
      tickColor: "#51CDA0",
    },
    data: [
      {
        type: "spline",
        name: "Units Sold",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0 Units",
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 1 },
          { x: new Date(2017, 1, 1), y: 2 },
          { x: new Date(2017, 2, 1), y: 3 },
          { x: new Date(2017, 3, 1), y: 4 },
          { x: new Date(2017, 4, 1), y: 1 },
          { x: new Date(2017, 5, 1), y: 2 },
          { x: new Date(2017, 6, 1), y: 3 },
          { x: new Date(2017, 7, 1), y: 4 },
          { x: new Date(2017, 8, 1), y: 1 },
          { x: new Date(2017, 9, 1), y: 2 },
          { x: new Date(2017, 10, 1), y: 3 },
          { x: new Date(2017, 11, 1), y: 4 },
        ],
      },
      {
        type: "spline",
        // name: "Profit",
        // axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 4 },
          { x: new Date(2017, 1, 1), y: 2 },
          { x: new Date(2017, 2, 1), y: 3 },
          { x: new Date(2017, 3, 1), y: 1 },
          { x: new Date(2017, 4, 1), y: 4 },
          { x: new Date(2017, 5, 1), y: 2 },
          { x: new Date(2017, 6, 1), y: 3 },
          { x: new Date(2017, 7, 1), y: 1 },
          { x: new Date(2017, 8, 1), y: 4 },
          { x: new Date(2017, 9, 1), y: 4 },
          { x: new Date(2017, 10, 1), y: 1 },
          { x: new Date(2017, 11, 1), y: 4 },
          
        ],
      },
    ],
  };

  return (
    <div >
      <h1>.............................................................................</h1>
      <CanvasJSChart  options={options} />
    </div>
  );
}

export default SplineChart;