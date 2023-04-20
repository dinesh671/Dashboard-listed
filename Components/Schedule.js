import React from 'react'
import chevron from '../public/chevron.svg'
import Image from 'next/image';
import Event from './Event';

const events = [
  {
    title: 'Meeting with suppliers from Kuta Bali',
    timing: '14.00-15.00',
    color: 'border-l-[#9BDD7C]',
    venue: 'at Sunset Road, Kuta, Bali ',
  },
  {
    title: 'Check operation at Giga Factory 1',
    timing: '18.00-20.00',
    color: 'border-l-[#6972C3]',
    venue: 'at Central Jakarta',
  },
];

export default function Schedule() {
  return (
    <div className="w-1/2 bg-white py-[26px] px-9 rounded-[20px]">
      <header className="flex justify-between items-center w-full">
        <h1 className="font-bold text-lg">Today&apos;s Schedule</h1>
        <p className="text-[#858585] flex gap-1 items-center">
          See All <Image src={chevron} alt="" className="-rotate-90" />
        </p>
      </header>
      <div className='my-[24px]'>
        {events.map((events, index) => {
    return <Event key={index} {...events} />;
  })}
      </div>
    </div>
  );
}

