'use client';
import React, { createContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import chevron from '../public/chevron.svg';
import Image from 'next/image';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
  datasets: [
    {
      label: '',
      data: [55, 13, 14],
      backgroundColor: [
        'rgba(152, 216, 158, 1)',
        'rgba(246, 220, 125, 1)',
        'rgba(238, 132, 132, 1)',
      ],
      borderColor: [
        'rgba(152, 216, 158, 1)',
        'rgba(246, 220, 125, 1)',
        'rgba(238, 132, 132, 1)',
      ],
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
};

const PieChart = () => {
  return (
    <div className=" rounded-[20px] bg-white p-10  gap-10 w-1/2">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Top products</h1>
        <p className="text-sm text-[#858585] p-2 flex gap-1">May-June 2021 <Image src={chevron} alt=""/> </p>
      </div>
      <div className="flex gap-[42px] pt-5">
        <Pie
          className="!h-[120px]"
          data={data}
          options={chartOptions}
        />
        <div className="flex gap-[10px] flex-col">
          <p className="flex items-center gap-[10px] text-sm justify-start">
            <span className=" w-[10px] h-[10px] block bg-[#98D89E] rounded-full"></span>
            <div>
              <p className='font-bold text-sm'>Basic Tees</p>
              <p className="font-special text-[#858585] ">55%</p>
            </div>
          </p>
          <p className="flex items-center gap-[10px] text-sm justify-start">
            <span className=" w-[10px] h-[10px] block bg-[#F6DC7D] rounded-full"></span>
            <div>
              <p className='font-bold text-sm'>Custom Short Pants</p>
              <p className="font-special text-[#858585] ">31%</p>
            </div>
          </p>
          <p className="flex items-center gap-[10px] text-sm justify-start">
            <span className=" w-[10px] h-[10px] block bg-[#EE8484] rounded-full"></span>
            <div>
              <p className='font-bold text-sm'>Super Hoodies</p>
              <p className="font-special text-[#858585] ">14%</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
