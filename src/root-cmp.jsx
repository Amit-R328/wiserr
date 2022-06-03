import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
// import { UserDetails } from './pages/user-details'
import { AppFooter } from './cmps/app-footer.jsx'
import { AppHeader } from './cmps/headers/app-header.jsx'
import { UserMsg}  from './cmps/user-msg'

export class RootCmp extends React.Component {

    render() {
        return (
            <section className="app-container">
                <AppHeader />
                <main className="routes-container">
                    <Routes>
                        {routes.map(route =>
                            <Route key={route.path}
                                exact={true}
                                element={route.component}
                                path={route.path} />)}
                        {/* <Route path="user/:id" element={<UserDetails />} /> */}
                    </Routes>
                    <div className="footer-container container ">
                        <AppFooter />
                    </div>
                </main>

              {/* <UserMsg/>   */}
            </section>
        )
    }
}


