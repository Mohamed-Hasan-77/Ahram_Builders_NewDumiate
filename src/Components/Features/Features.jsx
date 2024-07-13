import React from 'react'

import plane from "../../assets/Group 151.png"
import bus from "../../assets/Group 153.png"
import metro from "../../assets/Group 152.png"
import map from "../../assets/Group 12479.png"

import "./FStyle.scss"

export default function Features() {
  return (
    <div className='Features  py-12'>
        <div className="container">
            <h2 className=' font-bold text-3xl md:text-5xl text-center mb-16 '> مميزات المشروع   </h2>

            <div className="wrapper flex justify-between flex-wrap ">

                <div className="right w-full md:w-1/2 md:p-10 order-2 md:order-1">  
                    <img src={map} className='' alt="map" />
                 </div>

                <div className="left w-full md:w-1/2 flex flex-col items-center justify-center  gap-10 order-1 md:order-2">
                    <div className="box flex flex-col items-center gap-3 ">
                        <img src={plane} className='w-24' alt="plane" />
                        <h3 className='text-3xl '> 13 Minutes  </h3>
                        <span style={{color: "#909090"}} className='text-xl font-bold'> Airport </span>
                    </div>

                    <div className="box flex flex-col items-center gap-3 ">
                        <img src={bus} className='w-24' alt="plane" />
                        <h3 className='text-3xl '> 8 Minutes  </h3>
                        <span style={{color: "#909090"}} className='text-xl font-bold'> Bus Stand </span>
                    </div>

                    <div className="box flex flex-col items-center gap-3 ">
                        <img src={metro} className='w-24' alt="plane" />
                        <h3 className='text-3xl '> 10 Minutes  </h3>
                        <span style={{color: "#909090"}} className='text-xl font-bold'> Metro </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
