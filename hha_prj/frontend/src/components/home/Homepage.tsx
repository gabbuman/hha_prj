import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import CSPreview from '../home/CSPreview';
import Rank from '../home/Rank';
import {dpts_Data} from './DptData';
import DptCard, { DptOverview } from './Department Card/DptCard';
import styled from 'styled-components'

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

const TrailingGroup = styled.div `
    display: grid;
    grid-template-rows: 30px auto 30px auto;
    grid-gap: 20px;
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

class HomePage extends Component  {
    render() {
        return (
            <div>
                <Header title={`Hope Health Action`} />
                <ContentGroup>
                    <TitledCardGroup>
                        <HeaderLabel>Departments</HeaderLabel>
                        <CardGroup>
                            {dpts_Data.map(item => {
                                return <DptCard  
                                    name={item.name}
                                    dpt_id={item.dpt_id}
                                    perc_of_data_entered={item.perc_of_data_entered}
                                    num_of_case_studies={item.num_of_case_studies}
                                    bg_img={item.bg_img}
                                    main_color={item.main_color}></DptCard>
                            })}
                        </CardGroup>
                    </TitledCardGroup>
                    <TrailingGroup>
                        <HeaderLabel>Ranking</HeaderLabel>
                        <Rank/>
                        <HeaderLabel>Case Studies</HeaderLabel>
                        <CSPreview/>
                    </TrailingGroup>
                </ContentGroup>
            </div>
        );
    }
}

export default HomePage
