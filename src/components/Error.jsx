import Link from 'next/link'
import React from 'react'

const Error = ({status}) => {
    return (
        <div className="error-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-wrapper text-center">
                            <div className="error-img mb-30">
                                <img src="/assets/image/404.png" alt="" />
                            </div>
                            <div className="error-conten">
                                <h1>opps! {status}</h1>
                                <p>There is a technical issue on our end.</p>
                                <div className="back-btn">
                                    <Link className="primary-btn1 error-btn" href="/">
                                        GO TO HOMEPAGE
                                        <svg className="arrow" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Error