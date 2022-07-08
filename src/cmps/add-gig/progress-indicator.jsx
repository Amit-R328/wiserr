import React from 'react'

export const ProgressIndicator = (props) => {

    return (
        <>
            <div className="completion-score">
                <div className="text-step1">Completion Rate: {Math.ceil(props.currentStep * 33.3)}%</div>
                <div className="full-width-progressbar">
                    <div className="progress-bar-completion-indicator">
                        <span className={`step${props.currentStep}`} style={{ width: `${Math.ceil(props.currentStep * 33.3)}%` }}></span>
                    </div>
                </div>
            </div>
        </>
    )
}