import React, { useState, useEffect } from 'react'

const App = () => {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=43399')
        return await data.json()
        }

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