import React, { Component } from "react";
import { Chart } from '@bit/primefaces.primereact.chart';
//https://bit.dev/primefaces/primereact/chart

const data = {
  labels: ['รอดำเนินการ', 'เสร็จสิ้น'],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ['#BB0000', '#0000BB', '#FFCE56'],
      hoverBackgroundColor: ['#000011', '#000011', '#00FF00']
    }
  ]
};

class Piechart extends Component {
 
  render() {
    return (
      <div className="container">
      <Chart type='pie' data={data} />
      <p>รอรับค่า</p>
      </div>
    );
  }
}
export default Piechart;
