import React from "react";
import "./index.css";
import IMG1 from "../../assets/TESTIMONIALS_VTHU.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const arrItem = [
  {
    name: "name",
    img: IMG1,
    review:
      "This is a very long review.This is a very long review.This is a very long review.This is a very long review.This is a very longreview.This is a very long review.This is a very long review.This is a very long review.",
  },
  {
    name: "name",
    img: IMG1,
    review:
      "This is a very long review.This is a very long review.This is a very long review.This is a very long review.This is a very longreview.This is a very long review.This is a very long review.This is a very long review.",
  },
];

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
        {arrItem.map((item) => {
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
