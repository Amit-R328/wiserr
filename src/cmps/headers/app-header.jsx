import React, { useEffect, useState } from 'react'
import { LogoFull, HamburgerMenu, SearchBar } from '../../services/svg.service.js'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { Search } from '../search.jsx'
import { logout } from '../../store/actions/user.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileMenu } from './profile-menu.jsx'
import { NavCategories } from './nav-categories.jsx'
import { SideMenu } from '../side-menu.jsx'

export const AppHeader = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const [profileMenu, setMenu] = useState(false)
    const [isSideMenu, setSideMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const { pathname } = useLocation()
    // const location = useLocation()
    // const location = useHistory()
    // const location = useRoute()
    // const location = useSearchParams()
    

    const handleScroll = e => {
        setScrolled(window.scrollY > 200)
    }

    useEffect(() => {
        if(pathname === '/'){
        window.addEventListener("scroll", handleScroll)
        }
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [pathname])

    const onLogout = () => {
        dispatch(logout())
        var flag = !profileMenu;
        setMenu(flag);
    }

    const onToggleMenu = () => {
        var flag = !profileMenu;
        setMenu(flag);
    }

    const onToggleSideMenu = () => {
        var flag = !isSideMenu
        setSideMenu(flag)
    }

    if (loggedInUser && !loggedInUser.imgUrl) {
        loggedInUser.imgUrl = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    }

    return (
        <header className={`header ${scrolled  ? 'scrolled' : ''} ${pathname !=='/' ? 'categories-header' :''} ${pathname.includes('categories/') ? 'nav-details' :''}`} >
            
            <div className="top container">
                <div className="logo-search-container">
                    <button  onClick={onToggleSideMenu} className="hamburger-icon">
                        {isSideMenu && <SideMenu menuOpen={isSideMenu} closeMenu={onToggleSideMenu} user={loggedInUser}/>}
                    </button>
                    <div className="logo">
                        <NavLink to="/" className="site-logo">
                            <LogoFull />
                        </NavLink>
                    </div>
                    <form className="search-bar">
                        {scrolled && <Search handleScroll={handleScroll} loc={'appHeader'}/>}
                    </form>
                </div>
                <ul className="nav-list clean-list" >
                    <li>
                        <NavLink to="/categories" className="explore-nav-link nav-link">Explore</NavLink>
                    </li>
                    <li>
                        {loggedInUser ? <NavLink to="/seller/dashboard" className="seller-nav-link nav-link">Wiserr Seller</NavLink>: <NavLink to="/login" className="seller-nav-link nav-link">Wiserr Seller</NavLink>}
                    </li>
                    <li>
                        {!loggedInUser && <NavLink to="/login" rel="nofollow" className="open-popup-login nav-link">Login/Join</NavLink>}
                        <div className="avatar-container">
                            {loggedInUser && <img className="avatar-img" src={`${loggedInUser.imgUrl}`} onClick={onToggleMenu} alt="Avatar"></img>}
                        </div>
                        <div className="profile-container">
                            {profileMenu && <ProfileMenu onLogout={onLogout} user={loggedInUser} closeMenu={onToggleMenu} />}
                        </div>
                    </li>
                </ul>
            </div>

            {(scrolled || (pathname !== '/'))  && <div className="bottom container">
                <NavCategories />
            </div>}
        </header>
    )
}
