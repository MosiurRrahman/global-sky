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
import { base_url } from "@/utils/const";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Testimonial = ({ data }) => {
    const timeAgo = (date) => {
        const now = new Date();
        const reviewDate = new Date(date);
        const diffInSeconds = Math.floor((now - reviewDate) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };

        for (const interval in intervals) {
            const timePassed = Math.floor(diffInSeconds / intervals[interval]);
            if (timePassed > 1) {
                return `${timePassed} ${interval}s ago`;
            } else if (timePassed === 1) {
                return `1 ${interval} ago`;
            }
        }
        return "Just now";
    };

    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2000, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".next-2",
                prevEl: ".prev-2",
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
                    slidesPerView: 2,
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
                    slidesPerView: 3,
                }
            }
        };
    }, []);
    return (
        <>
            <div className="testimonial-section mb-90">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 mb-40">
                            <div className="section-title style-2 text-center">
                                <h2>{data?.section?.title}</h2>
                                <p>{data?.section?.sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-xxl-2 col-xl-3 col-lg-4 d-lg-block d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center ">
                            <div className="gobal-visa-section">
                                <div className="global-icon">
                                    <img src="assets/image/icon/global-icon.svg" alt="" />
                                </div>
                                <div className="global-visa-content">
                                    <h6>Global Sky Visa Services</h6>
                                    <div className="rating">
                                        {(() => {
                                            const totalReviews = data?.reviews?.length;
                                            const totalRating = data?.reviews?.reduce((acc, review) => acc + parseFloat(review.ratting), 0);
                                            const avgRating = Number((totalRating / totalReviews).toFixed(1)); // Calculate average rating

                                            return (
                                                <>
                                                    <span>{totalReviews}</span> {/* Display the average rating */}
                                                    <ul className="star">
                                                        {[...Array(5)].map((_, i) => {
                                                            if (i < Math.floor(avgRating)) {
                                                                // Full star
                                                                return <li key={i}><i className="bi bi-star-fill" /></li>;
                                                            } else if (i < Math.ceil(avgRating)) {
                                                                // Half star
                                                                return <li key={i}><i className="bi bi-star-half" /></li>;
                                                            } else {
                                                                // Empty star
                                                                return <li key={i}><i className="bi bi-star" /></li>;
                                                            }
                                                        })}
                                                    </ul>
                                                    
                                                </>
                                            );
                                        })()}


                                    </div>
                                    <p>Based on <span>{data.reviews.length}&nbsp;reviews&nbsp;</span>  
                                        powered by 
                                        <svg width={58} height={20} viewBox="0 0 58 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.8206 10.5009C24.8206 13.2478 22.6717 15.2719 20.0346 15.2719C17.3974 15.2719 15.2485 13.2478 15.2485 10.5009C15.2485 7.73472 17.3974 5.72998 20.0346 5.72998C22.6717 5.72998 24.8206 7.73472 24.8206 10.5009ZM22.7254 10.5009C22.7254 8.78438 21.48 7.61 20.0346 7.61C18.5891 7.61 17.3437 8.7845 17.3437 10.5009C17.3437 12.2003 18.5891 13.3919 20.0346 13.3919C21.48 13.392 22.7254 12.1981 22.7254 10.5009Z" fill="#FF4131" />
                                            <path d="M35.1453 10.5009C35.1453 13.2478 32.9964 15.2719 30.3593 15.2719C27.7221 15.2719 25.5732 13.2478 25.5732 10.5009C25.5732 7.73687 27.7221 5.72998 30.3593 5.72998C32.9963 5.72998 35.1453 7.73472 35.1453 10.5009ZM33.0501 10.5009C33.0501 8.78438 31.8047 7.61 30.3593 7.61C28.9138 7.61 27.6684 8.7845 27.6684 10.5009C27.6684 12.2003 28.9138 13.3919 30.3593 13.3919C31.8047 13.392 33.0501 12.1981 33.0501 10.5009Z" fill="#FFBC00" />
                                            <path d="M45.0406 6.01828V14.5836C45.0406 18.107 42.9627 19.546 40.5063 19.546C38.194 19.546 36.8023 17.9994 36.2774 16.7346L38.1015 15.9752C38.4263 16.7518 39.2222 17.6681 40.5042 17.6681C42.0765 17.6681 43.051 16.698 43.051 14.8718V14.1856H42.9778C42.5089 14.7643 41.6054 15.2697 40.4654 15.2697C38.08 15.2697 35.8945 13.1918 35.8945 10.5182C35.8945 7.82512 38.08 5.72998 40.4654 5.72998C41.6033 5.72998 42.5068 6.23544 42.9778 6.79686H43.051V6.02032H45.0406V6.01828ZM43.1994 10.5182C43.1994 8.83819 42.0787 7.61 40.6526 7.61C39.2071 7.61 37.996 8.83819 37.996 10.5182C37.996 12.1809 39.207 13.3919 40.6526 13.3919C42.0787 13.392 43.1994 12.1809 43.1994 10.5182Z" fill="#0085F7" />
                                            <path d="M48.3208 0.998047V14.9797H46.2773V0.998047H48.3208Z" fill="#00A94B" />
                                            <path d="M56.2834 12.0714L57.9096 13.1555C57.3848 13.9321 56.12 15.2699 53.9346 15.2699C51.2243 15.2699 49.2002 13.1748 49.2002 10.499C49.2002 7.66174 51.2415 5.72803 53.7001 5.72803C56.1758 5.72803 57.3869 7.69833 57.7827 8.76306L58 9.30511L51.6223 11.9466C52.1105 12.9038 52.8698 13.3921 53.9346 13.3921C55.0014 13.3922 55.7414 12.8672 56.2834 12.0714ZM51.2781 10.3549L55.5415 8.58464C55.307 7.98878 54.6014 7.57372 53.7712 7.57372C52.7064 7.57361 51.2243 8.51361 51.2781 10.3549Z" fill="#FF4131" />
                                            <path d="M7.51349 9.25987V7.23576H14.3344C14.4011 7.58852 14.4354 8.00585 14.4354 8.4575C14.4354 9.97615 14.0203 11.8539 12.6824 13.1919C11.381 14.547 9.71829 15.2698 7.51564 15.2698C3.43299 15.2698 0 11.9443 0 7.86176C0 3.77921 3.43299 0.453613 7.51564 0.453613C9.77425 0.453613 11.3832 1.33981 12.592 2.49494L11.1638 3.92319C10.2969 3.11006 9.12243 2.47772 7.51349 2.47772C4.53216 2.47772 2.20049 4.88042 2.20049 7.86176C2.20049 10.8431 4.53216 13.2458 7.51349 13.2458C9.4472 13.2458 10.5485 12.4692 11.2542 11.7637C11.8263 11.1915 12.2028 10.3742 12.3512 9.25783L7.51349 9.25987Z" fill="#0085F7" />
                                        </svg>
                                    </p>
                                    <a href="#">review us on
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={12} cy={12} r={12} fill="white" />
                                            <g clipPath="url(#clip0_285_1060)">
                                                <path d="M19.3957 10.6092L12.8694 10.6089C12.5812 10.6089 12.3477 10.8424 12.3477 11.1306V13.2155C12.3477 13.5036 12.5812 13.7372 12.8694 13.7372H16.5446C16.1422 14.7816 15.391 15.6563 14.4327 16.212L15.9998 18.9248C18.5136 17.471 19.9998 14.9201 19.9998 12.0645C19.9998 11.6579 19.9698 11.3673 19.9099 11.04C19.8643 10.7913 19.6485 10.6092 19.3957 10.6092Z" fill="#167EE6" />
                                                <path d="M11.9999 16.8695C10.2013 16.8695 8.63116 15.8868 7.78788 14.4326L5.0752 15.9962C6.45566 18.3887 9.04173 19.9999 11.9999 19.9999C13.451 19.9999 14.8203 19.6092 15.9999 18.9283V18.9246L14.4328 16.2117C13.7159 16.6275 12.8864 16.8695 11.9999 16.8695Z" fill="#12B347" />
                                                <path d="M16 18.9284V18.9247L14.4329 16.2119C13.7161 16.6276 12.8867 16.8696 12 16.8696V20.0001C13.4512 20.0001 14.8205 19.6094 16 18.9284Z" fill="#0F993E" />
                                                <path d="M7.13044 12.0002C7.13044 11.1137 7.37238 10.2842 7.78803 9.56747L5.07534 8.00391C4.39069 9.17975 4 10.5453 4 12.0002C4 13.4551 4.39069 14.8206 5.07534 15.9965L7.78803 14.4329C7.37238 13.7161 7.13044 12.8867 7.13044 12.0002Z" fill="#FFD500" />
                                                <path d="M11.9999 7.13044C13.1727 7.13044 14.25 7.54719 15.0915 8.24041C15.2991 8.41141 15.6008 8.39906 15.7909 8.20891L17.2681 6.73172C17.4839 6.51597 17.4685 6.16281 17.238 5.96288C15.8282 4.73978 13.9938 4 11.9999 4C9.04173 4 6.45566 5.61116 5.0752 8.00372L7.78788 9.56728C8.63116 8.11313 10.2013 7.13044 11.9999 7.13044Z" fill="#FF4B26" />
                                                <path d="M15.0916 8.24041C15.2992 8.41141 15.601 8.39906 15.7911 8.20891L17.2683 6.73172C17.484 6.51597 17.4686 6.16281 17.2382 5.96288C15.8283 4.73975 13.994 4 12 4V7.13044C13.1728 7.13044 14.2502 7.54719 15.0916 8.24041Z" fill="#D93F21" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_285_1060">
                                                    <rect width={16} height={16} fill="white" transform="translate(4 4)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-10 col-xl-9 col-lg-8 position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="slider-btn-groups2">
                                            <div className="slider-btn prev-2">
                                                <svg width={21} height={12} viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6.75C20.4142 6.75 20.75 6.41421 20.75 6C20.75 5.58579 20.4142 5.25 20 5.25L20 6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989594 6.3033 0.6967C6.01041 0.403807 5.53553 0.403807 5.24264 0.6967L0.469669 5.46967ZM20 5.25L1 5.25L1 6.75L20 6.75L20 5.25Z" />
                                                </svg>
                                            </div>
                                            <div className="slider-btn next-2">
                                                <svg width={21} height={12} viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM1 6.75L20 6.75V5.25L1 5.25L1 6.75Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Swiper {...settings} className="swiper testimonial-swipe">
                                            <div className="swiper-wrapper">
                                                {
                                                    data.reviews.map((review, index) => {
                                                        return (
                                                            <SwiperSlide key={index} className="swiper-slide">
                                                                <div className="testimonial-content">
                                                                    <div className="google-icon">
                                                                        <img src={"assets/image/icon/google-icon.svg"} alt="" />
                                                                    </div>
                                                                    <div className="author-area">
                                                                        <div className="author-img">
                                                                            <img src={base_url + review.photo} alt="" />
                                                                        </div>
                                                                        <div className="author-content">
                                                                            <h6>{review.user}</h6>
                                                                            <span>{timeAgo(review.created_at)}</span> {/* Custom "time ago" */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="author-text">
                                                                        <div className="rating">
                                                                            <ul className="star">
                                                                                {[...Array(5)].map((_, i) => (
                                                                                    <li key={i}>
                                                                                        <i className={`bi bi-star${i < parseInt(review.ratting) ? '-fill' : ''}`} />
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                        <p>{review.content}</p>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial