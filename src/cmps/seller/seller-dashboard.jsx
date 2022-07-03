import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Loader } from '../loader.jsx'
import { loadOrders, onUpdateOrder, addOrder } from '../../store/actions/order.actions'
import { userService } from '../../services/user.service.js'
import { getLoggedinUser } from '../../store/actions/user.actions.js'
import { utilService } from '../../services/util.service.js'
import { socketService } from '../../services/socket.service.js'

export const SellerDashboard = () => {
    const dispatch = useDispatch()
    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const [loader, setLoader] = useState(true)

    const [totalOrderAmount, setTotalOrderAmount] = useState(0)
    const [qtyTotalOrders, setQtyTotalOrders] = useState(0)
    const [order, setOrder] = useState('pending')
    let orders = useSelector((storeState) => storeState.orderModule.orders)

    const [totalMonthlyOrdersAmount, setTotalMonthlyOrdersAmount] = useState(0)
    const [qtyMonthlyOrders, setQtyMonthlyOrders] = useState(0)
    const [totalYearOrdersAmount, setTotalYearOrdersAmount] = useState(0)
    const [qtyYearOrders, setQtyYearOrders] = useState(0)
    const [year] = useState(new Date().getFullYear())

    const RED = '#F74040'
    const GRAY = '#62646A'
    const GREEN = '#1DBF73'
    const BLACK = '#404145'

    useEffect(() => {
        orders = []
        dispatch(getLoggedinUser())
        getOrders()
        setTimeout(() => {
            setLoader(false)
        }, 3000)
        // let user = { type: 'seller', fullName: loggedInUser.userName }
        setSocket()
    }, [])

    const getOrders = async () => {
        orders = await dispatch(loadOrders(loggedInUser, 'getSells'))
    }

    // setSocket()
    const onAddOrder = async (order) => {
        order.createdAt = Date.now()
        setOrder('')
        let seller = await userService.getById(order.buyer._id)
        dispatch(addOrder(order, seller))
    }

    const setSocket = () => {
        socketService.on('added order', onAddOrder)
        socketService.emit('order added to seller dashboard', loggedInUser._id)
    }

    const handleChange = (ev, order) => {
        const value = ev.target.value
        order.status = value
        setOrder(order)
        dispatch(onUpdateOrder(order))
    }

    const getYearOrders = () => {
        const thisYear = (new Date()).getFullYear()
        const yearOrders = orders.filter(order => {
            return thisYear === utilService.getYearNumber(order.createdAt)
        })
        if (yearOrders.length) {
            setQtyYearOrders(yearOrders.length)
            const totalYearOrders = yearOrders.reduce((acc, order) => acc + order.gig.price, 0)
            setTotalYearOrdersAmount(totalYearOrders.toFixed(2))
        }
    }

    const getMonthOrders = () => {
        const thisMonth = (new Date()).getMonth()
        const monthlyOrders = orders.filter(order => {
            return thisMonth + 1 === utilService.getMonthNumber(order.createdAt)
        })

        setQtyMonthlyOrders(monthlyOrders.length)
        if (monthlyOrders.length) {
            const totalMonthlyOrders = monthlyOrders.reduce((acc, order) => acc + order.gig.price, 0)
            setTotalMonthlyOrdersAmount(totalMonthlyOrders.toFixed(2))
        }
    }

    const calcTotals = () => {
        let totalOrders = orders.reduce((acc, order) => acc + order.gig.price, 0)
        if (totalOrders) {
            setTotalOrderAmount(totalOrders.toFixed(2),)
            setQtyTotalOrders(orders.length)
            getMonthOrders()
            getYearOrders()
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000)
        console.log('orderssssss', orders)
        calcTotals()
    return (
        <div className="seller-dashboard-container container">
            {loader && <Loader />}
            <div className="seller-totalim">
                <div className="seller-Total-order">
                    <p className="seller-total-amount">Total orders
                        <hr className="gentle-line"></hr><p className="amount-total-order">Revenues: <span className="amount-total-order-green">${totalOrderAmount}</span></p><p className="qty-total-order">Quantity: {qtyTotalOrders}</p></p>
                </div>

                <div className="seller-Total-order">
                    <p className="seller-total-amount"><span>{year}</span> orders<hr className="gentle-line"></hr><p className="amount-total-order">Revenues: <span className='amount-total-order-green'>${totalYearOrdersAmount}</span></p><p className="qty-total-order">Quantity: {qtyYearOrders}</p></p>
                </div>

                <div className="seller-Total-order">
                    <p className="seller-total-amount">This month's orders<hr className="gentle-line"></hr><p className='amount-total-order'>Revenues: <span className="amount-total-order-green">${totalMonthlyOrdersAmount}</span></p><p className="qty-total-order">Quantity: {qtyMonthlyOrders}</p></p>
                </div>
            </div>

            <table className="orders-table" cellPadding="0" cellSpacing="0" border="0">
                <thead className="orders-table-header">
                    <th className="orders-th">Date</th>
                    <th className="orders-th">Buyer</th>
                    <th className="orders-th">Gig</th>
                    <th className="orders-th">Completed Date</th>
                    <th className="orders-th">Price</th>
                    <th className="orders-th">Status</th>
                </thead>

                <tbody>
                    {orders.map((order, idx) => <tr key={idx}>
                        <td>{utilService.setDateTime(order.createdAt)}</td>
                        <td>{order.buyer.fullName}</td>
                        <td>{order.gig.description}</td>
                        <td>{(order.status === 'completed') && utilService.setDateTime(order.deliveryDate)}</td>
                        <td>{order.gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        <td> <select className="order-status-selector" style={{ color: `${order.status === 'rejected' ? RED : order.status === 'completed' ? GREEN : order.status === 'approved' ? BLACK : GRAY}` }} value={order.status} onChange={(ev) => handleChange(ev, order)}>
                            <option value="approved">approved</option>
                            <option value="pending">pending</option>
                            <option value="rejected">rejected</option>
                            <option value="completed">completed</option>
                        </select></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
