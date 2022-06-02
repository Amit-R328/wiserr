import React, { useEffect, useState } from 'react'
import { LogoFull, HamburgerMenu, SearchBar } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'
import { logout } from '../../store/actions/user.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileMenu } from './profile-menu.jsx'
import { NavCategories } from './nav--categories.jsx'

export const AppHeader = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const [profileMenu, setMenu]  = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = e => {
        setScrolled(window.scrollY > 200)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    
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
        <header className={`header ${scrolled ? 'scrolled' : ''}`} >
            <div className="top container">

                <div className="logo-search-container">

                    <button className="btn-navicon">
                        <HamburgerMenu />
                    </button>

                    <div className="logo">
                        <NavLink to="/" className="site-logo">
                            <LogoFull />
                        </NavLink>
                    </div>

                    <form className="search-bar-package search_bar-package">
                        <span className="search-bar-icon searching-icon" aria-hidden="true">
                            <SearchBar />
                        </span>
                        <Search />
                        {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                    <button className="co-white submit-button bg-co-green-700">Search</button> */}
                    </form>
                </div>

                
                <ul className="nav-list clean-list" >

                    <li className="display-from-md">
                       {loggedInUser && <NavLink to="/seller/dashboard" className="seller-nav-link nav-link">Wiserr Seller</NavLink>}
                    </li>

                    <li className="display-from-md">
                        <div className="resources-tab-package">
                            <NavLink to="/categories" className="explore-nav-link nav-link">Explore</NavLink>
                        </div>
                    </li>
                    <li className="display-from-sm">
                        {!loggedInUser && <NavLink to="/login" rel="nofollow" className="js-open-popup-login nav-link">Login/Join</NavLink>}
                        <div className="avatar-container">
                            {loggedInUser && <img className="avatar-img" src={`${loggedInUser.imgUrl}`} onClick={onToggleMenu} alt="Avatar"></img>}
                        </div>
                        <div className="profile-container">
                            {profileMenu && <ProfileMenu onLogout={onLogout} user={loggedInUser} closeMenu={onToggleMenu} />}
                        </div>
                    </li>
                 
                </ul>
            </div>

            {scrolled && <div className="bottom container">
                <NavCategories />
            </div>}
        </header>
    )
}
