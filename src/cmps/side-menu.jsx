import { NavLink, useNavigate } from 'react-router-dom'
import { loadGigs, setFilter } from '../store/actions/gig.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/actions/user.actions.js'
import { useRef } from 'react'
import { OutsideClick } from '../hooks/outsideClick.jsx'
import { useEffect } from 'react'

export const SideMenu = ({ menuOpen, user, closeMenu }) => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const className = (menuOpen) ? "open" : ""
    const menuRef = useRef()
    const menuOutsideClick = OutsideClick(menuRef)

    useEffect(() => {
        const handleClickOutside = () => {
            if(menuOutsideClick) closeMenu()
        }
        document.addEventListener("Click", handleClickOutside)
    },[menuOutsideClick])

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
        <section ref={menuRef} className={`side-bar ${className}`}>
            <div className="side-bar-content">
                <div className="menu-header">
                    {!user && <button className="btn" onClick={() => { openJoin() }}>Join Wiserr</button>}
                    {console.log('before push')}
                </div>
                <nav className='menu-nav'>
                    <ul className='clean-list'>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/">Home</NavLink></li>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/seller/dashboard">Wiserr Seller</NavLink></li>
                        <ul className="categories-side-bar">
                            {categories.map((category, index) => <li key={index}>
                                <button onClick={() => onChangeCategory(category.parameter)}>{category.name}</button>
                            </li>)}
                        </ul>
                    </ul>
                    {user && <ul>
                        <li><img src={`${user.imgUrl}`} alt="user img small" /></li>
                        <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/dashboard`}>Dashboard</NavLink></li>
                        {user && <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/order/${user._id}`}>My Orders</NavLink></li>}
                        {user && <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/gig`}>My Gigs</NavLink></li>}
                        <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/seller/add-gig`}>New Gig</NavLink></li>
                        <li className="menu-item logout" onClick={() => onLogout()}><NavLink to={`/`}>Logout</NavLink></li>
                    </ul>}
                </nav>
            </div>
        </section >
    )
}