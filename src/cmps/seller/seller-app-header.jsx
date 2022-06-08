import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'
import { SellerHomepage } from './seller-homepage.jsx'
import { LogoFull, HamburgerMenu, SearchBar } from '../../services/svg.service.js'
import { logout } from '../../store/actions/user.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileMenu } from './profile-menu.jsx'


export const SellerAppHeader = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const [profileMenu, setMenu] = useState(false)

    const onLogout = () => {
        dispatch(logout())
        var flag = !profileMenu;
        setMenu(flag);
    }

    const onToggleMenu = () => {
        var flag = !profileMenu;
        setMenu(flag);
    }

    if (loggedInUser && !loggedInUser.imgUrl) {
        loggedInUser.imgUrl = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    }

    return (
        <header className="header-seller container">
            <button className="hamburger-icon">
                <HamburgerMenu />
            </button>
            <div className="seller-logo-main-header">
                <NavLink to="/" className="site-logo">
                    <LogoFull />
                </NavLink>
            </div>

            <div className="seller seller-wiserr-header-search-animated">
                <form className="seller-search-bar">
                    <span className="seller seller-search-bar-icon" aria-hidden="true">
                        <SearchBar loc={'sellerAppHeader'} />
                    </span>
                    <Search />
                </form>
            </div>

            <nav className="seller-wiserr-nav seller-wiserr-nav-right">
                <ul className="seller-nav-list" >

                    <li>
                        <NavLink to="/seller" className="seller-nav-link" target="_blank" ><SellerHomepage /> Wiserr Seller</NavLink>
                    </li>

                    <li>
                        <a href="/login" rel="nofollow" className="seller-nav-link">Sign in</a>
                    </li>

                    <li>
                        <a className="seller-wiserr-header-join" rel="nofollow" href="/join">Join</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
