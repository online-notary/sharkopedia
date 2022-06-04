import React from 'react';
import NavBar from '../components/NavBar';
import BannerThree from '../components/banner/BannerThree';
import Subscribe from '../components/Subscribe';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Features from '../components/Features';
import Feadback from '../components/Feadback';
import Pricing from '../components/Pricing';
import News from '../components/News';
import Work from '../components/Work';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>  
            <NavBar />

            <BannerThree />

            <Subscribe />

            <Welcome />

            <About />

            <Services />

            <Team />

            <Portfolio />

            <Features />

            <Feadback />
  
            <Pricing />

            <News />

            <Work />

            <ContactUs />

            <Footer />
        </>
    )
}
