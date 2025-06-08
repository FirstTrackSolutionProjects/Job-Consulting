import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Tech Consulting",
    image: "/images/tech-consulting.jpg",
  },
  {
    title: "Digital Strategy",
    image: "/images/digital-strategy.jpg",
  },
  {
    title: "Project Management",
    image: "/images/project-management.jpg",
  },
  {
    title: "Cloud Solutions",
    image: "/images/cloud-solution.jpg",
  },
  { title: "Data Analytics", 
    image: "/images/data-analytics.jpg" 
  },
  { title: "Cybersecurity"
    , image: "/images/cybersecurity.jpg" 
  },
  { title: "AI Solutions",
    image: "/images/ai-solutions.jpg" 
  },
  { title: "DevOps Services",
    image: "/images/devops.jpg"
  },
];

const OurService = () => {
  return (
    <section className="py-16 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Introducing Our Latest Consulting Solutions
        </h2>
        <p className="text-xl font-semibold text-gray-700 mb-12">
          Simplifying Success
        </p>

        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#fef6ef] shadow-md hover:shadow-lg transition p-4 rounded-md"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-bold text-left leading-snug">
                {service.title.split(" ").slice(0, 1).join(" ")}
                <br />
                {service.title.split(" ").slice(1).join(" ")}
              </h3>
              <div className="mt-2 w-3/4"></div>
            </div>
          ))}
        </div>

        {/* Swiper Slider for small screens */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="min-w-[250px] bg-[#fef6ef] shadow-md hover:shadow-lg transition p-4 rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-84 object-cover rounded"
                  />
                  <h3 className="mt-4 text-lg font-bold text-left leading-snug">
                    {service.title.split(" ").slice(0, 1).join(" ")}
                    <br />
                    {service.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <div className="mt-2 w-3/4"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurService;
