// import React, { useState } from 'react'
// import { LogoBusinessFull, HamburgerMenu, HamburgerMenuWhite, SearchBar } from '../../services/svg.service.js'
// import { NavLink } from 'react-router-dom'
// import { Search } from '../search.jsx'
// import { SellerDashboard } from './dashboard.jsx'

// export const SellerHeaderHomePage = (props) => {
//     const [searchBar, setSearchBar] = useState('hidden')
//     const [navHeader, setNavHeader] = useState('hidden')
//     const [logo, setLogo] = useState('logo-white')
//     const [headerTextColor, setHeaderTextColor] = useState('white')

//     return (
//         <div className="header-seller">
//             <header className="seller seller-logged-out-homepage-header seller-header-transparent">
//                 <div className="seller seller-header-row-wrapper">
//                     <div className="seller seller-header-row">
//                         <button className="btn-navicon">
//                             <HamburgerMenuWhite />
//                             {/* <HamburgerMenu /> */}
//                         </button>
//                         <div className="seller-logo-main-header">
//                             <NavLink to="/" className="site-logo">
//                                 <LogoBusinessFull />
//                             </NavLink>
//                         </div>

//                         <div className="seller seller-wiserr-header-search-animated">
//                             <div className="seller seller-search-bar-package-container">
//                                 <form className="seller seller-search-bar-package seller-search_bar-package">
//                                     <span className="seller seller-search-bar-icon" aria-hidden="true">
//                                         <SearchBar />
//                                     </span>
//                                     {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
//                                     <button className="co-white seller-submit-button bg-co-green-700">Search</button> */}
//                                     <Search />
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <nav className="seller seller-wiserr-nav seller-wiserr-nav-right">
//                     <ul className="seller-nav-list" >

//                         <li className="seller-display-from-md seller-display-from-md">
//                             <NavLink to="/seller/dashboard" className="seller-dashboard-nav-link seller-nav-link" target="_blank" ><SellerDashboard /> Dashboard</NavLink>
//                         </li>

//                         {/* <li className="seller-display-from-md seller-display-from-md">
//                             <NavLink to="/seller-solutions" className="seller-dashboard-nav-link seller-nav-link" target="_blank" ><SellerSolutions /> Seller Solutions</NavLink>
//                         </li> */}

//                         <li className="seller-display-from-sm seller-display-from-sm">
//                             <a href="/login" rel="nofollow" className="seller-js-open-popup-login seller-nav-link">Sign in</a>
//                         </li>

//                         <li className="seller-signup-btn seller-signup-btn">
//                             <a className="seller-js-open-popup-join seller-wiserr-header-join" rel="nofollow" href="/join">Join</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>
//             <span className="line-sep"></span>
//         </div >
//     )
// }
