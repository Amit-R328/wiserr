import React, { useRef } from "react"

export const EditGigInput = (props) => {
    return (
        <>
            {console.log(props)}
            <div className="edit-gig-input-container">
                <label className="edit-gig-label">About This Gig</label>
                <input ref={props.inputRef} className="edit-gig-input" name="aboutThisGig" type="search" value={props.gig.description.whatDoYouGet} onChange={(ev) => props.handleChange(ev, props.inputRef)} />
            </div>
        </>
    )
}