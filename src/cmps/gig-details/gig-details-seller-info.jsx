import ImageGallery from 'react-image-gallery'

export const GigDetailsSellerInfo = ({ gig, user, orders }) => {


    let images
    if (gig && gig.imgUrl) {
        images = gig.imgUrl.map((img) => {
            return { original: img, thumbnail: img }
        })
    }

    return (
        <section className="gig-info">
            <h1 className="text-display">{gig.title}</h1>
            <div className="owner-details owner-container" >
                <div className="owner-name-and-img">
                    <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="" /> &nbsp;
                    <p className="owner-name">{gig.owner.fullName}</p>
                </div>
                <p className='owner-level'>{user.level ? user.level : 'Level 1 Seller '} </p>
                <p className='owner-order-qty'> {orders.length ? `   ${orders.length} Order in Queue ` : ''}</p>
                <div className="gig-rate">
                    {gig.reviews.length ? <div className="avg-rate">{((gig.reviews.reduce((acc, review) => acc + (review.stars), 0)) / gig.reviews.length).toFixed(1)}<p className="rate-reviews-qty">({gig.reviewsQty})</p></div> :
                        <div className="avg-rate">4.9</div>}
                </div>

            </div>
            <div className="gig-details-img-container">
                <ImageGallery showThumbnails={false} showPlayButton={false} items={images} />
            </div>
        </section>
    )
}