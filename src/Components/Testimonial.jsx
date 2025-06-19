import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anjali Mehra",
    role: "Software Developer at TCS",
    image: "/images/Gavatar.png",
    quote:
      "Thanks to this consultancy, I landed my dream role within 2 weeks! Their support and job matching were spot on.",
  },
  {
    name: "Prakash Pradhan",
    role: "Assistant Manager at Axis Bank",
    image: "/images/Bavatar.png",
    quote:
      "Professional, fast, and reliable. They guided me through every step and helped me prepare for interviews.",
  },
  {
    name: "Priya Verma",
    role: "HR Executive at Infosys",
    image: "/images/Gavatar.png",
    quote:
      "The team was very responsive and truly understood what I was looking for in a new role.",
  },
  {
    name: "Amit Chauhan",
    role: "Sales Officer",
    image: "/images/Bavatar.png",
    quote:
      "Excellent placement assistance and follow-up. Got my offer letter in no time.",
  },
  {
    name: "Neha Gupta",
    role: "Project Manager at IBM",
    image: "/images/Gavatar.png",
    quote:
      "Supportive and knowledgeable team. Helped me polish my resume and interview skills.",
  },
  {
    name: "Amit Singh",
    role: "Relationship Manager at ICICI Bank",
    image: "/images/Bavatar.png",
    quote:
      "Very professional and prompt service. Highly recommend to job seekers.",
  },
  {
    name: "Shamiya Takhsis",
    role: "HR Executive at ITM Skills Academy",
    image: "/images/Gavatar.png",
    quote:
      "I was impressed with their personalized approach. They really care about matching candidates with the right jobs.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Candidates Say</h2>
        <p className="text-gray-600 text-lg mb-12">
          Real stories from people we’ve helped land great careers.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
         
          
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
