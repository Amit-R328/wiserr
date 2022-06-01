import React from "react";
import { connect } from "react-redux";
import { setFilter, loadGigs } from "../store/actions/gig.actions.js";

class _DeliveryDateFilter extends React.Component{
    state = {
        deliveryDays: 0,
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
        
        this.props.setFilter({ ...filterBy, deliveryDate: this.state.deliveryDays})
        this.props.loadGigs()
    }

    onClearDeliveryDate = () => {
        this.setState((prevState) => ({...prevState, deliveryDate: 0}))
    }

    render(){
        return(
            <section className="deliveryTime-filter flex">
                <div className="input-wrapper flex">
                    <label htmlFor="deliveryDays">Deliverd by:</label>
                    <input type="number" name="deliveryDays" onChange={this.handleChange} value={this.state.deliveryDays}/>
                </div>
                <button className="close-btn" onClick={this.onClearDeliveryDate}>clear</button>
                <button className="apply-filters-btn" onClick={this.onApplyDeliveyFilter}>Apply</button>
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