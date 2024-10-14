"use client"
import { base_url } from '@/utils/const'
import { getHeader } from '@/utils/getApi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [headerData, setHeaderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Move usePathname to the top of the component
    const pathName = usePathname();

    useEffect(() => {
        const fetchheaderData = async () => {
            try {
                const data = await getHeader();
                setHeaderData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchheaderData();
    }, []);

    if (error) {
        return <div>Error loading header: {error}</div>;
    }

    return (
        <header className={`header-area ${pathName === "/" ? "header1" : "about-us"}`}>
            <div className="header-logo">
                <Link href="/"><img alt="image" className="img-fluid" src={`${base_url}${pathName === "/" ? headerData?.data.logo : headerData?.data.footer_logo}`} /></Link>
            </div>
            <div className="main-menu">
                <div className="mobile-menu-logo">
                    <a href="index.html"><img alt="image" className="img-fluid" src="assets/image/global-sky-logo.svg" /></a>
                </div>
                <ul className="menu-list">
                    <li>
                        <Link href="/" className="drop-down">HOME </Link>
                    </li>
                    <li>
                        <Link href="/attraction">Global Visa</Link>
                    </li>
                    <li><Link href="/attraction">UAE Attraction</Link></li>
                    <li><Link href="/attraction">Holiday Package</Link></li>
                    <li><Link href="/attraction">Travel Insurance</Link></li>
                    <li>
                        <Link href="/about" className="drop-down">About Us</Link>
                    </li>
                </ul>
                <div className="d-xl-none d-block">
                    <a className="primary-btn1" href="#">
                        Consultancy
                    </a>
                </div>
            </div>
            <div className="nav-right">
                <div className="btn-area d-md-flex d-none">
                    <a className="primary-btn1" href="#">
                        Consultancy
                    </a>
                </div>
                <div className="sidebar-button mobile-menu-btn ">
                    <span />
                </div>
            </div>
        </header>
    )
}

export default Header
