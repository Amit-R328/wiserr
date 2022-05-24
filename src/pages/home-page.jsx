
import React from 'react'
import { connect } from 'react-redux'

import logo from '../assets/img/logo.png'

class _HomePage extends React.Component {
    state = {}

    changeCount = (diff) => {
        console.log('Changing count by:', diff);
        const action = { type: 'CHANGE_COUNT', diff }
        this.props.dispatch(action)
    }

    render() {
        const { count } = this.props
        return (
            <main-header/>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.userModule.count
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)