import styled from 'styled-components'
import { Variables } from '../../style/styles'

export const StLinkToGithub = styled.section`
    justify-content: end;
    margin-top: ${Variables.padding.medium};

    a {
        color: ${Variables.colors.neutrals.white};
        font-size: ${Variables.sizes.icon};
        height: ${Variables.sizes.icon};
        opacity: 0.5;
        transition: opacity 0.3s;

        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }
`