import { useEffect, useState } from 'react'
import { Order, OrderLine } from '../../types'
import { Table } from '../Table/Table'
import { StTableList } from './TableList.styled'
import { Variables } from '../../style/styles'

type TablesProps = {
    orders: Order[]
}

type Column = {
    tables: Order[],
    height: number
}

export const TableList = ({ orders }: TablesProps) => {
    const [columns, setColumns] = useState<Column[]>()

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
        
        const tables: Order[] = []
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
            tables.push({ table_name: name, order_lines: summarizedOrderLines.sort((a, b) => {
                if (a.product_name < b.product_name) {
                    return -1;
                  }
                  if (a.product_name > b.product_name) {
                    return 1;
                  }
                  return 0;
            }) })
        })

        tables.sort((a, b) => {
            if (a.table_name < b.table_name) {
                return -1;
              }
              if (a.table_name > b.table_name) {
                return 1;
              }
              return 0;
        })

        //  Since we the height of the Table components is dependant on their content, we can't limit their height
        // Therefore we can't use css grid to predefine the areas of the tables
        // We can however count the amount of lines to determine the height of each table and create a grid by combining flexboxes

        // Determine the screen width, in rem
        const screenWidth: number = window.innerWidth / 16
        // Determine the amount of columns that can be displayed
        let columnsAmount: number = Math.floor((screenWidth - Variables.numericPadding.medium) / (Variables.numericSizes.tableItem +  Variables.numericPadding.medium))
        // Make sure there's at least 1 column
        if (columnsAmount < 1) columnsAmount = 1
        const tempColumns: Column[] = []
        
        tables.forEach(table => {
            // Determine height of table
            // Height of the header
            let height = Variables.numericLineHeights.medium + 2 * Variables.numericPadding.small
            // Padding around the order lines
            height += 2 * Variables.numericPadding.medium
            // Height of the order lines
            table.order_lines.forEach(orderLine => {
                height += Variables.numericLineHeights.large
                if (orderLine.options) {
                    height += orderLine.options.length * Variables.numericLineHeights.large + Variables.numericPadding.small
                }
                if (orderLine.remark) {
                    height += Variables.numericLineHeights.large + Variables.numericPadding.small
                }
            })
            // Height of the time indicator
            height += Variables.numericLineHeights.large + 2 * Variables.numericPadding.small

            // Check if there is room for a new column
            if (tempColumns.length < columnsAmount) {
                tempColumns.push({ tables: [table], height: height })
            } else {
                // Check to see which column is the shortest
                let shortestColumnIndex = 0
                for (let i = 1; i < columnsAmount; i++) {
                    if (tempColumns[i].height < tempColumns[shortestColumnIndex].height) {
                        shortestColumnIndex = i
                    }
                }
                tempColumns[shortestColumnIndex].tables.push(table)
                tempColumns[shortestColumnIndex].height += height + Variables.numericPadding.medium
            }    
        })

        setColumns(tempColumns)
    }, [orders])

    return (
        <StTableList>
            {columns && columns.map((column, index) => (
                <section key={index}>
                    {column.tables.map((table, index) => (
                        <Table key={index} table={table} />
                    ))}
                </section>
            ))}
        </StTableList>
    )
}