import { ReactNode } from 'react'
import { StContainer } from './Container.styled'
import { LinkToGithub } from '../LinkToGithub'

type ContainerProps = {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <StContainer>
            {children}
            <LinkToGithub />
        </StContainer>
    )
}