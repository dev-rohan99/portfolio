import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { MdAnalytics } from 'react-icons/md';
import { RiLogoutBoxFill, RiProfileFill, RiSettings5Fill } from 'react-icons/ri';
import { SiGooglemessages } from 'react-icons/si';
import profilePhoto from "../../assets/images/profile.jpg";
import { FaCartPlus } from 'react-icons/fa';
import Dashboard from '../../components/dashboard/Dashboard';
import Analysis from '../../components/analysis/Analysis';
import Order from '../../components/order/Order';
import Profile from '../../components/profile/Profile';
import Setting from '../../components/setting/Setting';
import Link from 'next/link';


const Index = () => {

  const [dashboard, setDashboard] = useState<boolean>(true);
  const [analysis, setAnalysis] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [chat, setChat] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);

  const handleDashboardShow = (e : React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setDashboard(true);
      setAnalysis(false);
      setOrder(false);
      setChat(false);
      setProfile(false);
      setSettings(false);
  }

  const handleAnalysisShow = (e : React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setDashboard(false);
      setAnalysis(true);
      setOrder(false);
      setChat(false);
      setProfile(false);
      setSettings(false);
  }

  const handleChatShow = (e : React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setDashboard(false);
      setAnalysis(false);
      setOrder(false);
      setChat(true);
      setProfile(false);
      setSettings(false);
  }

  const handleOrderShow = (e : React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setDashboard(false);
      setAnalysis(false);
      setOrder(true);
      setChat(false);
      setProfile(false);
      setSettings(false);
  }

  const handleProfileShow = (e : React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setDashboard(false);
      setAnalysis(false);
      setOrder(false);
      setChat(false);
      setProfile(true);
      setSettings(false);
  }

  const handleSettingsShow = (e : React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setDashboard(false);
      setAnalysis(false);
      setOrder(false);
      setChat(false);
      setProfile(false);
      setSettings(true);
  }

  useEffect(() => {

    const securePage = async () => {
      
    }

    securePage();

  });

  return (
    <>
    
        <div className="">
          <div className="w-[100%] flex justify-between ">

            <div className="w-[300px] h-[100vh] relative bg-gradient-to-r from-[#17773f] to-[#292929] menuBlock">
              <div className="w-[100%] h-[100%] absolute left-0 top-0 bottom-0 p-3">

                <div className="p-4 flex justify-start items-center rounded-md bg-[#ffffff46]">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <Image className="object-cover" src={profilePhoto} alt="dev rohan"/>
                  </div>

                  <div className="text-white ml-3 cursor-pointer">
                    <h3 className="text-[18px] font-bold">Rohan Mostofa</h3>
                    <h5 className="text-[15px] text-[#a0ffc8] font-semibold">dev-rohan</h5>
                  </div>
                </div>

                <div className="mt-5">
                  <ul className="text-white">
                    <li className=""><Link href="/" onClick={handleDashboardShow} className={`p-3 duration-500 text-[16px] flex justify-start items-center font-semibold rounded-md hover:bg-[#ffffff46] hover:scale-[1.04] ${dashboard ? "active" : ""}`}><AiFillDashboard className="text-3xl text-[#a0ffc8] mr-3"/>Dashboard</Link></li>
                    <li className=""><Link href="/" onClick={handleAnalysisShow} className={`p-3 duration-500 text-[16px] flex justify-start items-center font-semibold rounded-md hover:bg-[#ffffff46] mt-3 hover:scale-[1.04] ${analysis ? "active" : ""}`}><MdAnalytics className="text-3xl text-[#a0ffc8] mr-3"/>Analysis</Link></li>
                    <li className=""><Link href="/" onClick={handleOrderShow} className={`p-3 duration-500 text-[16px] flex justify-start items-center font-semibold rounded-md hover:bg-[#ffffff46] mt-3 hover:scale-[1.04] ${order ? "active" : ""}`}><FaCartPlus className="text-3xl text-[#a0ffc8] mr-3"/>Order</Link></li>
                    <li className=""><Link href="/" onClick={handleChatShow} className={`p-3 duration-500 text-[16px] flex justify-start items-center font-semibold rounded-md hover:bg-[#ffffff46] mt-3 hover:scale-[1.04] ${chat ? "active" : ""}`}><SiGooglemessages className="text-3xl text-[#a0ffc8] mr-3"/>Chat with Rohan</Link></li>
                    <li className=""><Link href="/" onClick={handleProfileShow} className={`p-3 duration-500 text-[16px] flex justify-start items-center font-semibold rounded-md hover:bg-[#ffffff46] mt-3 hover:scale-[1.04] ${profile ? "active" : ""}`}><RiProfileFill className="text-3xl text-[#a0ffc8] mr-3"/>Profile</Link></li>
                    <li className="pb-4 border-b-[3px] border-[#ffffff46]"><Link href="/" onClick={handleSettingsShow} className={`p-3 duration-500 text-[16px] flex justify-start items-center font-semibold rounded-md hover:bg-[#ffffff46] mt-3 hover:scale-[1.04] ${settings ? "active" : ""}`}><RiSettings5Fill className="text-3xl text-[#a0ffc8] mr-3"/>Settings</Link></li>

                    <li className=""><Link href="/" className="p-3 duration-500 text-[16px] mt-8 flex justify-start items-center font-semibold rounded-md bg-[#ffffff46] hover:scale-[1.04]"><RiLogoutBoxFill className="text-3xl text-[#a0ffc8] mr-3"/>Logout!</Link></li>
                  </ul>
                </div>

              </div>
            </div>


            <div className="w-[80%] p-9">

              {dashboard && <div className="">
                <Dashboard/>
              </div>}

              {analysis && <div className="">
                <Analysis/>
              </div>}

              {order && <div className="">
                <Order/>
              </div>}

              {profile && <div className="">
                <Profile/>
              </div>}

              {settings && <div className="">
                <Setting/>
              </div>}

            </div>

          </div>
        </div>
    
    </>
  )
}

export default Index;
