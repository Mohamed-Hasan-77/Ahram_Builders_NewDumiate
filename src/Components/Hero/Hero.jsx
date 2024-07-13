
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useLanguage } from "../../contexts/LanguageContext"

import hero from "../../assets/hero2.png"
import arrow from "../../assets/arrow-down.svg"

import "./HeroStyle.scss"

export default function Hero() {

    const { t } = useTranslation();
    const { language } = useLanguage();


    useEffect(() => {

        const links = document.querySelectorAll('a[data-scroll-to]');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Adjust as needed, e.g., 'center', 'end'
                    });
                }
            });
        });
    }, [])

    return <>

        <div id="hero" className=" relative  bg-black text-white">
           <div className=" flex flex-wrap w-full h-full justify-between items-center pb-16">

                <div className="right w-full md:w-1/2 h-full order-2 md:order-1 mt-10 md:mt-0 pl-5 md:pl-0">
            
                    <img src={hero} alt="buldings" />
                    
                </div>

                <div className="left w-full md:w-1/2 flex items-center order-1 md:order-2 px-5 xl:px-0 mt-16 xl:mt-0 ">
        
                    <div  className=" ">
                        <h1 className="text-blueColor text-3xl md:text-4xl lg:text-5xl  font-bold "> مشروع دمياط الجديد</h1>
                        <h3 className=" text-3xl md:text-4xl font-bold mt-5 ">  في القرية الذكية بدمياط الجديدة</h3>
                        <div className="btn w-full flex justify-center mt-14"> 
                            <a href="#" data-scroll-to="Introduction ">
                                <button className="py-2 px-7 sm:px-16 flex justify-center items-center gap-3 rounded-full bg-primary shadow-btnShadow text-black font-bold mt-3" > 
                                    <span style={{boxShadow: "5px 6px 11px 0px inset #d3c474, -4px -4px 30px 0px inset #ffffff"}} className="flex flex-col items-center justify-center p-2 rounded-full w-10 h-10 " > 
                                        <img src={arrow} className=" invert w-7 -mb-2" alt="arrow" />  
                                        <img src={arrow} className=" invert w-7 -mt-2" alt="arrow" /> 
                                    </span> 
                                   <span>  تفاصيل مشروع   </span>
                                </button>
                            </a>
                        </div>   
                    </div>   
                

                </div>

 
            
            </div>

        </div>



    </>

}
