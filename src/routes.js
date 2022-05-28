import { HomePage } from './pages/homepage.jsx'
import { BusinessHomepage } from './cmps/business-cmps/business-homepage.jsx'
import { BusinessDashboard } from './cmps/business-cmps/business-dashboard.jsx'
import { BusinessSolutions } from './cmps/business-cmps/business-solutions.jsx'
import { Login } from './pages/login.jsx'
import { GigPage } from './pages/gig-page.jsx'
import { Join } from './pages/join.jsx'
import { GigDetails } from './pages/gig-details.jsx'
import { AppHeaderHomePage } from './cmps/headers/app-header-homepage.jsx'
import { BusinessHeaderHomePage } from './cmps/business-cmps/business-homepage-header.jsx'
import { BusinessAppHeader } from './cmps/business-cmps/business-app-header.jsx'
import { AppHeader } from './cmps/headers/app-header.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/business/business-solutions',
        component: <BusinessSolutions />,
        element: <BusinessAppHeader />
    },
    {
        path: '/business/business-dashboard',
        component: <BusinessDashboard />,
        element: <BusinessAppHeader />,
    },
    {
        path: '/business',
        component: <BusinessHomepage />,
        element: <BusinessHeaderHomePage />
    },
    {
        path: '/login',
        component: <Login />,
        element: <AppHeader />
    },
    {
        path: '/join',
        component: <Join />,
        element: <AppHeader />
    },
    {
        path: '/categories',
        component: <GigPage />,
        element: <AppHeader />
    },
    {
        path: '/categories/:gigId',
        component: <GigDetails />,
        element: <AppHeader />
    },
    {
        path: '/',
        component: <HomePage />,
        element: <AppHeaderHomePage />
    },

    // {
    //     path: 'review',
    //     component: <ReviewApp />,

]

export default routes