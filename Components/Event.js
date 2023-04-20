import React from 'react'

export default function Event({title, timing, color, venue}) {
  return (
    <div className={`font-special border-l-4 pl-[15px] ${color} mb-3`}>
      <h1 className="text-[#666666] font-bold text-sm">
        {title}
      </h1>
        <div className="text-xs text-[#999999]">{ timing}</div>
      <p className="text-xs text-[#999999]">{venue} </p>
    </div>
  );
}
