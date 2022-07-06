import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { loadGigs } from '../store/actions/gig.actions.js'
import { userService } from '../services/user.service.js'
import { utilService } from '../services/util.service.js'
import { Loader } from '../cmps/loader.jsx'

export const SellerGig = () => {
    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    let { gigs } = useSelector((storeState) => storeState.gigModule)
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(loadGigs(loggedInUser, 'getSelles'))
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])

    return (
        <div className="seller-gig-container container">
            {loader && <Loader />}
          

            <table className='gig-table' cellPadding="0" cellSpacing="0" border="0">
                <thead className='gigs-table-header'>
                    <tr>
                        <th className='gig-th'>Gig Name</th>
                        <th className='gig-th'>Price</th>
                        <th className='gig-th'>Total Orders</th>                   
                    </tr>
                </thead>

                <tbody>
                    {gigs && gigs.map((gig, idx) => <tr key={idx}>
                   
                        <td>{gig.title}</td>
                        <td>{gig.price}</td>
                        <td>{gig.orderQty}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}