import { HomePage } from './pages/homepage.jsx'
import { BusinessHomepage } from './cmps/business-cmps/business-homepage.jsx'
import { BusinessTools } from './cmps/business-cmps/business-tools.jsx'
import { BusinessSolutions } from './cmps/business-cmps/business-solutions.jsx'
import {GigPage} from './pages/gig-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
import {GigDetails} from './pages/gig-details.jsx'
import {AppHeaderHomePage} from './cmps/headers/app-header-homepage.jsx'
import {AppHeader} from './cmps/headers/app-header.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/business/business-solutions',
        component: <BusinessSolutions />,
        element: <AppHeader />
    },
    {
        path: '/business/business-tools',
        component: <BusinessTools />,
        element: <AppHeader />
    },
    {
        path: '/business',
        component: <BusinessHomepage />,
        element: <AppHeader />
    },
    {  path: '/login',
        component: <LoginSignup />,
        element: <AppHeader />
    },
    {  path: '/join',
    component: <LoginSignup />,
    element: <AppHeader />
    },
    {  path: '/categories',
        component: <GigPage />,
        element: <AppHeader />
    },
    {
        path: '/categories/:gigId',
        component: <GigDetails/>,
        element: <AppHeader />
    },
    {  path: '/',
        component: <HomePage />,
        element: <AppHeaderHomePage />
    },
    
    // {
    //     path: 'review',
    //     component: <ReviewApp />,

]

export default routes