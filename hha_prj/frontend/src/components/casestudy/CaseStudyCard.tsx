import { grid } from '@mui/system';
import React, { Component } from 'react';
import styled from 'styled-components';
import { StringLiteralLike } from 'typescript';
import { Box, TextField, Typography, Stack, IconButton, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import CaseStudySubmissionForm from './CaseStudyInputForm';

export interface CSData {
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
    grid-template-columns: 2fr 1fr;
    grid-gap: 0;
    margin: 0 0;
    justify-items: flex-end;
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

const CSCard: React.FC<CSData> = ({title, type, content}: CSData) =>  {
    return (
        <a href="/CaseStudy" style={{ textDecoration: 'none' }}>
            <div className="CSCard">
                <CSCardGroup>
                    <TitleGrid>
                        <Icon src='/static/rehab-bg.png'/>
                        <CardTitle>{title}</CardTitle>
                        <IconButton aria-label="thumb" size="small" style={{height:"50px",width:"50px",backgroundColor: '#FFFFFF', color:"#0E4DA4"}} >
                            <ThumbUpIcon fontSize="medium"/>
                        </IconButton>
                    </TitleGrid>
                    <CardContent>{content}</CardContent>
                    <EditDelGrid>
                        <Link to = "/csinput" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="warning" style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>Edit</Button>
                        </Link>
                        <Button variant="contained" color="error" style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>Delete</Button>
                    </EditDelGrid>  
                </CSCardGroup>
            </div>
        </a>
    )
}

export default CSCard