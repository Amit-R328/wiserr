import { Link } from "react-router-dom";

export const GigPreview = ({gig}) => {
    return (
        <li className="gig-preview">
            <Link to={`/categories/${gig._id}`}><p>{gig.title}</p></Link>
            <img src={`${gig.imgUrl[0]}`} alt='gig'/>
            <p>{gig.price}</p>
            <p>{gig.owner.fullName}</p>
        </li>
    )
}