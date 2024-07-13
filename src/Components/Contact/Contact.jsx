import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import arrow from "../../assets/arrow-down.svg"


import "./ContactStyle.scss"

export default function Contact() {
    const [phoneNumber, setPhoneNumber] = useState("");
    function handlePhoneNumber(value) {
        setPhoneNumber(value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <div id='Contact' className='bg-black' >
        
        <div className="container flex items-center justify-between flex-wrap py-16">


        <h3 className='text-center text-primary text-5xl font-bold mb-10 block w-full'> تواصل معنا  </h3>


            <div className="text text-5xl w-1/2 hidden lg:flex  flex-col pr-16 text-white font-bold  ">
                <h3 > تواصل معنا الآن </h3>
                <h3 className='text-primary mt-14'> لتحصل علي بيت احلامك </h3>
            </div>

            <form className="mt-5 text-white w-full lg:w-1/2 flex items-center flex-wrap  " onSubmit={handleSubmit} >
                <div className="form__group field w-1/2 ">
                    <input type="input" className="form__field" autoComplete="given-name" placeholder="Your Name"  required/>
                    <label for="name" className="form__label"> Your Name  </label>
                </div>

                <div className="form__group field w-1/2  ">
                    <input type="email" className="form__field"  autoComplete="email"  placeholder=" Your Email " />
                    <label for="email" className="form__label"> Your Email </label>
                </div>

                <div className="form__group field mt-7 w-1/2 ">
                    <PhoneInput country={'eg'} placeholder=" Phone Number " value={phoneNumber} inputProps={{ required: true, }} className=" block w-full p-5  appearance-none focus:outline-none  " required="required" onChange={handlePhoneNumber}  />
                    <label for="phoneNumber" className="form__label"> Phone Number </label>
                </div>

                <div className="form__group field mt-7 w-1/2 ">
                    <select className="appearance-none flex relative w-full bg-transparent  border-b outline-none focus:outline-none p-3 ">
                        <option selected className=''>  Interested in </option>
                        <option className='text-black'> 1 </option>
                        <option className='text-black'> 2</option>
                        <option className='text-black'> 3</option>
                    </select>
                    <img src={arrow} className='absolute left-7 w-7 top-1/3' alt="arrow" />
                </div>

                <div className="form__group field mt-7 w-full ">
                    <textarea  className="form__field w-full p-5"  autoComplete="email"  placeholder=" Your Email " />
                    <label for="email" className="form__label"> Message </label>
                </div>



                <div className="btn flex justify-center mt-7 w-full">
                    <button  className="px-14 py-2 rounded-2xl  font-bold  text-black bg-primary ">
                        Submit
                    </button>
                </div>


            </form>
        </div>

      



    </div>
  )
}
