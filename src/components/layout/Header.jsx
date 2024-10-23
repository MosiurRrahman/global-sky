"use client"
import { base_url } from '@/utils/const'
import { getHeader } from '@/utils/getApi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useReducer, useRef, useState } from 'react'



const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const collapseMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

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
    <header className={`header-area ${state.scrollY > 10 ? "sticky" : ""} ${pathName === "/" ? "header1" : "header1 about-us"}`}>
      <div className="header-logo">
        <Link href="/"><img alt="image" className="img-fluid" src={`${base_url}${pathName === "/" || isSticky ? headerData?.data.header.logo : headerData?.data.header.footer_logo}`} /></Link>
      </div>
      <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
        <div className="mobile-menu-logo">
          <a href="index.html"><img alt="image" className="img-fluid" src="assets/image/global-sky-logo.svg" /></a>
        </div>
        <ul className="menu-list">
          <li className={`${pathName === "/" ? "active" : ""}`}>
            <Link href="/" className="drop-down">HOME </Link>
          </li>
          {/* <li className={`${pathName === "/global-visa" ? "active" : ""}`}>
            <Link href="/global-visa">Global Visa</Link>
          </li> */}
          <li className="menu-item-has-children position-inherit">
            <a href="#">Global Visa</a>
            <i className={`dropdown-icon ${state.activeMenu === "mega_menu" ? "bi bi-dash" : "bi bi-plus"}`} onClick={() => collapseMenu("mega_menu")} />
            <div className={`mega-menu  ${state.activeMenu === "mega_menu" ? "d-block" : ""
              }`}>
              <div className="title-area">
                <div className="single-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Open for Application</span>
                </div>
                <div className="single-title">
                  <svg xmlns="http://www.w3.org/2000/svg" className="close" width={20} height={20} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Close for Application</span>
                </div>
              </div>
              <ul className="menu-row">
                {
                  headerData?.data.continents.map((item, index) => {


                    return (
                      <li key={index} className="menu-single-item">
                        <h6 className="menu-title">{item.continent_name}
                          <i className={` ${state.activeSubMenu === item.continent_name ? "bi bi-dash" : "bi bi-plus"} dropdown-icon2`} onClick={() => toggleSubMenu(item.continent_name)} />
                        </h6>
                        <ul className={`mega-sub-menu ${state.activeSubMenu === item.continent_name ? "d-block" : ""
                          }`}>
                          {
                            item.get_countries.map((country, index) => {
                              
                              
                              return <li key={index}>
                                <Link href={`/visa-details?country=${country?.country_name}&category=Tourist visa`}><div className="flag">
                                  <img src={base_url + country.flag} alt="" />
                                </div>
                                <div className="content">
                                  <h6>{country.country_name}</h6>
                                  <div className={`icon ${country.visa_count > 0 ? "active" : "not active"}`}>
                                    {
                                      country.visa_count > 0 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                                        <path  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path>
                                      </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="close" viewBox="0 0 20 20">
                                          <path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path>
                                        </svg>
                                    }

                                  </div>
                                </div></Link>
                                
                              </li>
                            })
                          }

                        </ul>
                      </li>
                    )
                  })
                }



              </ul>
            </div>
          </li>

          <li className={`${pathName === "/attraction" ? "active" : ""}`}><Link href="/attraction">UAE Attraction</Link></li>
          <li className={`${pathName === "/attraction" ? "active" : ""}`}><Link href="/attraction">Holiday Package</Link></li>
          <li className={`${pathName === "/travel-insurance" ? "active" : ""}`}>
            <Link href="/travel-insurance">Travel Insurance</Link>
          </li>
          <li className={`${pathName === "/about" ? "active" : ""}`}>
            <Link href="/about" className="drop-down">About Us</Link>
          </li>
        </ul>
        <div className="d-xl-none d-block">
          <Link className="primary-btn1" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <div className="btn-area d-md-flex d-none">
          <Link className="primary-btn1" href="/contact">
            Contact Us
          </Link>
        </div>
        <div className={`sidebar-button mobile-menu-btn ${state.isSidebarOpen ? "active" : ""} `} onClick={toggleSidebar}>
          <span />
        </div>
      </div>
    </header>
  )
}

export default Header
