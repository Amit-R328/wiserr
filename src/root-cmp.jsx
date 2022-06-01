import React from 'react'
// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'
import routes from './routes'
import { UserDetails } from './pages/user-details'
import { AppFooter } from './cmps/app-footer.jsx'
import { AppHeaderHomePage } from './cmps/headers/app-header-homepage.jsx'
import { AppHeader } from './cmps/headers/app-header.jsx'

export class RootCmp extends React.Component {

    render() {
        return (
            <section className="app-container">
                <AppHeader/>
                <main className="routes-container">

                    <Routes>
                        {routes.map(route =>
                            <Route key={route.path}
                                exact={true}
                                element={route.component}
                                path={route.path} />)}
                        <Route path="user/:id" element={<UserDetails />} />
                        {/* <Route path="/" element={<AppHeader />} /> */}
                        {/* <Route path exact="/" element={<AppHeaderHomePage />} /> */}
                    </Routes>
                    <div className="footer-container">
                        <AppFooter />
                    </div>
                </main>


            </section>
        )
    }
}


