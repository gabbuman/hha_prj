import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import CSPreview from '../home/CSPreview';
import Rank from '../home/Rank';
import {dpts_Data} from './DptData';
import DptCard, { DptOverview } from './DptCard';
import styled from 'styled-components'

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
    }
`

const TrailingGroup = styled.div `
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-gap: 40px;
`

const ContentGroup = styled.div `
    margin: 40px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 40px;
`

class HomePage extends Component  {
    render() {
        return (
            <div>
                <Header title={`Hope Health Action`} />
                <ContentGroup>
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
                    <TrailingGroup>
                        <Rank/>
                        <CSPreview/>
                    </TrailingGroup>
                </ContentGroup>
            </div>
        );
    }
}

export default HomePage
