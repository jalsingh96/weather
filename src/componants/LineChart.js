import React, { useDebugValue, useEffect, useState} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './componant.css';
const LineChart = (props) => {
 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      
      title: {
        display: false,
        text: '',
      },
    },
  };
  
  const labels = ['7 PM', '10 PM', '1 AM', '4 AM', '7 AM', '10 AM', '1 PM', '4 PM'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Temprature',
        data: [props.data.temp1,props.data.temp2,props.data.temp3,props.data.temp4,props.data.temp5,props.data.temp6,props.data.temp7,props.data.temp8],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };
 
  
    
   
    return(
        <div style={{padding:"20px"}}>
             <Line  height={50}  options={options} data={data} />
        </div>
        
      
        
    )
}

export default LineChart;