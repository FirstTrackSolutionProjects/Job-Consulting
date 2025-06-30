import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const partners = [
    
    { name: 'ITM', logo: '/Partners/itm.jpg' },
    { name: 'Zoho', logo: '/Partners/zoho.png' },
    { name: 'Hostinger', logo: '/Partners/hostinger.png' },
    { name: 'AWs', logo: '/Partners/aws.png' },
    { name: 'Netlify', logo: '/Partners/netlify.png' },
    { name: 'IDFC', logo: '/Partners/idfc.png' },
    { name: 'RecruitIndia', logo: '/Partners/recruit.jpg' },
    { name: 'MaxLife', logo: '/Partners/maxlife.jpg' },
    { name: 'ICICI', logo: '/Partners/icici.jpg' },
    { name: 'HDFC', logo: '/Partners/hdfc.png' },
    { name: 'Axis', logo: '/Partners/axis.png' },
    { name: 'Kotak', logo: '/Partners/kotak.png' },
    { name: 'Jana', logo: '/Partners/jana.png' },
    { name: 'AU Small Finance', logo: '/Partners/au.jpg' },
    { name: 'LensKart', logo: '/Partners/lenskart.png' },
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