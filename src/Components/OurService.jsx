import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom"; // For internal routing
import "swiper/css";
import "swiper/css/pagination";

const services = [
  { title: "Tech Consulting", image: "/images/tech-consulting.jpg" },
  { title: "Digital Strategy", image: "/images/digital-strategy.jpg" },
  { title: "Project Management", image: "/images/project-management.jpg" },
  { title: "Cloud Solutions", image: "/images/cloud-solution.jpg" },
  { title: "Data Analytics", image: "/images/data-analytics.jpg" },
  { title: "Cybersecurity", image: "/images/cybersecurity.jpg" },
  { title: "AI Solutions", image: "/images/ai-solutions.jpg" },
  { title: "DevOps Services", image: "/images/devops.jpg" },
  { title: "UI/UX Design", image: "/images/ui-ux.jpg" },
  { title: "Mobile App Development", image: "/images/mobile-app.jpg" },
  { title: "Web Development", image: "/images/web-development.jpg" },
  { title: "E-commerce Development", image: "/images/ecommerce.jpg" },
  { title: "Blockchain Solutions", image: "/images/blockchain.jpg" },
  { title: "System Administration", image: "/images/system-admin.jpg" },
  { title: "Training & Development", image: "/images/training.jpg" },
  { title: "Job Recruitment", image: "/images/job-recruitment.jpg" },
  { title: "Fintech Solutions", image: "/images/fintech.jpg" },
];

const OurService = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-200 to-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Introducing Our Latest Consulting Solutions
        </h2>
        <p className="text-xl font-semibold text-gray-900 mb-12">
          Simplifying Success
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => {
            const cardContent = (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden mx-auto hover:shadow-xl transition">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    {service.title.split(" ").slice(0, 1).join(" ")}<br />
                    {service.title.split(" ").slice(1).join(" ")}
                  </h3>
                </div>
              </div>
            );

            // Handle clickable conditions
            if (service.title === "Job Recruitment") {
              return (
                <SwiperSlide key={index}>
                  <Link to="/jobs">{cardContent}</Link>
                </SwiperSlide>
              );
            }

            if (service.title === "Training & Development") {
              return (
                <SwiperSlide key={index}>
                  <a
                    href="https://firsttracksolutiontechnologies.com/training"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                </SwiperSlide>
              );
            }

            if (service.title === "Fintech Solutions") {
              return (
                <SwiperSlide key={index}>
                  <Link to="/loan">{cardContent}</Link>
                </SwiperSlide>
              );
            }

            // Default return for all other services
            return (
              <SwiperSlide key={index}>
                {cardContent}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Optional Custom Pagination Dots */}
        {/* <div className="custom-pagination mt-6 flex justify-center gap-2"></div> */}
      </div>
    </section>
  );
};

export default OurService;
