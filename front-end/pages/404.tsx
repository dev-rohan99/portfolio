import React from 'react';
import Image from "next/image";
import NotFountImg from "../assets/images/404Img.webp";
import Link from "next/link";
import Footer from '../components/footer/Footer';
import TopHeader from '../components/top-header/TopHeader';
import { FaSadTear } from 'react-icons/fa';
import Cursor from '../components/cursor/Cursor';


const PageNotFound = () => {


  return (
    <>
        <div className="mainBlock">
            <Cursor/>

            <div>
                <div className="fixed top-0 left-0 right-0 z-[20]"><TopHeader/></div>
                
                <div className="w-[100%] h-[100vh] flex justify-center items-center">
                    <div className="w-[900px] rounded-lg bg-[#94a3b876] p-5 flex justify-start items-center">

                        <div className="w-[450px] bg-[#94a3b876] rounded-md">
                            <Image src={NotFountImg} alt="dev-rohan"/>
                        </div>

                        <div className="ml-7">
                            <h3 className="text-[90px] font-bold text-[#28AE60] flex justify-start items-center">404 <FaSadTear className="text-[70px] ml-4 text-[#F1AF95]"/></h3>
                            <p className="text-[25px] text-white font-medium mt-[-20px] mb-3">Oops! It seems you broke the internet</p>
                            <Link href={"/"}>
                                <a className="text-[18px] font-semibold text-white after:content-[''] after:w-[100px] after:h-[4px]  after:rounded-md duration-500 relative after:absolute after:bg-white after:top-[25px] after:left-[150px] hover:after:w-[70px] py-3 after:duration-500 hover:after:bg-[#28AE60]">Take me home</a>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default PageNotFound;