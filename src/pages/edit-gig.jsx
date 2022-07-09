
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateGig } from '../store/actions/gig.actions.js'
import { gigService } from '../services/gig.service'

export const EditGig = (props) => {
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const [currGig, setCurrGig] = useState(gig)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        const fetchGig = async () => {
            let gig = await gigService.getById(params.gigId)
            setCurrGig(gig)
            console.log('gig', gig)

        }
        if (params.gigId) {
            fetchGig()
        }
        window.scrollTo(0, 0)
    }, [params])



    const handleChange = (ev) => {
        let value = ev.target.value
        const name = ev.target.name
        if (name === 'aboutThisGig' || name === 'whyUs' || name === 'whatDoYouGet') {
            setCurrGig({ ...currGig, description: { ...currGig.description, [name]: value } })
        } else {
            setCurrGig({ ...currGig, [name]: value })
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('currGig', currGig)
        dispatch(updateGig(currGig))
        navigate(-1)
    }

    if (!currGig) return <h1>Loading</h1>
    let whatYouGet
    if (currGig.description && currGig.description.whatDoYouGet) {
        whatYouGet = currGig.description.whatDoYouGet.split('\n')
    }

    return (
        <section className="edit-gig-details-container container">
            <form className="form-group" onSubmit={handleSubmit}>

                <div className="edit-gig-header">
                    <h2>Edit Gig</h2>
                </div>
                <div className="edit-gig-input-container">
                    <label className="edit-gig-label">Title</label>
                    <input className="edit-gig-input" name="title" type="search" value={currGig.title} onChange={handleChange} />
                </div>

                <div className="edit-gig-img-container">
                    <label className="edit-gig-label">Gig Image</label>
                    <img className="edit-gig-img" src={currGig.imgUrl[0]} alt="Gig img"></img>
                </div>
                {/* <EditGigInput inputRef="aboutThisGig" label="About This Gig" name="aboutThisGig" description={currGig.description.aboutThisGig} handleChange={handleChange} />
                <EditGigInput inputRef="whyUs" label="Why Us" name="whyUs" description={currGig.description.whyUs} handleChange={handleChange} />
                <EditGigInput inputRef="whatYouGet" label="What Do You Get" name="whatYouGet" description={whatYouGet} handleChange={handleChange} />  */}
                <div className="edit-gig-input-container">
                    <label className="edit-gig-label">About This Gig</label>
                    <input className="edit-gig-input" name="aboutThisGig" type="search" value={currGig.description.aboutThisGig} onChange={handleChange} />
                </div> 
                <div className="edit-gig-input-container">
                    <label className="edit-gig-label">Why Us</label>
                    <input className="edit-gig-input" name="whyUs" type="search" value={currGig.description.whyUs} onChange={handleChange} />
                </div>

                <div className="edit-gig-input-container">
                    <label className="edit-gig-label">What Do You Get</label>
                    <input className="edit-gig-input" name="whatDoYouGet" type="search" value={whatYouGet} onChange={handleChange} />
                </div>

                {/* {/* {currGig.description.littleDetails && <div className="edit-gig-littleDetails">
                        <label className="edit-gig-label">Little Details</label>  
                        <textarea className="edit-gig-textarea" rows={5} value={currGig.description.littleDetails.map((detail) => detail)}>
                            {<dl className="edit-gig-littleDetails"> {gig.description.littleDetails.map((detail, idx) => <dd className='littleDetails' key={idx}>{detail}</dd>)}</dl>}
                        </textarea>
                    </div>} */}
                <button className="edit-gig-btn">Edit</button>
            </form>
        </section >
    )
}

