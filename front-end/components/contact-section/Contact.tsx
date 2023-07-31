import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineAccessTime, MdOutlineMailOutline } from 'react-icons/md';
import contactImg from "../../assets/images/contact.png";
import { useClientMessageSendMutation } from '../../redux/api/apiSlice';
import toaster from '../../utility/toaster';


const Contact = () => {

  interface userMessageStructure {
    name : string,
    email : string,
    message : string
  }

  const [input, setInput] = useState<userMessageStructure>({
      name : "",
      email : "",
      message : ""
  });

  const [clientMessageSend] = useClientMessageSendMutation();

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
    }));
  }

  const handleClientFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clientMessageSend(input).unwrap().then((res) => {
      setInput({
        name : "",
        email : "",
        message : ""
      });
      console.log(res);
      toaster("success", "Thanks for messaging me!");
    }).catch((error) => {
      toaster("warn", error.data.message);
    });
  }

  return (
    <>
    
        <div className="w-[100%] py-[80px] pt-[80px]">
            <div className="container flex md:justify-between md:flex-row flex-col items-center">
                <div className="md:w-[49%] w-[100%] rounded-lg overflow-hidden">
                  {/* <Image src={contactImg} className="object-cover w-[100%] h-auto" alt=""/> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25120.075012495865!2d89.57095337840173!3d23.07830040096769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffbc8c33ceaa03%3A0xa3f485fb2cd0093b!2sKrishnapur!5e1!3m2!1sen!2sbd!4v1678892991468!5m2!1sen!2sbd" width="100%" height="650" className="border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="md:w-[49%] w-[100%]">
                  <h3 className="text-[40px] mb-5 font-semibold text-[#28AE60]">Let{"'"}s Talk About Your Needs</h3>

                  <div className="flex justify-start items-center mb-4">
                    <div className="w-[40px] mr-4 h-[40px] bg-[#292929] rounded-lg flex justify-center items-center">
                      <MdOutlineMailOutline className="text-2xl text-[#28AE60]"/>
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#b9b9b9] h-[40px] bg-[#292929] rounded-lg flex justify-center items-center px-5">devrohan599@gmail.com</h3>
                  </div>

                  <div className="flex justify-start items-center mb-4">
                    <div className="w-[40px] mr-4 h-[40px] bg-[#292929] rounded-lg flex justify-center items-center">
                      <MdOutlineAccessTime className="text-2xl text-[#28AE60]"/>
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#b9b9b9] h-[40px] bg-[#292929] rounded-lg flex justify-center items-center px-5">UTC +6 Asia/Dhaka</h3>
                  </div>

                  <form onSubmit={handleClientFormSubmit}>

                    <div className="mb-5">
                      <input name="name" onChange={handleInputChange} type="text" className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your name" required />
                    </div>

                    <div className="mb-5">
                      <input name="email" type="email" onChange={handleInputChange} className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Enter your email address" required />
                    </div>

                    <div className="mb-5">
                      <textarea name="message" onChange={handleInputChange} className="py-3 px-4 border-[3px] text-[#fff] text-[16px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#292929]" placeholder="Write your message" cols={30} rows={5} required ></textarea>
                    </div>

                    <div className="mb-0">
                      <button type="submit" className="py-2 px-4 border-[3px] text-[#fff] text-[18px] border-[#28AE60] w-[100%] outline-none rounded-md bg-[#28AE60] text-center hover:bg-transparent duration-500 font-bold">SEND MESSAGE</button>
                    </div>

                  </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Contact;
