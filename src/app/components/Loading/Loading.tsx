import { faRotateRight } from '@fortawesome/free-solid-svg-icons' 
import { StLoading, StLoadingIcon } from './Loading.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Loading = () => {
    return (
        <StLoading>
            <StLoadingIcon>
                <FontAwesomeIcon icon={faRotateRight}/>
            </StLoadingIcon>
        </StLoading>
    )
}