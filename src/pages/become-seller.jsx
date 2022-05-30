import React from 'react'
import { connect } from 'react-redux'
import { saveGig } from '../store/actions/gigs.actions'

class _BecomeSeller extends React.Component {
    state = {
        sellerInfo: {
            imgUrl: '',
            sellerDescription: '',
            origin: '',
            gigTitle: '',
            category:'',
            price: 0,
            whyUs: '',
            whatDoYouGet:'',
            daysToMake:0,
            owner: this.props.loggedInUser
        }
    }

    handleChange = (ev) => {
        const { target } = ev
        const field = target.name
        const value = target.value
        // if (field === 'imgUrl' && value) {
        //     this.uploadImg(ev)
        //     this.setState(prevState => ({ ...prevState, isImgInside: true }))
        //     return
        // }
        this.setState(prevState => ({ sellerInfo: { ...prevState.sellerInfo, [field]: value } }))
    }

    handleSelectChange = (skills) => {
        this.setState((prevState) => ({ sellerInfo: { ...prevState.sellerInfo, skills } }))
    };

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.saveGig(this.state.sellerInfo)
        this.setState({sellerInfo: {
        imgUrl: '',
        sellerDescription: '',
        origin: '',
        gigTitle: '',
        category:'',
        price: 0,
        daysToMake:0,
        whyUs: '',
        whatDoYouGet:'',
        owner: this.props.loggedInUser}})
        this.props.history.push('/')
    }



    render() {
        const { sellerInfo } = this.state
        return (
            <section className="become-seller">
                <form className="seller-form" onSubmit={this.handleSubmit}>
                    <h2>Personal Info</h2>
                    <label htmlFor='title'>Title of your Gig</label>
                    <input type="text" id='title' required name='title' placeholder='I will...'/> 
                    <p className="title">Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
                    <label className="description">
                        <textarea className='desc' required type={'txt'} name='sellerDescription' value={sellerInfo.sellerDescription} onChange={this.handleChange}></textarea>
                    </label>
                    <p className='why-you'>tell your potential buyers why they should choose you</p>
                    <textarea name='whyUs' value={sellerInfo.whyUs} onChange={this.handleChange}></textarea>
                    <p className='what-do-you-get'>tell your potential buyers what will they get</p>
                    <textarea name='whatDoYouGet' value={sellerInfo.whatDoYouGet} onChange={this.handleChange}></textarea>
                    <label htmlFor='price'>Price</label>
                    <input type="number" id='price' name='price' required/>
                    <label htmlFor='daysToMake'>Delivery Date</label>
                    <input type="number" id="daysToMake" name="daysToMake" required/>
                    <p>Category</p>
                    <select className='select-field' value={sellerInfo.category} name="category" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="graphicsDesign">Graphics &amp; Design</option>
                        <option value="digitalMarketing">Digital Marketing</option>
                        <option value="writingTranslation">Writing &amp; Translation</option>
                        <option value="videoAnimation">Video &amp; Animation</option>
                        <option value="musicAudio">Music &amp; Audio</option>
                        <option value="programmingTech">Programming &amp; Tech</option>
                    </select>
                    <p>Origin</p>
                    <select className="select-field" vlaue={sellerInfo.origin} name="origin" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="israel">Israel</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="france">France</option>
                        <option value="japan">Japan</option>
                    </select>
                    <button className='btn' type='submit'>Add Gig</button>
                </form>
            </section>
        )
    }
}

const MapStateToProps = (storeState) => {
    return {
        loggedInUser: storeState.loggedInUser
    }
}

const mapDispatchToProps = {
    saveGig
}

export const BecomeSeller = connect(
    MapStateToProps,
    mapDispatchToProps
)(_BecomeSeller)