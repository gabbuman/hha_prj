import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MenuLink = styled(Link)`
    display: flex;
    color: #000000;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 15px;
    border-top: 2px solid #D7D8DC;

    &:hover {
        background: #ADC0EB;
        font-weight: bold;
        cursor: pointer;
    }

`;

const ArrowIconWrap = styled.svg`
    width: 45px;
    height: 13px; 
`
const MenuLabel = styled.span`
    margin-left: 5px;
`;

const Menu = ({item}:any) => {
    return (
        <>
            <MenuLink to = {item.path}>
                <div>
                    <MenuLabel>{item.title}</MenuLabel>  <ArrowIconWrap> {item.icon}</ArrowIconWrap>
                </div>
            </MenuLink>
        </>
    );
};

export default Menu;