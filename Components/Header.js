import React from 'react'
import notification from '../public/notification.svg';
import Image from 'next/image';
import User from './User';

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="font-bold ">Dashboard</h2>
      <div className="flex gap-7 ">
        <div className="flex justify-center items-center lg:w-[200px] sm:w- bg-white p-1 rounded-[10px]">
          <input
            type="text"
            className={` text-[#B0B0B0]  w-full h-full  focus:outline-none `}
            placeholder="search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Image src={notification} alt="notification" />
        <User/>
      </div>
    </div>
  );
}
