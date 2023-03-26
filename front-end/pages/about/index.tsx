import { NextPage } from 'next';
import React from 'react';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopHeader from '../../components/top-header/TopHeader';
import Skill from '../../components/skill-section/Skill';
import About from '../../components/about-section/About';
import WorkProcess from '../../components/work-section/WorkProcess';
import Resume from '../../components/resume-section/Resume';
import Banner from '../../components/banner/Banner';


const index: NextPage = () => {

  

  return (
    <>

        <TopHeader/>
        <Header/>
    
        <Banner pageName="about"/>

        <About/>

        <Resume/>

        <Skill/>

        <WorkProcess/>

        <Footer/>
    
    </>
  )
}

export default index;
