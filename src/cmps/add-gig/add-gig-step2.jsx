import React from 'react'

export const Step2 = (props) => {

    if (props.currentStep !== 2) { // Prop: The current step
        return null
    }

    // The markup for the Step 1 UI
    return (
        <React.Fragment>
            <div className="form-group">
                <div className="add-gig-titles">
                    <p className="add-gig-labels">Tell your potential buyers what will they get</p>
                    <label className="description">
                        <textarea name="whatDoYouGet" maxLength="600" minLength="15" rows={5} cols={50} required value={props.gigInfo.whatDoYouGet} onChange={props.handleChange}></textarea>
                    </label>
                </div>

                <br></br>
                <div className="add-gig-titles">
                    <label className="add-gig-labels">Price</label>
                    <input className="add-gig-input" type="number" id="price" name="price" required onChange={props.handleChange} />
                </div>

                <br></br>
                <div className="add-gig-titles">
                    <label className="add-gig-labels">Days delivery</label>
                    <input className="add-gig-input" min={1} max={20} type="number" id="daysToMake" name="daysToMake" required onChange={props.handleChange} />
                </div>
            </div>
        </React.Fragment>
    )
}


