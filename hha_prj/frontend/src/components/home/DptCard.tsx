import { number } from 'prop-types';
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import styled from 'styled-components'
const CARD_WIDTH: number = 50;
export interface dptData {
    name: string;
    dpt_id: number;
    perc_of_data_entered: number;
    num_of_case_studies: number;
    bg_img: string;
    main_color: string;
}

type DptCardProps = {
    
    departmentData: dptData[];
}

type ColorProps = {
    main_color: string;
}

type txtColorProp = {
    txt_color:string;
}
type BarProps = {
    percentage: number;
}
export const DptCardGroup = styled.div<ColorProps> `
    width: 350px;
    height: 225px;
    padding: 15px 15px 15px 15px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 20px ${props => props.main_color}77;
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 20px 40px ${props => props.main_color}88;
    }
    &:hover img {
        transform: translateY(-10px);
    }
`

const CardBackground = styled.img `
    position: absolute;
    top: 0; /* What does this one do? */
    height: 105%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const CardTitle = styled.h3 `
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin: 15px 0 0 15px;
    width: 250px;
`

const CardButton = styled.button<ColorProps> `
    font-size: 12px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    background: none;
    padding: 5px 15px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin: 10px auto 15px 15px;

    &:hover {
        background: white;
        color: ${props => props.main_color};
    }
`
const BarContainer = styled.div`
    height: 0.1em;
    width: 200px;
    border-radius: 50px;
    padding: 0px 0px 8px 0px;
    border: 1px solid #333;
    positon: relative;
    
`
const CardBody = styled.div<txtColorProp>`
    font-size: 8px;
    font-weight: 700;
    color: ${txtColorProp => txtColorProp.txt_color};
    text-transform: Capitalize;
    padding: auto auto;
    margin: 15px auto 20px 15px;
`

export const DptOverview: React.FC<DptCardProps> = ({departmentData}: DptCardProps) =>{
    return <div className="DpOverview">
        {departmentData.map(item => {
            return <DptCard  name={item.name}
                             dpt_id={item.dpt_id}
                             perc_of_data_entered={item.perc_of_data_entered}
                             num_of_case_studies={item.num_of_case_studies}
                             bg_img={item.bg_img}
                             main_color={item.main_color}></DptCard>
        })}
    </div>
}

const DptCard: React.FC<dptData> = ({name, perc_of_data_entered, num_of_case_studies, bg_img, main_color}: dptData) =>  {
  
    return (
        <div className="DptCard">
            <DptCardGroup main_color={main_color}>
                <CardBackground src={bg_img} />
                <CardTitle>{name}</CardTitle>
                <BarContainer>
                <ProgressBar variant="success" now={perc_of_data_entered} max= {100} />
                </BarContainer>
                <CardBody txt_color="green">Data Entered: {perc_of_data_entered}%</CardBody>
                <BarContainer>
                <ProgressBar variant="info" now={num_of_case_studies} />
                </BarContainer>
                <CardBody txt_color="purple">Case Study: {num_of_case_studies}</CardBody>
                <CardButton main_color={main_color}>Access</CardButton>
            </DptCardGroup> 
          
        </div>
    )
    
}

export default DptCard
