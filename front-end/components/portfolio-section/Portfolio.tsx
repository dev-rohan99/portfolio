import Image from 'next/image';
import React from 'react';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import assunnah from "../../assets/images/assunnah.png";


const Portfolio = () => {


  return (
    <>
    
        <div className="w-[100%] py-[80px] pt-[80px]">
            <div className="container">

              <div className="flex lg:justify-start justify-center">

                <a className={`w-[150px] h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[2px] md:border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${"web" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Web</a>

                <a className={`w-[150px] h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${"programming" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Programming</a>

                <a className={`w-[150px] h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-0 ${"tools" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Tools</a>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.90rem] mt-[50px]">

                  <div className="portfolioCard">
                    <div className="h-[200px]">
                      <Image src={assunnah} className="h-[200px] object-cover" alt=""/>
                    </div>

                    <div className="px-5 py-3 pt-1">
                        <h3 className="text-[35px] text-[#28AE60] font-bold">as-sunnah</h3>
                        <p className="text-[19px] mb-3 text-[#fff] font-medium">Name of as-sunnah! This project is build with <span className="text-[#28AE60]">full stack</span> development. A Collection for peoples.</p>

                        <div className="flex justify-start items-center mb-3">
                          <a href="" className="hover:text-[#28AE60] ease-in-out duration-500 text-gray-500 mr-4"><FaGithub className="text-3xl"/></a>
                          <a href="" className="hover:text-[#28AE60] ease-in-out duration-500 text-gray-500"><FaExternalLinkSquareAlt className="text-3xl"/></a>
                        </div>

                        <div className="grid grid-cols-4 gap-1 mt-4 mb-4">
                          
                          <span className="py-[2px] px-[7px] rounded-full bg-[#28AE60] text-[14px] text-white font-medium text-center">express</span>
                          <span className="py-[2px] px-[7px] rounded-full bg-[#28AE60] text-[14px] text-white font-medium text-center">mongodb</span>
                          <span className="py-[2px] px-[7px] rounded-full bg-[#28AE60] text-[14px] text-white font-medium text-center">express</span>
                          <span className="py-[2px] px-[7px] rounded-full bg-[#28AE60] text-[14px] text-white font-medium text-center">express</span>

                        </div>
                    </div>
                  </div>

              </div>

            </div>
        </div>
    
    </>
  )
}

export default Portfolio;
