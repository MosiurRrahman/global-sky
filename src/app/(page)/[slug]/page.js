
"use client"
import { base_url } from '@/utils/const';
import { getSlug } from '@/utils/getApi';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageContent = ({ params }) => {
  // Import the router from next/navigation
  const { slug } = params; // Extract slug from the URL params
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState(null);


  useEffect(() => {
    if (slug) {
      getSlug(slug)
        .then((data) => {
          setPageData(data?.data || null);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setPageData(null);
        })
        .finally(() => {
          setIsLoading(false); // Stop loading after data fetch
        });
    }
  }, [slug]);

  if (isLoading) {
    return <></>; // Show loading indicator while fetching data
  }
  return (
    <>
      {
        pageData ? <> <div className="about-breadcrum-section mt-100 mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`banner-content ${pageData?.title === undefined ? "not-image" : ""}`} style={{
                  backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 50%), rgba(0, 0, 0, 0.3) 50%), url(${pageData?.meta_image === null || pageData?.meta_image === undefined ? '' : base_url + pageData?.meta_image})`
                }} >
                  <span>{pageData?.title}</span>
                  <h1>{pageData?.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div></> : 
        <div className="error-section">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="error-wrapper">
                  <h1>
                    404 <span>Error</span>
                  </h1>
                  <p>
                    We believe in delivering tailored solutions that are designed
                    to address your turna unique requirements. We take the time to
                    understand.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <div className='mt-120 mb-120'>
        <div className='container'>
          <div dangerouslySetInnerHTML={{ __html: pageData?.description }}></div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
