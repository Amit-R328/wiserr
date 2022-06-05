
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders, onUpdateOrder } from '../../store/actions/order.actions';
import { userService } from '../../services/user.service.js';
import { getLoggedinUser } from '../../store/actions/user.actions.js';
import { utilService } from '../../services/util.service.js';
import { socketService } from '../../services/socket.service.js';
import ReactLoading from "react-loading";

export const SellerDashboard = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const [totalOrderAmount, setTotalOrderAmount] = useState(0)
    const [qtyTotalOrders, setQtyTotalOrders] = useState(0)
    const [totalMonthlyOrdersAmount, setTotalMonthlyOrdersAmount] = useState(0)
    const [qtyMonthlyOrders, setQtyMonthlyOrders] = useState(0)
    const [totalYearOrdersAmount, setTotalYearOrdersAmount] = useState(0)
    const [qtyYearOrders, setQtyYearOrders] = useState(0)
     

    let { orders } = useSelector((storeState) => storeState.orderModule)
    const dispatch = useDispatch()
    const [order, setOrder] = useState('pending')
    

    let intervalId
    useEffect(() => {
        console.log('intervalId',intervalId )
        intervalId = setInterval(() => {
            console.log('Loading')
        },8000)
        
            console.log('intervalId',intervalId )
            clearInterval(intervalId);
            intervalId = null
            console.log('intervalId',intervalId )
          
        
        


        dispatch(getLoggedinUser())
        let user = {type: 'seller', fullName: loggedInUser.userName}
        dispatch(loadOrders(loggedInUser))
    }, [])
    
    // setSocket()
    const onAddOrder = (order) => {
        order.createdAt = Date.now()
        orders = ({...orders, order})
    }
    
    const setSocket = () => {
        socketService.on('added order', this.onAddOrder)
    }

    const handleChange = (ev,order) => {        
        const value = ev.target.value
        order.status = value        
        setOrder(order)        
        dispatch(onUpdateOrder(order))
    }  

    useEffect(() => {
        // console.log('orders',orders )
        let totalOrders = orders.reduce((acc, order) => acc + order.gig.price,0)
        
        setTotalOrderAmount(totalOrders.toFixed(2))        
        setQtyTotalOrders(orders.length)

        getMonthOrders()
        getYearOrders()
               
    })

    const getMonthOrders = () => {
            
        const thisMonth = (new Date()).getMonth()        
        const monthlyOrders = orders.filter(order => {
            return thisMonth+1 === utilService.getMonthNumber(order.createdAt)            
        })        
        
        setQtyMonthlyOrders(monthlyOrders.length)
        
        if(monthlyOrders.length){
            const totalMonthlyOrders = monthlyOrders.reduce((acc, order) => acc + order.gig.price,0)        
            setTotalMonthlyOrdersAmount(totalMonthlyOrders.toFixed(2))
        }
    }

    const getYearOrders = () => {
    
        const thisYear = (new Date()).getFullYear()        
        const yearOrders = orders.filter(order => {
            return thisYear === utilService.getYearNumber(order.createdAt)            
        })        
        if(yearOrders.length){
            
            setQtyYearOrders(yearOrders.length)
            const totalYearOrders = yearOrders.reduce((acc, order) => acc + order.gig.price,0)
            setTotalYearOrdersAmount(totalYearOrders.toFixed(2))
        }
    }

    
    return (
        <div className="seller-dashboard-container container">
        {intervalId && <ReactLoading type={"spinningBubbles"} color="#1DBF73" height={'20%'} width={'20%'}/>}
        <div className='seller-totalim'>
            <div className='seller-Total-order'>
                <p className='seller-total-amount'>Total orders<hr className='gentel-line'></hr>Amount: ${totalOrderAmount}<br></br>Quantity: {qtyTotalOrders}</p>
            </div>
            {/* <div className='seller-Total-order'>
                <p className='seller-total-qty'>Total orders quantity<br></br> {qtyTotalOrders}</p>
            </div>             */}
              <div className='seller-Total-order'>
                <p className='seller-orders-thisyear'>This year orders<hr className='gentel-line'></hr>Amount: ${totalYearOrdersAmount}<br></br>Quantity: {qtyYearOrders}</p>
            </div>
            <div className='seller-Total-order'>
                <p className='seller-orders-amount'>This month orders<hr className='gentel-line'></hr>Amount: ${totalMonthlyOrdersAmount}<br></br>Quantity: {qtyMonthlyOrders}</p>
            </div>
            {/* <div className='seller-Total-order'>
                <p className='seller-orders-qty'>This month orders qty:<br></br> {qtyMonthlyOrders}</p>
            </div> */}
            
        </div>

            <table onLoad={setSocket} className='orders-table' cellPadding="0" cellSpacing="0" border="0">
                <thead className='orders-table-header'>
                    <th className='orders-th'>Date</th>
                    <th className='orders-th'>Buyer</th>
                    <th className='orders-th'>Gig</th>
                    <th className='orders-th'>Delivery Date</th>
                    <th className='orders-th'>Amount</th>
                    <th className='orders-th'>Status</th>
                </thead>
                <tbody>
                    {orders.map((order,idx) => <tr key={idx}>                        
                            <td>{utilService.setDateTime(order.createdAt)}</td>
                            <td>{order.buyer.fullName}</td>
                            <td>{order.gig.description}</td>
                            <td>{(order.status === 'approved') && utilService.setDateTime(order.deliveryDate)}</td>
                            {/* <td>{order.gig.price}</td> */}
                            <td>{order.gig.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</td>
                            {/* <td>{order.status}</td> */}
                            {/* <td> <select  value={order.status}> */}
                            <td> <select className='order-status-selector' value={order.status} onChange={(ev) => handleChange(ev,order)}>
                                    <option value="approved">approved</option>
                                    <option value="pending">pending</option>
                                    <option value="rejected">rejected</option>
                                </select></td>
                            </tr>)}
                            <thead className='orders-table-header'>
                   
                </thead>
                </tbody>
            </table>
        </div>
    )
}
