import React from 'react';
import { MdClose, MdIncompleteCircle } from 'react-icons/md';
import { IoWalletSharp } from 'react-icons/io5';
import { FaRunning } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';


const Dashboard = () => {


  return (
    <>
    
        <div className="bg-gradient-to-r text-white mb-10 rounded-lg from-[#17773f] to-[#292929] p-4 flex justify-between items-center font-bold">
            <h4>Hello there! Welcome! Welcome to my dashboard!</h4>
            <a href="/" className="w-[30px] h-[30px] flex justify-center items-center duration-500 hover:bg-[#ffffff7d]"><MdClose className="text-2xl"/></a>
        </div>

        <div className="grid grid-cols-4 gap-5">

            <div className="w-[271px] h-[220px] rounded-lg bg-gradient-to-r from-[#ffaa00e0] to-[#e1da0fda] p-4 flex justify-center items-center text-white">
                <div className="">
                <div className="w-[70px] h-[70px] mx-auto rounded-full bg-gradient-to-r from-[#e7e256fc] flex justify-center items-center mb-4">
                    <IoWalletSharp className="text-3xl"/>
                </div>
                <h3 className="text-[30px] text-[#914808] font-bold text-center">10</h3>
                <h3 className="text-[15px] text-[#914808] font-bold text-center">Total Project!</h3>
                </div>
            </div>

            <div className="w-[271px] h-[220px] rounded-lg bg-gradient-to-r from-[#89f900db] to-[#24d6c4d5] p-4 flex justify-center items-center text-white">
                <div className="">
                <div className="w-[70px] h-[70px] mx-auto rounded-full bg-gradient-to-r from-[#aafe42b3] flex justify-center items-center mb-4">
                    <MdIncompleteCircle className="text-3xl"/>
                </div>
                <h3 className="text-[30px] text-[#3a6308] font-bold text-center">1</h3>
                <h3 className="text-[15px] text-[#3a6308] font-bold text-center">Completed project!</h3>
                </div>
            </div>

            <div className="w-[271px] h-[220px] rounded-lg bg-gradient-to-r from-[#00a6ffd9] to-[rgba(146,136,255,0.91)] p-4 flex justify-center items-center text-white">
                <div className="">
                <div className="w-[70px] h-[70px] mx-auto rounded-full bg-gradient-to-r from-[#9c93ff] flex justify-center items-center mb-4">
                    <FaRunning className="text-3xl"/>
                </div>
                <h3 className="text-[30px] text-[#073176] font-bold text-center">10</h3>
                <h3 className="text-[15px] text-[#073176] font-bold text-center">Running Project!</h3>
                </div>
            </div>

            <div className="w-[271px] h-[220px] rounded-lg bg-gradient-to-r from-[#ad56ffd9] to-[rgba(255,117,232,0.91)] p-4 flex justify-center items-center text-white">
                <div className="">
                <div className="w-[70px] h-[70px] mx-auto rounded-full bg-gradient-to-r from-[#f67aff] flex justify-center items-center mb-4">
                    <BsFillCartCheckFill className="text-3xl"/>
                </div>
                <h3 className="text-[30px] text-[#690670] font-bold text-center">10</h3>
                <h3 className="text-[15px] text-[#690670] font-bold text-center">Total Order!</h3>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Dashboard;
