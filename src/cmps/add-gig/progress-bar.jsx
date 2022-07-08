import React from 'react'
import {ProgressIndicator} from './progress-indicator.jsx'

export const ProgressBar = (props) => {

    const getClassActive = (currentStep) => {
        return (props.currentStep >= currentStep) ? "active" : "disabled"
    }
    return (
        <>
            <div className="inner-progress-wrapper">
                <nav>
                    <button className={"gig-info-step1 " + getClassActive(1)}>
                        <span className="">1</span>Gig Info</button>
                    <button className={"gig-info-step2 " + getClassActive(2)}>
                        <span className="">2</span>Price and Delivery</button>
                    <button className={"gig-info-step3 " + getClassActive(3)}>
                        <span className="">3</span>Gig Details</button>
                </nav>
                <ProgressIndicator currentStep={props.currentStep}/>
            </div>
        </>
    )
}