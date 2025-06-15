import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const partners = [
    
     { name: 'ITM', logo: '/assets/itm.jpg' },
//   { name: 'Zoho', logo: '/assets/zoho.jpg' },
//   { name: 'Hostinger', logo: '/assets/hostinger.jpg' },
//   { name: 'AWs', logo: '/assets/aws.jpg' },
//   { name: 'Netlify', logo: '/assets/netlify.jpg' },
//   { name: 'Zoho', logo: '/assets/zoho.jpg' },
//   { name: 'Hostinger', logo: '/assets/hostinger.jpg' },
//   { name: 'AWs', logo: '/assets/aws.jpg' },
//   { name: 'Netlify', logo: '/assets/netlify.jpg' },

 ];

const TrustedPartners = () => {
  return (
    <div className="bg-gray-200 py-10 mt-5">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Our Trusted Partners</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md">
                <img src={partner.logo} alt={partner.name} className="w-32 h-20 object-contain rounded-md bg-white p-2" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedPartners;