import { Order } from '../../types'
import { StStable, StTableItem, StTableItemQuantity, StTableItems, StTableName } from './Table.styled'

type TableProps = {
    table: Order,
    mockTable?: boolean
}

export type StTableProps = {
    mockTable: boolean
}

export const Table = ({ table, mockTable }: TableProps) => {
    return (
        <StStable mockTable={mockTable || false}>
            <StTableName>{table.table_name}</StTableName>
            <StTableItems>
                {table.order_lines.map((orderLine, index) => (
                    <StTableItem key={index}>
                        <section>
                            <StTableItemQuantity>{orderLine.quantity}</StTableItemQuantity>
                            <p>{orderLine.product_name}</p>
                        </section>
                        {(orderLine.options || orderLine.remark) && 
                            <ul>
                                {orderLine.options && orderLine.options.map((option, index) => (
                                    <li key={index}>
                                        <StTableItemQuantity>{orderLine.quantity}</StTableItemQuantity>
                                        <p>&#x21AA; {option}</p>
                                    </li>
                                ))}
                                {orderLine.remark && 
                                    <li key={orderLine.remark}>
                                        <StTableItemQuantity>{orderLine.quantity}</StTableItemQuantity>
                                        <p>&#x21AA; {orderLine.remark}</p>
                                    </li>
                                }
                            </ul>
                        }
                    </StTableItem>
                ))}
            </StTableItems>
        </StStable>
    )
}