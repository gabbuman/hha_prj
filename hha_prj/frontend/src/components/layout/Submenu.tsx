import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #000000;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 15px;

    &:hover {
        background: #ADC0EB;
        font-weight: bold;
        cursor: pointer;
    }

`;


const SidebarLabel = styled.span`
    margin-left: 16px;


`;
const Submenu = ({item}:any) => {
    return (
        <>
            <SidebarLink to = {item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    );
};



export default Submenu;