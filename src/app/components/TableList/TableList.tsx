import React, { useEffect, useState } from 'react'
import { Order, OrderLine } from '../../types'

type TablesProps = {
    orders: Order[]
}

export const TableList = ({ orders }: TablesProps) => {
    const [tables, setTables] = useState<Order[]>([])

    useEffect(() => {
        // Get unique table names
        const tableNames: string[] = orders.map(order => order.table_name);
        const uniqueTableNames: string[] = [...new Set(tableNames)]

        // Get order lines per table
        const tableLines: Order[] = orders && orders.map(order => {
            return {
                table_name: order.table_name,
                order_lines: order.order_lines
            }
        })
        
        const completeTables: Order[] = []
        uniqueTableNames.forEach(name => {
            // Group lines by table
            const orderLines: OrderLine[] = tableLines.filter(table => table.table_name === name).map(table => table.order_lines).flat()

            // Summarize order lines with same product name, options and remark
            const summarizedOrderLines: OrderLine[] = []
            orderLines.forEach(orderLine => {
                let found = false
                summarizedOrderLines.forEach(summarizedOrderLine => {
                    if (orderLine.product_name === summarizedOrderLine.product_name && 
                        orderLine.remark === summarizedOrderLine.remark &&
                        ((!orderLine.options && !summarizedOrderLine.options) || 
                        (orderLine.options && summarizedOrderLine.options && orderLine.options.sort().toString() === summarizedOrderLine.options.sort().toString()))
                    ) {
                        // Update quantity if product name, options and remark are the same
                        summarizedOrderLine.quantity += orderLine.quantity
                        found = true
                    }
                })

                // Add new order line if product name, options or remark are different
                !found && summarizedOrderLines.push(orderLine)
            })

            // Add summarized order lines to table
            completeTables.push({ table_name: name, order_lines: summarizedOrderLines.sort((a, b) => {
                if (a.product_name < b.product_name) {
                    return -1;
                  }
                  if (a.product_name > b.product_name) {
                    return 1;
                  }
                  return 0;
            }) })
        })
        
        setTables(completeTables.sort((a, b) => {
            if (a.table_name < b.table_name) {
                return -1;
              }
              if (a.table_name > b.table_name) {
                return 1;
              }
              return 0;
        }))
    }, [orders])

    return (
        <div>
            <h1>Tables</h1>
            {tables.map((table, index) => (
                <div key={index}>
                    <h2>{table.table_name}</h2>
                    <ul>
                        {table.order_lines.map((orderLine, index) => (
                            <li key={index}>
                                {orderLine.quantity} - {orderLine.product_name}
                                {orderLine.options && <ul>
                                    {orderLine.options.map((option, index) => (
                                        <li key={index}>{option}</li>
                                    ))}
                                </ul>}
                                {orderLine.remark && <p>{orderLine.remark}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}