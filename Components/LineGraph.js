'use client';
import React, { createContext } from 'react';
import { Line } from 'react-chartjs-2';
import chevron from '../public/chevron.svg';
import Image from 'next/image';
import Chart, {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js/auto';


Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  'week 5',
  
];
const yAxisValues = [0, 100, 200, 300, 400, 500];

const context = createContext;

const data = {
  labels: labels,
  datasets: [
    {
      label: 'guest',
      backgroundColor: '#9BDD7C',
      borderColor: '#9BDD7C',
      data: [100, 200, 400, 250, 150],
      tension: 0.4,
    },
    {
      label: 'user',
      backgroundColor: '#E9A0A0',
      borderColor: '#E9A0A0',
      data: [100, 400, 200, 250, 500],
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },

  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    // yAxis: {
    //   display: false,
    // },
  },
};

const LineChart = () => {
  return (
    <div className=" rounded-[20px] bg-white p-10 w-full ">
      <header className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">Activities</h1>
          <p className="text-sm text-[#858585] p-2 ">May-June 2021 </p>
        </div>
        <div className="flex gap-[35px] font-special">
          <p className="flex items-center gap-[10px] text-sm justify-center">
            <span className=" w-[10px] h-[10px] block bg-[#E9A0A0] rounded-full"></span>
            Guest
          </p>
          <p className="flex items-center gap-[10px] text-sm justify-center">
            <span className=" w-[10px] h-[10px] block bg-[#9BDD7C] rounded-full"></span>
            User
          </p>
        </div>
      </header>
      <Line
        className="max-h-[250px] w-full"
        data={data}
        options={chartOptions}
      />
    </div>
  );
};

export default LineChart;
