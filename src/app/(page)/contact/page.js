import ContactForm from '@/components/ContactForm'
import { getContact, getFooter } from '@/utils/getApi'
import React from 'react'

export default async function Contact() {
    const contactData = await getContact()

    return (

        <>
            {/* <div className="about-breadcrum-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`banner-content ${contactData?.data.page_details?.title === undefined ? "not-image" : ""}`} style={{
                                backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 50%), rgba(0, 0, 0, 0.3) 50%), url(${contactData?.data.page_details?.banner === null || contactData?.data.page_details?.banner === undefined ? '' : base_url + contactData?.data.page_details?.banner})`
                            }} >
                                <span>{contactData?.data.page_details?.title}</span>
                                <h1>{contactData?.data.page_details?.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <ContactForm contactData={contactData}/>
            
            <div className="contact-map" dangerouslySetInnerHTML={{ __html: contactData.data.page_details.summery }}></div>
        </>

    )
}
