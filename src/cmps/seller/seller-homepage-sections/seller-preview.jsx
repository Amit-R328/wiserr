import React from "react"
import Swal from 'sweetalert2'

export const FreelancersPreview = (props) => {

    const openFreelancerDetails = () => {
        Swal.fire({
            backdrop: 'rgba(0,0,0,0.8)',
            titleText: `${props.freelancer.memberSince}`,
            html: `${'"' + props.freelancer.quote + '"  | ' + props.freelancer.sellerName}`,
            text: `${props.freelancer.buyers + ' |        ' + props.freelancer.location + ' | ' + props.freelancer.gigNumber}`,
            imageUrl: `${props.freelancer.img}`,
            imageWidth: 400,
            imageAlt: `slide ${props.freelancer.profession}`,
            footer: '<a href="/join">Not a Wiserr Seller? Join Now</a>',
            showCloseButton: true,
            focusConfirm: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
            stopKeydownPropagation: true
        })
    }


    return (
        <>
            <li className={`slide ${props.freelancer.profession}`}
                onClick={() => openFreelancerDetails()}>
                <p className="freelancer-legends">I am<br></br>
                    {props.freelancer.legends}</p>
                <img alt={props.freelancer.profession} src={props.freelancer.img} />
            </li>
        </>
    )
}
