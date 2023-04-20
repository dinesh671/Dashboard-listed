import React from 'react';
import dashbordlogo from '../public/dashbordlogo.svg';
import icon2 from '../public/icon2.svg';
import icon3 from '../public/icon3.svg';
import icon4 from '../public/icon4.svg';
import icon5 from '../public/icon5.svg';
import Image from 'next/image';

export default function SideBar() {
  return (
    <div className=" md:block  bg-black block border-box w-[260px] min-h-screen text-white py-[50px] px-[50px] rounded-[30px]">
      <h1 className="text-white font-bold text-4xl hover:cursor-pointer">
        Board.
      </h1>
      <nav className=" pt-[60px] grid grid-rows-2">
        <ol className="flex flex-col gap-7 hover:cursor-pointer">
          <li className="flex gap-5 items-center">
            <Image src={dashbordlogo} alt="logo" />
            <p>Dashboard</p>
          </li>
          <li className="flex gap-5 items-center">
            <Image src={icon2} alt="logo" />
            <p>Transactions</p>
          </li>
          <li className="flex gap-5 items-center">
            <Image src={icon3} alt="logo" />
            <p>Schedules</p>
          </li>
          <li className="flex gap-5 items-center">
            <Image src={icon4} alt="logo" />
            <p>Users</p>
          </li>
          <li className="flex gap-5 items-center">
            <Image src={icon5} alt="logo" />
            <p>Settings</p>
          </li>
        </ol>

        <ol className="flex flex-col gap-5 self-end hover:cursor-pointer focus:font-bold ">
          <li>Help</li>
          <li>Contact Us</li>
        </ol>
      </nav>
    </div>
  );
}
