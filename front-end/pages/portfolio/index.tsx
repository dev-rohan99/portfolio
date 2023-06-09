import React from 'react';
import Banner from '../../components/banner/Banner';
import Contact from '../../components/contact-section/Contact';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Portfolio from '../../components/portfolio-section/Portfolio';
import TopHeader from "../../components/top-header/TopHeader";


const Index = () => {


  return (
    <>
        
        <TopHeader/>
        <Header/>

        <Banner pageName="portfolio"/>

        <Portfolio/>

        <Contact/>

        <Footer/>
    
    </>
  )
}

export default Index;