import Breadcrumb from '@/components/layout/Breadcrumb'
import { base_url } from '@/utils/const';
import { getattructions } from '@/utils/getApi';
import { slugify } from '@/utils/slugify'
import Link from 'next/link'
import React from 'react'

export default async function Attractionpage() {

    const attractions = await getattructions();

    return (
        <>
            {/* <Breadcrumb /> */}
            <div className="attraction-section mt-120 mb-120">
                <div className="container">
                    <div className="row g-4">
                        {
                            attractions?.data?.map((item) => {
                                // Get the reviews
                                const reviews = item.get_reviews || [];
                                const totalReviews = reviews.length;

                                // Calculate average rating
                                const averageRating = totalReviews > 0
                                    ? (reviews.reduce((acc, review) => acc + review.ratting, 0) / totalReviews).toFixed(1)
                                    : 0;

                                return (
                                    <div key={item.id} className="col-lg-4 col-md-6">
                                        <div className="attraction-card">
                                            <Link href={`/attraction/${slugify(item.slug)}`} className="attraction-card-img">
                                                <img src={base_url + item.thumb_image} alt={item.title} />
                                                <div className="batch">
                                                    <span>Popular</span>
                                                </div>
                                            </Link>
                                            <div className="attraction-card-content">
                                                <div className="card-content-top">
                                                    <div className="rating-area">
                                                        <ul className="rating">
                                                            {[...Array(5)].map((_, i) => (
                                                                <li key={i}>
                                                                    <i className={`bi bi-star${i < Math.round(averageRating / 2) ? '-fill' : ''}`} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <span>({totalReviews} {totalReviews === 1 ? 'Review' : 'Reviews'})</span>
                                                    </div>
                                                    <h5><Link href={`/attraction/${slugify(item.slug)}`}>{item.title}</Link></h5>
                                                    <ul className="feature-list">
                                                        <li>
                                                        <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                                                                <path d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            {item.country_name}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-content-bottom">
                                                    <div className="price-area">
                                                        <span className="title">Starting From:</span>
                                                        <h6><sub>$</sub>{item.regular_price} <del>${(parseFloat(item.regular_price) + item.discount).toFixed(2)}</del></h6>
                                                        <span>Per Person</span>
                                                    </div>
                                                    <a href="#" className="primary-btn1">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
