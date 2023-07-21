import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
  );


  export const LineChart = () => {
    const labels = getLastYearMonths();
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Yearly Views',
        },
      },
    };
  
    const data = {
      labels,
      datasets: [
        {
          label: 'Views',
          data: [1,6,5,2,3,4,6,1,15,10,4,2],
          borderColor: 'rgba(107,70,193,0.5)',
          backgroundColor: '#6b46c1',
        },
      ],
    };
  
    return <Line options={options} data={data} />;
  };

  export const DoughnutChart = () => {
    const data = {
      labels: ['Subscribed', 'Not Subscribed'],
      datasets: [
        {
          label: 'Views',
          data: [2,20],
          borderColor: ['white', 'white'],
          backgroundColor: ['rgba(55,161,105)', 'rgba(229,62,62)'],
          borderWidth: 1,
        },
      ],
    };
  
    return <Doughnut data={data} />;
  };


  function getLastYearMonths() {
    const labels = [];
  
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    const currentMonth = new Date().getMonth();
  
    const remain = 11 - currentMonth;
  
    for (let i = currentMonth; i < months.length; i--) {
      const element = months[i];
      labels.unshift(element);
      if (i === 0) break;
    }
  
    for (let i = 11; i > remain; i--) {
      if (i === currentMonth) break;
      const element = months[i];
      labels.unshift(element);
    }
  
    return labels;
  }