import { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react'
import { fetchOrders } from './data'
import { Order } from './types'
import { Container, Loading, TableList } from './components'

export const LoadingContext = createContext<{loading: boolean, setLoading: Dispatch<SetStateAction<boolean>>}>({loading: true, setLoading: (loading: boolean) => {}})

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
        <LoadingContext.Provider value={{ loading, setLoading }}>
                <Container>
                    {loading ? 
                        (<Loading />)
                    :
                        <TableList orders={orders} />
                    }
                </Container>
        </LoadingContext.Provider>
    )
}

export default App