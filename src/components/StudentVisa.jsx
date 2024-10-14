"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { base_url } from "@/utils/const";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const StudentVisa = ({ data }) => {
  console.log(data);

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    };
  }, []);
  return (
    <div className="visa-section mb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 position-relative ">
            <div className="slider-btn-groups">
              <div className="slider-btn prev-1">
                <svg
                  width={21}
                  height={12}
                  viewBox="0 0 21 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 6.75C20.4142 6.75 20.75 6.41421 20.75 6C20.75 5.58579 20.4142 5.25 20 5.25L20 6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989594 6.3033 0.6967C6.01041 0.403807 5.53553 0.403807 5.24264 0.6967L0.469669 5.46967ZM20 5.25L1 5.25L1 6.75L20 6.75L20 5.25Z" />
                </svg>
              </div>
              <div className="slider-btn next-1">
                <svg
                  width={21}
                  height={12}
                  viewBox="0 0 21 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM1 6.75L20 6.75V5.25L1 5.25L1 6.75Z" />
                </svg>
              </div>
            </div>
            <Swiper {...settings} className="swiper visa-card-swiper">
              <div className="swiper-wrapper">
                {
                  data.get_section_items.map((item, index) => {
                    return <SwiperSlide key={index} className="swiper-slide">
                      <div className="visa-section-card">
                        <img src={base_url + item.image} alt="" />
                        <div className="visa-card-content">
                          <span>{item.title}</span>
                          <h2>{item.sub_title}</h2>
                          <p>{item.description} .</p>
                          <a href="#" className="primary-btn1">
                            View
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  })
                }
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentVisa