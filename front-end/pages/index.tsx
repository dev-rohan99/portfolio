import type { NextPage } from 'next';
import Header from '../components/header/Header';
import TopHeader from '../components/top-header/TopHeader';
import devImage from "../assets/images/devrohanImageTwo.png";
import MyImage from "../assets/images/bannerme.jpg";
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { useRef, useState } from 'react';
import Footer from '../components/footer/Footer';
import Skill from '../components/skill-section/Skill';
import About from '../components/about-section/About';
import WorkProcess from '../components/work-section/WorkProcess';
import Services from '../components/services-section/Services';
import Portfolio from '../components/portfolio-section/Portfolio';
import Contact from '../components/contact-section/Contact';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';


const Home: NextPage = () => {

  const {ref : heading, inView : myHeadingIsVisible} = useInView();
  const [modal, setModal] = useState(false);
  
  const handleHide = () => {
    setModal(!modal);
  }
  
  return (
    <>

        <div className="">

          {modal && <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#0000002d] flex justify-center items-center w-[100%] h-[100vh] z-[99999999999]">
            <button onClick={handleHide} className="p-2 text-[14px] flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent ease-in-out duration-500 text-white font-semibold rounded-full absolute top-5 right-5 hover:text-[#28AE60] mr-5 bannerBtnOne"><RiCloseFill className="2xl w-[30px] h-[30px]"/></button>
            <div className="bg-[#090909] w-[60%] h-auto mx-auto rounded-xl shadow-xl px-7 py-7">
              <iframe width="100%" style={{height:"470px",borderRadius:"15px"}} src="https://www.youtube.com/embed/06FuSENjk-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>}

          <div className="w-[100%]">
            <div className="h-[100vh]">
              <div className="z-50">
                  <TopHeader/>
                  <Header/>
              </div>

              <div style={{backgroundSize:"50% 100%"}} className="mt-[-124px] flex lg:justify-start justify-center items-center z-0 w-[100%] h-[100vh] lg:bg-[url('../assets/images/bannerPhoto.jpg')] lg:bg-[50% 100%] bg-none bg-no-repeat bg-right ...">
                <div className="container flex lg:justify-between items-center flex-col lg:flex-row">
                  <div className="lg:w-[50%] mt-[60px] mx-auto lg:mx-0 w-[100%] lg:text-left text-center md:w-[600px]">
                    <h1 className="text-[26px] md:text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] text-white font-semibold bannerHeading">Grow Big with <span className="text-[#28AE60]">Dev Rohan</span> {'"Full Stack Developer"'}</h1>
                    <p className="text-[15px] md:text-[18px] xl:text-[19px] lg:text-[16px] 2xl:text-[23px] text-white mt-3 mb-3 font-normal bannerPara">Are you looking to create dynamic and interactive web applications? So look no further! As a seasoned MERN stack expert,  i specialize in crafting immersive user experiences by seamlessly integrating MongoDB, Express, React and Node. I have experience in creating high quality projects with more than 50+ global and local projects.</p>

                    <div className="flex lg:justify-start justify-center mt-7">
                      <Link href="/contact-me"><a className="w-[130px] h-[40px] text-[14px] md:w-[140px] md:h-[45px] md:text-[15px] lg:w-[145px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[18px] flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent ease-in-out duration-500 text-white font-semibold rounded-md hover:text-[#28AE60] mr-5 bannerBtnOne">
                          HIRE ME
                      </a></Link>

                      <a onClick={(e) => setModal(!modal)} className="w-[190px] h-[40px] text-[14px] md:w-[190px] md:h-[45px] md:text-[15px] lg:w-[200px] lg:h-[45px] lg:text-[16px] xl:w-[210px] xl:h-[50px] 2xl:w-[220px] 2xl:h-[55px] 2xl:text-[18px] flex justify-center items-center hover:bg-[#28AE60] border-[3px] border-[#28AE60] bg-transparent ease-in-out duration-500 text-[#28AE60] font-semibold rounded-md hover:text-[#ffffff] bannerBtnTwo cursor-pointer">
                          <FaPlayCircle className="2xl mr-2"/>See how it works
                      </a>
                    </div>
                  </div>

                  <div className="lg:w-[35%] mx-auto lg:mx-0 w-[100%] text-center md:w-[300px] opacity-70">
                    <Image src={MyImage} className="rounded-xl overflow-hidden duration-700" height={700} alt="dev-rohan"/>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="w-[100%]">
            <div style={{backgroundSize:"48% 100%"}} className="flex justify-start items-center z-0 w-[100%] lg:h-[500px] lg:bg-[url('../assets/images/devrohanImageTwo.png')] bg-no-repeat bg-none bg-left ...">
              <div className="container flex lg:justify-end flex-col lg:flex-row items-center">
                <div className="lg:hidden block">
                  <Image className="w-[100%] object-cover" src={devImage} alt="dev rohan" width={500} height={300}/>
                </div>

                <div className="lg:w-[50%] w-[100%] text-center lg:text-right pb-10 lg:pb-0 mt-5 lg:mt-0 lg:mb-0">
                  <h1 ref={heading} className={`text-[26px] md:text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] text-white font-semibold ${myHeadingIsVisible ? "heading2ndBlock" : ""}`}>The Largest Business Expert</h1>
                  <p className={`text-[15px] md:text-[18px] xl:text-[19px] lg:text-[16px] 2xl:text-[23px] text-white mt-3 mb-3 font-normal ${myHeadingIsVisible ? "para2ndBlock" : ""}`}>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.</p>
                  <div className="flex lg:justify-end justify-center mt-5">
                    <a className={`w-[130px] h-[40px] text-[14px] md:w-[140px] md:h-[45px] md:text-[15px] lg:w-[145px] lg:h-[45px] lg:text-[16px] xl:w-[150px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[55px] 2xl:text-[18px] flex justify-center items-center bg-[#28AE60] border-[3px] border-[#28AE60] hover:bg-transparent ease-in-out duration-500 text-white font-semibold rounded-md hover:text-[#28AE60] ${myHeadingIsVisible ? "aboutmeBtn" : ""}`}>
                        About me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <About/>

          <Skill/>

          <Services/>

          <WorkProcess/>

          <Portfolio/>

          <Contact/>
          
          <div id="contactme">
            <Footer/>
          </div>

        </div>

    </>
  )
}

export default Home;
