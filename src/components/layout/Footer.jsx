import { getFooter } from '@/utils/getApi';
import { useEffect, useState } from 'react';
import { base_url } from '@/utils/const';
import Link from 'next/link';

const Footer = () => {
    const [footerData, setFooterData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const data = await getFooter();
                setFooterData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFooterData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading footer: {error}</div>;
    }

    // Parse office address and social lists
    const offices = JSON.parse(footerData.data.office_address);
    const socialLinks = JSON.parse(footerData.data.social_lists);
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-top">
                        <div className="row g-lg-4 gy-5 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <img src={base_url + footerData.data.logo} alt="" />
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: footerData.data.about }} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-md-end">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h5>Explore</h5>
                                    </div>
                                    <ul className="widget-list">
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href={"/faq"}>Faq</Link></li>
                                        <li><a href="#">Visa Package</a></li>
                                        <li><a href="#">Visa Guide</a></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-md-end">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h5>Services</h5>
                                    </div>
                                    <ul className="widget-list">
                                        <li><a href="#">Visa</a></li>
                                        <li><a href="#">Flight</a></li>
                                        <li><a href="#">Hotel</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-md-start justify-content-sm-end">
                                <div className="footer-widget">
                                    <div className="single-content">
                                        <div className="contact-area">
                                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.8" clipPath="url(#clip0_285_743)">
                                                    <path d="M17.5107 13.2102L14.9988 10.6982C14.1016 9.80111 12.5765 10.16 12.2177 11.3262C11.9485 12.1337 11.0514 12.5822 10.244 12.4028C8.44974 11.9542 6.0275 9.62168 5.57894 7.73772C5.3098 6.93027 5.84808 6.03314 6.65549 5.76404C7.82176 5.40519 8.18061 3.88007 7.28348 2.98295L4.77153 0.470991C4.05382 -0.156997 2.97727 -0.156997 2.34929 0.470991L0.644745 2.17553C-1.0598 3.96978 0.82417 8.72455 5.04066 12.941C9.25716 17.1575 14.0119 19.1313 15.8062 17.337L17.5107 15.6324C18.1387 14.9147 18.1387 13.8382 17.5107 13.2102Z" fill="#0A80F7" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_285_743">
                                                        <rect width={18} height={18} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h5>More Inquiry</h5>
                                        </div>
                                        <a href={`tel:${footerData.data.phone}`}>{footerData.data.phone}</a>
                                    </div>
                                    <div className="single-content">
                                        <div className="contact-area">
                                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.8" clipPath="url(#clip0_285_736)">
                                                    <path d="M6.56266 13.2091V16.6876C6.56324 16.8058 6.60099 16.9208 6.67058 17.0164C6.74017 17.112 6.83807 17.1832 6.9504 17.22C7.06274 17.2569 7.18382 17.2574 7.29648 17.2216C7.40915 17.1858 7.5077 17.1155 7.57817 17.0206L9.61292 14.2516L6.56266 13.2091ZM17.7639 0.104306C17.6794 0.044121 17.5799 0.00848417 17.4764 0.00133654C17.3729 -0.00581108 17.2694 0.015809 17.1774 0.0638058L0.302415 8.87631C0.205322 8.92762 0.125322 9.00617 0.0722333 9.1023C0.0191447 9.19844 -0.00472288 9.30798 0.00355981 9.41749C0.0118425 9.52699 0.0519151 9.6317 0.11886 9.71875C0.185804 9.80581 0.276708 9.87143 0.380415 9.90756L5.07166 11.5111L15.0624 2.96856L7.33141 12.2828L15.1937 14.9701C15.2717 14.9963 15.3545 15.0051 15.4363 14.996C15.5181 14.9868 15.5969 14.9599 15.6672 14.9171C15.7375 14.8743 15.7976 14.8167 15.8433 14.7482C15.8889 14.6798 15.9191 14.6021 15.9317 14.5208L17.9942 0.645806C18.0094 0.543093 17.996 0.438159 17.9554 0.342598C17.9147 0.247038 17.8485 0.164569 17.7639 0.104306Z" fill="#0A80F7" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_285_736">
                                                        <rect width={18} height={18} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h5>Send Mail</h5>
                                        </div>
                                        <a href={`mailto:${footerData.data.email}`}>{footerData.data.email}</a>
                                    </div>
                                    <div className="single-content">
                                        <div className="contact-button">
                                            <div className="whatsup-icon">
                                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_285_753)">
                                                        <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="white" />
                                                        <path d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z" fill="url(#paint0_linear_285_753)" />
                                                        <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="url(#paint1_linear_285_753)" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_285_753" x1="12.9999" y1="25.5503" x2="12.9999" y2="0.450422" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#20B038" />
                                                            <stop offset={1} stopColor="#60D66A" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_285_753" x1="12.9998" y1={26} x2="12.9998" y2={0} gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#F9F9F9" />
                                                            <stop offset={1} stopColor="white" />
                                                        </linearGradient>
                                                        <clipPath id="clip0_285_753">
                                                            <rect width={26} height={26} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="chat-us-btn">
                                                <a href={`https://api.whatsapp.com/send?phone=${footerData.data.phone}`}>Chat With Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h5>We accept</h5>
                                    </div>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/image/payment-icon.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon2.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon3.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon4.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon5.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon6.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon7.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon8.png" alt="" /></li>
                                            <li><img src="assets/image/payment-icon-9.png" alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            {offices.map((office, index) => (
                                <div key={index} className={`col-lg-4 position-relative ${index >= 1 ? 'divider' : ''}`}>
                                    <div className="footer-bottom-content">
                                        <h6>{office.office_name}</h6>
                                        <a href="#">{office.address}</a>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="copyright-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
                                <div className="social-media-section">
                                    <ul>
                                        {socialLinks.map((social, index) => (
                                            social.link ? (
                                                <li key={index}>
                                                    <a href={social.link} target="_blank" rel="noopener noreferrer">

                                                        <i className={`bx bxl-${social.social_name}`}></i>
                                                    </a>
                                                </li>
                                            ) : null
                                        ))}

                                    </ul>
                                </div>
                                <p>Copyright © 2024 Global Sky Visa Services LLC | Powered by <a href="https://www.egenslab.com/">Egenslab</a></p>
                                <div className="footer-right">
                                    <ul>
                                        <li>
                                            <Link href="/privacy-policy">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/term-conditions">Terms &amp; Condition</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer