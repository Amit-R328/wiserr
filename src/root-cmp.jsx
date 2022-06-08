import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import { AppFooter } from './cmps/app-footer.jsx'
import { AppHeader } from './cmps/headers/app-header.jsx'


export class RootCmp extends React.Component {

    render() {
        return (
            <section className="app-container">
                <div className="app-header-container">
                <AppHeader />
                </div>
                <main className="routes-container">
                    <Routes>
                        {routes.map(route =>
                            <Route key={route.path}
                                exact={true}
                                element={route.component}
                                path={route.path} />)}                       
                    </Routes>
                    <div className="footer-container container">
                        <AppFooter />
                    </div>
                </main>              
            </section>
        )
    }
}


