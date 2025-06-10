import React from "react";
import HeroSection from "../Components/HeroSection";
import OurService from "../Components/OurService";
import WhyUs from "../Components/WhyUs";
import Highlights from "../Components/Highlights";
import Testimonials from "../Components/Testimonial";
import ApplyForm from "../Components/ApplyForm";



const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        <HeroSection />
        <OurService />
        <WhyUs />
        <Highlights />
        <Testimonials />
        <ApplyForm />
        

        </div>
    );
}
export default Home;