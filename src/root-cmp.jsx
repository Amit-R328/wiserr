import React from 'react'
// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'
import routes from './routes'
import { UserDetails } from './pages/user-details'
import { AppFooter } from './cmps/app-footer.jsx'

export class RootCmp extends React.Component {

    render() {
        return (
            <section className="gigs-app-container">

                <main className="routes-container">
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                        <Route path="user/:id" element={<UserDetails />} />
                    </Routes>
                </main>

                <div className="footer-container">
                    <AppFooter />
                </div>

            </section>
        )
    }
}


