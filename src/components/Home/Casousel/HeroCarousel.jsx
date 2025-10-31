// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";
import book from "../../../assets/images/gpone.png";
import fashion from "../../../assets/images/gptwo.png";
import technology from "../../../assets/images/gpthree.png";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Freshness You Can Trust, Prices You’ll Love.",
      subtitle: "Discount available. Grab it now!",
      image: book,
    },
    {
      title: "FreshMart",
      subtitle: "Simple, modern, and trustworthy",
      image: fashion,
    },
    {
      title: "Daily Harvest Market",
      subtitle: "Emphasizes freshness and everyday shopping.",
      image: technology,
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide
              title={slide.title}
              subtitle={slide.subtitle}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
