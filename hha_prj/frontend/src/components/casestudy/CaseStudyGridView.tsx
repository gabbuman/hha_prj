import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import CSPreview from '../home/CSPreview';
import Rank from '../home/Rank';
import {case_data} from './CSData';
import CSCard from './CaseStudyCard';
import styled from 'styled-components';
import AddCard from './CaseStudyAddCard';

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


class CaseStudyGridView extends Component {
    render(){
        return(
            <div>
                <ContentGroup>
                    <TitledCardGroup>
                        <CardGroup>
                            {case_data.map(item => {
                                return <CSCard  
                                    title={item.title}
                                    type={item.type}
                                    content={item.content}></CSCard>
                            })}
                            <AddCard/>
                        </CardGroup>
                    </TitledCardGroup>
                </ContentGroup>
            </div>
        );
    }
}


export default CaseStudyGridView