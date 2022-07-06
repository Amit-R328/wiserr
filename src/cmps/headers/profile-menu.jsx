import { NavLink } from "react-router-dom"

export const ProfileMenu = ({ onLogout, user, closeMenu }) => {

    return (
        <section className="profile-menu-wrapper">
            <div className="profile-menu">
                <ul className="sub-category clean-list">
                    <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/add-gig`}>Add New Gig</NavLink></li>
                    {user && <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/profile/${user._id}`}>My Profile</NavLink></li>}
                    {user && <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/gig`}>My Gigs</NavLink></li>}
                    <li className="menu-item logout" onClick={() => onLogout()}><NavLink to={`/`}>Logout</NavLink></li>
                </ul>
            </div>
        </section>
    )
}