import Image from 'next/image';
import React, { useState } from 'react';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects } from "../../data/data.js"

const categories = ['All', 'Social Media', 'Web Application', 'Shop & Booking'];

const Portfolio = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const filteredProjects = selectedCategory === 'All'
  ? projects
  : projects.filter(project => project.category === selectedCategory);

  return (
    <>
    
        <div className="w-[100%] py-[80px] pt-[80px]">
            <div className="container">

            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3 rounded-lg text-lg text-white font-semibold transition-colors
                    ${selectedCategory === category 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-green-500/30 hover:bg-green-500/40'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-[50px]">

                  { projects.reverse().map((data: object, index: number) => (
                      <div className="portfolioCard relative p-3" key={`65546hjgjhg5456${index}`}>
                        <span className="px-4 py-1 text-[15px] font-medium uppercase rounded-lg shadow-lg text-white bg-[#28AE60] absolute top-3 right-3 z-50">{data.status}</span>

                        <Link target='_blank' href={data.projectUrl}>
                          <div className="h-auto overflow-hidden rounded-lg">
                            <Image src={data.photo[0]} width={400} height={230} className="h-[200px] w-[100%] object-cover rounded-lg overflow-hidden" alt="devrohan"/>
                          </div>
                        </Link>

                        <div className="px-5 py-3 pt-1 mt-0">
                            <h3 className="text-[31px] text-[#28AE60] font-bold">{data.projectName}</h3>
                            <p className="text-[16px] mb-3 text-[#fff] font-medium wrapper">{data.projectDesc}</p>

                            <div className="flex justify-start items-center mb-3">
                              <Link target='_blank' href={data.projectGithubUrl}><span className="hover:text-[#28AE60] ease-in-out flex justify-start items-center gap-3 duration-300 text-gray-500 mr-4"><FaGithub className="text-3xl"/> Github</span></Link>
                              <Link target='_blank' href={data.projectUrl}><span className="hover:text-[#28AE60] ease-in-out flex justify-start items-center gap-3 duration-300 text-gray-500"><FaExternalLinkSquareAlt className="text-3xl"/> Live</span></Link>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              
                              { data.technologiespr.map((technologies) => (
                                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">{technologies}</span>
                                ))
                              }

                            </div>
                        </div>
                      </div>
                    ))
                  }

              </div>

            </div>
        </div>
    
    </>
  )
}

export default Portfolio;
