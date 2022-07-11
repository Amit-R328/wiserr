import { NavLink, useNavigate } from 'react-router-dom'
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/user.actions.js'
import { LogoFull } from '../../services/svg.service.js'
import { CollapsibleSideItem } from './collapsible-side-item.jsx'

export const SideMenu = ({ menuOpen, user, closeMenu }) => {
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const className = (menuOpen) ? 'open' : ''

    const onLogout = () => {
        dispatch(logout())
        closeMenu()
    }

    const openJoin = () => {
        navigate('/signup')
        closeMenu()
    }

    const onChangeCategory = (category) => {
        filterBy = { txt: '', priceMin: 0, priceMax: Infinity, deliveryDate: 0, category: category }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
        closeMenu()
    }

    return (
        <div className={`background-backdrop overlay ${menuOpen ? 'visible' : ''}`}>
            <section className={`side-bar flex flex-column ${className}`} >
                <div className="menu-header">
                    <h2>X</h2>
                    {!user && <button className="open-popup-join-side-menu" onClick={() => { openJoin() }}>Join Wiserr</button>}
                    {user && loggedInUser && <div><LogoFull /><br></br><h3>Hello, {loggedInUser.userName}</h3></div>}
                </div>
                <nav className='menu-nav'>
                    <div className="sidebar-collapsible-content">
                        <CollapsibleSideItem onChangeCategory={onChangeCategory} />
                    </div>
                    {user && <ul className='side-menu-profile clean-list'>
                        <li className="sidebar-collapsible-content-title">My Profile</li>

                        <li className="sidebar-collapsible-item"><NavLink to={`/seller`}>Wiserr Business</NavLink></li>
                        <li className="sidebar-collapsible-item"><NavLink to={`/seller/dashboard`}>Dashboard</NavLink></li>
                        {user && <li className="sidebar-collapsible-item"><NavLink to={`/order/${user._id}`}>My Orders</NavLink></li>}
                        {user && <li className="sidebar-collapsible-item"><NavLink to={`/seller/gig`}>My Gigs</NavLink></li>}
                        <li className="sidebar-collapsible-item"><NavLink to={`/seller/add-gig`}>New Gig</NavLink></li>
                    </ul>}
                    <li className="sidebar-collapsible-content-title">General</li>
                    <li className='sidebar-collapsible-item-general'><NavLink onClick={() => closeMenu()} to="/">Home</NavLink></li>
                    {!loggedInUser ? <a className="sidebar-link" href="/login" rel="nofollow">Sign in</a> : <a className="sidebar-link" href="/" onClick={() => onLogout()}>LogOut</a>}
                </nav>
            </section>
        </div>
    )
}