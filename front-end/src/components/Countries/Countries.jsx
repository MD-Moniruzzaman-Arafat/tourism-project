// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Countries() {
  return (
    <>
      <h1 className="text-center font-extrabold text-4xl">Southeast Asia</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper container mx-auto my-10"
      >
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-2xl mx-auto rounded-2xl"
            src="https://i.ibb.co.com/qM4h85xp/bangladesh-flag-wrinkled-dark-background-3d-render-1.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
