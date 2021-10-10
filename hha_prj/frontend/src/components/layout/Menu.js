import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MenuLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content:space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 15px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }

`;

const MenuLabel = styled.span`
    margin-left: 5px;
`;

const Menu = ({item}) => {
    return (
        <>
            <MenuLink to = {item.path}>
                <div>
                    <MenuLabel>{item.title}</MenuLabel>
                    {item.icon}
                </div>
            </MenuLink>
        </>
    );
};

export default Menu;