import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

export default function LogosSwiper({
  logos = [],
  title = " ",
  autoplay = true, // 👈 nuevo valor por defecto
}) {

  return (
    <div className="py-16">
      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-4">
        <h2 className="text-lg font-medium text-black">{title}</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
  autoplay={autoplay ? { delay: 750, disableOnInteraction: false } : false}
  loop={autoplay}
  slidesPerView={2}
  spaceBetween={0}
  centeredSlides={!autoplay}
 className={!autoplay ? "flex start" : ""}

          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logoSrc, index) => (
            <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-28 w-full">
  <div className="h-24 w-40 flex items-center justify-center">
    <img
      src={logoSrc}
      alt={`Logo ${index}`}
      className="max-h-full max-w-full object-contain"
    />
  </div>
</div>


            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
