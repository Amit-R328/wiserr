

export const GigDetailsAboutSeller = ({orders, gig, memberSince}) => {

    


    return (        
        <article className="about-seller">
            <p className="about-title">About The Seller</p>
                <div className="owner-card">
                    <img className="md-round-img" src={`${gig.owner.imgUrl}`} alt="" />
                        <div className="owner-card-right">
                            <p className="gig-details-owner-name">{gig.owner.fullName}</p>
                            {gig.owner.tagline && <p className="gig-details-owner-tagline">{gig.owner.tagline}</p>}
                            <p><i className="fa fa-star filled">
                                <i className="fa fa-star filled">
                                <i className="fa fa-star filled">
                                <i className="fa fa-star filled">
                                <i className="fa fa-star filled">
                                &nbsp; 5</i></i></i></i></i>
                            </p>
                        </div>
                </div>
                <div className="owner-info">
                    <ul className="info-left flax">
                        <li>
                            From
                            <strong>{gig.owner.from}</strong>
                        </li>
                        <li>
                            Member Since
                            <strong>{`${memberSince > 2 ? memberSince : 2} month ago`}</strong>
                        </li>
                        <li>
                            Avg response time
                            <strong>3 hours</strong>
                        </li>
                        <li>
                            Last Delivery
                            <strong>About 2 Hours ago</strong>
                        </li>
                    </ul>
                <article className="seller-description">
                    <div className="owner-summary">Hello, I am a freelancer who have been working in this industry for almost 6 years. I am open to different challenges and opportunities</div>
                </article>
            </div>
        </article>


    )
}