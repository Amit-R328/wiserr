import {GigPreview} from './gig-preview.jsx'

export function GigList({gigs}){
    return (
        <ul className="gig-list clean-list">
            {gigs.map(gig =>
                <gigPreview 
                    key={gig._id}
                    gig={gig}
                />
            )}
        </ul>
    )
}
