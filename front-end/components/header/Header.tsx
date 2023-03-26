import React from 'react';
import {useState} from "react";
import Image from 'next/image';
import Logo from "../../assets/images/rohanLogo.svg";
import Link from 'next/link';
import { AiOutlineBars } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';


const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMenuShow = (e : MouseEventHandler<HTMLAnchorElement>) => {
        e.preventDefault();
        setMobileMenu(true);
    }

    const handleMenuHide = (e : MouseEventHandler<HTMLAnchorElement>) => {
        e.preventDefault();
        setMobileMenu(false);
    }

  return (
    <>
    
        <div className="container z-50 relative">
            <div className="flex justify-between items-center">
                <div className="w-[150px] lg:w-[150px] xl:w-[150px] text-white py-3 logoBlock">
                    <Image className="w-[150px]" src={Logo} alt=""/>
                </div>

                <div className="w-[50%] xl:w-[43%] lg:block hidden text-white font-semibold">
                    <ul className="flex items-center justify-between menuItem">
                        <li className=""><Link href="/"><a className="mainHeaderMenuList">Home</a></Link></li>
                        <li className=""><Link href="/about"><a className="mainHeaderMenuList">About</a></Link></li>
                        <li className=""><Link href="/services"><a className="mainHeaderMenuList">Services</a></Link></li>
                        <li className=""><Link href="/portfolio"><a className="mainHeaderMenuList">Portfolio</a></Link></li>
                        <li className=""><Link href="/contact-me"><a className="mainHeaderMenuList">Contact me</a></Link></li>
                    </ul>
                </div>

                <div className="w-[160px] hidden lg:flex justify-end">
                    <Link href="/login">
                        <a className="w-[130px] h-[40px] text-[14px] md:w-[140px] md:h-[45px] md:text-[15px] lg:w-[145px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[18px] flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent ease-in-out duration-500 text-white font-semibold loginBtn rounded-md hover:text-[#28AE60] relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-[#28AE60] opacity-75"></span>
                            Login
                        </a>
                    </Link>
                </div>

                <a onClick={handleMenuShow} className="w-[40px] h-[35px] lg:hidden rounded-md bg-[#292929] flex justify-center items-center"><AiOutlineBars className="text-3xl font-bold text-[#28AE60]"/></a>
            </div>
        </div>

        {mobileMenu && <div className="w-[100%] fixed top-0 left-0 right-0 bottom-0 bg-[#2c1414] bg-gradient-to-r from-[#297348ac] to-[#2d472d] z-[1000] overflow-y-auto overflow-x-hidden lg:hidden duration-500">
            <div className="w-[85%] mx-auto flex justify-between items-center py-3">
                <div className="w-[150px] lg:w-[150px] xl:w-[150px] text-white py-4">
                    <Image className="w-[150px]" src={Logo} alt=""/>
                </div>

                <a onClick={handleMenuHide} className="w-[40px] h-[35px] lg:hidden rounded-md bg-[#292929] flex justify-center items-center"><MdClose className="text-3xl font-bold text-[#28AE60] shadow-md"/></a>
            </div>

            <div className="flex justify-center items-center h-[80vh]">
                <ul className="text-white w-[100%]">
                    <li className="leading-[35px]"><Link href={"/"}><a className="text-[20px] w-[100%] py-2 text-center font-bold block">Home</a></Link></li>
                    <li className="leading-[35px]"><Link href={"/"}><a className="text-[20px] w-[100%] py-2 text-center font-bold block">Services</a></Link></li>
                    <li className="leading-[35px]"><Link href={"/"}><a className="text-[20px] w-[100%] py-2 text-center font-bold block">About</a></Link></li>
                    <li className="leading-[35px]"><Link href={"/"}><a className="text-[20px] w-[100%] py-2 text-center font-bold block">Blog</a></Link></li>
                    <li className="leading-[35px]"><Link href={"/"}><a className="text-[20px] w-[100%] py-2 text-center font-bold block">Contact me</a></Link></li>
                </ul>
            </div>
        </div>}

    </>
  )
}

export default Header;
