import React from "react"

export const Testimonials = () => {
    return (
        <div className="testimonials container">
            <div className="testimonial-modal">
                <img src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1656858236/testimonial-video-still-rooted_sofapk.webp" loading="lazy" alt="Video" />
            </div>

            <div className="text-content">
                <h5 className="testimonial-name">Kay Kim, Co-Founder<span className="testimonial-logo">
                </span>
                </h5>

                <blockquote className="font-domaine">
                    <i className="">"It's extremely exciting that Wiserr has freelancers from all over the world — it broadens the talent pool. One of the best things about Wiserr is that while we're sleeping, someone's working."</i>
                </blockquote>
            </div>
        </div>
    )
}
