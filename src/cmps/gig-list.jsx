import { GigPreview } from './gig-preview.jsx'
import { FilterBreadCrumbs } from '../cmps/filter-breadcrumbs.jsx'

export function GigList({ gigs }) {
    // if (!gigs) {
    //     return (<h1>Loading</h1>)
    // }
    return (
        <div className="gigs-preview-main-wrapper">
            <div className="gigs-list-container">
                <div className="filter-gigs-container">
                    <FilterBreadCrumbs />
                </div>
                <div className="list-of-gigs-container">
                    <ul className="gig-list clean-list">
                        {gigs.map(gig =>
                            <GigPreview
                                key={gig._id}
                                gig={gig}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </div>

    )
}
