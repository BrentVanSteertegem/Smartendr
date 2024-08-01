export type Order = {
    table_name: string,
    order_lines: OrderLine[],
}

export type OrderLine = {
    product_name: string,
    quantity: number,
    options?: string[],
    remark?: string
}