import React from 'react'

export const Step1 = (props) => {

    if (props.currentStep !== 1) {
        return null
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <div className="gig-details-header"><h2>Gig Info</h2>
                    <p>Tell us a bit about the new gig. This information will appear on your public profile,<br></br>so that potential buyers can understand your offer.</p>
                </div>

                <div className="gig-image-upload">
                    <aside className="">
                        <h3>
                            <span className="add-gig-titles">Picture (optional)</span>
                            <div className="popup-text">Add pictures of your gig so customers will know exactly what they'll be getting.</div>
                        </h3>
                    </aside>

                    <div className="img-content flex">
                        <section className="gig-photos flex flex-column">
                            <label className="file-img" />
                            {!props.isImg ? <span className="missing-gig-image"></span> : <img src={`${props.gigInfo.imgUrl}`} alt="" />}
                            <input
                                className="file-input"
                                accept="image/png,image/jpeg"
                                type="file"
                                name="imgUrl"
                                required
                                value={''}
                                onChange={props.handleChange}
                            />
                        </section>
                    </div>
                </div>

                <div className="add-gig-titles">
                    <p className="add-gig-labels">Gig Title</p>
                    <label>
                        <textarea
                            name="gigTitle"
                            maxLength="600"
                            minLength="15"
                            required
                            placeholder="I will..."
                            value={props.gigInfo.gigTitle}
                            onChange={props.handleChange}>
                        </textarea>
                    </label>
                </div>
                <br></br>
                <div id="description" className="onboarding-field is-required">
                    <div className="add-gig-titles">
                        <p className="add-gig-labels">Description (min. 15 characters)</p>
                        <label className="description">
                            <textarea
                                maxLength="600"
                                minLength="15"
                                className="desc"
                                required
                                type="txt"
                                name="gigDescription"
                                placeholder="Share a bit about the gig, cool related, and your area of expertise."
                                value={props.gigInfo.gigDescription}
                                onChange={props.handleChange}>
                            </textarea>
                        </label>
                    </div>
                </div>
                <br></br>
                <div className="add-gig-titles">
                    <p className="add-gig-labels">Tell your potential buyers why they should choose you</p>
                    <label className="description">
                        <textarea
                            name="whyUs"
                            maxLength="600"
                            minLength="15"
                            value={props.gigInfo.whyUs}
                            onChange={props.handleChange}>
                        </textarea>
                    </label>
                </div>
            </div>
        </React.Fragment>
    )
}


