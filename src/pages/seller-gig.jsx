import React, { useState, useEffect } from 'react'
import { loadGigs, setFilter } from '../store/actions/gig.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Loader } from '../cmps/loader.jsx'
import { PlusCircle, Edit, Delete, ShowDetails } from '../services/svg.service.js'
import { removeGig } from '../store/actions/gig.actions.js'
import Swal from 'sweetalert2'

export const SellerGig = () => {
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    let { gigs } = useSelector((storeState) => storeState.gigModule)
    const { gig } = useSelector((storeState) => storeState.gigModule)
    let { orders } = useSelector((storeState) => storeState.orderModule)
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setFilter({txt: '',
        priceMin: 0,
        priceMax: Infinity,
        deliveryDate: 0,
        category: '',
        sortBy: 'title'}))
        dispatch(loadGigs(loggedInUser, 'getSelles'))
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])

    const onAddGig = (ev) => {
        ev.stopPropagation()
        navigate(`/seller/add-gig`)
    }

    const onGoToDetails = (gig) => {
        navigate(`/categories/${gig._id}`)
    }

    const onEditGig = (gig) => {
        console.log('edit')
        navigate(`/seller/edit-gig/${gig._id}`)
    }

    const onRemoveGig = (gigId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1e1692',
            cancelButtonColor: '#F74040',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        dispatch(removeGig(gigId))
        dispatch(loadGigs(loggedInUser, 'getSelles'))
        console.log('removed gig')
    }

    return (
        <div className="seller-gig-container container">
            {loader && <Loader />}
            <div className="seller-total-gigs flex">
                <div className="total-gigs flex flex-column">{gigs ? <p>You've created<br></br><span>{gigs.length}<br></br></span>wonderful gigs!</p> : <p>Create your 1st gig today!</p>}</div>
                <div className="add-new-gig-container flex flex-column" onClick={(ev) => onAddGig(ev)}>
                    <p className="add-new-gig">Add New Gig</p>
                    <div className="plus-circle-add-gig"><PlusCircle /></div>
                </div>
                <div className="orders-total flex flex-column">{gigs ? <p>Total Orders<br></br><span>{orders.length}<br></br></span></p> : <span></span>}</div>
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
                            <button onClick={() => onGoToDetails(gig)}><ShowDetails /></button>
                            <button onClick={() => onEditGig(gig)}><Edit /></button>
                            <button onClick={() => onRemoveGig(gig._id)}><Delete /></button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}