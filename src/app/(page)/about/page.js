import FileNotFound from '@/app/not-found'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { base_url } from '@/utils/const'
import { getAbout } from '@/utils/getApi'
import React from 'react'

export default async function AboutPage() {
  const aboutData = await getAbout()
  console.log(aboutData);

  return (
    <>
      {
        aboutData.status ? (<>
          <div className="about-breadcrum-section mb-120">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-content">
                    <h1>{aboutData.data.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            aboutData.data.get_sections.map((section) => {
              console.log("about data", aboutData.office_address);

              return <div key={section.id}>
                {
                  section.section_type === "section" ?
                    <div className="about-us-section mb-70">
                      <div className="container">
                        <div className="row gy-4">
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="about-us-content" dangerouslySetInnerHTML={{ __html: section.sub_title }}>

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="about-img">
                              <img src={base_url + section.thumb_image} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    : section.section_type === "mission" ?
                      <div className="our-mission-section mb-120">
                        <div className="container">
                          <div className="row gy-4">
                            <div className="col-lg-6">
                              <div className="our-mission-section-image">
                                <img src={base_url + section.thumb_image} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                              <div className="our-mission-content">
                                <h2>{section.title}</h2>
                                <p className="our-mission-pera" dangerouslySetInnerHTML={{ __html: section.sub_title }}></p>
                                <ul>

                                  {
                                    section.get_section_items.map((item) => {
                                      return <li key={item.id}>
                                        <div className="icon">
                                          <img src={base_url + item.image} alt={item.image} />
                                        </div>
                                        <div className="content">
                                          <h5>{item.title}</h5>
                                          <p dangerouslySetInnerHTML={{ __html: item.sub_title }}></p>
                                        </div>
                                      </li>
                                    })
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      : section.section_type === "office-address" ?
                        <div className="office-location-section mb-120">
                          <div className="container">
                            <div className="row gy-4 justify-content-center">
                              {aboutData.office_address.map((address, index) => {
                                return <div key={index} className="col-lg-4 col-md-6">
                                  <div className="office-location-card">
                                    <h4>{address.office_name}</h4>
                                    <a href="#">{address.address}</a>
                                  </div>
                                </div>
                              })}

                            </div>
                          </div>
                        </div>
                        : section.section_type === "tour-facilities" ?
                          <div className="facilites-section">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-6 d-flex align-items-end">
                                  <div className="facilites-content">
                                    <div className="section-title2">
                                      <h2>{section.title}</h2>
                                      <p dangerouslySetInnerHTML={{ __html: section.sub_title }}></p>
                                    </div>
                                    <div className="row g-4 mb-30">
                                      {
                                        section.get_section_items.map((item, index) => {
                                          const { title, image } = item
                                          return <div key={index} className="col-lg-6 col-md-6 ">
                                            <div className={"facility-card" + ((index == 1 || index == 2) ? " two" : "")}>
                                              <div className="icon">
                                                <img src={base_url + image} alt="" />
                                              </div>
                                              <div className="content">
                                                <h6 dangerouslySetInnerHTML={{ __html: title }}></h6>
                                              </div>
                                            </div>
                                          </div>
                                        })
                                      }


                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="facilities-image">
                                    <img src={base_url + section.thumb_image} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          : <></>
                }
              </div>
            })
          }




        </>) : (<FileNotFound />)
      }


    </>
  )
}

