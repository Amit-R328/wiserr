import { GigPreview } from './gig-preview.jsx'


export function GigList({ gigs, reviews }) {
    // if (!gigs) {
    //     return (<h1>Loading</h1>)
    // }
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
