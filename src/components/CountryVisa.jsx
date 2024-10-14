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
                                <h2>{data?.section?.title}</h2>
                                <p>{data?.section?.sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {data?.countries?.slice(0, visibleItems).map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="country-section-card">
                                    <div className="country-flip-box-layer country-flip-box-front">
                                        <div className="country-image">
                                            <Link href="/">
                                                <img
                                                    onError={(e) => {
                                                        e.target.src = "assets/image/country-image.png"
                                                    }}
                                                    src={base_url + item?.image} alt="image" />
                                            </Link>
                                            <div className="flag-icon">
                                                <img src={base_url + item?.flag} alt="image" />
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
                                                <Link href={`/visa-details?country=${item?.name}&category=${item.category}`} className="content-top">
                                                    <div className="flag-icon">
                                                        <img src={base_url + item?.flag} alt="" />
                                                    </div>
                                                    <h4>{item?.name}</h4>
                                                    <p>{item?.notes}</p>
                                                    <p>{item?.summary}</p>
                                                </Link>
                                                <div className="contact-button">
                                                    <div className="chat-us-btn">
                                                        <a href="https://api.whatsapp.com/send?phone=15551234567">Chat With Us</a>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
