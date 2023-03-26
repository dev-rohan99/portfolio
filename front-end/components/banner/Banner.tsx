import Image from 'next/image';
import React from 'react';
import BannerImg from "../../assets/images/mern2.jpg";


const Banner = ({pageName}) => {

  return (
    <>
    
        <div className="mainBannerBlock py-[100px] bg-no-repeat bg-center bg-cover relative z-0">
          <div className="absolute left-0 right-0 top-0 flex justify-center items-center bottom-0 w-[100%] h-[100%] bg-[#062a15c2] z-[50]">
            <div className="container">
                <h4 className="text-[30px] text-center drop-shadow-xl font-medium text-[#fff]">{pageName}</h4>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Banner;
