import React from "react";
import HeroSection from "../Components/HeroSection";
import OurService from "../Components/OurService";
import FintechPage from "../Components/FintechPage";
import WhyUs from "../Components/WhyUs";
import Highlights from "../Components/Highlights";
import Testimonials from "../Components/Testimonial";
import TrustedPartners from "../Components/TrustedPartner";
import StartupIndia from "../Components/StartupIndia";
import ISO from "../Components/ISO";
import ApplicationForm from "../Components/ApplicationForm";
import { Helmet } from "react-helmet"



const Home = () => {
    return (
         <>
    <Helmet>
            <title>Home | FTST </title>
            <meta
              name="description"
              content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
            />
          </Helmet>
        <div className="min-h-screen bg-gray-100">
        <HeroSection />
        <OurService />
        <FintechPage />
        <WhyUs />
        <Highlights />
        <Testimonials />
        <TrustedPartners />
        <StartupIndia />
        <ISO />
        <ApplicationForm />
        </div>
        </>
    );
}
export default Home;