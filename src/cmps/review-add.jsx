import React from "react";

export class ReviewAdd extends React.Component {
    state = {
        txt: ""
    }

    handleChange = ({ target }) => {
        this.setState(prevState => ({ ...prevState, txt: target.value }))
    }

    submit = async (ev) => {
        ev.preventDefault()

    }

    render() {
        return (<section className="review-add">
            <div className="review-add-header">
                <form className="comment-form" onSubmit={this.submit}>
                    <h2 className="title">Share with the community your experience when working with this seller.</h2>
                    <textarea name="txt" value={this.state.txt} onChange={this.handleChange}></textarea>
                    <button type="submit" className="comment-post-btn">Add</button>
                </form>
            </div>
        </section>)
    }
}