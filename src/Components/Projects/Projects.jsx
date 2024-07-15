import React, { useEffect } from 'react'
import ProjectSlider from './ProjectsSlider';


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
    <div id='Projects' className=' py-10 md:py-20 md:pb-28 bg-black overflow-hidden '>
        <div className="container ">
            <h2 className=' text-primary font-bold text-3xl md:text-4xl text-center '> صور من مشاريعنا </h2>

            <div className="projects mt-10">

                
                    <ProjectSlider />
               
            </div>
        </div>
    </div>
  )
}
