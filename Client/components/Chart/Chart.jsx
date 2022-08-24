import styles from "./Chart.module.scss";
import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const Chart = ({chartData}) => {

const options ={
  aspectRatio:1.5,
    plugins: {
      responsive:true,
        tooltip: {
          mode: 'index',
          intersect: false
        },
    },hover: {
      mode: 'index',
      intersec: false
    },
    scales:{
      x:{
        ticks:{
          alignment:'center',
          
        },
        drawBorder: false,
        grid: {display: false}
      },
      y:{
        ticks: {
          stepSize:150,
          display: false},
        drawBorder: false,
        grid: {display: false},
        
      }
    }

}

  return <Line data={chartData} options={options}/>
}

export default Chart;
