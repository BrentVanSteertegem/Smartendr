import styled from 'styled-components'
import { Variables } from '../../style/styles'

export const StTableList = styled.section`
    gap: ${Variables.padding.medium};
    justify-content: center;

    & > section {
        flex-direction: column;
        gap: ${Variables.padding.medium};
    }
`