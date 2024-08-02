import styled from 'styled-components'
import { Variables } from '../../style/styles'

export const StLoading = styled.div`
    position: absolute;
    width: calc(100vw - 2 * ${Variables.padding.medium});
    height: calc(100vh - 2 * ${Variables.padding.medium});
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StLoadingIcon = styled.span`
    color: #fefefe;
    opacity: 0.9;
    font-size: 5rem;

    svg {
        animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`