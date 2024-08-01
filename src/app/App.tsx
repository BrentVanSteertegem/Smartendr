import React, { useState, useEffect } from 'react'
import { fetchData } from './data'

const App = () => {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchData().then(data => {
            data.orders && setOrders(data.orders)
            console.log(data.orders)
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