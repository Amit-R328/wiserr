

export const GigDetailsDescription = ({gig}) => {


    let whatYouGet
    if (gig.description && gig.description.whatDoYouGet) {
        whatYouGet = gig.description.whatDoYouGet.split('\n')
    }
    return (
        <>
            <h2 className="about-title">About This Gig</h2>
            {gig.description.aboutThisGig && <p className="about-this-gig">{gig.description.aboutThisGig}</p>}

            {whatYouGet && <h3 className='about-get'>What Do You Get:</h3>}
            <dl className="what-do-you-get">

                {whatYouGet && whatYouGet.map(line => <dd key={line}>{line}</dd>)}
            </dl>

            {gig.description.whyUs && <h3 className="gig-details-whyus">Why us: </h3>}
            {gig.description.whyUs && <p className="about-this-gig">{gig.description.whyUs}</p>}
        </>

    )
}