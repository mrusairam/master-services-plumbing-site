import React from 'react'

export default function BottomBar() {
  return (
    <div className="flex w-screen h-10">
    {/* Left part */}
    <div className="rounded-md overflow-hidden w-1/4 h-full">
      <div className="bg-[#f39200] w-full h-full [clip-path:polygon(0_0,100%_0,98%_100%,0%_100%)]"></div>
    </div>
  
    {/* Right part */}
    <div className="rounded-md overflow-hidden w-3/4 h-full">
      <div className="bg-[#2269cf] w-full h-full [clip-path:polygon(0.5%_0,100%_0,100%_100%,0%_100%)]"></div>
    </div>
  </div>
  )
}