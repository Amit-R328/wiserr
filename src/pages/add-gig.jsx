import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveGig } from '../store/actions/gig.actions'
import { cloudinaryService } from '../services/cloudinary.service.js'
import { userService } from '../services/user.service.js'
import { Step1 } from '../cmps/add-gig/add-gig-step1.jsx'
import { Step2 } from '../cmps/add-gig/add-gig-step2.jsx'
import { Step3 } from '../cmps/add-gig/add-gig-step3.jsx'

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
        isImg: false,
        currentStep: 1
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
    }

    uploadImg = (ev) => {
        const CLOUD_NAME = cloudinaryService.getCloudName()
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData()
        formData.append('file', ev.target.files[0])
        formData.append('upload_preset', cloudinaryService.getPreset())

        return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(res => {

            this.setState(prevState => ({ gigInfo: { ...prevState.gigInfo, imgUrl: [res.url] } }))
        }).catch(err => console.error(err))
    }

    onSaveGig = async () => {
        const gig = await this.props.saveGig(this.state.gigInfo)
        return gig
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        const gig = await this.onSaveGig()
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
        this.props.navigation(`/categories/${gig._id}`)
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null
    }

    nextButton() {
        let currentStep = this.state.currentStep
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null
    }

    render() {
        const { gigInfo, isImg, imgUrl, currentStep } = this.state
        return (
            <main className="header-container container">
                <section className="add-gig-container">
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
                    <div className="gig-details">
                        <section className="add-gig">
                            <form className="gig-form" onSubmit={this.handleSubmit}>
                                <Step1
                                    imgUrl={imgUrl}
                                    isImg={isImg}
                                    gigInfo={gigInfo}
                                    currentStep={currentStep}
                                    handleChange={this.handleChange}
                                />
                                <Step2
                                    gigInfo={gigInfo}
                                    currentStep={currentStep}
                                    handleChange={this.handleChange}
                                />
                                <Step3
                                    gigInfo={gigInfo}
                                    currentStep={currentStep}
                                    handleChange={this.handleChange}
                                />
                                <div className="buttons-container">
                                    <button className="add-gig-btn">{this.previousButton()}</button>
                                    <button className="add-gig-btn">{this.nextButton()}</button>
                                </div>
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