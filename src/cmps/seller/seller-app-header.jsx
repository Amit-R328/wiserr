import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'
import { SellerHomepage } from './seller-homepage.jsx'
import { LogoFull, HamburgerMenu, SearchBar } from '../../services/svg.service.js'
import { logout } from '../../store/actions/user.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileMenu } from './profile-menu.jsx'
import { NavCategories } from './nav--categories.jsx'

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
        // setIsSignIn(false)
        // setLoggedInUser(null)
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
            <button className="btn-navicon">
                <HamburgerMenu />
                {/* <HamburgerMenu /> */}
            </button>
            <div className="seller-logo-main-header">
                <NavLink to="/" className="site-logo">
                    <LogoFull />
                </NavLink>
            </div>

            <div className="seller seller-wiserr-header-search-animated">
                <div className="seller seller-search-bar-package-container">
                    <form className="seller seller-search-bar-package seller-search_bar-package">
                        <span className="seller seller-search-bar-icon" aria-hidden="true">
                            <SearchBar />
                        </span>
                        {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                    <button className="co-white seller-submit-button bg-co-green-700">Search</button> */}
                        <Search />
                    </form>
                </div>
            </div>

            <nav className="seller seller-wiserr-nav seller-wiserr-nav-right">
                <ul className="seller-nav-list" >

                    <li className="seller-display-from-md seller-display-from-md">
                        <NavLink to="/seller" className="seller-homepage-nav-link seller-nav-link" target="_blank" ><SellerHomepage /> Wiserr Seller</NavLink>
                    </li>

                    {/* <li className="seller-display-from-md display-from-md clean-list">
                            <NavLink to="/seller-solutions" className="seller-dashboard-nav-link nav-link" target="_blank" ><SellerSolutions /> Seller Solutions</NavLink>
                        </li> */}

                    <li className="seller-display-from-sm seller-display-from-sm">
                        <a href="/login" rel="nofollow" className="seller-js-open-popup-login seller-nav-link">Sign in</a>
                    </li>

                    <li className="seller-signup-btn seller-signup-btn">
                        <a className="seller-js-open-popup-join seller-wiserr-header-join" rel="nofollow" href="/join">Join</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
