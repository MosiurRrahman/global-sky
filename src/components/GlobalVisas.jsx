"use client";
import React, { useState } from "react";
import { base_url } from "@/utils/const";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

const GlobalVisas = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState(8); // Initial number of items to show
    const [allLoaded, setAllLoaded] = useState(false); // Track if all items are loaded

    const loadMoreItems = () => {
        // Load more items logic
        const newVisibleItems = visibleItems + 4; // Adjust the number of items loaded

        // Check if the new number of visible items exceeds the data length
        if (newVisibleItems >= data.length) {
            setAllLoaded(true); // Set to true if all data has been loaded
        }

        setVisibleItems(newVisibleItems); // Update the number of visible items
    };

    return (
        <>
            <div className="country-section mt-100 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-60">
                            <div className="section-title text-center">
                                <h2>Global Visa
                                </h2>
                                <p> We understand your needs and deliver digital marketing through unique selling offer that our country specialists oneto proposition.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {data?.slice(0, visibleItems).map((item, index) => {
                            return (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <>
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
                                                    <h4>{item?.country_name}</h4>
                                                    <p>{item?.category_name}</p>
                                                    <div className="card-footer-btn text-center" >
                                                        <Link href={`/visa-details?country=${item?.country_name}&category=${item.category_name}`} className="primary-btn1"> Apply Now</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </>
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn-area text-center mt-50">
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

export default GlobalVisas;
