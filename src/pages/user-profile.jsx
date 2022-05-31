import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const UserProfile = () => {

    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    return (
        <section className='user-profile'>
            <div className='profile-left-container'>
                <div className='profile-img-user'>
                    <img src={user.imgUrl} alt="img" />
                    <h1>{user.fullName}</h1>
                </div>
            </div>
            <div className='profile-right-container'></div>
        </section>
    )
}