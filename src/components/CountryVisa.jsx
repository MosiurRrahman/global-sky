"use client";
import React, { useState } from "react";
import { base_url } from "@/utils/const";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

const CountryVisa = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState(8); // Initial number of items to show
    const [allLoaded, setAllLoaded] = useState(false); // Track if all items are loaded

    const loadMoreItems = () => {
        // Load more items logic
        const newVisibleItems = visibleItems + 6; // Adjust the number of items loaded

        // Check if the new number of visible items exceeds the data length
        if (newVisibleItems >= data.countries.length) {
            setAllLoaded(true); // Set to true if all data has been loaded
        }

        setVisibleItems(newVisibleItems); // Update the number of visible items
    };

    return (
        <>
            <div className="country-section mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-60">
                            <div className="section-title text-center">
                                <h2>{data.section.title}</h2>
                                <p>{data.section.sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {data?.countries?.slice(0, visibleItems).map((item, index) => {

                                console.log(item);
                                
                            return (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="country-section-card">
                                        <div className="country-flip-box-layer country-flip-box-front">
                                            <div className="country-image">
                                                <Link href="/">
                                                    <img
                                                        src={base_url + item.image} alt="imagessssss" />
                                                </Link>
                                                <div className="flag-icon">
                                                    <img src={base_url + item.flag} alt="image" />
                                                </div>
                                            </div>
                                            <div className="country-card-content">
                                                <h4>{item?.name}</h4>
                                                <p>{item?.notes}</p>
                                            </div>
                                        </div>
                                        <div className="country-flip-box-layer country-flip-box-back">
                                            <div className="overly">
                                                <div className="cart-area">
                                                    <Link href={`/visa-details?country=${item?.name}&category=${item.notes}`} className="content-top">
                                                        <div className="flag-icon">
                                                            <img src={base_url + item.flag} alt="" />
                                                        </div>
                                                        <h4>{item?.name}</h4>
                                                        <p className="font-b">{item.notes}</p>
                                                        <p>{item?.summary}</p>
                                                    </Link>
                                                    <div className="contact-button">
                                                        <div className="chat-us-btn">
                                                            <a href={`https://api.whatsapp.com/send/?phone=${data.whatsapp_number}&text=Hello! Can I get more info about *${item?.name}*`}>Chat With Us</a>
                                                        </div>
                                                        <div className="whatsup-icon">
                                                            <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="white" />
                                                                <path d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z" fill="url(#paint0_linear_285_753)" />
                                                                <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="url(#paint1_linear_285_753)" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z" fill="white" />
                                                            </svg>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn-area d-md-flex justify-content-center mt-50">
                        {allLoaded ? (
                            <></>
                        ) : (
                            <button className="primary-btn1" onClick={loadMoreItems}>
                                Load More
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountryVisa;
