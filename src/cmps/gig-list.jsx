import { GigPreview } from './gig-preview.jsx'
import { FilterGigs } from './filter-gigs.jsx'
import { AppHeaderHomePage } from './app-header-homepage.jsx'
import { CategoriesNavHeader } from './categories-nav-header.jsx'

export function GigList({ gigs }) {
    // if (!gigs) {
    //     return (<h1>Loading</h1>)
    // }
    return (
        <div className="main-wrapper">
            <div className="main-header sticky">
                <AppHeaderHomePage />
                <CategoriesNavHeader />
            </div>

            <div className="gigs-list-containers">
                <div className="filter-gigs-preview">
                    <FilterGigs />
                </div>

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
    )
}
