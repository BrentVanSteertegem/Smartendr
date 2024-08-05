import styled from 'styled-components'
import { Variables } from '../../style/styles'

export const StStable = styled.div`
    background-color: ${Variables.colors.tableItem.background};
    width: 100%;
    height: fit-content;
    font-size: ${Variables.fontSizes.medium};
    line-height: ${Variables.lineHeights.medium};
    border-radius: ${Variables.rounding.xsmall};
    overflow: hidden;
    
    @media (min-width: calc(${Variables.sizes.tableItem} + 2 * ${Variables.padding.medium})) {
        width: ${Variables.sizes.tableItem};
    }
`

export const StTableHeader = styled.section`
    background-color: ${Variables.colors.tableItem.name};
    font-weight: bold;
    padding: ${Variables.padding.xsmall} ${Variables.padding.medium};
    gap: ${Variables.padding.medium};
    align-items: center;

    section {
        display: flex;
        gap: ${Variables.padding.xsmall};
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
    gap: ${Variables.padding.xsmall};

    ul {
        padding-top: ${Variables.padding.xsmall};
        display: flex;
        flex-direction: column;
        gap: ${Variables.padding.xsmall};
    }
`

export const StTableItem = styled.li`
    list-style-type: none;
    font-size: ${Variables.fontSizes.large};
    line-height: ${Variables.lineHeights.large};
    
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
    line-height: ${Variables.lineHeights.large};
    background-color: ${Variables.colors.tableItem.timer};
    width: calc(100% - 2 * ${Variables.padding.medium});
    height: calc(1.1 * ${Variables.fontSizes.large});
    padding: ${Variables.padding.xsmall} ${Variables.padding.medium};
    text-align: end;
`