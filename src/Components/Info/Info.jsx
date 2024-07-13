import React from 'react'

import imgBox1 from "../../assets/Rectangle 144 (1).png"
import imgBox4 from "../../assets/Rectangle 144 (3).png"

export default function Info() {
  return (
    <div className='bg-black text-black py-10'>
        <div className="container flex justify-center items-center flex-wrap ">
            
            <div className="box w-full lg:w-1/2  lg:p-5  ">
                <div className="wrapper flex justify-between flex-wrap  shadow-btnShadowSec rounded-2xl bg-secondery2 ">
                    <div className="text w-full md:w-1/2 py-3 md:py-7 pr-5 order-2 md:order-1 ">
                      <p style={{lineHeight: "1.7"}} className='leading-loose text-base md:text-xl lg:text-2xl font-bold '> 
                         القرية الذكية أول مطل بحر.
                          تم البدا  فيها الإنشاءات
                          مساحة 151متر 
                          سعر المتر 26 ألف
                          الدور الأرضي سعر المتر 23ألف
                          والبدروم 8
                          مقدم 50% وقسط على سنة ونص 
                        </p>
                    </div>

                    <div className="img w-full md:w-1/2 flex flex-col items-center pb-0 pt-7 md:py-7 order-1 md:order-2 ">
                      <img src={imgBox1} alt="project1" />
                      <h4 className=' text-2xl font-bold mt-3'> القطعة 62  </h4>
                    </div>
                </div>
            </div>

            <div className="box w-full mt-7 lg:mt-0 lg:w-1/2  lg:p-5  ">
                <div className="wrapper flex justify-between flex-wrap  shadow-btnShadowSec rounded-2xl bg-secondery2 ">
                    <div className="text w-full md:w-1/2 py-3 md:py-7 pr-5 order-2 md:order-1 ">
                      <p style={{lineHeight: "1.7"}} className='leading-loose text-base md:text-xl lg:text-2xl font-bold '> 
                      المكان :غرب حورس أول مطل دولي 
                      جاهزة إنشاءات، 
                      متاح  شقتين الأرضي بالبدروم 
                      مساحة الشقة 164.5-
                      مساحة البدروم 142
                      سعر المتر في الشقة 23 
                      والبدروم 7.5 
                      مقدم 60% وقسط على سنة
                        </p>
                    </div>

                    <div className="img w-full md:w-1/2 flex flex-col items-center pb-0 pt-7 md:py-7 order-1 md:order-2 ">
                      <img src={imgBox1} alt="project1" />
                      <h4 className=' text-2xl font-bold mt-3'> القطعة 52  </h4>
                    </div>
                </div>
            </div>

            <div className="box w-full mt-7 lg:mt-0 lg:w-1/2  lg:p-5  ">
                <div className="wrapper flex justify-between flex-wrap  shadow-btnShadowSec rounded-2xl bg-secondery2 ">
                    <div className="text w-full md:w-1/2 py-3 md:py-7 pr-5 order-2 md:order-1 ">
                      <p style={{lineHeight: "1.7"}} className='leading-loose text-base md:text-xl lg:text-2xl font-bold '> 
                      القطعتين 5-6 H القرية الذكية،  <br/>
                      سعر المتر 26
                        </p>
                    </div>

                    <div className="img w-full md:w-1/2 flex flex-col items-center pb-0 pt-7 md:py-7 order-1 md:order-2 ">
                      <img src={imgBox1} alt="project1" />
                      <h4 className=' text-2xl font-bold mt-3'> القطعة 652  </h4>
                    </div>
                </div>
            </div>


            <div className="box w-full mt-7 lg:mt-0 lg:w-1/2  lg:p-5  ">
                <div className="wrapper flex justify-between flex-wrap  shadow-btnShadowSec rounded-2xl bg-secondery2 ">
                    <div className="text w-full md:w-1/2 py-3 md:py-7 pr-5 order-2 md:order-1 ">
                      <p style={{lineHeight: "1.7"}} className='leading-loose text-base md:text-xl lg:text-2xl font-bold '> 
                      القرية الذكية متاح كل الأدوار.
                      مساحات 205متر - 210متر 
                      الارضي 197_190متر
                      الشقق كلها نواصي
                      والقطعة مميزة  وتقسيمة الشقة 
                      سعر المتر 22ألف كل الأدوار 
                      والبدروم 7.5
                      مقدم 40% وقسط على سنتين
                        </p>
                    </div>

                    <div className="img w-full md:w-1/2 flex flex-col items-center pb-0 pt-7 md:py-7 order-1 md:order-2 ">
                      <img src={imgBox4} alt="project1" />
                      <h4 className=' text-2xl font-bold mt-3'> القطعة 83  </h4>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
