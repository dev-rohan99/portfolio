import React from 'react';
import Banner from '../../components/banner/Banner';
import Contact from '../../components/contact-section/Contact';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopHeader from '../../components/top-header/TopHeader';


const index = () => {


  return (
    <>
    
        <TopHeader/>
        <Header/>

        <Banner pageName="contact-me"/>

        <Contact/>

        <Footer/>
    
    </>
  )
}

export default index;
