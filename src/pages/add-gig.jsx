import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveGig } from '../store/actions/gig.actions'
import { cloudinaryService } from '../services/cloudinary.service.js'
import { userService } from '../services/user.service.js'

class _AddGigDetails extends React.Component {
    state = {
        gigInfo: {
            imgUrl: [],
            gigDescription: '',
            origin: '',
            gigTitle: '',
            category: '',
            price: 0,
            whyUs: '',
            whatDoYouGet: '',
            daysToMake: 0,
            owner: this.props.loggedInUser
        },
        isImg: false
    }

    handleChange = (ev) => {
        const { target } = ev
        const field = target.name
        let value = (field === 'price' || field === 'dayToMake') ? +target.value : target.value
        if (field === 'imgUrl' && value) {
            this.uploadImg(ev)
            this.setState(prevState => ({ ...prevState, isImg: true }))
            return
        }
        this.setState(prevState => ({ gigInfo: { ...prevState.gigInfo, [field]: value } }))
    }

    handleSelectChange = (skills) => {
        this.setState((prevState) => ({ gigInfo: { ...prevState.gigInfo, skills } }))
    };

    uploadImg = (ev) => {
        const CLOUD_NAME = cloudinaryService.getCloudName()
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

        const formData = new FormData();
        formData.append('file', ev.target.files[0])
        formData.append('upload_preset', cloudinaryService.getPreset());

        return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(res => {

            this.setState(prevState => ({ gigInfo: { ...prevState.gigInfo, imgUrl: [res.url] } }))
        }).catch(err => console.error(err))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.saveGig(this.state.gigInfo)
        this.setState({
            gigInfo: {
                imgUrl: '',
                gigDescription: '',
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
        const userIsSeller = this.props.loggedInUser
        userIsSeller.isSeller = true
        userService.saveLocalUser(userIsSeller)
        this.props.navigation('/')
    }

    render() {
        const { gigInfo, isImg } = this.state
        return (
            <main className="header-container container">
                <div className="progress-bar-container container">
                    <div className="inner-progress-wrapper">
                        <nav>
                            <button className="personal_info active">
                                <span className="">1</span>Personal Info</button>
                            <button className="professional_info disabled">
                                <span className="">2</span>Professional Info</button>
                            <button className="Gig Details disabled">
                                <span className="">3</span>Gig Details</button>
                        </nav><div className="completion-score incomplete">
                            <div className="text">Completion Rate: 15%</div>
                            <div className="full-width-progressbar">
                                <div className="progress-bar-completion-indicator"><span className="" style={{ width: '15%' }}>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="add-gig-container">
                    <div className="gig-details">

                        <section className="add-gig">
                            <form className="gig-form" onSubmit={this.handleSubmit}>

                                <div className="gig-details-header"><h2>Gig Info</h2>
                                    <p>Tell us a bit about yourself. This information will appear on your public profile,<br></br>so that potential buyers can get to know you better.</p>
                                </div>

                                <div className="gig-image-upload">
                                    <aside className="">
                                        <h3>
                                            <span className="add-gig-titles">Picture (optional)</span>
                                            <div className="popup-text">Add pictures of your gig so customers will know exactly what they'll be getting.</div>
                                        </h3>
                                    </aside>

                                    <div className="img-content">
                                        <section className="gig-photos">
                                            <label className='file-img' />
                                            {!isImg ? <span className="missing-gig-image"></span> : <img src={`${gigInfo.imgUrl}`} alt="" />}

                                            <input className='file-input' accept="image/png,image/jpeg" type={'file'} name="imgUrl" value={''} onChange={this.handleChange} />
                                        </section>
                                    </div>
                                </div>

                                <div className="add-gig-titles">
                                    <p className="add-gig-labels">Gig Title</p>
                                    <label>
                                        <textarea maxLength="600" minLength="15" rows={5} cols={50} id='title' placeholder="I will..." value={gigInfo.gigTitle} onChange={this.handleChange} >
                                        </textarea></label>
                                </div>

                                <div id="description" className="onboarding-field is-required">
                                    <br></br>
                                    <div className="add-gig-titles">
                                        <p className="add-gig-labels">Description (min. 15 characters)</p>
                                        <label className="description">
                                            <textarea maxLength="600" minLength="15" rows={5} cols={50} placeholder="Share a bit about the gig, cool related, and your area of expertise.">
                                            </textarea></label>

                                    </div>
                                </div>
                                <br></br>
                                <div className='add-gig-titles'>
                                    <p className="add-gig-labels">Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
                                    <label className="description">
                                        <textarea maxLength="600" minLength="15" rows={5} cols={50} className='desc' required type={'txt'} name='gigDescription' value={gigInfo.gigDescription} onChange={this.handleChange}>
                                        </textarea></label>
                                </div>
                                <br></br>

                                <div className='add-gig-titles'>
                                    <p className='add-gig-labels'>Tell your potential buyers why they should choose you</p>
                                    <label className="description">
                                        <textarea name='whyUs' maxLength="600" minLength="15" rows={5} cols={50} value={gigInfo.whyUs} onChange={this.handleChange}></textarea>
                                    </label>
                                </div>

                                <br></br>
                                <div className='add-gig-titles'>
                                    <p className='add-gig-labels'>Tell your potential buyers what will they get</p>
                                    <label className="description">
                                        <textarea name='whatDoYouGet' maxLength="600" minLength="15" rows={5} cols={50} value={gigInfo.whatDoYouGet} onChange={this.handleChange}></textarea>
                                    </label>
                                </div>

                                <br></br>
                                <div className='add-gig-titles'>
                                    <label className='add-gig-labels'>Price</label>
                                    <input className='add-gig-input' type="number" id='price' name='price' required onChange={this.handleChange} />
                                </div>

                                <br></br>
                                <div className='add-gig-titles'>
                                    <label className='add-gig-labels'>Days delivery</label>
                                    <input className='add-gig-input' type="number" id="daysToMake" name="daysToMake" required onChange={this.handleChange} />
                                </div>

                                <br></br>
                                <div className='add-gig-titles'>
                                    <p className="add-gig-labels">Category</p>
                                    <select className='add-gig-input' value={gigInfo.category} name="category" onChange={this.handleChange}>
                                        <option value=""></option>
                                        <option value="Graphics & Design">Graphics &amp; Design</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Writing & Translation">Writing &amp; Translation</option>
                                        <option value="Video & Animation">Video &amp; Animation</option>
                                        <option value="Business">Business</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                    </select>
                                </div>

                                <br></br>
                                <div className='add-gig-titles'>
                                    <p className="add-gig-labels">Origin</p>
                                    <select className="add-gig-input" vlaue={gigInfo.origin} name="origin" onChange={this.handleChange}>
                                        <option value=""></option>
                                        <option value="israel">Israel</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="france">France</option>
                                        <option value="japan">Japan</option>
                                    </select>
                                </div>

                                <button className='add-gig-btn' type='submit'>Add Gig</button>
                            </form>
                        </section>
                    </div>
                </section>
            </main>
        )
    }
}

export const AddGigDetailsWrapper = (props) => {
    const navigation = useNavigate()
    return <AddGigDetails navigation={navigation} />
}

const MapStateToProps = (storeState) => {
    return {
        loggedInUser: storeState.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    saveGig,


}

export const AddGigDetails = connect(
    MapStateToProps,
    mapDispatchToProps
)(_AddGigDetails)