import { GreenVMark } from '../../services/svg.service.js'

export const GigDetailsOurOffer = ({gig, onConfirmOrder}) => {
    
    
    let price = 0
    if (gig && gig.price) {
        price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    return (        
        <div className="sticky-outer-wrapper-gig-buy">
        <div className="sticky-inner-wrapper-gig-buy">
            <aside className="sidebar-content">
                <div className="call-to-action">
                    <div className="price-package">Our Offer</div>
                    <div className="order-title-wrapper flex flex-column">
                        <div className="order-price flex"><div className="total-price">Total</div><div>{price}</div></div>
                        <div className="order-subtitle">{gig.title}</div>
                        <p className='days-to-make'><b>{` ${gig.daysToMake} ${gig.daysToMake === "1" ? "Day Delivery" : "Days Delivery"}`}</b></p>

                        {gig.description.littleDetails && <dl className="description-little-details"> {gig.description.littleDetails.map((detail, idx) => <dt className='littleDetails' key={idx}><GreenVMark />{detail}</dt>)}</dl>}

                        <footer className='buy-btn-container'>
                            <button className="buy-btn" onClick={(ev) => onConfirmOrder(ev, gig._id)}>Continue <span></span>
                            </button>
                        </footer>
                    </div>
                </div>
            </aside>
            <div className="contact-seller flex">
                <a className='gig-details-contact-seller' href="mailto:wiserrseller@mailgo.com">Contact Seller</a>
                
            </div>
        </div>
    </div>


    )
}