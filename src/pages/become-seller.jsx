import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveGig } from '../store/actions/gigs.actions'
import {AppHeader} from '../cmps/headers/app-header.jsx'
import {CategoriesNavHeader} from '../cmps/headers/categories-nav-header.jsx'

class _BecomeSeller extends React.Component {
    state = {
        sellerInfo: {
            imgUrl: '',
            sellerDescription: '',
            origin: '',
            gigTitle: '',
            category: '',
            price: 0,
            whyUs: '',
            whatDoYouGet: '',
            daysToMake: 0,
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
        this.setState({
            sellerInfo: {
                imgUrl: '',
                sellerDescription: '',
                origin: '',
                gigTitle: '',
                category: '',
                price: 0,
                daysToMake: 0,
                whyUs: '',
                whatDoYouGet: '',
                owner: this.props.loggedInUser
            }
        })
        this.props.navigation('/')
    }



    render() {

        const { sellerInfo } = this.state
        return (
            <React.Fragment>

                <AppHeader />
                <CategoriesNavHeader />
                <section className="become-seller">
                    <form className="seller-form" onSubmit={this.handleSubmit}>
                        <h2>Personal Info</h2>
                        <label htmlFor='title'>Title of your Gig</label>
                        <input type="text" id='title' required name="gigTitle" placeholder='I will...' value={sellerInfo.gigTitle} onChange={this.handleChange} />
                        <p className="title">Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
                        <label className="description">
                            <textarea className='desc' required type={'txt'} name='sellerDescription' value={sellerInfo.sellerDescription} onChange={this.handleChange}></textarea>
                        </label>
                        <p className='why-you'>tell your potential buyers why they should choose you</p>
                        <textarea name='whyUs' value={sellerInfo.whyUs} onChange={this.handleChange}></textarea>
                        <p className='what-do-you-get'>tell your potential buyers what will they get</p>
                        <textarea name='whatDoYouGet' value={sellerInfo.whatDoYouGet} onChange={this.handleChange}></textarea>
                        <label htmlFor='price'>Price</label>
                        <input type="number" id='price' name='price' required onChange={this.handleChange} />
                        <label htmlFor='daysToMake'>Delivery Date</label>
                        <input type="number" id="daysToMake" name="daysToMake" required onChange={this.handleChange} />
                        <p>Category</p>
                        <select className='select-field' value={sellerInfo.category} name="category" onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="Graphics & Design">Graphics &amp; Design</option>
                            <option value="Digital & Marketing">Digital Marketing</option>
                            <option value="Writing & Translation">Writing &amp; Translation</option>
                            <option value="Video & Animation">Video &amp; Animation</option>
                            <option value="Music & Audio">Music &amp; Audio</option>
                            <option value="Programming & Tech">Programming &amp; Tech</option>
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
            </React.Fragment>
        )
    }
}

export const BecomeSellerWrapper = (props) => {
    const navigation = useNavigate()
    return <BecomeSeller navigation={navigation} />
}

const MapStateToProps = (storeState) => {
    return {
        loggedInUser: storeState.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    saveGig
}

export const BecomeSeller = connect(
    MapStateToProps,
    mapDispatchToProps
)(_BecomeSeller)