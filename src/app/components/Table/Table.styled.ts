import styled from 'styled-components'
import { Variables } from '../../style/styles'
import { StTableProps } from './Table'

export const StStable = styled.div<StTableProps>`
    background-color: ${Variables.colors.tableItem.background};
    width: 100%;
    max-width: ${Variables.sizes.tableItem};
    position: relative;
    padding-bottom: calc(1.1 * ${Variables.fontSizes.large});

    ${({ mockTable }) => mockTable && `visibility: hidden;`}
`

export const StTableHeader = styled.section`
    background-color: ${Variables.colors.tableItem.name};
    font-weight: bold;
    padding: ${Variables.padding.small} ${Variables.padding.medium};
    gap: ${Variables.padding.medium};
    align-items: center;

    section {
        display: flex;
        gap: ${Variables.padding.small};
    }

    & > p {
        display: flex;
        justify-content: center;
        width: calc(calc(100% - 2 * ${Variables.padding.medium}) - 4rem);
    }
`

export const StTableItems = styled.ul`
    padding: ${Variables.padding.medium};
    display: flex;
    flex-direction: column;
    gap: ${Variables.padding.small};

    ul {
        padding-top: ${Variables.padding.small};
        display: flex;
        flex-direction: column;
        gap: ${Variables.padding.small};
    }
`

export const StTableItem = styled.li`
    list-style-type: none;
    font-size: ${Variables.fontSizes.large};
    
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
    min-width: 2rem;
    font-weight: bold;
`

export const StTimeIndicator = styled.p`
    font-size: ${Variables.fontSizes.large};
    background-color: ${Variables.colors.tableItem.timer};
    width: calc(100% - 2 * ${Variables.padding.medium});
    height: calc(1.1 * ${Variables.fontSizes.large});
    padding: ${Variables.padding.small} ${Variables.padding.medium};
    text-align: end;
    position: absolute;
    bottom: 0;
`