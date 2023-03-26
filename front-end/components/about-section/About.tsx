import Image from 'next/image';
import React from 'react';
import MyImage from "../../assets/images/devRohan.jpg";

const About = () => {



  return (
    <>
    
        <div className="w-[100%] py-10">
            <div className="container flex lg:justify-between flex-col lg:flex-row items-center">
              <div className="w-[100%] lg:w-[50%] text-center lg:text-left">
                <h1 className="text-[28px] md:text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] text-[#28AE60] font-semibold mb-2">About me</h1>
                <p className="text-[15px] md:text-[18px] xl:text-[19px] lg:text-[16px] 2xl:text-[23px] text-white mt-3 mb-3 font-normal">I{"'"}m a Full-Stack Web Developer with experience creating websites and online applications in the business. I specialize in JavaScript and have worked with  MongoDB,  Express.js, React.js, Node.js,  in the past. I{"'"}ve also worked with WordPress previously. Please have a look at my work or contact me if you have any questions.</p>

                <div className="flex lg:justify-start justify-center mt-5">
                  <a href="/" className="w-[180px] h-[40px] text-[14px] md:w-[180px] md:h-[45px] md:text-[15px] lg:w-[190px] lg:h-[45px] lg:text-[16px] xl:w-[200px] xl:h-[50px] 2xl:w-[220px] 2xl:h-[55px] 2xl:text-[18px] flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent ease-in-out duration-500 text-white font-semibold rounded-md hover:text-[#28AE60] mr-5">
                      Download resume
                  </a>

                  <a href="/" className="w-[130px] h-[40px] text-[14px] md:w-[140px] md:h-[45px] md:text-[15px] lg:w-[145px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[18px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] bg-transparent ease-in-out duration-500 text-[#28AE60] font-semibold rounded-md hover:text-[#ffffff]">
                      My skills
                  </a>
                </div>
              </div>

              <div className="w-[100%] lg:w-[45%] flex justify-end">
                <div className="md:w-[450px] w-[100%] mx-auto mt-10 lg:mt-0 myImage">
                  <Image src={MyImage} alt="dev rohan" className="w-[100%] ease-in-out duration-500 rounded-lg grayscale hover:grayscale-0 overflow-hidden"/>
                </div>
              </div>
            </div>
        </div>
    
    </>
  )
}

export default About