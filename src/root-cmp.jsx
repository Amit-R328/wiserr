import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeaderHomePage } from './cmps/app-header-homepage.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { UserDetails } from './pages/user-details'

export class RootCmp extends React.Component {

    render() {
        return (
            <div className="main-wrapper">
                <AppHeaderHomePage />
                <main className="main-content">
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                        <Route path="user/:id" element={<UserDetails />} />
                    </Routes>
                </main>
                <div className="footer-container">
                    {/* <AppFooter /> */}
                </div>
            </div>
        )
    }
}


