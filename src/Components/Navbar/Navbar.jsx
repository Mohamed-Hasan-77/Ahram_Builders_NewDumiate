import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


import { useTranslation } from "react-i18next"
import { useLanguage } from "../../contexts/LanguageContext";

import logo from "../../assets/logo.png"
import arrow from "../../assets/arrow-down.svg"


import "./navStyle.scss"

export default function Navbar() {

    const { t } = useTranslation();
    const { i18n, language, changeLanguage } = useLanguage();


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
                        block: 'start'
                    });
                }
            });
        });
    }, [])




    return <>



        <div id="Navbar" className="Navbar bg-mainBlue py-3 px-4  w-full  bg-black dir-ltr text-white">
            <div className="container flex justify-between items-center xl:px-48 ">
                <div className="logo flex items-center justify-between  w-1/2 lg:w-3/5 ">
                    <Link to={"/"} href="#" className="flex items-center ">
                        <img src={logo} className="w-28 md:w-40" alt="logo" />
                    </Link>


                    <div className=" hidden lg:flex items-center gap-5 font-bold dir-rtl">
                        <a href="#" className="  ">   من نحن  </a>
                        <a href="#" className="  ">  صور المشاريع   </a>
                        <a href="#" className="  ">   المشاريع الخاصه بنا </a>
                    </div>
                    
                </div>

                <div className=" flex items-center justify-end gap-3 md:gap-4  md:text-lg w-1/2 lg:w-2/5">
                    {/* <div className="login font-bold hidden lg:block">
                        <a href="#">
                            من نحن 
                        </a>
                    </div> */}

                    <div className="relative lg:hidden">
                        <label htmlFor="menu-toggle" className="  font-bold text-sm  md:text-lg cursor-pointer flex items-center gap-1">
                             من نحن   <img src={arrow} className=" w-5" alt="arrow" />
                        </label>
                        <input type="checkbox" id="menu-toggle" className="hidden" />
                        <div className="dropdown-menu absolute w-56 -left-16 md:left-0 z-30 mt-2 bg-black rounded-md shadow-lg hidden">
                            <a href="#" className=" p-5 text-white hover:bg-slate-700 flex items-center gap-3 text-sm md:text-base ">  من نحن  </a>
                            <a href="#" className=" p-5 text-white hover:bg-slate-700 flex items-center gap-3 text-sm md:text-base ">     صور المشاريع  </a>
                            <a href="#" className=" p-5 text-white hover:bg-slate-700 flex items-center gap-3 text-sm md:text-base ">   المشاريع الخاصه بنا  </a>
                        </div>
                    </div>


                    <div className="btn   ">
                        <a href="#" data-scroll-to="ChoosePlan">  <button className=" bg-white text-black px-5 py-2 md:px-14 md:py-2  font-bold  rounded-md ">  تواصل معنا </button> </a>
                    </div>
                

                </div>

            </div>
        </div>

    </>
}

