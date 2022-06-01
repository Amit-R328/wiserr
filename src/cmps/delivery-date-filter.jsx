import React from "react";
import { connect } from "react-redux";
import { setFilter, loadGigs } from "../store/actions/gig.actions.js";

class _DeliveryDateFilter extends React.Component{
    state = {
        deliveryDays: 100,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filterBy !== this.props.filterBy) {
            
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = +ev.target.value
        this.setState({[field]: value})
    }
    
    onApplyDeliveyFilter = () => {
        const {filterBy} = this.props
        let {deliveryDays} = this.state
        this.props.setFilter({ ...filterBy, priceMin: min, priceMax: max})
        console.log('ON APPLY BUDGET', this.props.filterBy)
        this.props.loadGigs()
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
                <button className="apply-filters-btn" onClick={this.onApplyBudget}>Apply</button>
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

export const DeliveryDateFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(_DeliveryDateFilter)