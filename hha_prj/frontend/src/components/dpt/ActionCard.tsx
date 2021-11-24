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

// Change background to white when done testing
const ActionCardLowerHalfGroup = styled.div `
    background-color: red;
    display: grid;
    padding: 14px;
    grid-template-rows: 1fr 1fr;
`

const ActionCardTitle = styled.h3 `
    color: black;
    font-size: 18px;
    font-weight: 400;
`

const ActionCard: React.FC<ActionCardData> = ({backgroundImage, 
                                               fromColor, 
                                               toColor, 
                                               title}: ActionCardData) => {
    return (
        <a href="/" style={{ textDecoration: 'none' }}>
            <ActionCardGroup>
                <img src={backgroundImage}/>
                <ActionCardTitle>{title}</ActionCardTitle>
            </ActionCardGroup>
        </a>
    )
}

export default ActionCard