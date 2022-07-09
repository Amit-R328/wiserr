import React from "react"

export const EditGigInput = (props) => {
    return (
        <>
            <div className="edit-gig-input-container">
                <label className="edit-gig-label">{props.label}</label>
                <input className="edit-gig-input" name={props.name} type="search" value={props.value} onChange={props.handleChange} />
            </div>
        </>
    )
}