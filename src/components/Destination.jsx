"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
import { getofferSliderData } from "@/utils/getApi";
import { base_url } from "@/utils/const";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Destination = ({ data }) => {


    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            loop: true,
            // autoplay: {
            // 	delay: 2000, // Autoplay duration in milliseconds
            // 	disableOnInteraction: false,
            // },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
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
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 2,
                }
            }
        };
    }, []);
    return (
        <>
            <div className="offer-section mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="offer-banner-title">
                                <h2>Exclusive Offers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-60 position-relative">
                            <Swiper {...settings} className="swiper offer-banner-slider">
                                <div className="swiper-wrapper">
                                    {
                                        data?.get_section_items?.map((item, index) => {

                                            return (
                                                <SwiperSlide key={index} className="swiper-slide">
                                                    <div className="offer-card">
                                                        <img src={base_url + item.image} alt="image" />
                                                        <div className="offer-card-content style-2">
                                                            <span>{item.title}</span>
                                                            <h2>{item?.sub_title}</h2>
                                                            <h6>{item?.description}</h6>
                                                            <Link href={item.custom_url} className="primary-btn1 style-2">View Details</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </div>
                            </Swiper>
                            <div className="swiper-pagination1" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Destination