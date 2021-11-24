import { string } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// This could be extended if more components are added into the card
interface ActionCardData {
    backgroundImage: string;
    fromColor: string;
    toColor: string;
    title: string;
}

const ActionCardGroup = styled.div `
    width: 100%;
    max-width: 200px;
    height: 225px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 20px #0000000a;
    display: grid;
    grid-template-rows: 60% 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 20px 40px #00000005;
    }
`

const ActionCardIcon = styled.img `
    background-color: red;
    height: 100%;
    display: cover;
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
                <ActionCardIcon src={backgroundImage}/>
                <ActionCardLowerHalfGroup>
                    <ActionCardTitle>{title}</ActionCardTitle>
                </ActionCardLowerHalfGroup>
            </ActionCardGroup>
        </a>
    )
}

export default ActionCard