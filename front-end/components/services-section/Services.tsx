import React from 'react';
import { FaBug, FaStore } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';


const Services = () => {


  return (
    <>
    
        <div className="w-[100%] pb-[70px] pt-[50px]">
            <div className="container">
              <h1 className="text-[28px] md:text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] text-[#28AE60] text-center font-semibold mb-2">Services</h1>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]">

                <div className="servicesCard">
                  <div className="text-center pt-2 mb-2">
                    <a href="" className="w-[70px] mx-auto h-[70px] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><MdWeb className="text-[40px] text-[#28AE60]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#fff] text-center font-semibold mb-3">Full website creation</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">I can create any type of website for your business, portfolio, company, e-commerce store, blog etc. I provide unique, clean & awesome graphical design interface.</p>
                </div>

                <div className="servicesCard">
                  <div className="text-center pt-2 mb-2">
                    <a href="" className="w-[70px] mx-auto h-[70px] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><FaStore className="text-[40px] text-[#28AE60]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#fff] text-center font-semibold mb-3">Online store & shopping</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website.</p>
                </div>

                <div className="servicesCard">
                  <div className="text-center pt-2 mb-2">
                    <a href="" className="w-[70px] mx-auto h-[70px] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><FaBug className="text-[40px] text-[#28AE60]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#fff] text-center font-semibold mb-3">Bug fixing problems</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.</p>
                </div>

              </div>
            </div>
        </div>
    
    </>
  )
}

export default Services;
