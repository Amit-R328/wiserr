import React, { useRef } from "react"

export const EditGigInput = (props) => {

    return (
        <>
            <div className="edit-gig-input-container">
                <label className="edit-gig-label">What Do You Get</label>
                <input ref={props.inputRef} className="edit-gig-input" name="whatDoYouGet" type="search" value={props.whatYouGet} onChange={(ev) => props.handleChange(ev, props.inputRef)} />
            </div>
        </>
    )
}