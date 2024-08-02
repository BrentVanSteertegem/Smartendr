import { useState, useEffect } from 'react'
import { fetchOrders } from './data'
import { Order } from './types'
import { Container, TableList } from './components'

const App = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        fetchOrders().then(orders => {
            orders && setOrders(orders)
            setLoading(false)
        }).catch(e => {
            // handle error
            console.error(e)
            setLoading(false)
        })
    }, [])

    return (
        <Container>
            {loading ? 
                (<h1>Loading...</h1>)
            :
                <TableList orders={orders} />
            }
        </Container>
    )
}

export default App