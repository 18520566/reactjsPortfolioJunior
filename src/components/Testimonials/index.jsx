import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsArrItem } from "../../GlobalContanst";
import "./index.css";



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsArrItem.map((item) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={item.img} />
              </div>
              <h5 className="colleague__name">{item.name}</h5>
              <small className="colleague__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
