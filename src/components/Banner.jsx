"use client";
import { slugify } from "@/utils/slugify";
import { useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import { base_url } from "@/utils/const";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Banner = ({ data, banner }) => {
    

    const router = useRouter();
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
    // State for selected values
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedNationality, setSelectedNationality] = useState("");
    const [selectedResidency, setSelectedResidency] = useState("");

    // Dropdown open/close state
    const [isActiveCountry, setIsActiveCountry] = useState(false);
    const [isActiveCategory, setIsActiveCategory] = useState(false);
    const [isActiveNationality, setIsActiveNationality] = useState(false);
    const [isActiveResidency, setIsActiveResidency] = useState(false);

    // Refs for dropdowns
    const dropdownRefCountry = useRef(null);
    const dropdownRefCategory = useRef(null);
    const dropdownRefNationality = useRef(null);
    const dropdownRefResidency = useRef(null);

    // Dropdown toggle handlers
    const handleToggleCountry = () => setIsActiveCountry(!isActiveCountry);
    const handleToggleCategory = () => setIsActiveCategory(!isActiveCategory);
    const handleToggleNationality = () => setIsActiveNationality(!isActiveNationality);
    const handleToggleResidency = () => setIsActiveResidency(!isActiveResidency);

    // Select handlers
    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setIsActiveCountry(false);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setIsActiveCategory(false);
    };

    const handleSelectNationality = (nationality) => {
        setSelectedNationality(nationality);
        setIsActiveNationality(false);
    };

    const handleSelectResidency = (residency) => {
        setSelectedResidency(residency);
        setIsActiveResidency(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if both country and category are selected
        if (selectedCountry && selectedCategory) {
            // Redirect to the visa-details page with query params
            const queryUrl = `/visa-details?country=${encodeURIComponent(selectedCountry)}&category=${encodeURIComponent(selectedCategory)}`;
            router.push(queryUrl); // Redirect to visa-details page
        } else {
            alert("Please select both country and category");
        }
    };

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
                           banner.get_section_items.map((item,index) =>{
                            return(
                               
                                <SwiperSlide key={index} className="swiper-slide">
                            <div className="home1-banner-wrapper" style={{ backgroundImage: `url(${ base_url + item.image})` }}>
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
            <div className="package-search-filter-wrapper mb-120">
                <div className="container">
                    <div className="filter-and-form-area">
                        <div className="nav-buttons">
                            <ul className="nav nav-pills" id="pills-tab2" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="visa-tab" data-bs-toggle="pill" data-bs-target="#visa" type="button" role="tab" aria-controls="visa" aria-selected="false">
                                        <svg width={19} height={19} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.71439 11.5359C7.71558 11.5359 7.71669 11.5363 7.71784 11.5363C7.72021 11.5364 7.72259 11.5373 7.72496 11.5373L7.72522 11.5372L7.72548 11.5373C7.72701 11.5373 7.72849 11.5367 7.73001 11.5367C7.73625 11.5367 7.74226 11.5376 7.74849 11.5376H7.74864C9.63873 11.5376 11.1764 9.99994 11.1764 8.10977C11.1764 6.21961 9.63873 4.68194 7.74864 4.68194C7.74508 4.68194 7.74163 4.68246 7.73806 4.6825C7.7338 4.68228 7.72949 4.68291 7.72519 4.68291C7.71696 4.68294 7.70874 4.68336 7.70055 4.68417C7.69583 4.68461 7.69108 4.68439 7.68637 4.6851C5.82519 4.71879 4.32081 6.24061 4.32081 8.10977C4.32081 9.98836 5.84018 11.5172 7.71439 11.5359ZM5.08229 9.28169H5.86111C6.04202 9.87232 6.35789 10.4118 6.78962 10.8586C6.02602 10.5913 5.40667 10.0167 5.08229 9.28169ZM10.6629 8.10973C10.6629 8.33644 10.6343 8.5562 10.5851 8.76817H9.70824C9.7442 8.55108 9.76461 8.32931 9.76461 8.10339C9.76461 7.88214 9.74464 7.66468 9.7095 7.45149H10.5851C10.6343 7.66342 10.6629 7.88311 10.6629 8.10973ZM9.25109 8.11612C9.25109 8.33792 9.22982 8.55594 9.18937 8.7682H8.00529V7.45153H9.18826C9.23012 7.67058 9.25116 7.8931 9.25109 8.11612ZM6.40357 9.28169H7.49181V10.8043C6.98875 10.4024 6.6164 9.87636 6.40357 9.28169ZM8.00529 10.7647V9.28165H9.04825C8.8424 9.8561 8.48541 10.3674 8.00529 10.7647ZM8.00529 6.93801V5.45482C8.48441 5.85148 8.84088 6.36214 9.04695 6.93801H8.00529ZM7.49181 5.41522V6.93801H6.40216C6.61473 6.3447 6.9876 5.81786 7.49181 5.41522ZM7.49181 7.45149V8.76817H6.26215C6.22029 8.54905 6.19925 8.32647 6.19932 8.10339C6.19932 7.88166 6.22059 7.66368 6.261 7.45149H7.49181ZM5.74099 8.76817H4.91211C4.8629 8.5562 4.83429 8.33644 4.83429 8.10973C4.83429 7.88307 4.86287 7.66338 4.91207 7.45149H5.74221C5.70629 7.6685 5.68588 7.89023 5.68588 8.11608C5.68588 8.33736 5.70588 8.55494 5.74099 8.76817ZM8.63225 10.8863C9.07564 10.4364 9.40353 9.88581 9.58793 9.28165H10.4149C10.0798 10.0411 9.43081 10.6315 8.63225 10.8863ZM10.4149 6.93801H9.58938C9.4046 6.33376 9.07632 5.7832 8.63259 5.33336C9.43107 5.58819 10.0799 6.17864 10.4149 6.93801ZM6.78988 5.36078C6.35908 5.80695 6.04361 6.346 5.86245 6.93801H5.08222C5.40659 6.2028 6.0261 5.62805 6.78988 5.36078ZM16.7871 3.37076C16.6112 3.02976 16.3142 2.77819 15.9508 2.66219L7.82702 0.068319C7.46379 -0.0480189 7.07581 -0.0149173 6.73485 0.161241C6.39393 0.337102 6.14229 0.634126 6.02628 0.997501L5.48712 2.68594H3.4847C2.69457 2.68594 2.05176 3.32882 2.05176 4.11896V17.5672C2.05176 18.3573 2.69457 19 3.4847 19H12.0125C12.8026 19 13.4454 18.3573 13.4454 17.5672V15.2199L16.88 4.46296C16.996 4.09973 16.9631 3.71175 16.7871 3.37076ZM12.9319 17.5672C12.9319 18.0742 12.5194 18.4865 12.0125 18.4865H3.4847C2.97771 18.4865 2.56528 18.0742 2.56528 17.5672V4.11896C2.56528 3.61197 2.97775 3.19946 3.4847 3.19946H12.0125C12.5195 3.19946 12.9319 3.612 12.9319 4.11896V17.5672ZM16.3909 4.30684L13.4454 13.5319V4.11896C13.4454 3.32882 12.8026 2.68594 12.0125 2.68594H6.02602L6.51535 1.15366C6.58964 0.920981 6.75121 0.730573 6.97027 0.617427C7.18925 0.504428 7.43796 0.483202 7.6709 0.557421L15.7947 3.15133C16.0273 3.2257 16.2178 3.3872 16.3308 3.60633C16.4438 3.82527 16.4652 4.07416 16.3909 4.30684ZM11.2119 13.5225C11.2119 13.5906 11.1848 13.6559 11.1367 13.7041C11.0885 13.7522 11.0232 13.7793 10.9551 13.7793H4.54194C4.4746 13.7782 4.41041 13.7506 4.36319 13.7026C4.31597 13.6546 4.28951 13.5899 4.28951 13.5225C4.28951 13.4552 4.31597 13.3905 4.36319 13.3425C4.41041 13.2945 4.4746 13.2669 4.54194 13.2658H10.9551C10.9889 13.2658 11.0223 13.2724 11.0534 13.2853C11.0846 13.2982 11.1129 13.3171 11.1367 13.341C11.1605 13.3648 11.1794 13.3931 11.1923 13.4243C11.2052 13.4554 11.2119 13.4888 11.2119 13.5225ZM11.2119 15.335C11.2119 15.4031 11.1848 15.4684 11.1367 15.5165C11.0885 15.5647 11.0232 15.5917 10.9551 15.5917H4.54194C4.4746 15.5906 4.41041 15.563 4.36319 15.515C4.31597 15.467 4.28951 15.4023 4.28951 15.335C4.28951 15.2676 4.31597 15.203 4.36319 15.1549C4.41041 15.1069 4.4746 15.0794 4.54194 15.0782H10.9551C11.0232 15.0782 11.0885 15.1053 11.1367 15.1534C11.1848 15.2016 11.2119 15.2669 11.2119 15.335ZM9.7573 17.1474C9.75729 17.2155 9.73023 17.2808 9.68208 17.329C9.63393 17.3771 9.56863 17.4042 9.50054 17.4042H5.99656C5.92922 17.403 5.86502 17.3755 5.8178 17.3275C5.77059 17.2794 5.74413 17.2148 5.74413 17.1474C5.74413 17.0801 5.77059 17.0154 5.8178 16.9674C5.86502 16.9194 5.92922 16.8918 5.99656 16.8907H9.50054C9.56863 16.8907 9.63394 16.9177 9.68209 16.9659C9.73025 17.014 9.7573 17.0793 9.7573 17.1474Z" />
                                        </svg>
                                        Visa
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="flight-tab" data-bs-toggle="pill" data-bs-target="#flight" type="button" role="tab" aria-controls="flight" aria-selected="false">
                                        <svg width={19} height={19} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6905 9.82538H10.6713C10.6448 9.85331 10.6043 9.86611 10.5511 9.86611L7.75229 12.4872L7.67346 16.2192L6.81935 17.0739C6.79288 17.1007 6.74052 17.1126 6.65994 17.1126C6.55492 17.1126 6.47812 17.0809 6.43245 17.0137C6.38571 16.9469 6.34914 16.8736 6.32394 16.7961L5.80671 14.7315C5.79391 14.6646 5.76045 14.6187 5.70751 14.5922C5.66488 14.5686 5.6174 14.5552 5.56875 14.5529C5.43638 14.5529 5.32962 14.6012 5.25078 14.7021C5.17195 14.8005 5.09777 14.8828 5.03202 14.9485C4.80802 15.135 4.52992 15.2266 4.19741 15.2266C3.89399 15.2266 3.74098 15.0818 3.74098 14.79C3.74098 14.6445 3.76425 14.4994 3.81109 14.3533C3.85419 14.2148 3.92517 14.0865 4.01967 13.9763L4.35741 13.5993C4.35741 13.5854 4.3641 13.5728 4.37632 13.5589C4.39057 13.5461 4.39755 13.5321 4.39755 13.5182C4.43683 13.4783 4.45661 13.4387 4.45661 13.3989C4.45661 13.3471 4.42955 13.2965 4.37632 13.2502C4.33102 13.2091 4.27717 13.1786 4.21865 13.1609L2.09474 12.6437C1.9487 12.5916 1.87568 12.479 1.87568 12.3065V12.2867C1.87568 12.2734 1.88325 12.2417 1.89546 12.1873L2.70942 11.3736C2.73589 11.3602 2.77284 11.3419 2.81822 11.3139C2.8636 11.2872 2.89415 11.2738 2.9084 11.2738H6.36234C6.37514 11.2738 6.4051 11.2639 6.45223 11.2447C6.49761 11.2249 6.52816 11.2022 6.54183 11.1743L9.10297 8.43455C9.12945 8.40866 9.14312 8.36125 9.14312 8.29521C9.14312 8.16343 9.0893 8.07092 8.98428 8.0171L0.149441 5.13916C0.0831146 5.12491 0.047624 5.08883 0.0403513 5.0292C0.0339122 4.97999 0.0302216 4.93046 0.0292969 4.88084V4.78425C0.0292969 4.74353 0.0429695 4.71153 0.069442 4.68506L0.764709 4.01015C0.777509 3.98368 0.807473 3.95692 0.853727 3.93102C0.899108 3.90513 0.936054 3.89146 0.963108 3.89146H13.3115L16.3282 0.695558C16.5403 0.470106 16.8085 0.29818 17.134 0.17949C17.459 0.0596359 17.7708 0 18.0774 0C18.2753 0 18.4591 0.0442178 18.6229 0.129163C18.7887 0.215271 18.9045 0.377306 18.9714 0.614686V0.932647C18.9714 1.18486 18.9307 1.46268 18.8518 1.76726C18.7724 2.07155 18.6342 2.31009 18.435 2.48144L15.1797 5.59908C15.139 5.62556 15.1172 5.66978 15.1099 5.72854C15.1045 5.77113 15.101 5.81393 15.0994 5.85683V17.6499C15.0994 17.6764 15.0916 17.7488 15.0797 17.8675C15.0657 17.9871 15.0605 18.0601 15.0605 18.0866C15.0605 18.113 15.0494 18.1436 15.0302 18.1756C15.0148 18.2056 14.9906 18.2302 14.9607 18.246L14.3253 18.9014C14.232 18.9683 14.1595 19.0003 14.1063 19.0003C13.9745 19.0003 13.8826 18.9293 13.8296 18.7821L10.9712 10.0863C10.9565 10.0184 10.9221 9.95642 10.8723 9.908C10.8158 9.85331 10.7562 9.82538 10.6905 9.82538Z" />
                                        </svg>
                                        Flight
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="hotel-tab" data-bs-toggle="pill" data-bs-target="#hotel" type="button" role="tab" aria-controls="hotel" aria-selected="false">
                                        <svg width={19} height={19} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05315 19H7.29422V14.5893C7.29422 14.4993 7.32997 14.413 7.3936 14.3494C7.45723 14.2857 7.54353 14.25 7.63351 14.25H11.3657C11.4556 14.25 11.5419 14.2857 11.6056 14.3494C11.6692 14.413 11.7049 14.4993 11.7049 14.5893V19H15.946C16.036 19 16.1223 18.9643 16.1859 18.9006C16.2495 18.837 16.2853 18.7507 16.2853 18.6607V3.05357C16.2853 2.96359 16.2495 2.87729 16.1859 2.81366C16.1223 2.75003 16.036 2.71429 15.946 2.71429H14.2496V0.339286C14.2496 0.249302 14.2138 0.163003 14.1502 0.0993745C14.0866 0.0357461 14.0003 0 13.9103 0H5.08887C4.99888 0 4.91258 0.0357461 4.84896 0.0993745C4.78533 0.163003 4.74958 0.249302 4.74958 0.339286V2.71429H3.05315C2.96317 2.71429 2.87687 2.75003 2.81324 2.81366C2.74961 2.87729 2.71387 2.96359 2.71387 3.05357V18.6607C2.71387 18.7507 2.74961 18.837 2.81324 18.9006C2.87687 18.9643 2.96317 19 3.05315 19ZM12.2139 5.42857H13.571C13.751 5.42857 13.9236 5.50006 14.0508 5.62732C14.1781 5.75458 14.2496 5.92717 14.2496 6.10714C14.2496 6.28711 14.1781 6.45971 14.0508 6.58697C13.9236 6.71422 13.751 6.78571 13.571 6.78571H12.2139C12.0339 6.78571 11.8613 6.71422 11.734 6.58697C11.6068 6.45971 11.5353 6.28711 11.5353 6.10714C11.5353 5.92717 11.6068 5.75458 11.734 5.62732C11.8613 5.50006 12.0339 5.42857 12.2139 5.42857ZM12.2139 8.14286H13.571C13.751 8.14286 13.9236 8.21435 14.0508 8.34161C14.1781 8.46886 14.2496 8.64146 14.2496 8.82143C14.2496 9.0014 14.1781 9.17399 14.0508 9.30125C13.9236 9.42851 13.751 9.5 13.571 9.5H12.2139C12.0339 9.5 11.8613 9.42851 11.734 9.30125C11.6068 9.17399 11.5353 9.0014 11.5353 8.82143C11.5353 8.64146 11.6068 8.46886 11.734 8.34161C11.8613 8.21435 12.0339 8.14286 12.2139 8.14286ZM12.2139 10.8571H13.571C13.751 10.8571 13.9236 10.9286 14.0508 11.0559C14.1781 11.1831 14.2496 11.3557 14.2496 11.5357C14.2496 11.7157 14.1781 11.8883 14.0508 12.0155C13.9236 12.1428 13.751 12.2143 13.571 12.2143H12.2139C12.0339 12.2143 11.8613 12.1428 11.734 12.0155C11.6068 11.8883 11.5353 11.7157 11.5353 11.5357C11.5353 11.3557 11.6068 11.1831 11.734 11.0559C11.8613 10.9286 12.0339 10.8571 12.2139 10.8571ZM8.82101 5.42857H10.1782C10.3581 5.42857 10.5307 5.50006 10.658 5.62732C10.7852 5.75458 10.8567 5.92717 10.8567 6.10714C10.8567 6.28711 10.7852 6.45971 10.658 6.58697C10.5307 6.71422 10.3581 6.78571 10.1782 6.78571H8.82101C8.64104 6.78571 8.46844 6.71422 8.34119 6.58697C8.21393 6.45971 8.14244 6.28711 8.14244 6.10714C8.14244 5.92717 8.21393 5.75458 8.34119 5.62732C8.46844 5.50006 8.64104 5.42857 8.82101 5.42857ZM8.82101 8.14286H10.1782C10.3581 8.14286 10.5307 8.21435 10.658 8.34161C10.7852 8.46886 10.8567 8.64146 10.8567 8.82143C10.8567 9.0014 10.7852 9.17399 10.658 9.30125C10.5307 9.42851 10.3581 9.5 10.1782 9.5H8.82101C8.64104 9.5 8.46844 9.42851 8.34119 9.30125C8.21393 9.17399 8.14244 9.0014 8.14244 8.82143C8.14244 8.64146 8.21393 8.46886 8.34119 8.34161C8.46844 8.21435 8.64104 8.14286 8.82101 8.14286ZM8.82101 10.8571H10.1782C10.3581 10.8571 10.5307 10.9286 10.658 11.0559C10.7852 11.1831 10.8567 11.3557 10.8567 11.5357C10.8567 11.7157 10.7852 11.8883 10.658 12.0155C10.5307 12.1428 10.3581 12.2143 10.1782 12.2143H8.82101C8.64104 12.2143 8.46844 12.1428 8.34119 12.0155C8.21393 11.8883 8.14244 11.7157 8.14244 11.5357C8.14244 11.3557 8.21393 11.1831 8.34119 11.0559C8.46844 10.9286 8.64104 10.8571 8.82101 10.8571ZM5.42815 5.42857H6.7853C6.96526 5.42857 7.13786 5.50006 7.26512 5.62732C7.39237 5.75458 7.46387 5.92717 7.46387 6.10714C7.46387 6.28711 7.39237 6.45971 7.26512 6.58697C7.13786 6.71422 6.96526 6.78571 6.7853 6.78571H5.42815C5.24818 6.78571 5.07559 6.71422 4.94833 6.58697C4.82107 6.45971 4.74958 6.28711 4.74958 6.10714C4.74958 5.92717 4.82107 5.75458 4.94833 5.62732C5.07559 5.50006 5.24818 5.42857 5.42815 5.42857ZM5.42815 8.14286H6.7853C6.96526 8.14286 7.13786 8.21435 7.26512 8.34161C7.39237 8.46886 7.46387 8.64146 7.46387 8.82143C7.46387 9.0014 7.39237 9.17399 7.26512 9.30125C7.13786 9.42851 6.96526 9.5 6.7853 9.5H5.42815C5.24818 9.5 5.07559 9.42851 4.94833 9.30125C4.82107 9.17399 4.74958 9.0014 4.74958 8.82143C4.74958 8.64146 4.82107 8.46886 4.94833 8.34161C5.07559 8.21435 5.24818 8.14286 5.42815 8.14286ZM5.42815 10.8571H6.7853C6.96526 10.8571 7.13786 10.9286 7.26512 11.0559C7.39237 11.1831 7.46387 11.3557 7.46387 11.5357C7.46387 11.7157 7.39237 11.8883 7.26512 12.0155C7.13786 12.1428 6.96526 12.2143 6.7853 12.2143H5.42815C5.24818 12.2143 5.07559 12.1428 4.94833 12.0155C4.82107 11.8883 4.74958 11.7157 4.74958 11.5357C4.74958 11.3557 4.82107 11.1831 4.94833 11.0559C5.07559 10.9286 5.24818 10.8571 5.42815 10.8571Z" />
                                        </svg>
                                        Hotel
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="pills-tab2Content">
                            <div className="tab-pane fade show active" id="visa" role="tabpanel">
                                <div className="filter-group">
                                    <form onSubmit={handleSubmit}>
                                        <div className="filter-area">
                                            <div className="row g-xl-4 gy-4">
                                                {/* Country Dropdown */}
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="searchbox-input">
                                                            <label>Country</label>
                                                            <div className="custom-select-dropdown" ref={dropdownRefCountry}>
                                                                <div className="select-input" onClick={handleToggleCountry}>
                                                                    <input type="text" readOnly value={selectedCountry || "Select Country"} />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className={`${isActiveCountry ? "active" : ""} custom-select-wrap`}>
                                                                    <ul className="option-list">
                                                                        {Array.isArray(data.countries) && data.countries.length > 0 ? (
                                                                            data.countries.map((country) => (
                                                                                <li
                                                                                    key={country.id}
                                                                                    className="single-item"
                                                                                    onClick={() => handleSelectCountry(country.name)}
                                                                                >
                                                                                    <h6>{country.name}</h6>
                                                                                </li>
                                                                            ))
                                                                        ) : (
                                                                            <li className="single-item"><h6>No options available</h6></li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Category Dropdown */}
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="searchbox-input">
                                                            <label>Category</label>
                                                            <div className="custom-select-dropdown" ref={dropdownRefCategory}>
                                                                <div className="select-input" onClick={handleToggleCategory}>
                                                                    <input type="text" readOnly value={selectedCategory || "Select Category"} />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className={`${isActiveCategory ? "active" : ""} custom-select-wrap`}>
                                                                    <ul className="option-list">
                                                                        {Array.isArray(data.categories) && data.categories.length > 0 ? (
                                                                            data.categories.map((category) => (
                                                                                <li
                                                                                    key={category.id}
                                                                                    className="single-item"
                                                                                    onClick={() => handleSelectCategory(category.name)}
                                                                                >
                                                                                    <h6>{category.name}</h6>
                                                                                </li>
                                                                            ))
                                                                        ) : (
                                                                            <li className="single-item"><h6>No options available</h6></li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Nationality Dropdown */}
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="searchbox-input">
                                                            <label>Nationality</label>
                                                            <div className="custom-select-dropdown" ref={dropdownRefNationality}>
                                                                <div className="select-input" onClick={handleToggleNationality}>
                                                                    <input type="text" readOnly value={selectedNationality || "Select Nationality"} />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className={`${isActiveNationality ? "active" : ""} custom-select-wrap`}>
                                                                    <ul className="option-list">
                                                                        {Array.isArray(data.nationalities) && data.nationalities.length > 0 ? (
                                                                            data.nationalities.map((nationality, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    className="single-item"
                                                                                    onClick={() => handleSelectNationality(nationality.nationality)}
                                                                                >
                                                                                    <h6>{nationality.nationality}</h6>
                                                                                </li>
                                                                            ))
                                                                        ) : (
                                                                            <li className="single-item"><h6>No options available</h6></li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Residency Dropdown */}
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="searchbox-input">
                                                            <label>Residency</label>

                                                            {/* Custom Select Dropdown */}
                                                            <div className="custom-select-dropdown" ref={dropdownRefResidency}>
                                                                <div className="select-input" onClick={handleToggleResidency}>
                                                                    <input
                                                                        type="text"
                                                                        readOnly
                                                                        value={selectedResidency || "Select Residency"}
                                                                    />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>

                                                                {/* Dropdown List */}
                                                                <div className={`${isActiveResidency ? "active" : ""} custom-select-wrap`}>
                                                                    <ul className="option-list">
                                                                        {Array.isArray(data.residencies) && data.residencies.length > 0 ? (
                                                                            data.residencies.map((residency, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    className="single-item"
                                                                                    onClick={() => handleSelectResidency(residency.name)}
                                                                                >
                                                                                    <h6>{residency.name}</h6>
                                                                                </li>
                                                                            ))
                                                                        ) : (
                                                                            <li className="single-item"><h6>No options available</h6></li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="flight" role="tabpanel">
                                <div className="filter-group">
                                    <form>
                                        <div className="filter-area">
                                            <div className="row g-xl-4 gy-4">
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.0067 15.8571C18.5606 11.8496 18.2395 12.3496 18.3131 12.2451C19.2429 10.9336 19.7344 9.39009 19.7344 7.78125C19.7344 3.51469 16.2721 0 12 0C7.74178 0 4.26562 3.50775 4.26562 7.78125C4.26562 9.38906 4.76737 10.973 5.72766 12.3022L7.99322 15.8572C5.57095 16.2294 1.45312 17.3387 1.45312 19.7812C1.45312 20.6716 2.03428 21.9405 4.80291 22.9293C6.73612 23.6197 9.29208 24 12 24C17.0637 24 22.5469 22.5716 22.5469 19.7812C22.5469 17.3383 18.4339 16.2301 16.0067 15.8571ZM6.9023 11.5287C6.89457 11.5166 6.88649 11.5047 6.87806 11.4931C6.07898 10.3938 5.67188 9.09098 5.67188 7.78125C5.67188 4.26478 8.50341 1.40625 12 1.40625C15.4893 1.40625 18.3281 4.26605 18.3281 7.78125C18.3281 9.09309 17.9287 10.3517 17.1728 11.4221C17.1051 11.5114 17.4585 10.9624 12 19.5276L6.9023 11.5287ZM12 22.5938C6.46903 22.5938 2.85938 20.968 2.85938 19.7812C2.85938 18.9836 4.71413 17.6721 8.82413 17.1609L11.407 21.2138C11.4705 21.3135 11.5582 21.3956 11.6618 21.4525C11.7654 21.5093 11.8817 21.5391 12 21.5391C12.1182 21.5391 12.2345 21.5093 12.3381 21.4525C12.4417 21.3956 12.5294 21.3135 12.5929 21.2138L15.1757 17.1609C19.2858 17.6721 21.1406 18.9836 21.1406 19.7812C21.1406 20.9579 17.5635 22.5938 12 22.5938Z" />
                                                                <path d="M12 4.26562C10.0615 4.26562 8.48438 5.84273 8.48438 7.78125C8.48438 9.71977 10.0615 11.2969 12 11.2969C13.9385 11.2969 15.5156 9.71977 15.5156 7.78125C15.5156 5.84273 13.9385 4.26562 12 4.26562ZM12 9.89062C10.8369 9.89062 9.89062 8.94436 9.89062 7.78125C9.89062 6.61814 10.8369 5.67188 12 5.67188C13.1631 5.67188 14.1094 6.61814 14.1094 7.78125C14.1094 8.94436 13.1631 9.89062 12 9.89062Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>Form</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <input type="text" readOnly defaultValue="Bangladesh" />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className="custom-select-wrap">
                                                                    <div className="custom-select-search-area">
                                                                        <i className="bi bi-search" />
                                                                        <input type="text" placeholder="Type Your Destination" />
                                                                    </div>
                                                                    <ul className="option-list">
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Bangladesh</h6>
                                                                                <p>Dhaka, Cox's Bazar, Sylhet</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>50 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Nepal</h6>
                                                                                <p>KATHMANDU, POKHARA</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>30 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>India</h6>
                                                                                <p>Delhi, Agra, Himachal</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>30 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Brazil</h6>
                                                                                <p>Sao Paulo, Salvador, Bonito</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>20 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Thailand</h6>
                                                                                <p>Bangkok, Phuket, Trang</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>40 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Span</h6>
                                                                                <p>Barcelona, Madrid</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>20 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Dubai</h6>
                                                                                <p>Abu Dhabi, Burj Khalifa</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>35 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>United States</h6>
                                                                                <p>New York, Las Vegas, Colorado</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>45 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.0067 15.8571C18.5606 11.8496 18.2395 12.3496 18.3131 12.2451C19.2429 10.9336 19.7344 9.39009 19.7344 7.78125C19.7344 3.51469 16.2721 0 12 0C7.74178 0 4.26562 3.50775 4.26562 7.78125C4.26562 9.38906 4.76737 10.973 5.72766 12.3022L7.99322 15.8572C5.57095 16.2294 1.45312 17.3387 1.45312 19.7812C1.45312 20.6716 2.03428 21.9405 4.80291 22.9293C6.73612 23.6197 9.29208 24 12 24C17.0637 24 22.5469 22.5716 22.5469 19.7812C22.5469 17.3383 18.4339 16.2301 16.0067 15.8571ZM6.9023 11.5287C6.89457 11.5166 6.88649 11.5047 6.87806 11.4931C6.07898 10.3938 5.67188 9.09098 5.67188 7.78125C5.67188 4.26478 8.50341 1.40625 12 1.40625C15.4893 1.40625 18.3281 4.26605 18.3281 7.78125C18.3281 9.09309 17.9287 10.3517 17.1728 11.4221C17.1051 11.5114 17.4585 10.9624 12 19.5276L6.9023 11.5287ZM12 22.5938C6.46903 22.5938 2.85938 20.968 2.85938 19.7812C2.85938 18.9836 4.71413 17.6721 8.82413 17.1609L11.407 21.2138C11.4705 21.3135 11.5582 21.3956 11.6618 21.4525C11.7654 21.5093 11.8817 21.5391 12 21.5391C12.1182 21.5391 12.2345 21.5093 12.3381 21.4525C12.4417 21.3956 12.5294 21.3135 12.5929 21.2138L15.1757 17.1609C19.2858 17.6721 21.1406 18.9836 21.1406 19.7812C21.1406 20.9579 17.5635 22.5938 12 22.5938Z" />
                                                                <path d="M12 4.26562C10.0615 4.26562 8.48438 5.84273 8.48438 7.78125C8.48438 9.71977 10.0615 11.2969 12 11.2969C13.9385 11.2969 15.5156 9.71977 15.5156 7.78125C15.5156 5.84273 13.9385 4.26562 12 4.26562ZM12 9.89062C10.8369 9.89062 9.89062 8.94436 9.89062 7.78125C9.89062 6.61814 10.8369 5.67188 12 5.67188C13.1631 5.67188 14.1094 6.61814 14.1094 7.78125C14.1094 8.94436 13.1631 9.89062 12 9.89062Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>To</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <input type="text" readOnly defaultValue="Bangladesh" />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className="custom-select-wrap">
                                                                    <div className="custom-select-search-area">
                                                                        <i className="bi bi-search" />
                                                                        <input type="text" placeholder="Type Your Destination" />
                                                                    </div>
                                                                    <ul className="option-list">
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Bangladesh</h6>
                                                                                <p>Dhaka, Cox's Bazar, Sylhet</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>50 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Nepal</h6>
                                                                                <p>KATHMANDU, POKHARA</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>30 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>India</h6>
                                                                                <p>Delhi, Agra, Himachal</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>30 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Brazil</h6>
                                                                                <p>Sao Paulo, Salvador, Bonito</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>20 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Thailand</h6>
                                                                                <p>Bangkok, Phuket, Trang</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>40 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Span</h6>
                                                                                <p>Barcelona, Madrid</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>20 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Dubai</h6>
                                                                                <p>Abu Dhabi, Burj Khalifa</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>35 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>United States</h6>
                                                                                <p>New York, Las Vegas, Colorado</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>45 <br /> Tour</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                                                                <path d="M15.5978 13.5309L12.391 11.1258V6.22655C12.391 5.73394 11.9928 5.33575 11.5002 5.33575C11.0076 5.33575 10.6094 5.73394 10.6094 6.22655V11.5713C10.6094 11.8519 10.7412 12.1164 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1344C15.3341 15.1344 15.6013 15.0124 15.7759 14.7772C16.0717 14.3843 15.9916 13.8258 15.5978 13.5309Z">
                                                                </path>
                                                                <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>Departure Date</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <input type="text" name="inOut" readOnly />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.7906 8.10323C17.7906 6.85913 17.4216 5.64296 16.7305 4.60853C16.0393 3.57409 15.0569 2.76785 13.9075 2.29175C12.7581 1.81565 11.4933 1.69108 10.2731 1.9338C9.05289 2.17651 7.93206 2.7756 7.05235 3.65532C6.17264 4.53503 5.57354 5.65586 5.33083 6.87605C5.08812 8.09625 5.21269 9.36102 5.68878 10.5104C6.16488 11.6598 6.97113 12.6422 8.00556 13.3334C9.04 14.0246 10.2562 14.3935 11.5003 14.3935C13.1681 14.392 14.7672 13.7288 15.9465 12.5495C17.1258 11.3701 17.789 9.77106 17.7906 8.10323ZM6.03115 8.10323C6.03115 7.02154 6.35191 5.96415 6.95286 5.06475C7.55382 4.16536 8.40798 3.46437 9.40733 3.05043C10.4067 2.63649 11.5063 2.52818 12.5672 2.73921C13.6281 2.95023 14.6026 3.47111 15.3675 4.23598C16.1324 5.00085 16.6533 5.97536 16.8643 7.03626C17.0753 8.09716 16.967 9.19682 16.5531 10.1962C16.1391 11.1955 15.4381 12.0497 14.5387 12.6506C13.6393 13.2516 12.582 13.5723 11.5003 13.5723C10.05 13.5715 8.65945 12.995 7.63398 11.9695C6.60851 10.944 6.03202 9.55346 6.03115 8.10323Z" />
                                                                <path d="M15.0445 17.25C16.2229 15.4603 17.4539 13.6134 17.7988 13.1905C19.1044 11.5748 19.7388 9.51891 19.5706 7.44843C19.4025 5.37795 18.4447 3.45139 16.8955 2.06751C16.0457 1.3011 15.0419 0.725121 13.9514 0.378141C12.8609 0.031162 11.7088 -0.0788086 10.5724 0.0555942C7.04945 0.449764 3.78523 3.76326 3.44444 7.29437C3.23207 9.3913 3.84801 11.4882 5.16072 13.1371C5.56721 13.6504 6.79899 15.4775 7.96508 17.2472L7.9659 17.2484C5.65631 17.6512 3.40338 18.5459 3.40338 19.9817C3.40338 21.9423 7.57501 23 11.5003 23C15.4256 23 19.5972 21.9423 19.5972 19.9821C19.5972 18.5438 17.3513 17.6516 15.0445 17.25ZM5.80535 12.628C4.62449 11.1448 4.07042 9.2586 4.26152 7.37238C4.56125 4.25597 7.55448 1.22168 10.6627 0.872676C10.9437 0.843408 11.226 0.828334 11.5085 0.827511C13.2963 0.820954 15.0224 1.48121 16.3494 2.67929C17.112 3.36238 17.7221 4.19838 18.1402 5.13289C18.5583 6.0674 18.7749 7.07947 18.776 8.10324C18.7832 9.76808 18.2113 11.3836 17.1583 12.6731C16.7641 13.1618 15.3024 15.3502 14.0213 17.3005L14.002 17.3305C13.9955 17.34 13.9889 17.349 13.9836 17.3593L13.9762 17.3703C12.9045 19.0004 11.9684 20.4416 11.8821 20.573C11.8393 20.6339 11.7824 20.6836 11.7163 20.7179C11.6502 20.7522 11.5768 20.7701 11.5023 20.7701C11.4279 20.7701 11.3545 20.7522 11.2884 20.7179C11.2223 20.6836 11.1654 20.6339 11.1225 20.573C10.9419 20.2938 6.67581 13.7202 5.80535 12.628ZM11.5003 22.1788C6.99238 22.1788 4.22457 20.8994 4.22457 19.9821C4.22457 19.3018 5.68176 18.417 8.46272 17.9998C9.51794 19.6089 10.4163 20.9918 10.4327 21.0205C10.5484 21.1983 10.7066 21.3443 10.8931 21.4455C11.0795 21.5466 11.2882 21.5995 11.5003 21.5995C11.7124 21.5995 11.9211 21.5466 12.1075 21.4455C12.2939 21.3443 12.4522 21.1983 12.5678 21.0205C12.5884 20.9918 13.4904 19.6056 14.5448 18.0014C17.293 18.4133 18.776 19.3166 18.776 19.9817C18.776 20.8994 16.0082 22.1788 11.5003 22.1788Z" />
                                                                <path d="M14.346 11.7082C14.4548 11.7079 14.559 11.6646 14.636 11.5876C14.7129 11.5107 14.7563 11.4065 14.7566 11.2977V8.19356L14.9311 8.34097C15.0144 8.4112 15.1222 8.44547 15.2308 8.43623C15.2845 8.43166 15.3369 8.41654 15.3848 8.39174C15.4327 8.36694 15.4752 8.33294 15.51 8.2917C15.5448 8.25045 15.5711 8.20275 15.5875 8.15133C15.6038 8.09992 15.6099 8.04578 15.6053 7.99202C15.6007 7.93826 15.5856 7.88593 15.5608 7.83801C15.536 7.7901 15.502 7.74754 15.4608 7.71276L11.7654 4.5943C11.6913 4.53177 11.5975 4.49747 11.5006 4.49747C11.4036 4.49747 11.3098 4.53177 11.2357 4.5943L9.81303 5.79487V4.90717C9.81303 4.79827 9.76977 4.69384 9.69277 4.61683C9.61577 4.53983 9.51133 4.49657 9.40244 4.49657C9.29354 4.49657 9.1891 4.53983 9.1121 4.61683C9.0351 4.69384 8.99184 4.79827 8.99184 4.90717V6.48796L7.54039 7.71317C7.45714 7.78341 7.4052 7.88384 7.396 7.99237C7.3868 8.10091 7.42109 8.20865 7.49133 8.2919C7.56157 8.37515 7.662 8.42709 7.77053 8.43629C7.87906 8.44549 7.98681 8.4112 8.07006 8.34097L8.24456 8.19356V11.2977C8.24489 11.4065 8.28825 11.5107 8.36518 11.5876C8.44211 11.6646 8.54636 11.7079 8.65516 11.7082H14.346ZM9.06493 7.50089L9.69273 6.97122L11.5006 5.44546L13.9362 7.50089L13.9354 7.50377V10.8871H12.6831V10.1808C12.6831 10.0255 12.6525 9.87178 12.5931 9.72831C12.5336 9.58484 12.4465 9.45448 12.3367 9.34468C12.2269 9.23487 12.0966 9.14777 11.9531 9.08834C11.8096 9.02891 11.6559 8.99833 11.5006 8.99833C11.3453 8.99833 11.1915 9.02891 11.048 9.08834C10.9046 9.14777 10.7742 9.23487 10.6644 9.34468C10.5546 9.45448 10.4675 9.58484 10.4081 9.72831C10.3486 9.87178 10.3181 10.0255 10.3181 10.1808V10.8871H9.06575V7.50377L9.06493 7.50089Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>travelers</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <h6><span id="adult-qty">1</span> Adults, <span id="child-qty">0</span>
                                                                        Child</h6>
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className="custom-select-wrap two no-scroll">
                                                                    <ul className="guest-count">
                                                                        <li className="single-item">
                                                                            <div className="title">
                                                                                <h6>Adult</h6>
                                                                                <span>17 years+</span>
                                                                            </div>
                                                                            <div className="quantity-counter">
                                                                                <a href="#" data-type="adult" className="guest-quantity__minus"><i className="bi bi-dash" /></a>
                                                                                <input name="adult_quantity" type="text" className="quantity__input" defaultValue={1} />
                                                                                <a href="#" data-type="adult" className="guest-quantity__plus"><i className="bi bi-plus" /></a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="single-item">
                                                                            <div className="title">
                                                                                <h6>Children</h6>
                                                                                <span>0-17 years</span>
                                                                            </div>
                                                                            <div className="quantity-counter">
                                                                                <a href="#" data-type="child" className="guest-quantity__minus"><i className="bi bi-dash" /></a>
                                                                                <input name="child_quantity" type="text" className="quantity__input" defaultValue={0} />
                                                                                <a href="#" data-type="child" className="guest-quantity__plus"><i className="bi bi-plus" /></a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="hotel" role="tabpanel">
                                <div className="filter-group">
                                    <form>
                                        <div className="filter-area">
                                            <div className="row g-xl-4 gy-4">
                                                <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                                                                <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                                                                <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>Location</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <input type="text" readOnly defaultValue="Dubai" />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className="custom-select-wrap">
                                                                    <div className="custom-select-search-area">
                                                                        <i className="bx bx-search" />
                                                                        <input type="text" placeholder="Type Your Destination" />
                                                                    </div>
                                                                    <ul className="option-list">
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Dubai</h6>
                                                                                <p>United Arab Emirates</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>AE</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Cox's Bazar</h6>
                                                                                <p>Bangladesh</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>BD</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>KATHMANDU</h6>
                                                                                <p>Nepal</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>NP</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Delhi</h6>
                                                                                <p>India</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>IN</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Sao Paulo</h6>
                                                                                <p>Brazil</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>BR</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Bangkok</h6>
                                                                                <p>Thailand</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>TH</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Barcelona</h6>
                                                                                <p>Spain</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>ES</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>Abu Dhabi</h6>
                                                                                <p>United Arab Emirates</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>AE</span>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="destination">
                                                                                <h6>New York</h6>
                                                                                <p>United States</p>
                                                                            </div>
                                                                            <div className="tour">
                                                                                <span>US</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                                                                <g clipPath="url(#clip0_2037_326)">
                                                                    <path d="M15.5978 13.5309L12.391 11.1258V6.22655C12.391 5.73394 11.9928 5.33575 11.5002 5.33575C11.0076 5.33575 10.6094 5.73394 10.6094 6.22655V11.5713C10.6094 11.8519 10.7412 12.1164 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1344C15.3341 15.1344 15.6013 15.0124 15.7759 14.7772C16.0717 14.3843 15.9916 13.8258 15.5978 13.5309Z" />
                                                                    <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>Check in - Check out</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <input type="text" name="daterange" readOnly defaultValue="Sep 12 - Sep 20" />
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                {/* <div class="custom-select-wrap two">
                                                      <ul class="option-list">
                                                          <li class="single-item">
                                                              <h6>Sep 12 - Sep 20</h6>
                                                          </li>
                                                          <li class="single-item">
                                                              <h6>Aug 04 - Aug 10</h6>
                                                          </li>
                                                          <li class="single-item">
                                                              <h6>Oct 15 - Oct 20</h6>
                                                          </li>
                                                          <li class="single-item">
                                                              <h6>Nov 18 - Nov 25</h6>
                                                          </li>
                                                      </ul>
                                                  </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                                <g clipPath="url(#clip0_2037_310)">
                                                                    <path d="M23.5312 13.403C23.408 13.403 23.2872 13.4531 23.1998 13.5403C23.1123 13.6284 23.0629 13.7475 23.0625 13.8717C23.0625 13.9949 23.1127 14.1159 23.1998 14.2031C23.288 14.2906 23.407 14.34 23.5312 14.3405C23.6547 14.3405 23.7755 14.2903 23.8627 14.2031C23.9502 14.115 23.9996 13.9959 24 13.8717C24 13.748 23.9498 13.6274 23.8627 13.5403C23.7746 13.4527 23.6555 13.4034 23.5312 13.403Z" />
                                                                    <path d="M20.358 5.47013H19.98V2.64006H20.5045C20.7633 2.64006 20.9732 2.43024 20.9732 2.17131V1.42426C20.9732 0.638919 20.3343 6.10352e-05 19.549 6.10352e-05H14.6498C13.8647 6.10352e-05 13.2258 0.638919 13.2258 1.42426V2.17131C13.2258 2.43024 13.4357 2.64006 13.6946 2.64006H14.2188V5.47013H13.8409C13.3765 5.46999 12.9164 5.55861 12.4853 5.73122V2.34381C12.4853 2.14478 12.3596 1.96735 12.1717 1.9014C12.0591 1.86206 11.9357 1.8671 11.8267 1.91551C11.826 1.91589 11.8253 1.91589 11.8243 1.91626L6.62639 4.25504C6.39033 4.36126 6.28505 4.63885 6.39127 4.87486C6.49744 5.11088 6.77503 5.21635 7.01105 5.10999L9.59137 3.94908L4.69529 8.47875L1.74714 7.47862L3.54179 6.67111C3.7778 6.56494 3.88304 6.28734 3.77687 6.05133C3.67069 5.81531 3.3931 5.70985 3.15704 5.81621L0.276436 7.11225C0.190609 7.15088 0.118395 7.21445 0.0691876 7.29468C0.01998 7.37491 -0.00394324 7.4681 0.000530035 7.56211C0.00499931 7.65612 0.0376757 7.74661 0.0943034 7.82179C0.150931 7.89697 0.228885 7.95336 0.318014 7.98361L4.45782 9.38821L5.85291 12.729C5.89465 12.829 5.96972 12.9114 6.06536 12.9622C6.161 13.0131 6.27131 13.0293 6.37753 13.008C6.48971 12.9854 6.58975 12.9226 6.65878 12.8313C6.65986 12.8299 6.66113 12.8286 6.66244 12.827L8.25342 10.6744L10.1991 11.3354V18.4803C10.1991 20.3806 11.6625 21.9446 13.5214 22.1073V22.7333C13.5214 23.4317 14.0897 24 14.7881 24C15.4866 24 16.0548 23.4317 16.0548 22.7333V22.1221H18.144V22.7333C18.144 23.4317 18.7122 24 19.4108 24C20.1091 24 20.6775 23.4317 20.6775 22.7333V22.1072C22.5363 21.9446 23.9997 20.3806 23.9997 18.4803V15.7508C23.9997 15.4918 23.7899 15.282 23.531 15.282C23.2721 15.282 23.0622 15.4918 23.0622 15.7508V18.4803C23.0622 19.9715 21.8492 21.1846 20.358 21.1846H13.8409C12.3497 21.1846 11.1366 19.9713 11.1366 18.4804V11.6537L11.8659 11.9017C11.9365 11.9256 12.0117 11.9324 12.0854 11.9215C12.1591 11.9105 12.2291 11.8822 12.2897 11.8389C12.3502 11.7955 12.3995 11.7383 12.4336 11.672C12.4676 11.6057 12.4853 11.5323 12.4853 11.4578V6.77161C12.8972 6.53283 13.3648 6.40724 13.8409 6.40758H20.358C21.8492 6.40758 23.0623 7.6207 23.0623 9.11189V12.076C23.0623 12.3349 23.2721 12.5447 23.531 12.5447C23.7899 12.5447 23.9998 12.3349 23.9998 12.076V9.11189C23.9998 7.10377 22.3661 5.47008 20.358 5.47008L20.358 5.47013ZM19.74 22.1221V22.7331C19.7399 22.8204 19.7052 22.9041 19.6435 22.9658C19.5818 23.0276 19.4981 23.0623 19.4108 23.0623C19.3235 23.0622 19.2398 23.0275 19.1781 22.9658C19.1163 22.9041 19.0816 22.8204 19.0815 22.7331V22.1221H19.74ZM15.1173 22.1221V22.7331C15.1173 22.9148 14.9697 23.0623 14.7881 23.0623C14.6064 23.0623 14.4589 22.9148 14.4589 22.7331V22.1221H15.1173ZM5.81667 9.51051V10.2094L5.36771 9.13382L7.74642 6.93309L5.91938 9.21787C5.85288 9.30091 5.81666 9.40413 5.81667 9.51051ZM6.75417 11.1255V10.1649L7.32159 10.3577L6.75417 11.1255ZM11.5478 10.8034L8.23528 9.67804C8.2342 9.67748 8.23312 9.67729 8.23219 9.67692L7.06875 9.28162L11.5478 3.68044V10.8034ZM14.1631 1.42421C14.1631 1.15576 14.3816 0.937512 14.6498 0.937512H19.549C19.8174 0.937512 20.0357 1.15576 20.0357 1.42421V1.70251H14.1631V1.42421ZM15.1563 2.64006H19.0425V5.47013H15.1563V2.64006Z" />
                                                                    <path d="M12.3185 13.9444V17.5274C12.3185 18.8196 13.3699 19.8712 14.6622 19.8712H19.5372C20.8295 19.8712 21.881 18.8196 21.881 17.5274V13.9444C21.881 13.169 21.2502 12.5381 20.4747 12.5381H13.7247C12.9493 12.5381 12.3185 13.169 12.3185 13.9444ZM19.5372 18.9337H14.6622C13.8868 18.9337 13.256 18.3027 13.256 17.5274V15.7656H18.4219V16.2047C18.4219 16.4634 18.6318 16.6734 18.8907 16.6734C19.1495 16.6734 19.3594 16.4634 19.3594 16.2047V15.7656H20.9435V17.5274C20.9435 18.3027 20.3127 18.9337 19.5372 18.9337ZM20.9435 13.9444V14.8281H13.256V13.9444C13.256 13.6859 13.4663 13.4756 13.7247 13.4756H20.4747C20.7333 13.4756 20.9435 13.6859 20.9435 13.9444ZM5.27403 5.84674C5.39745 5.84674 5.51825 5.79658 5.60544 5.7094C5.69298 5.62126 5.74231 5.50221 5.74278 5.37799C5.74278 5.25424 5.69263 5.13321 5.60544 5.04602C5.51728 4.95858 5.3982 4.90943 5.27403 4.90924C5.14988 4.9095 5.03082 4.95864 4.94263 5.04602C4.85495 5.1343 4.8056 5.25357 4.80528 5.37799C4.80528 5.50127 4.85544 5.62207 4.94263 5.7094C5.03076 5.79693 5.14981 5.84627 5.27403 5.84674ZM5.18117 13.3349C4.64525 13.8708 3.93275 14.166 3.17492 14.166C3.04288 14.166 2.91233 14.157 2.78361 14.1394C2.73528 13.459 2.4522 12.7925 1.9347 12.2726C1.86495 12.1996 1.52914 11.8742 1.06189 11.885C0.84725 11.8894 0.530141 11.967 0.238766 12.313C-0.206547 12.8416 0.0650473 13.557 0.505579 13.9977C0.87875 14.3709 1.31619 14.6563 1.793 14.8436C1.70486 15.1945 1.52302 15.5147 1.26692 15.7702C1.01405 16.0234 0.698004 16.2044 0.351594 16.2942C0.101094 16.359 -0.0497965 16.6146 0.0150316 16.8653C0.0695941 17.0766 0.260047 17.2169 0.468594 17.2169C0.508247 17.2169 0.547744 17.2119 0.586157 17.2021C1.09462 17.0701 1.55858 16.8047 1.92997 16.4332C2.31889 16.0441 2.57614 15.5726 2.70153 15.0744C2.85856 15.0938 3.01664 15.1036 3.17488 15.1035C4.18306 15.1035 5.1312 14.7109 5.84422 13.9979C6.02713 13.8148 6.02713 13.518 5.84422 13.3349C5.66113 13.1519 5.36427 13.1519 5.18117 13.3349ZM1.16863 13.335C1.05617 13.2222 0.90861 12.9732 0.956047 12.9168C1.00419 12.8595 1.05163 12.8234 1.0798 12.8223H1.082C1.13033 12.8223 1.21292 12.8763 1.25413 12.9176C1.2598 12.924 1.25928 12.923 1.26692 12.9307C1.50866 13.1718 1.6845 13.4709 1.77763 13.7994C1.55467 13.6727 1.34982 13.5165 1.16863 13.335ZM18.8438 9.70315C18.8438 8.74146 18.0614 7.95907 17.0997 7.95907C16.138 7.95907 15.3556 8.74146 15.3556 9.70315C15.3556 10.6648 16.138 11.4472 17.0997 11.4472C18.0614 11.4472 18.8438 10.6648 18.8438 9.70315ZM16.2931 9.70315C16.2931 9.2584 16.655 8.89657 17.0997 8.89657C17.5445 8.89657 17.9063 9.2584 17.9063 9.70315C17.9063 10.1479 17.5445 10.5097 17.0997 10.5097C16.655 10.5097 16.2931 10.1479 16.2931 9.70315Z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>Room</label>
                                                            <div className="quantity-counter">
                                                                <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                                                <a href="#" className="quantity__plus"><i className="bi bi-chevron-up" /></a>
                                                                <a href="#" className="quantity__minus"><i className="bi bi-chevron-down" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                                    <div className="single-search-box">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                                                                <g clipPath="url(#clip0_273_1754)">
                                                                    <path d="M13.3207 14.07C13.4615 14.163 13.6265 14.2126 13.7952 14.2127C14.0765 14.2127 14.3521 14.0761 14.5173 13.8238C14.7799 13.4251 14.6699 12.8893 14.2712 12.6268C12.4344 11.4175 11.4549 10.0781 11.189 8.413C11.0664 7.63051 11.2293 6.44276 11.8788 5.68373C12.3 5.19189 12.8555 4.95227 13.5776 4.95227C14.9937 4.95227 15.5731 5.95799 15.7926 6.55698C16.3228 8.00211 15.8852 9.80108 14.7761 10.7403C14.4116 11.0492 14.3666 11.5944 14.6745 11.958C14.9834 12.323 15.5281 12.3679 15.8922 12.0596C17.5541 10.6528 18.1943 8.0887 17.415 5.96263C16.787 4.2484 15.3522 3.22491 13.5775 3.22491C12.3552 3.22491 11.3134 3.6868 10.5651 4.56052C9.4864 5.82268 9.30716 7.56876 9.48218 8.68299C9.93995 11.5476 11.8924 13.1293 13.3207 14.07Z" />
                                                                    <path d="M20.1255 22.0477H7.78708C7.81845 18.178 8.05759 17.0286 8.16475 16.7076C8.40062 16.0014 9.36979 15.275 10.2183 14.8006C10.9848 16.008 12.2021 16.7277 13.555 16.7277H13.5555C14.893 16.7272 16.0999 16.008 16.8628 14.801C17.7112 15.2756 18.679 16.0019 18.9144 16.7072C19.2186 17.6211 19.2013 18.9062 19.1873 19.9386C19.1845 20.1506 19.1816 20.3528 19.1816 20.5404C19.1816 21.0178 19.5682 21.4044 20.0455 21.4044C20.5229 21.4044 20.9095 21.0178 20.9095 20.5404C20.9095 20.3603 20.9123 20.166 20.915 19.962C20.9314 18.7991 20.9515 17.3521 20.5538 16.1601C19.9014 14.2048 17.1333 12.9862 16.8197 12.8538C16.714 12.8088 16.6003 12.7854 16.4853 12.7851C16.3704 12.7848 16.2565 12.8075 16.1505 12.8519C16.0445 12.8962 15.9485 12.9613 15.8679 13.0431C15.7873 13.125 15.7238 13.2221 15.6811 13.3287C15.2628 14.3747 14.4681 14.9995 13.5555 14.9995H13.5551C12.6378 14.9995 11.8123 14.3592 11.3995 13.3287C11.3568 13.2221 11.2933 13.125 11.2128 13.0431C11.1322 12.9613 11.0361 12.8963 10.9301 12.8519C10.8241 12.8076 10.7103 12.7849 10.5953 12.7853C10.4804 12.7856 10.3667 12.8089 10.2609 12.8538C9.94784 12.9862 7.17923 14.2044 6.52593 16.1606C6.21422 17.0965 6.05655 19.3681 6.05655 22.9113C6.05655 23.3886 6.44313 23.7752 6.92047 23.7752H20.1261C20.603 23.7752 20.9896 23.3891 20.9896 22.9118C20.9895 22.4343 20.6029 22.0477 20.1255 22.0477ZM5.3695 13.815C4.171 13.815 3.19618 12.5608 3.19618 11.0197C3.19618 9.48001 4.171 8.22724 5.3695 8.22724C5.98304 8.22724 6.59094 8.58197 6.95596 9.15243C7.22315 9.57034 7.58495 10.459 7.00463 11.7166C6.80478 12.1499 6.99387 12.6628 7.42723 12.8631C7.86106 13.0625 8.37352 12.8739 8.57332 12.4405C9.24909 10.9762 9.18966 9.43888 8.41048 8.22118C7.72069 7.14343 6.58393 6.49993 5.36903 6.49993C3.21817 6.49993 1.46835 8.52724 1.46835 11.0197C1.46835 13.5136 3.21817 15.5423 5.36903 15.5423C5.84636 15.5423 6.23342 15.1562 6.23342 14.6789C6.23337 14.2015 5.84684 13.815 5.3695 13.815ZM4.27767 21.2255H1.75991C1.7983 20.3701 1.87597 19.0981 2.01682 18.3503C2.19933 17.374 2.72444 16.8232 3.13296 16.533C3.52281 16.2569 3.61404 15.7178 3.33745 15.3289C3.06135 14.939 2.52268 14.8473 2.13331 15.1244C1.58578 15.5128 0.621729 16.4076 0.318939 18.0315C0.0680901 19.3639 0.00307088 21.9584 0.000223323 22.0679C-0.00239217 22.1831 0.0179889 22.2976 0.060174 22.4048C0.102359 22.512 0.165501 22.6097 0.245904 22.6922C0.326391 22.7746 0.422553 22.8401 0.528728 22.8848C0.634904 22.9294 0.748946 22.9524 0.86414 22.9524H4.27762C4.75496 22.9524 5.14154 22.5667 5.14154 22.0894C5.14159 21.6121 4.75501 21.2255 4.27767 21.2255ZM25.5327 11.0187C25.5327 8.52623 23.7829 6.49893 21.632 6.49893C20.4166 6.49893 19.2794 7.14195 18.5892 8.2197C17.81 9.43692 17.7501 10.9747 18.4249 12.439C18.6248 12.8719 19.1381 13.0619 19.571 12.8621C20.0039 12.6623 20.1939 12.1494 19.9941 11.716C19.4138 10.4581 19.7764 9.56986 20.0437 9.15191C20.4092 8.58144 21.0171 8.22671 21.6316 8.22671C22.8301 8.22671 23.8049 9.47953 23.8049 11.0192C23.8049 12.5602 22.8301 13.8145 21.6316 13.8145C21.1542 13.8145 20.7677 14.201 20.7677 14.6784C20.7677 15.1557 21.1542 15.5423 21.6316 15.5423C23.7819 15.5423 25.5322 13.5136 25.5327 11.0187ZM26.6811 18.0334C26.39 16.4624 25.4746 15.5769 24.9552 15.1894C24.5728 14.9049 24.0313 14.9825 23.7459 15.3649C23.4609 15.7473 23.5395 16.2892 23.9214 16.5742C24.3093 16.8634 24.8078 17.4053 24.9828 18.3511C25.1236 19.098 25.2013 20.3695 25.2397 21.2245H22.7215C22.2441 21.2245 21.8575 21.6111 21.8575 22.0885C21.8575 22.5658 22.2441 22.9524 22.7215 22.9524H26.1359C26.3685 22.9524 26.5912 22.8588 26.7545 22.6917C26.8349 22.6092 26.8979 22.5115 26.94 22.4043C26.9821 22.2971 27.0024 22.1826 26.9997 22.0674C26.997 21.9579 26.9324 19.3629 26.6811 18.0334Z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="searchbox-input">
                                                            <label>Guest</label>
                                                            <div className="custom-select-dropdown">
                                                                <div className="select-input">
                                                                    <h6><span id="adult-qty">1</span> Adults, <span id="child-qty">0</span> Child</h6>
                                                                    <i className="bi bi-chevron-down" />
                                                                </div>
                                                                <div className="custom-select-wrap two no-scroll">
                                                                    <ul className="guest-count">
                                                                        <li className="single-item">
                                                                            <div className="title">
                                                                                <h6>Adult</h6>
                                                                                <span>17 years+</span>
                                                                            </div>
                                                                            <div className="quantity-counter">
                                                                                <a href="#" data-type="adult" className="guest-quantity__minus"><i className="bi bi-dash" /></a>
                                                                                <input name="adult_quantity" type="text" className="quantity__input" defaultValue={1} />
                                                                                <a href="#" data-type="adult" className="guest-quantity__plus"><i className="bi bi-plus" /></a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="single-item">
                                                                            <div className="title">
                                                                                <h6>Children</h6>
                                                                                <span>0-17 years</span>
                                                                            </div>
                                                                            <div className="quantity-counter">
                                                                                <a href="#" data-type="child" className="guest-quantity__minus"><i className="bi bi-dash" /></a>
                                                                                <input name="child_quantity" type="text" className="quantity__input" defaultValue={0} />
                                                                                <a href="#" data-type="child" className="guest-quantity__plus"><i className="bi bi-plus" /></a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner