import React from "react";
import { connect } from "react-redux";
import { setFilter, loadGigs } from "../store/actions/gig.actions.js";

class _BudgetFilter extends React.Component {
    state = {
        min: 0,
        max: Infinity
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filterBy !== this.props.filterBy) {

        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = +ev.target.value
        this.setState({ [field]: value })
    }

    onApplyBudget = () => {
        const { filterBy } = this.props
        let { min, max } = this.state
        if (!min) min = 0
        if (!max) max = 1000000
        this.props.setFilter({ ...filterBy, priceMin: min, priceMax: max })
        console.log('ON APPLY BUDGET', this.props.filterBy)
        this.props.loadGigs()
    }

    onClearBudget = () => {
        this.setState((prevState) => ({ ...prevState, min: 0, max: Infinity }))
    }

    render() {
        return (
            <section className="budget-filter">
                <div className="input-wrappers flex">
                    <div className="input-wrapper">
                        <label htmlFor="min">Min:</label>
                        <input type="number" name="min" onChange={this.handleChange} placeholder="Any" value={this.state.min} />
                    </div>
                    <div className="input-wrapper flex">
                        <label htmlFor="max">Max:</label>
                        <input type="number" name="max" onChange={this.handleChange} placeholder="Any" value={this.state.max} />
                    </div>
                </div>
                <div className="btns-wrappers">
                    <button className="close-btn" onClick={this.onClearBudget}>clear</button>
                    <button className="apply-filters-btn" onClick={this.onApplyBudget}>Apply</button>
                </div>
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