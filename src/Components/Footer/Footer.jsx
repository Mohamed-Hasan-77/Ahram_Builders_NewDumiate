import { useTranslation } from "react-i18next";

import insta from "../../assets/social-instagram-svgrepo-com (1).svg"
import youtube from "../../assets/youtube-svgrepo-com.svg"
import whatsapp from "../../assets/whatsApp.png"
import logo from "../../assets/logo3.png"


export default function Footer() {

    const { t } = useTranslation();


    return (
        <footer id="footer" className="py-12 dir-ltr text-center pt-20">
            <div className=" container top flex justify-between items-center flex-wrap ">
                <div className="left w-full md:w-1/2 mt-7 flex flex-col items-center">
                    <h4 className="text-3xl font-bold">  تواصل معنا </h4>
                    <div className="social p-3   flex  items-center gap-3">
                        {/* <a href="#" className="bg-black flex justify-center items-center rounded-xl p-2 "> <img src={insta} className="w-5 " alt="insta" /> </a> */}
                        {/* <a href="#" className="bg-black flex justify-center items-center rounded-xl p-2 "> <img src={youtube} className="w-5 " alt="insta" /> </a> */}
                        <a href="https://wa.me/201205234797" className=" "> <img src={whatsapp} className="w-14 " alt="insta" /> </a>
                    </div>
                </div>

                {/* <div className="center w-full md:w-1/2 mt-7 lg:pr-20 ">
                    <h4 className="text-3xl font-bold"> Contact Us </h4>
                    <p className="mt-3 text-xl ">  نهاية شارع الصعيدي القديم دمياط الجديدة اعلي Pizza Party, Dumyat Al Jadidah, Egypt </p>
                    <p className="mt-3 text-xl"> 01205234797 </p>
                </div> */}

                <div className=" w-full md:w-1/2 mt-7 flex justify-center">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="copyRight py-7 mt-10 border-t border-gray-400 text-center">
                    © 2024  | All Rights Reserved to <span className="font-bold"> بناة الأهرام العقارية </span> 
            </div>
            
        </footer>
    )
}
