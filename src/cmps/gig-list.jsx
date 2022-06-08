import { useEffect, useState } from 'react'
import { GigPreview } from './gig-preview.jsx'


export const GigList = ({ gigs, reviews }) => {

    return (

        <div className="list-of-gigs-container">
            <ul className="gig-list clean-list">
                {gigs.map(gig =>
                    <GigPreview
                        key={gig._id}
                        gig={gig}
                        reviews={reviews}
                    />
                )}
            </ul>
        </div>

    )
}
