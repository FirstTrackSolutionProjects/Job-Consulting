import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <img
        src="/images/about-team.jpg"
        alt="Team"
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-lg text-gray-700">
        We are a passionate team dedicated to connecting job seekers with the right employers. Our mission is to simplify the hiring process and provide valuable tools to both employers and candidates.
      </p>
    </div>
  );
};

export default About;