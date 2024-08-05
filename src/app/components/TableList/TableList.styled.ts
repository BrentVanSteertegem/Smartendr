import styled from 'styled-components'
import { Variables } from '../../style/styles'

export const StTableList = styled.section`
    gap: ${Variables.padding.medium};
    justify-content: center;
    min-height: calc(calc(100vh - 3 * ${Variables.padding.medium}) - ${Variables.sizes.icon});

    & > section {
        flex-direction: column;
        gap: ${Variables.padding.small};
    }
`