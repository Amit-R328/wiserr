import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { HomePage } from './pages/homepage.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { UserDetails } from './pages/user-details'

export class RootCmp extends React.Component {

    render() {
        return (
                <main className="main-content">
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                        <Route path="user/:id" element={<UserDetails />} />
                    </Routes>
                </main>
        )
    }
}


