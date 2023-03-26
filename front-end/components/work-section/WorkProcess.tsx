import React from 'react'
import { BiNotepad } from 'react-icons/bi'
import { FaComments } from 'react-icons/fa'
import { MdDesignServices, MdScheduleSend, MdWeb } from 'react-icons/md'
import { SiVisualstudiocode } from 'react-icons/si'

const WorkProcess = () => {



  return (
    <>
    
        <div className="w-[100%] py-[70px] pt-[30px]">
            <div className="container">
              <h1 className="text-[28px] md:text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] text-[#28AE60] text-center font-semibold mb-7 pb-10">How do i work?</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.90rem] mt-[50px]">

                <div className="workCard">
                  <div className="text-center pt-2 mb-2 top-[-45px] absolute flex justify-center w-[100%] left-0">
                    <a href="" className="w-[70px] mx-auto h-[70px] bg-[#28AE60] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><FaComments className="text-[40px] text-[#ddd]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#28AE60] text-center font-semibold mb-3 pt-[30px]">Discussion</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.</p>
                </div>

                <div className="workCard">
                  <div className="text-center pt-2 mb-2 top-[-45px] absolute flex justify-center w-[100%] left-0">
                    <a href="" className="w-[70px] mx-auto h-[70px] bg-[#28AE60] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><BiNotepad className="text-[40px] text-[#ddd]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#28AE60] text-center font-semibold mb-3 pt-[30px]">Planning</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan, when I deliver, when I need website data form you.</p>
                </div>

                <div className="workCard">
                  <div className="text-center pt-2 mb-2 top-[-45px] absolute flex justify-center w-[100%] left-0">
                    <a href="" className="w-[70px] mx-auto h-[70px] bg-[#28AE60] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><MdDesignServices className="text-[40px] text-[#ddd]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#28AE60] text-center font-semibold mb-3 pt-[30px]">Design</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website. A nice design can improve your business quality.</p>
                </div>

                <div className="workCard2">
                  <div className="text-center pt-2 mb-2 top-[-45px] absolute flex justify-center w-[100%] left-0">
                    <a href="" className="w-[70px] mx-auto h-[70px] bg-[#28AE60] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><SiVisualstudiocode className="text-[40px] text-[#ddd]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#28AE60] text-center font-semibold mb-3 pt-[30px]">Coding</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.</p>
                </div>

                <div className="workCard2">
                  <div className="text-center pt-2 mb-2 top-[-45px] absolute flex justify-center w-[100%] left-0">
                    <a href="" className="w-[70px] mx-auto h-[70px] bg-[#28AE60] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><MdScheduleSend className="text-[40px] text-[#ddd]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#28AE60] text-center font-semibold mb-3 pt-[30px]">Submit for Review</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">After design and coding, I send for review to client. After client’s checking, If have to change or revision, I say client to send all of them in a list and I am happy to do all changes every time.</p>
                </div>

                <div className="workCard2">
                  <div className="text-center pt-2 mb-2 top-[-45px] absolute flex justify-center w-[100%] left-0">
                    <a href="" className="w-[70px] mx-auto h-[70px] bg-[#28AE60] rounded-full flex justify-center items-center border-[#28ae6083] border-[5px]"><MdWeb className="text-[40px] text-[#ddd]"/></a>
                  </div>
                  <h1 className="text-[24px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[28px] text-[#28AE60] text-center font-semibold mb-3 pt-[30px]">Website Is Ready!</h1>
                  <p className="text-[15px] md:text-[15px] xl:text-[18px] lg:text-[17px] 2xl:text-[18px] text-center mb-2 text-[#ddd] font-medium">After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients.</p>
                </div>

              </div>
            </div>
        </div>
    
    </>
  )
}

export default WorkProcess