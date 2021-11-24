import React from 'react'
import styled from 'styled-components'

// This could be extended if more components are added into the card
interface ActionCardData {
    backgroundImage: string;
    fromColor: string;
    toColor: string;
    title: string;
}

interface GradientColors {
    fromColor: string;
    toColor: string;
}

const ActionCardGroup = styled.div `
    width: 100%;
    height: 225px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 10px #0000000a;
    display: grid;
    grid-template-rows: 60% 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 15px 20px #0000000f;
    }
`

const ActionCardIconContainer = styled.div<GradientColors> `
    background-image: linear-gradient(${props => props.fromColor}, ${props => props.toColor});
`

const ActionCardIcon = styled.img `
    height: 100%;
    padding: 30px 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

const ActionCardLowerHalfGroup = styled.div `
    display: grid;
    padding: 8px;
    grid-template-rows: 1fr 1fr;
`

const ActionCardTitle = styled.h3 `
    color: black;
    font-size: 18px;
    font-weight: 600;
`

const ActionCard: React.FC<ActionCardData> = ({backgroundImage, 
                                               fromColor, 
                                               toColor, 
                                               title}: ActionCardData) => {
    return (
        <a href="/" style={{ textDecoration: 'none' }}>
            <ActionCardGroup>
                <ActionCardIconContainer fromColor={fromColor} toColor={toColor}>
                    <ActionCardIcon src={backgroundImage}/>
                </ActionCardIconContainer>
                <ActionCardLowerHalfGroup>
                    <ActionCardTitle>{title}</ActionCardTitle>
                </ActionCardLowerHalfGroup>
            </ActionCardGroup>
        </a>
    )
}

export default ActionCard