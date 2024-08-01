import React, { useState, useEffect } from 'react'
import { fetchOrders } from './data'
import { Order } from './types'

const App = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        fetchOrders().then(orders => {
            orders && setOrders(orders)
            console.log(orders)
            setLoading(false)
        }).catch(e => {
            // handle error
            console.error(e)
            setLoading(false)
        })
    }, [])

    return (
        <h1>{loading ? "Loading..." : "Hello Smartendr!"}</h1>
    )
}

export default App