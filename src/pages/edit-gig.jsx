
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateGig } from '../store/actions/gig.actions.js'
import { gigService } from '../services/gig.service'
import { cloudinaryService } from '../services/cloudinary.service.js'

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
    
    const imageUpload = (ev) => {
        
        const file = ev.target.files[0]
        uploadImg(ev)     
        
    }
    
    const uploadImg = (ev) => {
        const file = ev.target.files[0]
        const CLOUD_NAME = cloudinaryService.getCloudName()
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData()
        formData.append('file', ev.target.files[0])
        formData.append('upload_preset', cloudinaryService.getPreset())
        
        return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(res => {
            console.log('res.url', res.url)
            console.log('before',currGig.imgUrl[0] )
            const currImgUrl = currGig.imgUrl
            currImgUrl[0] = res.url          
            setCurrGig({ ...currGig, imgUrl: currImgUrl })           
        }).catch(err => console.error(err))
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

               
                <label htmlFor="imageFile" className="label-for-img tooltip" >
                    <span className="tooltiptext">Load image</span>
                    <img className="edit-gig-img" src={currGig.imgUrl[0]} name="imageFile" alt=""></img>
                    <input className="img-input" hidden={true} type="file" accept="image/*" id="imageFile" name="imageFile"  onChange={imageUpload} />
                </label>
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

