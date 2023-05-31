import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaYoutube, FaWhatsappSquare } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { AiTwotoneMail } from 'react-icons/ai';
import Link from 'next/link';

const TopHeader = () => {

    
  return (
    <>
    
        <div className="bg-[#11111193] relative">
            <div className="container">
                <div className="flex justify-between w-[100%] ">
                    <div className="w-[100%] lg:w-[50%] text-white">
                        <ul className="flex items-center justify-center lg:justify-start toheaderIcon">
                            <li className=""><Link href="https://www.linkedin.com/in/dev-rohan99"><a className="topBarMenuList" target={"_blank"}><FaLinkedinIn className="2xl"/></a></Link></li>
                            <li className=""><Link href="https://www.facebook.com/devrohan.me/"><a className="topBarMenuList" target={"_blank"}><FaFacebookF className="2xl"/></a></Link></li>
                            <li className=""><Link href="https://github.com/dev-rohan99"><a className="topBarMenuList" target={"_blank"}><FaGithub className="2xl"/></a></Link></li>
                            <li className=""><Link href="https://leetcode.com/dev-rohan/"><a className="topBarMenuList" target={"_blank"}><SiLeetcode className="2xl"/></a></Link></li>
                            <li className=""><Link href="https://www.youtube.com/@developer-rohan"><a className="topBarMenuList" target={"_blank"}><FaYoutube className="2xl"/></a></Link></li>
                        </ul>
                    </div>

                    <div className="w-[50%] hidden text-white lg:flex lg:items-center lg:justify-end">
                        <a className="flex justify-start items-center font-semibold mr-8 text-[14px] ease-in-out duration-500 hover:text-[#28AE60] emailBlock">
                            <AiTwotoneMail className="text-lg mr-2 mt-[2px] text-[#28AE60]"/>
                            contact@devrohan.com
                        </a>

                        <a className="flex justify-start items-center font-semibold text-[14px] ease-in-out duration-500 hover:text-[#28AE60] phoneBlock">
                            <FaWhatsappSquare className="text-lg mr-2 mt-[2px] text-[#28AE60]"/>
                            01631699535
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default TopHeader