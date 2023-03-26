import Image from 'next/image';
import React from 'react';
import { MdFileUpload } from 'react-icons/md';


const Order = () => {


  return (
    <>
    
        <div className="">
            <div className="w-[100%] h-[300px] bg-[#94a3b876] rounded-lg p-1">
                <label htmlFor="fileUpload">
                    <div className="rounded-lg bg-[#94a3b876] m-3 h-[267px] p-5 shadow-md flex justify-center items-center">
                        <div className="">
                            <h3 className="text-[30px] text-center mt-4 font-bold text-[#94a3b8d3]">Upload Your Design</h3>
                            <MdFileUpload className="text-[200px] mx-auto text-[#94a3b8d3]"/>
                        </div>
                    </div>
                </label>
                <input type="file" multiple hidden id="fileUpload"/>
            </div>
        </div>
    
    </>
  )
}

export default Order;
