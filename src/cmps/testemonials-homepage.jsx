import React from "react";

export const TestemonialsHomepage = () => {
    return (
        <div className="testimonials">
            <div className="video-modal testimonial-modal">
                <div className="picture-wrapper">
                    <picture>
                        <source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" />
                        <source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" />
                        <source media="(min-width: 600px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" />
                        <source media="(min-width: 361px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" />
                        <source media="(max-width: 360px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" />
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" loading="lazy" alt="Video"/>
                    </picture>
                </div>
            </div>

            <div className="text-content">
                <h5 className="">Kay Kim, Co-Founder<span className="testimonial-logo">
                </span>
                </h5>

                <blockquote className="font-domaine">
                    <i className="">"It's extremely exciting that Wiserr has freelancers from all over the world — it broadens the talent pool. One of the best things about Wiserr is that while we're sleeping, someone's working."</i>
                </blockquote>
            </div>
        </div>
    )
}
