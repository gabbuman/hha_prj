import React, { Component, useState, useEffect } from 'react';
import BSCard from './BioformCard';
import styled from 'styled-components';
import { endpoint } from '../Endpoint'
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import BioformData from '../../types/Biomechanicalsupt';
import BioformServices from '../../services/BioformServices';

const HeaderLabel = styled.h3 `
    font-weight: 800;
    font-size: 30px;
    width: 350px;
`

const CardGroup = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    justify-items: center;
    margin: 0 0 auto 0;

    @media (max-width: 1520px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1220px) {
        grid-template-columns: repeat(1, 1fr);
        justify-items: start;
    }
`

const TitledCardGroup = styled.div `
    display: grid;
    grid-template-rows: 60px auto;
    grid-gap: 0px;
`

const ContentGroup = styled.div `
    margin: 40px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 40px;

    @media(max-width: 750px) {
        grid-template-columns: repeat(1, auto);
    }
`

interface bsprops{
    dptName: string;
}

const ViewBioform: React.FC<bsprops> = ({dptName}: bsprops) =>{  
    const[Bioforms, setBioform] = useState<Array<BioformData>>([]);

    useEffect( ()=> {
        retrieveBioform();
    }, []);

    const retrieveBioform = () => {
        BioformServices.getAll(dptName)
            .then((response: any) => {
            setBioform(response.data);
            console.log(response.data);
            console.log(dptName);
        })
            .catch((e: Error) => {
            console.log(dptName);
            console.log(e);
        });
    };

    return(
        <div>
            <ContentGroup>
                <TitledCardGroup>
                    <CardGroup>
                        {Bioforms && Bioforms.map(item => {
                            return (
                                <BSCard
                                stateChanger={retrieveBioform}
                                id={item.id}
                                image={item.image}  
                                name={item.name}
                                issue={item.issue}></BSCard>
                            )
                        })}
                    </CardGroup>
                </TitledCardGroup>
            </ContentGroup>
        </div>
    );
}

export default ViewBioform;