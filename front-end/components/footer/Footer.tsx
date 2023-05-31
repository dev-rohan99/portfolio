import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import Logo from "../../assets/images/rohanLogo.svg";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaWhatsappSquare, FaLocationArrow } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { MdLocationPin, MdMapsHomeWork } from 'react-icons/md';
import Link from 'next/link';


const Footer: NextPage = () => {
  return (
    <>
    
        <div className="w-[100%] py-10 bg-[#062a158f]">
            <div className="container flex justify-between lg:flex-row flex-col pb-3">

                <div className="lg:w-[400px] w-[100%]">
                    <div className="w-[150px] lg:w-[150px] xl:w-[150px] text-white py-4">
                        <Image className="w-[150px]" src={Logo} alt=""/>
                    </div>
                    <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] pr-5 lg:pr-0 font-medium text-white">Firmament morning sixth subdue darkness creeping gathered divide.</p>

                    <div className="flex justify-start items-center mt-5">
                        
                        <Link href={"/"}><a className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent hover:text-[#28AE60] ease-in-out duration-500 text-white mr-4"><FaLinkedinIn className="text-2xl"/></a></Link>

                        <Link href={"/"}><a className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent hover:text-[#28AE60] ease-in-out duration-500 text-white mr-4"><FaFacebookF className="text-2xl"/></a></Link>

                        <Link href={"/"}><a className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent hover:text-[#28AE60] ease-in-out duration-500 text-white mr-4"><FaTwitter className="text-2xl"/></a></Link>

                        <Link href={"/"}><a className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent hover:text-[#28AE60] ease-in-out duration-500 text-white"><FaInstagram className="text-2xl"/></a></Link>

                    </div>
                </div>

                <div className="lg:w-[500px] w-[100%] flex lg:flex-row flex-col justify-between">

                    <div className="lg:w-[200px] w-[100%] mb-5 lg:mb-0 mt-5 lg:mt-0">
                        <h3 className="text-[23px] font-medium text-[#28AE60] pb-4">Links</h3>
                        <ul className="list-none text-[#989898]">
                            <li><Link href={"/"}><a className="text-[15px] hover:text-[#28AE60] py-2 block ease-in-out duration-500 font-medium">About</a></Link></li>
                            <li><Link href={"/"}><a className="text-[15px] hover:text-[#28AE60] py-2 block ease-in-out duration-500 font-medium">Blog</a></Link></li>
                            <li><Link href={"/"}><a className="text-[15px] hover:text-[#28AE60] py-2 block ease-in-out duration-500 font-medium">Contract</a></Link></li>
                            <li><Link href={"/"}><a className="text-[15px] hover:text-[#28AE60] py-2 block ease-in-out duration-500 font-medium">Get free quote</a></Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-[220px] w-[100%]">
                        <h3 className="text-[23px] font-medium text-[#28AE60] pb-4">Address</h3>
                        <ul className="list-none text-[#989898]">
                            <li><Link href={"/"}><a className="flex justify-start items-center font-semibold text-[14px] ease-in-out duration-500 hover:text-[#28AE60] py-2">
                            <FaWhatsappSquare className="text-lg mr-2 text-[#28AE60]"/>01631699535</a></Link></li>

                            <li><Link href={"/"}><a className="flex justify-start items-center font-semibold mr-8 text-[14px] ease-in-out duration-500 hover:text-[#28AE60] py-2">
                            <AiTwotoneMail className="text-lg mr-2 text-[#28AE60]"/>contact@devrohan.com</a></Link></li>

                            <li><Link href={"/"}><a className="flex justify-start items-start font-semibold mr-8 text-[14px] ease-in-out duration-500 hover:text-[#28AE60] py-2">
                            <MdMapsHomeWork className="text-2xl mr-2 w-[40px] text-left text-[#28AE60]"/>Chanchuri-Bazar, Kalia-Narail, Dhaka, Bangladesh</a></Link></li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>

        <div className="py-5 bg-[#28ae606e] w-[100%]">
            <p className="text-center text-[#05d65c] w-[300px] mx-auto lg:w-[100%] text-[15px] font-medium">Copyright ©2023 All rights reserved || Rohan Mostafa Abir</p>
        </div>
    
    </>
  )
}

export default Footer