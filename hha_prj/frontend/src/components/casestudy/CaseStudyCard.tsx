import { grid } from '@mui/system';
import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { StringLiteralLike } from 'typescript';
import { Box, TextField, Typography, Stack, IconButton, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import CaseStudySubmissionForm from './CaseStudyInputForm';
import CaseStudyDataFields from '../../types/CaseStudy';
import CaseStudyServices from '../../services/CaseStudyServices';
import axios from 'axios';
import { endpoint } from '../Endpoint';


export interface CSData {
    stateChanger: () => void;
    id: any;
    title: string;
    type: string;
    content: string;
}

const main_color = "#b7b5b6"

const Icon = styled.img `
    border-radius: 50%;
    height: 50px;
    width: 50px;
`

export const CSCardGroup = styled.div `
    width: 350px;
    height: 225px;
    padding: 15px 15px 15px 15px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 20px ${main_color}77;
    display: grid;
    grid-template-rows: auto;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const TitleGrid = styled.div `
    display: grid;
    grid-template-columns: 50px auto 50px;
    grid-gap: 10px;
    align-items: top;
    margin: 0px 0;
    justify-items: center;
`
const EditDelGrid = styled.div `
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 0;
    margin: 0 0;
    justify-items: center;
`

const CardTitle = styled.h3 `
    color: black;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0 0;
    
`
const CardContent = styled.p`
    color: black;
    font-size: 12px;
`
const CardBackground = styled.img `
    position: absolute;
    top: 0;
    height: 105%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`



const CSCard: React.FC<CSData> = ({stateChanger, id, title, type, content}: CSData) =>  {

    const deleteCaseStudy = () => {
        CaseStudyServices.remove(id)
            .then((response: any)=>{
                console.log(response);
            })
            .catch((e: Error) =>{
                console.log(e);
            });
        stateChanger();
    };

    return (
        <div className="CSCard">
            <CSCardGroup>
                <TitleGrid>
                    <Icon src='/static/rehab-bg.png'/>
                    <CardTitle>{title}</CardTitle>
                </TitleGrid>
                <CardContent>{content}</CardContent>
                <EditDelGrid>
                    <Link to = "/case_study_individual" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>View</Button>
                    </Link>
                    <Link to = "/case_study_form" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="warning" style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>Edit</Button>
                    </Link>
                    <Link to = "/dptrecordpage" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" onClick={deleteCaseStudy} color="error" style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>Delete</Button>
                    </Link>
                </EditDelGrid>  
            </CSCardGroup>
        </div>
    )
}

export default CSCard