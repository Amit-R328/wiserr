import React from "react"
import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { LogoFull, LogoFull2, Copyright, HamburgerMenu, Language, RightArrowShowMore } from '../services/svg.service.js'


class _HomePage extends React.Component {

    // To change react-icon style
    /* <IconContext.Provider value={{color: blue, className: Icon-copyright}}  */

    render() {
        return (
            <section>                 
            </section >
        )
    }
}


const mapStateToProps = (storeState) => {
    return {
        count: storeState.count
    }
}
export const HomePage = connect(
    mapStateToProps,
)(_HomePage)
