export const GigPreview = ({gig}) => {
    return (
        <li className="gig-preview">
            <p>{gig.title}</p>
            <img src={`${gig.imgUrl}`} alt='gig'/>
            <p>{gig.price}</p>
            <p>{gig.owner.fullName}</p>
        </li>
    )
}