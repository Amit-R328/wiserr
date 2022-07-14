import React from "react"
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

export const Testimonials = () => {

    return (
        <section className="testimonials container">


            <div className="testimonial-modal">
                <img className="testimonial-img faded faded-wide faded-right" src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1657747182/Elements/good-faces-GlxYra17Ghk-unsplash_ltgle1.jpg" alt="" />

                {/* <h4> */}
                <h4>Kay Kim, Co-Founder</h4>
                <p>"It's extremely exciting that Wiserr has freelancers from all over the world — it broadens the talent pool. One of the best things about Wiserr is that while we're sleeping, someone's working"
                </p>
                <h4>Tim and Dan Joo, Co-Founders</h4>
                <p>"When you want to create a business bigger than yourself, you need a lot of help. That's what Wiserr does."
                </p>
                <h4>Caitlin Tormey, Chief Commercial Officer</h4>
                <p>"We've used Wiserr for Shopify web development, graphic design, and backend web development. Working with Wiserr makes my job a little easier every day."
                </p>
                <h4>Brighid Gannon, Co-Founder</h4>
                <p>
                    "We used Wiserr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."
                </p>
                {/* </h4> */}
            </div>
        </section >
    )
}

