import React from 'react'
import { SellerHero } from './seller-homepage-sections/seller-hero.jsx'
import { FreelancersPreview } from './seller-homepage-sections/seller-preview.jsx'
import { SellerQuestionAnswer } from './seller-homepage-sections/seller-question-answer.jsx'

export const SellerHomepage = () => {

    let freelancers = [{
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657381804/seller-hero/designer_u5vxlt.webp',
        profession: 'designer',
        legends: 'a Designer',
        quote: 'Wiserr has allowed me to make connections to a wide variety of markets all over the globe. Wiserr has been by my side as what\'s felt like a guaranteed source of income through my entire graphic design career.',
        sellerName: 'Tom N.',
        location: 'Guernsey, United Kingdom',
        memberSince: 'Joined Wiserr in 2011',
        gigNumber: '4 Gigs in Graphics & Design',
        buyers: '11,913 Buyers in 136 Countries'
    },
    {
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657383038/seller-hero/developer_soz2xy.webp',
        profession: 'developer',
        legends: 'a Developer',
        quote: 'Wiserr has changed my life in ways i could only dream of. I\'m extremely satisfied working on this platform while supporting my family and exploring the world with new opportunities',
        sellerName: 'Aaliyaan I.',
        location: 'London, United Kingdom',
        memberSince: 'Joined Wiserr in 2010',
        gigNumber: '12 Gigs in Programming and Tech',
        buyers: '22,305 Buyers in 156 Countries'
    },
    {
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657383038/seller-hero/writer_vqov3u.webp',
        profession: 'writer',
        legends: 'a Writer',
        quote: 'Through Wiserr Pro, I have been able to help people tell their stories and get their messages out into the world. Without Wiserr, I never would have been able to make my passion into my living!',
        sellerName: 'Laura T.',
        location: 'Salida, CO',
        memberSince: 'Wiserr Seller Since 2017',
        gigNumber: '2 Gigs in Writing and Translation',
        buyers: '46 Buyers in 13 Countries'
    },
    {
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657383037/seller-hero/video_tdbl9r.webp',
        profession: 'video-editor',
        legends: 'a Video Editor',
        quote: 'Wiserr gave me the opportunity to connect with clients from all over the world; famous musicians, amazing speakers and business owners. I would not be where I am today without Wiserr!',
        sellerName: 'Chris K.',
        location: 'Bourgas, Bulgaria',
        memberSince: 'Joined Wiserr in 2012',
        gigNumber: '1 Gig in Video and Animation',
        buyers: '6,917 Buyers in 101 Countries'
    },
    {
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657383037/seller-hero/musician_vqqoog.webp',
        profession: 'musician',
        legends: 'a Musician',
        quote: 'Being a part of the Wiserr community has helped me work with clients from all over the world and at the comfort of my own home studio.',
        sellerName: 'Lola R.',
        location: 'Los Angeles, CA',
        memberSince: 'Joined Wiserr in 2013',
        gigNumber: '5 Gigs in Music and Audio',
        buyers: '978 Buyers in 66 Countries'
    },
    {
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657383037/seller-hero/voiceover_c2zirh.webp',
        profession: 'voice',
        legends: 'a Voice Over Artist',
        quote: 'The clients [from Wiserr] range from huge companies to mom-and-pop shops all over the world',
        sellerName: 'Paul S.',
        location: 'New York, NY',
        memberSince: 'Joined Wiserr in 2013',
        gigNumber: '3 Gigs in Music and Audio',
        buyers: '5,845 Buyers in 119 Countries'
    },
    {
        img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1657383038/seller-hero/analyst_q4tdju.webp',
        profession: 'social',
        legends: 'a Social Media Marketer',
        quote: 'Five years ago, I was working a dreadful 9 to 5 with no health benefits. Today, I\'m a Top Rated Seller. Thanks to Wiserr my side hustle turned full time and I was able to buy my own health benefits.',
        sellerName: 'Jennifer, S.',
        location: 'Melbourne, FL',
        memberSince: 'Wiserr Seller Since 2012',
        gigNumber: '7 Gigs in Digital Marketing',
        buyers: '3,159 buyers in 92 Countries'
    }
    ]

    return (
        <section>
            <div className="app-header-seller">
                <SellerHero />
            </div>

            <section className="freelance-community-container container">
                <h2>Join Our Growing Freelance Community</h2>
                <ul className="freelance-community-list clean-list">
                    {freelancers.map(freelancer =>
                        <FreelancersPreview
                            key={freelancer.sellerName}
                            freelancers={freelancers}
                            freelancer={freelancer}
                        />
                    )}
                    <li className="last-li">
                        <div>
                            <h3>What's<br></br>your skill?</h3>
                            <a className="open-popup-join" href="/join" rel="nofollow">Become a Seller</a>
                        </div>
                    </li>
                </ul>
            </section>

            <section class="questions-answer-container container">
                <SellerQuestionAnswer />
            </section>

            <aside class="become-seller-section-container container">
                <div class="box-row">
                    <p>Sign up and create your first Gig today</p><br></br>
                    <a className="open-popup-join" href="/join" rel="nofollow">Get Started</a>
                </div>
            </aside>
        </section>
    )
}