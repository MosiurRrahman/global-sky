
"use client"
import { base_url } from '@/utils/const';
import { getSlug } from '@/utils/getApi';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageContent = ({ params }) => {
  // Import the router from next/navigation
  const { slug } = params; // Extract slug from the URL params

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(pageData);

  useEffect(() => {
    if (slug) {
      // Fetch the attraction details based on the slug
      getSlug(slug).then((data) => {
        setPageData(data?.data || null);
        setLoading(false);
      });
    }
  }, [slug]);


  return (
    <>

      <div className="about-breadcrum-section mb-120">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content">
                <h1>{pageData?.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-120'>
        <div className='container'>
          <div dangerouslySetInnerHTML={{ __html: pageData?.description }}></div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
