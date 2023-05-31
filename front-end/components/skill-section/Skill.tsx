import React, { useState } from 'react';
import {RiReactjsLine, RiHtml5Fill, RiCss3Fill} from "react-icons/ri";
import {SiJavascript, SiTypescript, SiRedux, SiExpress, SiMongodb, SiPhp, SiBabel, SiWebpack, SiSocketdotio, SiAdobeillustrator, SiAdobephotoshop, SiTailwindcss, SiJquery} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {CgFigma} from "react-icons/cg";
import {FaNodeJs, FaWordpress, FaNpm, FaGitAlt, FaSass, FaBootstrap} from "react-icons/fa";

const Skill = () => {

    type Skill = {
        icon : any;
        skill: string;
        progress: number;
    }
    
    type Skills = {
        web: Skill[];
        programming: Skill[];
        tools: Skill[];
    }
    
    type SkillSet = Skills[];

    const allSkillsData : SkillSet = [

        {
            web: [
            { icon : RiHtml5Fill, skill: "HTML", progress: 99 },
            { icon : RiCss3Fill, skill: "CSS", progress: 98 },
            { icon : SiJavascript, skill: "JavaScript", progress: 95 },
            { icon : RiReactjsLine, skill: "React.js", progress: 95 },
            { icon : TbBrandNextjs, skill: "Next.js", progress: 90 },
            { icon : SiRedux, skill: "Redux", progress: 85 },
            { icon : SiTypescript, skill: "Typescript", progress: 85 },
            { icon : SiExpress, skill: "Express.js", progress: 90 },
            { icon : FaNodeJs, skill: "Node.js", progress: 90 },
            { icon : SiMongodb, skill: "MongoDB", progress: 90 },
            { icon : FaWordpress, skill: "Wordpress", progress: 90 }
            ]
        },

        {
            programming: [
            { icon : SiJavascript, skill: "JavaScript", progress: 95 },
            { icon : SiPhp, skill: "php", progress: 60 }
            ]
        },

        {
            tools: [
            { icon : FaBootstrap, skill: "Bootstrap", progress: 99 },
            { icon : FaSass, skill: "Sass", progress: 90 },
            { icon : SiTailwindcss, skill: "Tailwind", progress: 95 },
            { icon : SiJquery, skill: "Jquery", progress: 80 },
            { icon : FaGitAlt, skill: "Git", progress: 95 },
            { icon : SiAdobephotoshop, skill: "Photoshop", progress: 90 },
            { icon : SiAdobeillustrator, skill: "Illustrator", progress: 90 },
            { icon : SiRedux, skill: "Redux", progress: 90 },
            { icon : CgFigma, skill: "Figma", progress: 90 },
            { icon : FaNpm, skill: "NPM", progress: 80 },
            { icon : SiSocketdotio, skill: "Socket.io", progress: 80 },
            { icon : SiWebpack, skill: "Webpack", progress: 95 },
            { icon : SiBabel, skill: "Babel", progress: 95 }
            ]
        }

    ]

    const [skillsState, setSkillState] = useState(allSkillsData[0].web);
    const [skillsState2, setSkillState2] = useState(allSkillsData[1].programming);
    const [skillsState3, setSkillState3] = useState(allSkillsData[2].tools);

    const [web, setWeb] = useState<boolean>(true)
    const [programming, setProgramming] = useState<boolean>(false)
    const [tools, setTools] = useState<boolean>(false)

    const handleWebClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setWeb(true);
        setTools(false);
        setProgramming(false);
    }

    const handleProgrammingClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setWeb(false);
        setTools(false);
        setProgramming(true);
    }

    const handleToolsClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setWeb(false);
        setTools(true);
        setProgramming(false);
    }



  return (
    <>
    
        <div className="w-[100%] py-[70px]">
            <div className="container">
              <div className="flex lg:justify-start justify-center">

                  <a onClick={handleWebClick} className={`w-[150px] h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[2px] md:border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${web ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Web</a>

                  <a onClick={handleProgrammingClick} className={`w-[150px] h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] mr-3 lg:mr-4 ${programming ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Programming</a>

                  <a onClick={handleToolsClick} className={`w-[150px] h-[40px] text-[14px] md:w-[150px] md:h-[45px] md:text-[15px] lg:w-[150px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] mr-0 2xl:text-[17px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] ease-in-out duration-500 font-semibold rounded-md hover:text-[#ffffff] ${tools ? "bg-[#28AE60] text-white" : "bg-transparent text-[#28AE60]"}`}>Tools</a>

              </div>

              { 
                web && (
                  <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">

                        {
                          skillsState.map((data : {icon: any, skill : string, progress : number}, index : number) => 

                            <>
                              <div className="skillWrapper relative" key={index}>
                                <div className="flex justify-between items-center">
                                  <h3 className="font-bold text-[16px] flex justify-start items-center"><data.icon className="text-3xl pr-2 border-r-[3px] border-[#676767] mr-2"/>{data.skill}</h3>
                                  <div className="w-[50px] flex justify-center items-center bg-[#28AE60] rounded-md text-white font-semibold text-[15px]">{data.progress}%</div>
                                </div>

                                <div className={`absolute w-[100%] h-[7px] left-0 bottom-0 right-0`}>
                                  <div style={{width:`${data.progress}%`}} className={`bg-[#28AE60] h-[7px] rounded-md`}></div>
                                </div>
                              </div>
                            </>
                          
                          )
                        }

                      </div> 
                  </>
              )}

              { 
                programming && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">

                        {
                          skillsState2.map((data : {skill : string, progress : number}, index : number) => 

                            <>
                              <div className="skillWrapper relative" key={index}>
                                <div className="flex justify-between items-center">
                                  <h3 className="font-bold text-[16px] flex justify-start items-center"><data.icon className="text-3xl pr-2 border-r-[3px] border-[#676767] mr-2"/>{data.skill}</h3>
                                  <div className="w-[50px] flex justify-center items-center bg-[#28AE60] rounded-md text-white font-semibold text-[15px]">{data.progress}%</div>
                                </div>

                                <div className={`absolute w-[100%] h-[7px] left-0 bottom-0 right-0`}>
                                  <div style={{width:`${data.progress}%`}} className={`bg-[#28AE60] h-[7px] rounded-md`}></div>
                                </div>
                              </div>
                            </>
                          
                          )
                        }

                    </div>
                  </>
              )}

              { 
                tools && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">

                        {
                          skillsState3.map((data : {skill : string, progress : number}, index : number) => 

                            <>
                              <div className="skillWrapper relative" key={index}>
                                <div className="flex justify-between items-center">
                                  <h3 className="font-bold text-[16px] flex justify-start items-center"><data.icon className="text-3xl pr-2 border-r-[3px] border-[#676767] mr-2"/>{data.skill}</h3>
                                  <div className="w-[50px] flex justify-center items-center bg-[#28AE60] rounded-md text-white font-semibold text-[15px]">{data.progress}%</div>
                                </div>

                                <div className={`absolute w-[100%] h-[7px] left-0 bottom-0 right-0`}>
                                  <div style={{width:`${data.progress}%`}} className={`bg-[#28AE60] h-[7px] rounded-md`}></div>
                                </div>
                              </div>
                            </>
                          
                          )
                        }

                    </div>
                  </>
              )}


            </div>
        </div>
    
    </>
  )
}

export default Skill