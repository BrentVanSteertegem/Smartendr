import { Order, OrderLine } from '../types'

export const fetchOrders = async (): Promise<Order[]> => {
    try {
        const res = await fetch('https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=43399')
        const data = await res.json()
        const orders: Order[] = data && data.orders && filterOrders(data.orders)
        return orders
    }
    catch (e) {
        throw new Error(e)
    }
}

const filterOrders = (data: any): Order[] => {
    const validOrders: Order[] = []

    data.forEach((order: any) => {
        if (order.table_name && order.products && order.products.length > 0) {
            const products: OrderLine[] = []
            order.products.forEach((product: any) => {
                if (product.name && product.quantity) {
                    products.push({
                        product_name: product.name,
                        quantity: product.quantity
                    })
                }
            })
            products.length > 0 && validOrders.push({
                table_name: order.table_name,
                order_lines: products
            })
        }
    })

    return validOrders
}