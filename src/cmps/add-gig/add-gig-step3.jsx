import React from 'react'

export const Step3 = (props) => {

    if (props.currentStep !== 3) { // Prop: The current step
        return null
    }

    // The markup for the Step 1 UI
    return (
        <React.Fragment>
            <div className="form-group">
                <div className="add-gig-titles">
                    <p className="add-gig-labels">Category</p>
                    <select className="add-gig-input" value={props.gigInfo.category} name="category" required onChange={props.handleChange}>
                        <option value=""></option>
                        <option value="Graphics & Design">Graphics &amp; Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Writing & Translation">Writing &amp; Translation</option>
                        <option value="Video & Animation">Video &amp; Animation</option>
                        <option value="Business">Business</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>
                </div>

                <div className="add-gig-titles">
                    <p className="add-gig-labels">Origin</p>
                    <select className="add-gig-input" value={props.gigInfo.origin} name="origin" required onChange={props.handleChange}>
                        <option value=""></option>
                        <option value="israel">Israel</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="france">France</option>
                        <option value="japan">Japan</option>
                    </select>
                </div>
                <button className="add-gig-btn submit-add-gig-form" type="submit" >Add Gig</button>
            </div>
        </React.Fragment>
    )
}


