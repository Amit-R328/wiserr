import React from 'react'

export const ProgressBar = (props) => {

    const getClassActive = (currentStep) => {
        return (props.currentStep === currentStep) ? "active" : "disabled"
    }

    // const getCompletionRate = (currentStep) => {
    //     props.currentStep = currentStep
    //     if (currentStep === 1)  return  
    //     if (currentStep === 2) return { width: '66%' }
    //     if (currentStep === 3) return { width: '100%' }
    // }

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
                <div className="completion-score">
                    {props.currentStep === 1 && <div className="text-step1">Completion Rate: 33%</div>}
                    {props.currentStep === 2 && <div className="text-step2">Completion Rate: 66%</div>}
                    {props.currentStep === 3 && <div className="text-step3">Completion Rate: 100%</div>}
                    <div className="full-width-progressbar">
                        <div className="progress-bar-completion-indicator">
                        {props.currentStep === 1 && <span className="step1" style={{width: '33%'}}></span>}
                        {props.currentStep === 2 && <span className="step2" style={{width: '66%'}}></span>}
                        {props.currentStep === 3 && <span className="step3" style={{width: '100%'}}></span>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}