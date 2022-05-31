import React from "react";
import { connect } from "react-redux";
import { setFilter, loadGigs } from "../store/actions/gigs.actions.js";

class _BudgetFilter extends React.Component{
    state = {
        min: "",
        max: ""
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filterBy !== this.props.filterBy) {
            
        }
    }

    handleChange = (ev) => {
        const {filterBy} = this.props
        const field = ev.target.name
        const value = +ev.target.value
        this.setState(({[field]: value}), () => this.props.setFilter({ ...filterBy, priceMin: this.state.min, priceMax: this.state.max}))
    }

    onClearBudget = () => {
        this.setState((prevState) => ({...prevState, min: "", max: ""}))
    }

    render(){
        return(
            <section className="budget-filter flex">
                <div className="input-wrapper flex">
                    <label htmlFor="min">Min:</label>
                    <input type="text" name="min" onChange={this.handleChange} placeholder="Any" value={this.state.min}/>
                </div>
                <div className="input-wrapper flex">
                    <label htmlFor="max">Max:</label>
                    <input type="text" name="max" onChange={this.handleChange} placeholder="Any" value={this.state.max}/>
                </div>
                <button className="close-btn" onClick={this.onClearBudget}>clear</button>
            </section>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        filterBy: storeState.gigModule.filterBy
    }
}

const mapDispatchToProps = {
    setFilter,
    loadGigs
}

export const BudgetFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(_BudgetFilter)