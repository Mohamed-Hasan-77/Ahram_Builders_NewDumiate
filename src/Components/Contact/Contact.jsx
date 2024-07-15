import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import arrow from "../../assets/arrow-down.svg"
import success from "../../assets/sucess.json"


import "./ContactStyle.scss"
import { useRef } from 'react';
import Lottie from 'lottie-react';
import axios from 'axios';

export default function Contact() {
    const [phoneNumber, setPhoneNumber] = useState("");


    function handlePhoneNumber(value) {
        setPhoneNumber(value)
    }

    function handlePhoneNumber(value) {
        setPhoneNumber(value)
    }

    const nameInputRef = useRef(null);
    const messageInputRef = useRef(null);


    async function senUserData(userData) {

        // try and catch if you are not sure if there will be an error with api 
        try {
            let { data } = await axios.post("https://sheetdb.io/api/v1/di6m1d7w47yqw", userData);

            // catch the error 
        } catch (err) {
            // console.log(err.response);

            alert("something Wrong happened please try again")

        }

    }


    const handleSubmit = (event) => {
        event.preventDefault();


        let userInfo = {};


        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;

        // store User Data 
        userInfo.Date = currentDate;
        userInfo.Name = nameInputRef.current.value;
        userInfo.Phone = phoneNumber;
        userInfo.Note = messageInputRef.current.value;



        senUserData(userInfo)


        let loader = document.querySelector(".loader");
        let success = document.querySelector(".suc");

        loader.classList.remove("hidden")

        // show success message 
        setTimeout(() => {
            // Reset input fields
            nameInputRef.current.value = '';
            setPhoneNumber('');
            messageInputRef.current.value = '';
            loader.classList.add("hidden")
            success.classList.remove("hidden")
        }, 1000)

        setTimeout(() => {
            success.classList.add("hidden")
        }, 2220)

    };



  return (
    <div id='Contact' className='bg-black' >
        
        <div className="container flex items-center justify-between flex-wrap py-16 ">


        <h3 className='text-center text-primary text-5xl font-bold mb-10 block w-full'> تواصل معنا  </h3>


            <div className="text text-5xl w-1/2 hidden lg:flex  flex-col pr-16 text-white font-bold  ">
                <h3 > تواصل معنا الآن </h3>
                <h3 className='text-primary mt-14'> لتحصل علي بيت احلامك </h3>
            </div>

            <form className="mt-5 text-white w-full lg:w-1/2 flex items-center flex-wrap  " onSubmit={handleSubmit} >
                <div className="form__group field w-full ">
                    <input type="input" className="form__field" autoComplete="given-name" placeholder="الاسم" ref={nameInputRef} required/>
                    <label for="name" className="form__label"> الاسم  </label>
                </div>


                <div className="form__group field mt-7 w-full ">
                    <PhoneInput country={'eg'} placeholder=" رقم الهاتف " value={phoneNumber} inputProps={{ required: true, }}  className=" block w-full p-5  appearance-none focus:outline-none  " required="required" onChange={handlePhoneNumber}  />
                    <label for="phoneNumber" className="form__label"> رقم الهاتف </label>
                </div>

                <div className="form__group field mt-7 w-full ">
                    <textarea  className="form__field w-full p-5"  autoComplete="email" ref={messageInputRef}  placeholder=" ملاحظات " />
                    <label for="email" className="form__label"> ملاحظات </label>
                </div>



                <div className="btn flex justify-center mt-7 w-full">
                    <button  className="px-14 py-2 rounded-2xl  font-bold  text-black bg-primary flex items-center justify-center gap-3 ">
                        إرسال

                        <div className="loader hidden"></div>
                            <div className='w-7  suc relative hidden' >
                            <Lottie
                                loop={true}
                                animationData={success}
                                className='absolute top-0 left-0 -translate-y-1/2'
                            />
                        </div>
                    </button>
                </div>


            </form>
        </div>

      



    </div>
  )
}
