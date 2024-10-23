import { getFaq } from '@/utils/getApi'
import React from 'react'

export default async function Faq() {
  const faqData = await getFaq()

  if (!faqData || !faqData.data || !faqData.data.faqs) {
    return <div>No FAQs available.</div>
  }

  return (
    <>
      <div className="faq-section mb-120">
        <div className="container">
          <div className="row justify-content-center g-lg-4 gy-5">
            <div className="col-lg-8 pt-50">
              <div className="faq-area">
                <div className="faq-wrap">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    
                    {faqData.data.faqs.map((faq, index) => (
                      <div 
                        className="accordion-item wow animate fadeInUp" 
                        data-wow-delay={`${200 + index * 100}ms`} 
                        data-wow-duration="1500ms" 
                        key={index}
                      >
                        <h5 className="accordion-header" id={`flush-heading-${index}`}>
                          <button
                            className={`accordion-button ${index != 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapse-${index}`}
                            aria-expanded={index == 0 ? "true" : "false"}
                            aria-controls={`flush-collapse-${index}`}
                          >
                            {faq.question}
                          </button>
                        </h5>
                        <div
                          id={`flush-collapse-${index}`}
                          className={`accordion-collapse collapse ${index == 0 ? 'show' : ''}`}
                          aria-labelledby={`flush-heading-${index}`}
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body" dangerouslySetInnerHTML={{__html:faq.answer}}></div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
