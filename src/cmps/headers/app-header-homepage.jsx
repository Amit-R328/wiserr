import React, { useState } from 'react'
import { LogoFull, LogoFullWhite, HamburgerMenu, HamburgerMenuWhite, SearchBar } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { HeroCarousel } from './hero-carousel.jsx'
import { Search } from '../search.jsx'
import { logout } from '../../store/actions/user.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { userService } from '../../services/user.service.js'


export const AppHeaderHomePage = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')
    // const [isSignIn, setIsSignIn] = useState(false)
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    // const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    // const {user} = useSelector((storeState) => storeState.userModule)
    // const [user, setUser] = useState(userService.getById(loggedInUser._id))

    console.log('loggedInUser', loggedInUser)
    // console.log('user', user)

    const onLogout = () => {
        dispatch(logout())
        // setIsSignIn(false)
        // setLoggedInUser(null)
    }

    if(loggedInUser && !loggedInUser.imgUrl){
        loggedInUser.imgUrl = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    }

    return (
        <div className="header">
            <header className="logged-out-homepage-header">
                <div className="header-row-wrapper">
                    <div className="header-row max-width-container equal-padding row-main">
                        <button className="btn-navicon">
                            <HamburgerMenuWhite />
                            {/* <HamburgerMenu /> */}
                        </button>
                        <div className="logo-main-header">
                            <NavLink to="/" className="site-logo">
                                {/* <LogoFullWhite /> */}
                                <LogoFull />
                            </NavLink>
                        </div>
                        <div className="wiserr-header-search-animated">
                            <div className="search-bar-package-container">
                                <form className="search-bar-package search_bar-package">
                                    <span className="search-bar-icon searching-icon" aria-hidden="true">
                                        <SearchBar />
                                    </span>
                                    {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                    <button className="co-white submit-button bg-co-green-700">Search</button> */}
                                    <Search />
                                </form>
                            </div>
                        </div>

                        <div className="wiserr-nav wiserr-nav-right">
                            <ul className="nav-list" >

                                <li className="display-from-md">
                                    <NavLink to="/business" className="business-nav-link nav-link">Wiserr Business</NavLink>
                                </li>

                                <li className="display-from-md">
                                    <div className="resources-tab-package">
                                        <NavLink to="/categories" className="explore-nav-link nav-link">Explore</NavLink>
                                    </div>
                                </li>

                                <li className="display-from-sm">
                                    {/* <NavLink to="/login" rel="nofollow" className="js-open-popup-login nav-link">Login/Join</NavLink> */}
                                    {!loggedInUser && <NavLink to="/login" rel="nofollow" className="js-open-popup-login nav-link">Login/Join</NavLink>}
                                    <div className="avatar-container">
                                        {loggedInUser && <img className="avatar-img" src={`${loggedInUser.imgUrl}`} alt="Avatar"></img>}
                                    </div>
                                    {/* {loggedInUser && <button className="user-logout user-btn" onClick={() => onLogout()}>Logout</button>} */}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
            <span className="line-sep"></span>

        </div>
    )
}
