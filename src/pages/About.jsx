import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
       
          <Helmet>
            <title>About | FTST </title>
            <meta
              name="description"
              content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
            />
            </Helmet>
    <div className="max-w-4xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <img
        src="/images/about.png"
        alt="Team"
        className="w-full h-80 object-cover rounded mb-6"
      />
      <p className="text-lg text-gray-700">
        First Track Solution has been a prominent name in the Training & Placement since October 2011. In October 2022, it was officially registered as First Track Solution Technologies Private Limited.<br />
        Today, we operate as a dynamic company engaged in Software Development, Fintech, E-commerce, logistic, Training & Placement, Job Recruitment, and a wide range of Internet-based services.<br />
        Our strength lies in delivering cutting-edge software solutions, customized e-commerce platforms, and holistic internet services that cater to the evolving needs of clients across various industries. Backed by a passionate and skilled team, we are dedicated to innovation, quality, and staying ahead of technological trends.
        
      </p>
    </div>
    </>
  );
};

export default About;