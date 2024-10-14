"use client"; // Required for React hooks

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Updated import
import { getVisaDetails } from '@/utils/getApi'; // Adjust the path to match your project structure
import { base_url } from '@/utils/const';
import Error from '@/components/Error';

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
      {
        visaDetails?.status ? <>
          {/* Render the visa details */}
          <div className="about-breadcrum-section mb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-content" style={{
                    backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.3) 101.02%), url(${base_url}${visaDetails.data.visaDetails?.banner || 'assets/img/innerpage/inner-banner-bg.png'})`
                  }} >
                    <span>{visaDetails.data.visaDetails?.title}</span>
                    <h1>Get Your {visaDetails.data.visaDetails?.get_country.name} Visa</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>

          <div className="modal fade visa-apply-modal" id="visa-apply-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="visa-apply-modalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered">
              <div className="modal-content form-wapper">
                <button type="button" className="modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-circle" /></button>
                <div className="modal-header">
                  <ul className="visa-form-step" id="progressbar">
                    <li>Step 1: Travel Date</li>
                    <li>Step 2: Visa Type</li>
                    <li>Step 3: Personal Info</li>
                  </ul>
                </div>
                <div className="modal-body">
                  <form id="msform" className="visa-form">
                    <fieldset className="postcode">
                      <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                          <div className="step-title">
                            <h4>Travel Details</h4>
                            <p>Provide your travel details.</p>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="from-wrapper">
                            <div className="row">
                              <div className="col-md-12 mb-35">
                                <div className="form-inner">
                                  <label>Departure Date</label>
                                  <input type="text" name="inOut" readOnly />
                                </div>
                              </div>
                              <div className="col-md-12 mb-35">
                                <div className="form-inner">
                                  <label>Return Date</label>
                                  <input type="text" name="inOut" readOnly />
                                </div>
                              </div>
                            </div>
                            <div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-3">
                              <button className="next primary-btn1">Next <i className="bi bi-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="postcode">
                      <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                          <div className="step-title">
                            <h4>Visa Details</h4>
                            <p>Provide your visa details.</p>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="from-wrapper">
                            <div className="row">
                              <div className="col-md-12 mb-35">
                                <div className="form-inner">
                                  <label>Entry Type</label>
                                  <select>
                                    <option>Select Entry Type</option>
                                    <option>Select Entry Type</option>
                                    <option>Select Entry Type</option>
                                    <option>Select Entry Type</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-12 mb-35">
                                <div className="form-inner">
                                  <label>Type of Visa</label>
                                  <select>
                                    <option>Select visa Type</option>
                                    <option>Select visa Type</option>
                                    <option>Select visa Type</option>
                                    <option>Select visa Type</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-12 mb-35">
                                <div className="form-inner">
                                  <label>Country of Application</label>
                                  <input type="text" placeholder="Russia" />
                                </div>
                              </div>
                            </div>
                            <div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                              <button className="prev primary-btn1"> <i className="bi bi-arrow-left" />
                                Previous</button>
                              <button className="next primary-btn1">Next <i className="bi bi-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="postcode">
                      <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                          <div className="step-title">
                            <h4>Personal Information &amp; Requirement Upload</h4>
                            <p>Provide your personal information and upload necessary documents.</p>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="from-wrapper">
                            <div className="row">
                              <div className="col-md-6 mb-35">
                                <div className="form-inner">
                                  <label>Full name</label>
                                  <input type="text" placeholder="Enter your full neme" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-35">
                                <div className="form-inner">
                                  <label>Date of Birth</label>
                                  <input type="text" name="inOut" readOnly />
                                </div>
                              </div>
                              <div className="col-md-12 mb-35">
                                <div className="form-inner">
                                  <label>Nationality</label>
                                  <select>
                                    <option>Select Nationality</option>
                                    <option>Select Nationality</option>
                                    <option>Select Nationality</option>
                                    <option>Select Nationality</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="image-drop-area mb-25">
                                  <div className="dropzone dropzone-1 text-center dz-clickable">
                                    <div className="icon">
                                      <img src="assets/image/icon/file.svg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="image-drop-area mb-25">
                                  <div className="dropzone dropzone-2 text-center dz-clickable">
                                    <div className="icon">
                                      <img src="assets/image/icon/file.svg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8 mb-35">
                                <div className="form-inner">
                                  <label>Notes</label>
                                  <textarea defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-md-6 mb-35">
                                <div className="form-inner">
                                  <label>Mobile Number</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-35">
                                <div className="form-inner">
                                  <label>WhatsApp Number</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-20">
                                <div className="form-inner">
                                  <label>Email Address</label>
                                  <input type="email" />
                                </div>
                              </div>
                              <div className="col-lg-12 mb-50">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                                  <label className="form-check-label" htmlFor="contactCheck">
                                    I have read &amp; accepted Terms &amp; Conditions.
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-12 mb-35">
                                <div className="form-inner">
                                  <h6>DISCLAIMER</h6>
                                  <p>This is to confirm that Global Sky Visa Services EST. will not in
                                    any manner be liable or responsible for any delay in the
                                    processing or rejection of any Visa applications, once the
                                    documents have been delivered to the respectful Consulate
                                    General. Upon receiving your documents make every effort to
                                    ensure that the Visa(s) you have requested are correct: Any
                                    Visa(s) you have requested have been obtained The dates of the
                                    Visa(s) cover your period of intended stay for each country with
                                    the appropriate number of entries you have requested. Your
                                    Passport is valid for the appropriate time you will be abroad.
                                    By entering your email address, you agree to receive emails
                                    (including the picture newsletter, as well as promotional offers
                                    and announcements.)</p>
                                </div>
                              </div>
                              <div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                                <button className="prev primary-btn1"> <i className="bi bi-arrow-left" />
                                  Previous</button>
                                <button className=" primary-btn1" type="submit">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div></fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'none' }} className="my-template">
            <div id="mytmp" className="dz-preview dz-file-preview">
              <div className="dz-image"><img data-dz-thumbnail /></div>
              <div className="dz-details">
                <div className="dz-size"><span data-dz-size /></div>
                <div className="dz-filename"><span data-dz-name /></div>
              </div>
              <div className="dz-progress">
                <span className="dz-upload" data-dz-uploadprogress />
              </div>
              <div className="dz-error-message"><span data-dz-errormessage /></div>
              <div className="dz-success-mark">
                <svg xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 0 54 54" width="54px" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div className="dz-error-mark">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <circle cx={12} cy={19} r={2} />
                  <path d="M10 3h4v12h-4z" />
                </svg>
              </div>
              <div className="dz-remove" data-dz-remove>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                  </path>
                </svg>
              </div>
            </div>
          </div>
          {/* <div className="visa-apply-section mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="apply-wrap">
                                        <div className="destination-country-name">
                                            <h4>{visaDetails.data.visaDetails.get_country.name}</h4>
                                        </div>
                                        <div className="visa-type-and-aply-form text-center">
                                            <h5>{visaDetails.data.visaDetails.title}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: visaDetails.data.visaDetails.details }}></p>
                                            <button className="primary-btn1" data-bs-toggle="modal" data-bs-target="#visa-apply-modal">Apply
                                                Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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

                    <div className="contact-area">
                      <div className="icon">
                        <svg width={35} height={35} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="white" />
                          <path d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z" fill="url(#paint0_linear_285_753)" />
                          <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="url(#paint1_linear_285_753)" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z" fill="white" />
                        </svg>
                      </div>
                      <div className="content">
                        <span>WhatsApp Message</span>
                        <h6><a href="https://api.whatsapp.com/send?phone=+971-552 237 719">+971-552 237 719</a></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="imageModal" className="image-modal">
            <span className="close">×</span>
            <img className="modal-image" id="modalImage" />
          </div></> : <Error status = {visaDetails?.message}/>
      }

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
