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
const Banner = ({ banner }) => {

    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            effect: "fade",
            loop: true,
            fadeEffect: {
                crossFade: true, // Enable cross-fade transition
            },
            // autoplay: {
            // 	delay: 2000, // Autoplay duration in milliseconds
            // 	disableOnInteraction: false,
            // },
            pagination: {
                el: ".swiper-pagination",
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
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 1,
                }
            }
        };
    }, []);


    return (
        <>
            <div className="home1-banner-area">
                <Swiper {...settings} className="swiper banner-section-swiper">
                    <div className="swiper-wrapper">
                        {/* {
                            banner.get_section_items.map((item ,index) => {
                                console.log("items",item );
                                
                                <SwiperSlide key={index} className="swiper-slide">
                                    <div className="home1-banner-wrapper" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${base_url + item.item})` }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="home1-banner-content">
                                                        <h1>Explore the world <span>With Us!</span></h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        } */}

                        {/* <SwiperSlide className="swiper-slide">
                            <div className="home1-banner-wrapper" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/image/global-sky-banner.jpg)' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="home1-banner-content">
                                                <h1>Explore the world <span>With Us!</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                        {
                            banner.get_section_items.map((item, index) => {
                                return (

                                    <SwiperSlide key={index} className="swiper-slide">
                                        <div className="home1-banner-wrapper" style={{ backgroundImage: `url(${base_url + item.image})` }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="home1-banner-content">
                                                            <h1>Explore the world <span>With Us!</span></h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })
                        }

                    </div>
                </Swiper>
                <div className="swiper-pagination" />
            </div>
            {/* <div className="home6-banner-section mb-120">
                <div className="video-wrapper">
                    <video autoPlay loop muted playsInline src="/assets/image/video.mp4" />
                    <div className="video-content-wrap text-animation">
                        <div className="title-area">
                            <h1>Explore the world <span>With Us!</span></h1>
                        </div>
                    </div>
                </div>

            </div> */}

        </>
    )
}

export default Banner