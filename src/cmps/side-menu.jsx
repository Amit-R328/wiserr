import { NavLink, useNavigate } from 'react-router-dom'
import { loadGigs, setFilter } from '../store/actions/gig.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/actions/user.actions.js'
import { ArrowDownCollapsible, LogoFullFooter } from '../services/svg.service.js'

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

    const categories = [{ name: 'All Categories', parameter: '' },
    { name: 'Graphics & Design', parameter: 'Graphics & Design' },
    { name: 'Digital Marketing', parameter: 'Digital Marketing' },
    { name: 'Writing & Translation', parameter: 'Writing & Translation' },
    { name: 'Video & Animation', parameter: 'Video & Animation' },
    { name: 'Business', parameter: 'Business' },
    { name: 'Lifestyle', parameter: 'Lifestyle' }
    ]

    return (
        <div className={`background-backdrop overlay ${menuOpen ? 'visible' : ''}`}>
            <section className={`side-bar flex flex-column ${className}`} >
                <div className="menu-header">
                    {!user && <button className="btn open-popup-join-side-menu" onClick={() => { openJoin() }}>Join Wiserr</button>}
                    {user && loggedInUser && <div><LogoFullFooter/><br></br><h3>Hello, {loggedInUser.userName}</h3></div>}
                </div>
                <nav className='menu-nav'>
                    {!loggedInUser && <a className="sidebar-link" href="/login" rel="nofollow">Sign in</a>}
                    <div className="sidebar-categories">
                        <article className="sidebar-collapsible">
                            <div className="sidebar-collapsible-title-wrapper flex">
                                <div className="sidebar-collapsible-title">
                                    Browse Categories
                                    <div className="arrow-down">
                                        <span><ArrowDownCollapsible /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-collapsible-content">
                                <ul className="categories-side-bar clean-list">Browse Categories
                                    {categories.map((category, index) => <li key={index}>
                                        <button className="menu-btn" onClick={() => onChangeCategory(category.parameter)}>{category.name}</button>
                                    </li>)}
                                </ul>
                            </div>
                        </article>
                    </div>
                    <ul className='clean-list'>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/">Home</NavLink></li>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/seller">Wiserr Seller</NavLink></li>
                    </ul>
                    {user && <ul>
                        <li><img className="avatar-img menu" src={`${user.imgUrl}`} alt="user img small" /></li>
                        <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/dashboard`}>Dashboard</NavLink></li>
                        {user && <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/order/${user._id}`}>My Orders</NavLink></li>}
                        {user && <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/gig`}>My Gigs</NavLink></li>}
                        <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/add-gig`}>New Gig</NavLink></li>
                        <li className="menu-item logout" onClick={() => onLogout()}><NavLink to={`/`}>Logout</NavLink></li>
                    </ul>}
                </nav>
            </section>
        </div>
    )
}