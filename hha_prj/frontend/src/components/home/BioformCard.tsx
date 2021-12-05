import { grid } from '@mui/system';
import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { StringLiteralLike } from 'typescript';
import { Box, TextField, Typography, Stack, IconButton, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import BioformServices from '../../services/BioformServices';
import axios from 'axios';
import { endpoint } from '../Endpoint';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export interface BSData {
    stateChanger: () => void;
    id: any;
    image: any;
    name: string;
    issue: string;
}

const main_color = "#b7b5b6"

const EditGrid = styled.div `
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 0;
    margin: 0 0;
    justify-items: right;
`

const CSCard: React.FC<BSData> = ({stateChanger, id, image, name, issue}: BSData) =>  {

    const deleteBioform = () => {
        BioformServices.remove(id)
            .then((response: any)=>{
                console.log(response);
            })
            .catch((e: Error) =>{
                console.log(e);
            });
        stateChanger();
    };

    return (
        <div className="BSCard">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">{issue}</Typography>
                </CardContent>
                <CardActions>
                        <Stack direction="row" spacing={5} justifyContent="right"
                        sx={{
                            width:"170ch"
                        }}>
                            <Button variant="contained" onClick={deleteBioform} style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>Fixed</Button>
                        </Stack>           
                </CardActions>
            </Card>
        </div>
    )
}

export default CSCard