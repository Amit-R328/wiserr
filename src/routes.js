import { HomePage } from './pages/homepage.jsx'
// import { BusinessHomepage } from './cmps/business/_business-homepage.jsx'
import { SellerDashboard } from './cmps/seller/seller-dashboard.jsx'
import { GigPage } from './pages/gig-page.jsx'
import { GigDetails } from './pages/gig-details.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
import { AddGigDetailsWrapper } from './pages/add-gig.jsx'
import { UserProfile } from './pages/user-profile.jsx'

const routes = [
    {
        path: '/seller/dashboard',
        component: <SellerDashboard />,
    },
    {
        path: '/seller/add-gig',
        component: <AddGigDetailsWrapper />
    },
    // {
    //     path: '/business',
    //     component: <BusinessHomepage />,
    //     element: <BusinessHeaderHomePage />
    // },
    {
        path: '/profile/:userId',
        component: <UserProfile/>
    },
    { 
        path: '/login',
        component: <LoginSignup />,
    },
    {
        path: '/join',
        component: <LoginSignup />,
    },
    {  
        path: '/signup',
    component: <LoginSignup />,
    },
    {
        path: '/categories',
        component: <GigPage />,
    },
    {
        path: '/categories/:gigId',
        component: <GigDetails />,
    },
    {
        path: '/',
        component: <HomePage />,
    },
]

export default routes