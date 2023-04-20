import React from 'react'; 
import { useState, useEffect } from 'react'
import SideBar from '../Components/Sidebar';
import revene from '../public/revenue.svg';
import transaction from '../public/transaction.svg';
import like from '../public/like.svg';
import user from '../public/users.svg';
import menu from '../public/menu.svg';
import Header from '../Components/Header';
import MiniCard from '../Components/MiniCard';
import LineChart from '../Components/LineGraph';
import PieChart from '../Components/PieChart';
import Schedule from '../Components/Schedule';


export default function Dashboard() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  	useEffect(() => {
		// Updating a state causes a re-render
		setInitialRenderComplete(true);
	}, [])
  if (!initialRenderComplete) {
    // Returning null will prevent the component from rendering, so the content will simply be missing from
    // the server HTML and also wont render during the first client-side render.
    return null;
  } else {
    
    const topCard = [
      {
        title: 'Total Revenues',
        number: '$2,129,430',
        color: 'bg-firstCard',
        symbol: revene,
      },
      {
        title: 'Total Transactions',
        number: '1,520',
        color: 'bg-secondCard',
        symbol: transaction,
      },
      {
        title: 'Total Revenues',
        number: '$2,129,430',
        color: 'bg-thirdCard',
        symbol: like,
      },
      {
        title: 'Total Revenues',
        number: '$2,129,430',
        color: 'bg-fourthCard',
        symbol: user,
      },
    ];
    return (
      <div className="flex gap-9 p-10">
        <div className="hidden lg:block ">
          <SideBar />
        </div>
        <div className=" w-4/5  flex flex-col gap-5 justify-center">
          <Header/>
          <div className="grid  gap-[36.04px] lg:grid-cols-4 md:grid-cols-2 ">
            {topCard.map((topCard, index) => {
              return <MiniCard key={index} {...topCard} />;
            })}
          </div>
          <LineChart />
          <div className="flex gap-9 ">
            <PieChart />
            <Schedule />
          </div>
        </div>
      </div>
    );
  }
}

//grid-template-rows: 100px 200px 150px;
