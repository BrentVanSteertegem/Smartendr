import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { StLinkToGithub } from './LinkToGithub.styled'

export const LinkToGithub = () => {
    return (
        <StLinkToGithub>
            <a href="https://github.com/BrentVanSteertegem/Smartendr" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </StLinkToGithub>
    )
}