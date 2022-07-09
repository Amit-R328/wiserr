import React, { useRef } from "react"

export const EditGigInput = (props) => {
    return (
        <>
            <div className="edit-gig-input-container">
                <label className="edit-gig-label">Why Us</label>
                <input ref={props.inputRef} className="edit-gig-input" name="whyUs" type="search" value={props.currGig.description.whyUs} onChange={(ev) => props.handleChange(ev, props.inputRef)} />
            </div>
        </>
    )
}