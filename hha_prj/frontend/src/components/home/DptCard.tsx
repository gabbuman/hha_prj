import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';


export interface dptData {
    name: string;
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
