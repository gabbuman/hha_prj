import React, { Component } from 'react';
<<<<<<< HEAD
import styled from 'styled-components'

type DptCardProps = {
    mainColor: string;
    departmentName: string;
    image: string;
}

type ColorProps = {
    mainColor: string;
}

export const DptCardGroup = styled.div<ColorProps> `
    width: 350px;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 20px ${props => props.mainColor}77;
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 20px 40px ${props => props.mainColor}88;
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
    padding: 10px 15px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin: auto auto 15px 15px;

    &:hover {
        background: white;
        color: ${props => props.mainColor};
    }
`

const DptCard = (props: DptCardProps) => (
    <DptCardGroup mainColor={props.mainColor}>
        <CardBackground src={props.image} />
        <CardTitle>{props.departmentName}</CardTitle>
        <CardButton mainColor={props.mainColor}>Access</CardButton>
    </DptCardGroup>
)

export default DptCard
=======
import { Button, Card } from 'react-bootstrap';


export interface dptData {
    name: string;
    dpt_id: number;
    perc_of_data_entered: number;
    num_of_case_studies: number;
    bg_pic: string;
}

interface dptProps {
    dpt: dptData[]; 
}

export const DptOverview: React.FC<dptProps> = ({dpt}: dptProps) =>{
    return <div className="DpOverview">
        {dpt.map(item => {
            return <DptItem  name={item.name}
                             dpt_id={item.dpt_id}
                             perc_of_data_entered={item.perc_of_data_entered}
                             num_of_case_studies={item.num_of_case_studies}
                             bg_pic={item.bg_pic}></DptItem>
        })}
    </div>
}
export const DptItem: React.FC<dptData> = ({name, perc_of_data_entered, num_of_case_studies, bg_pic}: dptData) =>  {
  
		return (
            <div className="DptCard">
                <Card
              
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
               <Card.Img src={bg_pic}  />
                <Card.ImgOverlay>
                    <Card.Title> {name} Department</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Update now. % of data {perc_of_data_entered}, case studies {num_of_case_studies}
                    </Card.Text>
                    <Button variant="primary">Access</Button>
                </Card.ImgOverlay>
                </Card> 
              
            </div>
        )
        
}
>>>>>>> origin/14-department-cards
