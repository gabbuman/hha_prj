import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SecondSideBarData, SidebarData } from './SidebarData'
import Submenu from './Submenu'
import Menu from './Menu'
const Bruh = styled.div`
    background #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
const Icons = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: flex;
    justify-content: flex-start;
    align-items: center; 
`;

const SideBarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 10; 
    border-right: 1px solid #D7D8DC;

`;

const SideBarWrap = styled.nav`
    background: #FAF8F8;
    width: 250px;

`;
const Sidebar = () => {
    
    return (
        <>
          <SideBarNav>
              <SideBarWrap>
                <Icons to = "#">
                </Icons>
                {SidebarData.map((item, index) => {
                    return <Submenu item={item} key={index} />;
                })}

                {SecondSideBarData.map((item, index) =>{
                    return <Menu item={item} key={index} />;
                })}
              </SideBarWrap>
          </SideBarNav>  
        </>
    )
}

export default Sidebar
