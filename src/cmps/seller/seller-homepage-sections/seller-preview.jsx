import React, { useState } from "react"
import Swal from 'sweetalert2'

export const FreelancersPreview = (props) => {

    const openFreelancerDetails = () => {
        Swal.fire({
            backdrop: 'rgba(0,0,0,0.4)',
            memberSince: `${props.freelancer.memberSince}`,
            titleText: `${props.freelancer.sellerName}`,
            text: `${props.freelancer.quote}`,
            text: `${props.freelancer.sellerName}` + ',' + `${props.freelancer.location}`,
            imageUrl: `${props.freelancer.img}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: `'slide ' + ${props.freelancer.profession}`,
            iconHtml: '▦',
            text: `${props.freelancer.gigNumber}`,
            iconHtml: '🌎',
            text: `${props.freelancer.buyers}`,
            footer: '<a href="/seller/add-gig">Add a Gig</a>',
            footer: '<a href="/join">Not a Wiserr Seller? Join Now</a>',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonAriaLabel: 'OK',
            allowOutsideClick: true,
            allowEscapeKey: true,
            stopKeydownPropagation: true
        })
    }


    return (
        <>
            <li className={`'slide ' + ${props.freelancer.profession}`}
                onClick={() => openFreelancerDetails()}>
                <img alt={props.freelancer.profession} src={props.freelancer.img} />
                <h6 className="freelancer-legends">I am<br></br>
                    {props.freelancer.legends}</h6>
            </li>
        </>
    )
}
