import React, { useEffect, useState } from 'react'

import arrow from "../../assets/arrow-down.svg"
import "./PriceStyle.scss"

export default function Price() {

  const [rangeValue, setRangeValue] = useState("100")
  const [InstallmentValue, setInstallmentValue] = useState("3")
  const [paymentValue, setpaymentValue ] = useState("50")
  const [Yearly , setYearly] = useState("12")

  const handleChange = (e) => {
    // e.target.classlist 
    if (e.target.classList.value == "space") {
      setRangeValue(e.target.value)
    } else if(e.target.classList.value == "Installment") {
      setInstallmentValue(e.target.value)
    }else if(e.target.classList.value == "payment") {
      setpaymentValue(e.target.value)
    }else if(e.target.classList.value == "Yearly") {
      setYearly(e.target.value)
    }
   
    
    
};



useEffect(()=> {
  let RangeSlider = (function() {
    let elRangeInputs = document.querySelectorAll(".range");
  
    function setProgress(elTarget) {
      let elRangeBar = elTarget.parentElement;
      let intThumbWidth = elRangeBar.clientHeight * 3;
      let intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
      let intThumbWidthOffset = intThumbWidth / 2;
      
      let intProgressPosition = (elTarget.value - elTarget.min) / (elTarget.max - elTarget.min);
      let intRangePosition = (intRangeBarWidth * intProgressPosition) + intThumbWidthOffset;
      
  
      elRangeBar.style.background =
        "linear-gradient(to right, #FEEB88 " +
        intRangePosition + "px, #e2e2ea " +
        intRangePosition + "px"; 
        elRangeBar.style.outline = "2px solid white"
        elRangeBar.style.position = "relative"
    }
  
    for (let i = 0; i < elRangeInputs.length; i++) {
      elRangeInputs[i].firstElementChild.addEventListener("input", function() {
        setProgress(this);
      });
  
      setProgress(elRangeInputs[i].firstElementChild);
    }
  })();
  
}, [])

  return (
    <div id='price' className='pb-16 pt-7 md:pt-16 bg-black'>
         <div className="container">
            <h2 className=' font-bold text-3xl md:text-5xl  mb-24 text-primary  pr-10'> اعرف سعر بيتك  </h2>

            <div className=" flex justify-between flex-wrap ">

                <div className="right w-full xl:w-1/2  xl:pr-16">  
                    <div style={{backgroundColor: "F3F3F3"}} className="box w-full shadow-btnShadowSec rounded-2xl bg-white text-black p-5 md:p-10">
                            <div className="prog font-bold text-lg w-full">
                                <h4  className=''> المساحة  </h4>

                                <div className="rangInput relative mt-3 dir-ltr">
                                    <div className="toltipFat text-center  p-2 text-sm "> {rangeValue}م</div>
                                    <div class="range">
                                        <input type="range" className='space'  onChange={handleChange} min="100" max="500" step="100"/>
                                      </div>
                                  </div>

                            </div>

                            <div className="prog font-bold text-lg w-full">
                                <h4  className=''> سنوات التقسيط  </h4>

                                <div className="rangInput relative mt-3 dir-ltr">
                                    <div className="toltipFat text-center  p-2 text-sm "> {InstallmentValue} سنوات </div>
                                    <div class="range">
                                        <input type="range" className='Installment'  onChange={handleChange} min="1" max="3" step="1"/>
                                      </div>
                                  </div>

                            </div>

                            <div className="prog font-bold text-lg w-full">
                                <h4  className=''> المقدم  </h4>

                                <div className="rangInput relative mt-3 dir-ltr">
                                    <div className="toltipFat text-center  p-2 text-sm "> {paymentValue}%</div>
                                    <div class="range">
                                        <input type="range" className='payment'  onChange={handleChange} min="10" max="60" step="10"/>
                                      </div>
                                  </div>

                            </div>

                            <div className="prog font-bold text-lg w-full">
                                <h4  className=''> عدد الأقساط / سنوي  </h4>

                                <div className="rangInput relative mt-3 dir-ltr">
                                    <div className="toltipFat text-center  p-2 text-sm "> {Yearly} </div>
                                    <div class="range">
                                        <input type="range" className='Yearly'  onChange={handleChange} min="1" max="12" step="1"/>
                                      </div>
                                  </div>

                            </div>
                     </div>
                 </div>

                <div className="left w-full xl:w-1/2 flex flex-wrap items-center justify-center  text-2xl mt-10 lg:mt-0 ">
                    {/* <div className="box w-full  lg:w-1/2 p-5  font-bold ">
                      <div className=" bg-white rounded-3xl  relative flex justify-between shadow-btnShadowSec">
                        
                              <select className="appearance-none flex relative w-full rounded-3xl py-10 px-12 -ml-4">
                                <option selected className='text-black'>المنطقة 1</option>
                                <option className='text-black'>المنطقة 2</option>
                                <option className='text-black'>المنطقة 3</option>
                              </select>
                              <div className="absolute inset-y-0 left-0 flex rounded-l-3xl justify-center items-center px-2 pointer-events-none bg-primary w-1/3 ">
                                  <img src={arrow} className='w-14' alt="arrow" />
                              </div>

                      </div>
                    </div> */}

                    <div className="box w-full  lg:w-1/2 p-5 ">
                      <div className="wrapper shadow-btnShadowSec bg-white rounded-3xl text-xl lg:text-3xl py-4 px-12 relative flex flex-col items-center justify-center">
                        <h3 className='font-bold'> سعر المتر </h3>
                        <p className='mt-3'> 36,00,000   </p>
                      </div>
                    </div>


                    <div className="box w-full  lg:w-1/2 p-5 ">
                      <div className="wrapper shadow-btnShadowSec bg-white rounded-3xl text-xl lg:text-3xl py-4 px-12 relative flex flex-col items-center justify-center">
                        <h3 className='font-bold'> الدفع الشهري </h3>
                        <p className='mt-3'> 40,000   </p>
                      </div>
                    </div>


                    <div className="box w-full  lg:w-1/2 p-5 ">
                      <div className="wrapper shadow-btnShadowSec bg-white rounded-3xl text-xl lg:text-3xl py-4 px-12 relative flex flex-col items-center justify-center">
                        <h3 className='font-bold'> الباقي</h3>
                        <p className='mt-3'> 36,00,000   </p>
                      </div>
                    </div>


                    <div className="box w-full  lg:w-1/2  p-5 ">
                      <div className="wrapper shadow-btnShadowSec bg-white rounded-3xl text-xl lg:text-3xl py-4 px-12 relative flex flex-col items-center justify-center">
                        <h3 className='font-bold'> الاجمالي </h3>
                        <p className='mt-3'>  6,400,000 EG   </p>
                      </div>
                    </div>

                    
                </div>

            </div>
        </div>
    </div>
  )
}
