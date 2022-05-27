import { Outlet } from "react-router-dom";

export const PageLayoutTemplate = () => {
    return (
        <div>
            <AppHeader />
            <Main />
            <Footer />
        </div>
    )
}