
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getById, updateGig } from '../store/actions/gig.actions.js'
import { gigService} from '../services/gig.service'




 const EditGig = (props) => {
    // const { gig } = useSelector((storeState) => storeState.gigModule)
    // const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    // const { orders } = useSelector((storeState) => storeState.orderModule)
    // const [user, setUser] = useState({})
    const description = {aboutThisGig: '',whyUs: '',whatDoYouGet:''}
    const initialGig = {
        title: '', imgUrl: '', description : description
    }
    const [currGig, setCurrGig] = useState(initialGig)
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
        // const gig = getById(params.gigId)
        window.scrollTo(0, 0)
    }, [params])


    
    const handleChange = (event) => {
        let value = event.target.value
        const name = event.target.name
        console.log('value', value)
        console.log('name', name)
        if(name === 'aboutThisGig' || name === 'whyUs' || name === 'whatDoYouGet') {
            console.log('in if' )
            setCurrGig({...currGig, description: {...description, [name]: value}})
        } else {
            setCurrGig({ ...currGig, [name]: value })
        }
        console.log('currGig',currGig )
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        // const data = new FormData(event.currentTarget)
      
        // const description = { 
        //     aboutThisGig: data.get('aboutThisGig'),
        //     whyUs: data.get('whyUs'),
        //     whatDoYouGet: data.get('whatDoYouGet')
        // }
        // const currGig = {
        //     _id: currGig._id,
        //     title: data.get('title'),
        //     imgUrl: data.get('imgUrl'),
        //     description: description
        // }
      
        console.log('currGig', currGig)
        dispatch(updateGig(currGig))        
        navigate(-1)
    }

    if (!currGig) return <h1>Loading</h1>
    let whatYouGet
    if (currGig.description && currGig.description.whatDoYouGet) {
        whatYouGet = currGig.description.whatDoYouGet.split('\n')
    }
// console.log('currGig.description.aboutThisGig', currGig.description.aboutThisGig)
    
    return (
            <section className="edit-gig-details-container container">                
                <form className="form-group" onSubmit={handleSubmit}>

                    <div className="edit-gig-header">
                        <h2>Edit Gig</h2>
                    </div>
                    <div className="edit-gig-input-container">  
                        <label className="edit-gig-label">Title</label>                       
                        <input className="edit-gig-input"  name="title" type="search" value={currGig.title}  onChange={handleChange}/>
                    </div>

                    <div className="edit-gig-img-container">
                        <label className="edit-gig-label">Gig Image</label>                       
                        <img className="edit-gig-img" src={currGig.imgUrl[0]}  alt="Gig img"></img>
                    </div>

                    <div className="edit-gig-input-container">                        
                        <label className="edit-gig-label">About This Gig</label>
                        <input className="edit-gig-input"  name="aboutThisGig" type="search" value={currGig.description.aboutThisGig}  onChange={handleChange}/>
                    </div>

                    <div className="edit-gig-input-container">                        
                        <label className="edit-gig-label">Why Us</label>
                        <input className="edit-gig-input"  name="whyUs" type="search" value={currGig.description.whyUs}  onChange={handleChange}/>
                    </div>

                    <div className="edit-gig-input-container">                        
                        <label className="edit-gig-label">What Do You Get</label>                        
                        <input className="edit-gig-input"  name="whatDoYouGet" type="search" value={whatYouGet}  onChange={handleChange}/>
                    </div>

                    {/* {currGig.description.littleDetails && <div className="edit-gig-littleDetails">
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


export default EditGig;