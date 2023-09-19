import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SplineChart() {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [data6, setData6] = useState();
  const [data7, setData7] = useState();
  const [data8, setData8] = useState();
  const [data9, setData9] = useState();
  const [data10, setData10] = useState();
  const [data11, setData11] = useState();
  const [data121, setData121] = useState();
  const [data1211, setData1211] = useState();
  const [data1212, setData1212] = useState();
  const [data1213, setData1213] = useState();
  const [data1214, setData1214] = useState();
  const [data1215, setData1215] = useState();
  const [data1216, setData1216] = useState();
  const [data1217, setData1217] = useState();
  const [data1218, setData1218] = useState();
  const [data1219, setData1219] = useState();
  const [data12110, setData12110] = useState();
  const [data12111, setData12111] = useState();

  const fetchData = async () => {
    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 1,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData(resp.salesPrediction);
        setData121(resp.backOrder);
      });
    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 2,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData1(resp.salesPrediction);
        setData1211(resp.backOrder)
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 3,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData2(resp.salesPrediction);
        setData1212(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 4,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData3(resp.salesPrediction);
        setData1213(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 5,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData4(resp.salesPrediction);
        setData1214(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 6,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData5(resp.salesPrediction);
        setData1215(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 7,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData6(resp.salesPrediction);
        setData1216(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 8,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData7(resp.salesPrediction);
        setData1217(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 9,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData8(resp.salesPrediction);
        setData1218(resp.backOrder);
      });

    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 10,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData9(resp.salesPrediction);
        setData1219(resp.backOrder);
      });
    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 11,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData10(resp.salesPrediction);
        setData12110(resp.backOrder);
      });
    await fetch("http://192.168.0.109:8080/carpets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year: 2025,
        month: 12,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData11(resp.salesPrediction);
        setData12111(resp.backOrder);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    animationEnabled: true,

    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "Sales Predicted",
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
        name: "Backorder Predicted",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0 Units",
        // dataPoints: [
        //   { x: new Date(2024, 1, 1), y: data121 },
        //   { x: new Date(2024, 2, 1), y: data1211 },
        //   { x: new Date(2024, 3, 1), y: data1212 },
        //   { x: new Date(2024, 4, 1), y: data1213 },
        //   { x: new Date(2024, 5, 1), y: data1214 },
        //   { x: new Date(2024, 6, 1), y: data1215 },
        //   { x: new Date(2024, 7, 1), y: data1216 },
        //   { x: new Date(2024, 8, 1), y: data1217 },
        //   { x: new Date(2024, 9, 1), y: data1218 },
        //   { x: new Date(2024, 10, 1), y: data1219 },
        //   { x: new Date(2024, 11, 1), y: data12110 },
        //   { x: new Date(2024, 12, 1), y: data12111 },
        // ],
      },
      {
        type: "spline",
        name: "Units Predicted",
        // axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0.# units",
        dataPoints: [
          { x: new Date(2024, 1, 1), y: data },
          { x: new Date(2024, 2, 1), y: data1 },
          { x: new Date(2024, 3, 1), y: data2 },
          { x: new Date(2024, 4, 1), y: data3 },
          { x: new Date(2024, 5, 1), y: data4 },
          { x: new Date(2024, 6, 1), y: data5 },
          { x: new Date(2024, 7, 1), y: data6 },
          { x: new Date(2024, 8, 1), y: data7 },
          { x: new Date(2024, 9, 1), y: data8 },
          { x: new Date(2024, 10, 1), y: data9 },
          { x: new Date(2024, 11, 1), y: data10 },
          { x: new Date(2024, 12, 1), y: data11 },
        ],
      },
    ],
  };

  return (
<<<<<<< HEAD
    <div style={{ marginLeft: "14%",marginTop:'5%' }}>
      <CanvasJSChart options={options} />
=======
    <div style={{marginLeft:'15%'}}>
      <h1>.............................................................................</h1>
      <CanvasJSChart  options={options} />
>>>>>>> dd046037cf198b6cbce4562ab8914da79edccda6
    </div>
  );
}

export default SplineChart;
