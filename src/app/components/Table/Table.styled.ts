import styled from 'styled-components'
import { Variables } from '../../style/styles'
import { StTableProps } from './Table'

export const StStable = styled.div<StTableProps>`
    background-color: ${Variables.colors.tableItem.background};
    width: 100%;
    max-width: ${Variables.sizes.tableItem};

    ${({ mockTable }) => mockTable && `visibility: hidden;`}
`

export const StTableName = styled.p`
    background-color: ${Variables.colors.tableItem.name};

`

export const StTableItems = styled.ul`
    padding: ${Variables.padding.medium};
`

export const StTableItem = styled.li`
    list-style-type: none;
    font-size: 1.2rem;
    
    section {
        gap: ${Variables.padding.medium};
        align-items: center;
    }

    li {
        list-style-type: none;
        display: flex;
        gap: ${Variables.padding.medium};
    }
`

export const StTableItemQuantity = styled.p`
    width: 2rem;
    font-weight: bold;
`