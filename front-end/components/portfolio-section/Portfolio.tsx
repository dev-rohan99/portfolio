import Image from 'next/image';
import React from 'react';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { portfolios } from "../../data/data.js"


const Portfolio = () => {

  return (
    <>
    
        <div className="w-[100%] py-[80px] pt-[80px]">
            <div className="container">

              <div className="flex lg:justify-start justify-center">

                <a className={`w-[150px] cursor-pointer h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[2px] md:border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${"web" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>All</a>

                <a className={`w-[150px] cursor-pointer h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${"programming" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Social Media</a>

                <a className={`w-[150px] cursor-pointer h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${"programming" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Web Application</a>

                <a className={`w-[150px] cursor-pointer h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-0 ${"tools" ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Shop & Booking</a>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-[50px]">

                  { portfolios.reverse().map((data: object, index: number) => (
                      <div className="portfolioCard relative p-3" key={`65546hjgjhg5456${index}`}>
                        <span className="px-4 py-1 text-[15px] font-medium uppercase rounded-lg shadow-lg text-white bg-[#28AE60] absolute top-3 right-3 z-50">{data.status}</span>

                        <Link target='_blank' href={data.projectUrl}>
                          <div className="h-auto overflow-hidden rounded-lg">
                            <Image src={data.photo} width={400} height={230} className="h-[200px] w-[100%] object-cover rounded-lg overflow-hidden" alt="devrohan"/>
                          </div>
                        </Link>

                        <div className="px-5 py-3 pt-1 mt-0">
                            <h3 className="text-[31px] text-[#28AE60] font-bold">{data.projectName}</h3>
                            <p className="text-[16px] mb-3 text-[#fff] font-medium wrapper">{data.projectDesc}</p>

                            <div className="flex justify-start items-center mb-3">
                              <Link target='_blank' href={data.projectGithubUrl}><span className="hover:text-[#28AE60] ease-in-out duration-500 text-gray-500 mr-3"><FaGithub className="text-3xl"/></span></Link>
                              <Link target='_blank' href={data.projectUrl}><span className="hover:text-[#28AE60] ease-in-out duration-500 text-gray-500"><FaExternalLinkSquareAlt className="text-3xl"/></span></Link>
                            </div>

                            <div className="grid grid-cols-4 gap-1 mt-4 mb-4">
                              
                              { data.technologies.map((technologies) => (
                                  <span className="py-[2px] px-[7px] rounded-full bg-[#28AE60] text-[14px] text-white font-medium text-center">{technologies}</span>
                                ))
                              }

                            </div>
                        </div>
                      </div>
                    ))
                  }

              </div>

            </div>
        </div>
    
    </>
  )
}

export default Portfolio;
