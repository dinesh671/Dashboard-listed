import React from 'react';
import revene from '../public/revenue.svg';
import Image from 'next/image';

export default function MiniCard({ title, number, color, symbol }) {
  return (
    <div
      className={`max-w-[221px] h-[120px] ${color}  py-5 px-5 rounded-[10px] grid `}
    >
      <Image src={symbol} alt="logo" className=" justify-self-end" />
      <div className="">
        <p className="font-special text-xs p-1">{title}</p>
        <h1 className="text-2xl font-bold">{number}</h1>
      </div>
    </div>
  );
}
