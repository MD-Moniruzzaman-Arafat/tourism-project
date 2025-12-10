import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Banner({ data }) {
  console.log(data);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto rounded-2xl my-10"
      >
        {data.tours.map((item) => (
          <SwiperSlide key={item._id}>
            <img src={item.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
