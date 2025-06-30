import React from "react";
import HeroSection from "../Components/HeroSection";
import OurService from "../Components/OurService";
import FintechPage from "../Components/FintechPage";
import WhyUs from "../Components/WhyUs";
import Highlights from "../Components/Highlights";
import Testimonials from "../Components/Testimonial";
import TrustedPartners from "../Components/TrustedPartner";
import ApplicationForm from "../Components/ApplicationForm";



const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        <HeroSection />
        <OurService />
        <FintechPage />
        <WhyUs />
        <Highlights />
        <Testimonials />
        <TrustedPartners />
        <ApplicationForm />
        </div>
    );
}
export default Home;