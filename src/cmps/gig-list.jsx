import {GigPreview} from './gig-preview.jsx'

export function GigList({gigs}){
    if(!gigs){
        return (<h1>Loading</h1>)
    }
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
