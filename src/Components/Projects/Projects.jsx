import React, { useEffect } from 'react'
import project from "../../assets/Rectangle 194 (1).png"
import sliderImg1 from "../../assets/download 333(4).png"
import sliderImg2 from "../../assets/download (43554).png"
import sliderImg3 from "../../assets/download (34344).png"
import sliderImg4 from "../../assets/download (4)324.png"
import sliderImg5 from "../../assets/download32323.png"

export default function Projects() {

    useEffect(()=> {
        const wrappers = document.querySelectorAll('.wrappers');
        wrappers.forEach(wrapper => {
            wrapper.addEventListener('click', function() {
              wrappers.forEach((item) => {
                item.classList.remove("active");
              } );
              this.classList.add("active");
            });
          });

    }, [])
  return (
    <div className='py-16 bg-black overflow-hidden '>
        <div className="container ">
            <h2 className=' text-primary font-bold text-3xl md:text-4xl text-center '> صور المشروع </h2>

            <div className="projects">

                <div className="img flex justify-center pt-7 lg:p-14">
                    <img src={project} alt="project" />
                </div>

                <div className="slider flex items-center justify-center flex-wrap  mt-10"> 
                    <div className="sliderBox w-1/5 lg:w-1/6  md:px-5 ">
                        <div className="wrappers cursor-pointer border-2 lg:border-4 border-white shadow-btnShadow rounded-full w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden transition-all duration-200">
                            <img src={sliderImg1} className='w-full h-full object-none' alt="sliderImg1" />
                        </div>
                    </div>

                    <div className="sliderBox w-1/5 lg:w-1/6 px-1 md:px-5 ">
                        <div className="wrappers cursor-pointer border-2 lg:border-4 border-white shadow-btnShadow rounded-full w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden transition-all duration-200">
                            <img src={sliderImg4} className='w-full h-full object-none' alt="sliderImg1" />
                        </div>
                    </div>

                    <div className="sliderBox w-1/5 lg:w-1/6 px-1 md:px-5 ">
                        <div className="wrappers cursor-pointer border-2 lg:border-4 border-white shadow-btnShadow rounded-full w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden transition-all duration-200">
                            <img src={sliderImg3} className='w-full h-full object-none' alt="sliderImg1" />
                        </div>
                    </div>

                    <div className="sliderBox w-1/5 lg:w-1/6 px-1 md:px-5 ">
                        <div className="wrappers cursor-pointer border-2 lg:border-4 border-white shadow-btnShadow active rounded-full w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden transition-all duration-200">
                            <img src={sliderImg5} className='w-full h-full object-none' alt="sliderImg1" />
                        </div>
                    </div>

                    <div className="sliderBox w-1/5 lg:w-1/6 md:px-5 ">
                        <div className="wrappers cursor-pointer border-2 lg:border-4 border-white shadow-btnShadow rounded-full w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden transition-all duration-200">
                            <img src={sliderImg2} className='w-full h-full object-none' alt="sliderImg1" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
