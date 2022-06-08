import React from 'react'

export const SellerHeroHeader = () => {

    return (
        <div className="seller-details-container container">
            <div className="seller-details-header">
                <p className="seller-first-name-header"><b>Gabrielle</b></p>
                <p className="seller-category-header">Video Editor</p>
                <p className="seller-services">Services:</p>
                <button className="category-link-btn-tag">Video Production</button>
                <button className="category-link-btn-tag">Transcription</button>
                <button className="category-link-btn-tag">Copy Editing</button>
                <button className="category-link-btn-tag">Video Editing</button>
            </div>
            <div className="seller-hero container">
                <div className="seller-header">
                    <h1 className="font-domaine">
                        <div className="expertise">Expertise<span>,</span><p>When you need it</p></div>
                    </h1>


                </div>
            </div>
        </div>
    )
}

