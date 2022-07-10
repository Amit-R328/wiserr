import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { Search } from '../search.jsx'
import { LogoFull } from '../../services/svg.service.js'
import { logout } from '../../store/actions/user.actions.js'
import { ProfileMenu } from './profile-menu.jsx'
import { NavCategories } from './nav-categories.jsx'
import { SideMenu } from '../side-menu.jsx'
import { useWindowDimensions } from '../../hooks/useWindowDimensions.jsx'

export const AppHeader = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [isSideMenu, setSideMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { pathname } = useLocation()
    const { width } = useWindowDimensions()
    const menuRef = useRef(null)
    const profileRef =useRef(null)
    // const menuOutsideClick = OutsideClick(menuRef)

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
    }, [isSideMenu])

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
    }, [showProfileMenu])

    useEffect(() => {

        if (pathname === '/' || pathname === '/seller') {
            window.addEventListener("scroll", handleScroll)
        }
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [pathname])

    const handleClickOutside = (e) => {
        if (menuRef.current && isSideMenu && !menuRef.current.contains(e.target)) onToggleSideMenu()
        else if (profileRef.current && showProfileMenu && !profileRef.current.contains(e.target)) onToggleMenu()
    }

    const handleScroll = e => {
        setScrolled(window.scrollY > 200)
    }

    let classHamburgerMenu = (width < 600 || window.scrollY > 200 || (pathname !== '/' && pathname !== '/seller')) ? 'gray' : 'white'

    const onLogout = () => {
        dispatch(logout())
        setShowProfileMenu(!showProfileMenu)
    }

    const onToggleMenu = (ev) => {
        ev.stopPropagation()
        setShowProfileMenu(!showProfileMenu)
    }

    const onCloseMenu = () => {
        setShowProfileMenu(false)
    }

    const onToggleSideMenu = () => {
        let flag = !isSideMenu
        setSideMenu(flag)
    }

    if (loggedInUser && !loggedInUser.imgUrl) {
        loggedInUser.imgUrl = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    }


    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${(pathname !== '/' && pathname !== '/seller') ? 'categories-header' : ''} ${pathname.includes('categories/') ? 'nav-details' : ''}`} >
            <div className="top container">
                <div className="logo-search-container">
                    {(pathname === `/categories` || pathname === `/seller/dashboard` || pathname === '/') &&
                    <div className="side-menu">
                        <button ref={menuRef} onClick={onToggleSideMenu} className={`hamburger-icon ${classHamburgerMenu}`}>
                            {isSideMenu && <SideMenu menuOpen={isSideMenu} closeMenu={onToggleSideMenu} user={loggedInUser} />}
                        </button>
                    </div>
                    } 
                    <div className="logo">
                        <NavLink to="/" className="site-logo">
                            <LogoFull />
                        </NavLink>
                    </div>
                    <form className="search-bar">
                        {scrolled && <Search handleScroll={handleScroll} loc={'appHeader'} />}
                    </form>
                </div>
                <ul className="nav-list clean-list" >
                    <li>{pathname === '/seller' && loggedInUser ?
                        <NavLink to="/seller/dashboard" className="seller-nav-link nav-link">Dashboard</NavLink>
                        : <span></span>}</li>
                    <li>{pathname === '/seller' && loggedInUser ?
                        <li><NavLink to="/seller/gig" className="seller-nav-link nav-link">My Gigs</NavLink></li>
                        : <span></span>}</li>
                    <li>{pathname === '/seller' && loggedInUser ?
                        <li><NavLink to="/order/:userId" className="seller-nav-link nav-link">My Orders</NavLink></li>
                        : <span></span>}</li>

                    <li>
                        <NavLink to="/categories" className="explore-nav-link nav-link">Explore</NavLink>
                    </li>
                    <li>
                        {pathname !== '/seller' ? <NavLink to="/seller" className="seller-nav-link nav-link">Wiserr Seller</NavLink> : <span></span>}
                    </li>
                    <li>
                        {!loggedInUser && <NavLink to="/login" rel="nofollow" className="open-popup-login nav-link">Login/Join</NavLink>}
                        <div className="avatar-container">
                            {loggedInUser && <img className="avatar-img" src={`${loggedInUser.imgUrl}`} onClick={onToggleMenu} alt="Avatar"></img>}
                        </div>
                        
                        <div className="profile-container">
                            {/* <button ref={menuRef}> */}
                                {showProfileMenu && <ProfileMenu menuOpen={showProfileMenu} onLogout={onLogout} user={loggedInUser} closeMenu={onCloseMenu} onToggleMenu={onToggleMenu}/>}
                            {/* </button> */}
                        </div>
                    </li>
                </ul>
            </div>
            {pathname !== '/seller' ? (width > 700 && (scrolled || pathname !== '/' )) && <div className="bottom">
                <NavCategories />
            </div> : <span></span>}
        </header>
    )
}
