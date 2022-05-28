import React from 'react'

export const BusinessHeroHeaderHomePage = (props) => {

    return (
        <div className="business-hero-wrapper-carousel">
            <div className="business-hero-backgrounds">
                <div className="business-hero-wrapper business-hero-wrapper business-hero-andrea">
                    <div className="business-hero-backgrounds business-hero-backgrounds">
                        <div className="business-hero-gabriela">
                            <div className="business-seller-name business-seller-name business-max-width-container">
                                <div className="business-seller-details-preview">
                                    <div className="business-seller-details-header">
                                        {/* <AccountCircleIcon /> */}
                                        <p className="business-seller-first-name-header"><b>Gabrielle</b></p>
                                        <p className="business-seller-category-header">Video Editor</p>
                                        {/* <div className="seller-rating-header" {user.rate}></div> */}
                                        <p className="seller-services">Services:</p>
                                        <button className="category-link-btn-tag">Video Production</button>
                                        <button className="category-link-btn-tag">Transcription</button>
                                        <button className="category-link-btn-tag">Copy Editing</button>
                                        <button className="category-link-btn-tag">Video Editing</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="business-hero max-width-container">
                        <div className="business-header">
                            <h1 className="business-font-domaine">
                                <div className="expertise">Expertise<span>,</span><p>When you need it</p></div>
                            </h1>

                            <div className="business-search-bar-package business-search_bar-package">
                                <form className="">
                                    <span className="business-search-bar-icon" aria-hidden="true" >
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="search" 
                                    autoComplete="off" 
                                    placeholder="Try &quot;building mobile app&quot;" 
                                    value="" 
                                    className="business-input-search"/>
                                    <button className="business-submit-button">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

