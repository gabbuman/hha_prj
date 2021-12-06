import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import CSPreview from '../home/CSPreview';
import Rank from '../home/Rank';
import DptCard from './DptCard';
import styled from 'styled-components'
import axios from 'axios';
import { useState, useEffect, ReactElement } from 'react'
import { endpoint } from '../Endpoint';
import { render } from 'react-dom';

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



//let dpt_Data: { name: string, created_at:string , color: string, image: string}[];
class HomePage extends Component<{}, { dpt_Data: { name: string, created_at:string , color: string, image: string}[] }>   {
    constructor(props: any) {
        super(props);
        this.state = { dpt_Data : []};
     }
    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;
        
        this.getDptData();
        
    }
    async getDptData(){
        console.log("here");
        axios.get(endpoint + 'api/department/')
          .then(res => {
            this.setState({dpt_Data:  this.state.dpt_Data.concat(res.data)}),
            console.log(this.state.dpt_Data)
          }
            ) 
        .catch((error) => {
            console.error(error)
            }
        )
    }
    render(){
        return (
            <div>
                <Header title={`Hope Health Action`} />
                <ContentGroup>
                    <TitledCardGroup>
                        <HeaderLabel>Departments</HeaderLabel>
                        <CardGroup>
                            {this.state.dpt_Data.map((item:any) => {
                                return <DptCard  
                                    name={item.name}
                                    bg_img={item.image}
                                    main_color={item.color}></DptCard>
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
    componentWillUnmount() {
        this._isMounted = false;
    }
    
}

export default HomePage
