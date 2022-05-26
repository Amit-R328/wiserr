import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { CarApp } from './pages/car-app.jsx'
import { ReviewApp } from './pages/review-app.jsx'
import { ChatApp } from './pages/chat-app.jsx'
import { BusinessHomepage } from './cmps/business-homepage.jsx'
import { BusinessTools } from './cmps/business-tools.jsx'
import { BusinessSolutions } from './cmps/business-solutions.jsx'
import { Login } from './cmps/login.jsx'
import {GigPage} from './pages/gig-page.jsx'
import { Join } from './cmps/join.jsx'
import {GigDetails} from './pages/gig-details.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/business/business-solutions',
        component: <BusinessSolutions />,
    },
    {
        path: '/business/business-tools',
        component: <BusinessTools />,
    },
    {
        path: '/business',
        component: <BusinessHomepage />,
    },
    {  path: '/login',
        component: <Login />,
    },
    {  path: '/join',
        component: <Join />,
    },
    {  path: '/categories',
        component: <GigPage />,
    },
    {
        path: '/categories/:gigId',
        component: <GigDetails/>
    },
    {  path: '/',
        component: <HomePage />,
    },
    // {
    //     path: 'car',
    //     component: <CarApp />,
    // },
    // {
    //     path: 'review',
    //     component: <ReviewApp />,
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    // },
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    // }
]

export default routes