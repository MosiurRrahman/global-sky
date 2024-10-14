"use client"; // Required for React hooks

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Updated import
import Breadcrumb from '@/components/layout/Breadcrumb';
import { getVisaDetails } from '@/utils/getApi'; // Adjust the path to match your project structure
import { base_url } from '@/utils/const';

const VisaDetailsComponent = () => {
  const searchParams = useSearchParams(); // Use search params for query parameters
  const country = searchParams.get('country'); // Extract country from search params
  const category = searchParams.get('category'); // Extract category from search params
  const [visaDetails, setVisaDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Add the class to the body element when the component is mounted
    document.body.classList.add('backgraound-color');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('backgraound-color');
    };
  }, []);

  useEffect(() => {
    // Check if visaDetails contains stringified JSON and parse it
    if (visaDetails?.data?.visaDetails?.sample_documents) {
      const parsedDocuments = JSON.parse(visaDetails.data.visaDetails.sample_documents);
      setDocuments(parsedDocuments);
    }
  }, [visaDetails]);

  useEffect(() => {
    if (country && category) {
      const fetchDetails = async () => {
        setLoading(true);
        try {
          const data = await getVisaDetails(country, category); // Fetch data from the API
          if (data) {
            setVisaDetails(data);
          } else {
            setError(new Error('No visa details found.'));
          }
        } catch (err) {
          setError(err); // Set error if fetching fails
        } finally {
          setLoading(false); // Stop loading once the fetch is complete
        }
      };
      fetchDetails(); // Call the fetch function
    }
  }, [country, category]); // Re-run when country or category changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="d-flex justify-content-center text-danger mb-50">{error.message}</div>;
  }

  return (
    <>
      {visaDetails?.status ? (
        <>
          {/* Render the visa details */}
          <div className="about-breadcrum-section mb-120">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="banner-content"
                    style={{
                      backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.3) 101.02%), url(${base_url}${visaDetails.data.visaDetails?.banner || 'assets/img/innerpage/inner-banner-bg.png'})`,
                    }}
                  >
                    <span>{visaDetails.data.visaDetails?.title}</span>
                    <h1>Get Your {visaDetails.data.visaDetails?.get_country.name} Visa</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visa details and tabs */}
          <div className="visa-details-section mb-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="visa-details-tab">
                    <ul className="nav nav-tabs" id="visaTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="details-tab" data-bs-toggle="tab" data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane" aria-selected="true">Details</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="remarks-tab" data-bs-toggle="tab" data-bs-target="#remarks-tab-pane" type="button" role="tab" aria-controls="remarks-tab-pane" aria-selected="false">Remarks</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="services-tab" data-bs-toggle="tab" data-bs-target="#services-tab-pane" type="button" role="tab" aria-controls="services-tab-pane" aria-selected="false">Visa Fee &amp; Service
                          Charges</button>
                      </li>
                    </ul></div>
                  <div className="visa-details-tab-content">
                    <div className="tab-content" id="visaTabContent">
                      <div className="tab-pane fade show active" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabIndex={0}>

                        <div className="single-information-wrap mb-40">
                          <div className="title">
                            <h6>Eligibility to Apply for visa</h6>
                          </div>
                          <div className="content">
                            <div className="content-wrap" dangerouslySetInnerHTML={{ __html: visaDetails.data.visaDetails?.eligibility_apply }}>

                            </div>
                          </div>
                        </div>
                        <div className="single-information-wrap mb-40">
                          <div className="title">
                            <h6>Documents Requirements</h6>
                          </div>
                          <div className="content">
                            <div className="accordion" id="accordionGeneral">
                              {visaDetails?.data?.visaDetails?.visa_requirements.map((item, itemIndex) => {
                                const collapseId = `faqcollapse-${itemIndex}`;
                                const headerId = `faqheading-${itemIndex}`;
                                return (
                                  <div key={itemIndex} className="accordion-item">
                                    <h2 className="accordion-header" id={headerId}>
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${collapseId}`}
                                        aria-expanded="false"
                                        aria-controls={collapseId}
                                      >
                                        {item.title}
                                      </button>
                                    </h2>
                                    <div
                                      id={collapseId}
                                      className="accordion-collapse collapse"
                                      aria-labelledby={headerId}
                                      data-bs-parent="#accordionGeneral"
                                    >
                                      <div className="accordion-body">
                                        <div
                                          className="single-document"
                                          style={{ display: "unset" }}
                                          dangerouslySetInnerHTML={{ __html: item.details }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="single-information-wrap mb-40">
                          <div className="title">
                            <h6>Processing Time</h6>
                          </div>
                          <div className="content">
                            <div className="content-wrap">
                              <p dangerouslySetInnerHTML={{ __html: visaDetails?.data?.visaDetails?.processing_time }}></p>
                            </div>
                          </div>
                        </div>
                        <div className="single-information-wrap">
                          <div className="title">
                            <h6>Sample Documents &amp; Photos</h6>
                          </div>
                          <div className="content">
                            <div className="content-wrap">
                              <div className="row g-4">
                                {documents.map((item, index) => {
                                  return (
                                    <div key={index} className="col-md-6">
                                      <div className="document-card">
                                        <div className="document-image">
                                          <img
                                            className="popup-image"
                                            src={`${base_url}${item.document_item}`}
                                            alt={item.document_title || "Document Image"}
                                          />
                                        </div>
                                        <div className="document-content">
                                          <h6 dangerouslySetInnerHTML={{ __html: item.document_title }}></h6>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}


                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="remarks-tab-pane" role="tabpanel" aria-labelledby="remarks-tab" tabIndex={0}>
                        <div className="single-information-wrap">
                          <div className="title">
                            <h6>Remarks</h6>
                          </div>
                          <div className="content">
                            <div className="content-wrap">
                              <p dangerouslySetInnerHTML={{ __html: visaDetails.data.visaDetails?.remarks }}></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="services-tab-pane" role="tabpanel" aria-labelledby="services-tab" tabIndex={0}>
                        <div className="single-information-wrap">
                          <div className="title">
                            <h6>Visa Fees &amp; Service Charges</h6>
                          </div>
                          <div className="content">
                            <div className="content-wrap">
                              <ul>
                                <li dangerouslySetInnerHTML={{ __html: visaDetails.data.visaDetails?.service_charge }}></li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="visa-sb">
                    {
                      visaDetails.data.offers.map((offer) => {
                        return <div key={offer.id} className="single-offer">
                          <div className="content">
                            <h5>{offer.title}  Type: {offer.visa_type}</h5>
                            <ul>
                              <li>
                                <span>Validity</span>
                                <h6>{offer.validity}</h6>
                              </li>
                              <li>
                                <span>Max Stay</span>
                                <h6>{offer.max_stay}</h6>
                              </li>
                            </ul>
                            <h6>AED {offer.price} / <span>Person</span></h6>
                            <span><img src="/assets/image/alart.svg" alt="" /> Visa issuance rights reserved by the embassy</span>
                          </div>
                          <button data-bs-toggle="modal" data-bs-target="#visa-apply-modal">SELECT OFFER</button>
                        </div>
                      })
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2 className="d-flex justify-content-center text-danger mb-50">{visaDetails?.message}</h2>
      )}
    </>
  );
};

const VisaDetails = () => {
  return (
    <Suspense fallback={<div>Loading Visa Details...</div>}>
      <VisaDetailsComponent />
    </Suspense>
  );
};

export default VisaDetails;
