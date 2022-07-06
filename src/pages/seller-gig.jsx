import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { loadGigs } from '../store/actions/gig.actions.js'
import { userService } from '../services/user.service.js'
import { utilService } from '../services/util.service.js'
import { Loader } from '../cmps/loader.jsx'
import { PlusCircle, Edit, Delete } from '../services/svg.service.js'

export const SellerGig = () => {
    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    let { gigs } = useSelector((storeState) => storeState.gigModule)
    let { orders } = useSelector((storeState) => storeState.orderModule)
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadGigs(loggedInUser, 'getSelles'))
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])

    const onAddGig = (ev) => {
        ev.stopPropagation()
        navigate(`/seller/add-gig`)
    }

    const onUpdateGig = (ev) => {
        console.log('updategig')
    }

    const onRemoveGig = (ev) => {
        console.log('removed gig')

    }
    return (
        <div className="seller-gig-container container">
            {loader && <Loader />}
            <div className="seller-total-gigs flex">
                <div className="total-gigs flex flex-column">{gigs ? <p>You've created<br></br><h3>{gigs.length}<br></br></h3>wonderful gigs!</p> : <p>Create your 1st gig today!</p>}</div>
                <div className="add-new-gig-container flex flex-column" onClick={(ev) => onAddGig(ev)}>
                    <p className="add-new-gig">Add New Gig</p>
                    <div className="plus-circle-add-gig"><PlusCircle /></div>
                </div>
                <div className="orders-total flex flex-column">{gigs ? <p>Total Orders<h3>{orders.length}</h3></p> : <span></span>}</div>
            </div>
            <table className='gig-table' cellPadding="0" cellSpacing="0" border="0">
                <thead className='gigs-table-header'>
                    <tr>
                        <th className='gig-th'>Title</th>
                        <th className='gig-th'>Price</th>
                        <th className='gig-th'>Total Orders</th>
                        <th className='gig-th'>Gig Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {gigs && gigs.map((gig, idx) => <tr key={idx}>
                        <td>{gig.title}</td>
                        <td>${gig.price}</td>
                        <td>{gig.orderQty}</td>
                        <td className="gig-actions">
                            <button onClick={(ev) => onUpdateGig(ev)}><Edit /></button>
                            <button onClick={() => onRemoveGig()}><Delete /></button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}