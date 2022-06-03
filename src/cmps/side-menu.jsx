import { useNavigate } from 'react-router-dom'

export const SideMenu = ({menuOpen, user, closeMenu}) => {
    const navigate = useNavigate()

    const openJoin = () => {
        closeMenu()
        navigate('/signup')
    }
    const className = (menuOpen) ? "open" : "";

    return (
        <section className={`side-bar ${className}`}>
            <div className="side-bar-content">
                <div className="menu-header">
                    {!user && <button className="btn" onClick={() => {openJoin()}}>Join Wiserr</button>}
                </div>
            </div>
        </section>
        )

}