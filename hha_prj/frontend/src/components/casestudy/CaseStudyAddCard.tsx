import { grid } from '@mui/system';
import React, { Component } from 'react';
import styled from 'styled-components';
import { StringLiteralLike } from 'typescript';
import { Box, TextField, Typography, Stack, IconButton, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const main_color = "#b7b5b6"

const AddGrid = styled.div `
    width: 350px;
    height: 225px;
    padding: 15px 15px 15px 15px;
    box-shadow: 0 10px 20px ${main_color}77;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0;
    margin: 0 0;
    justify-items: center;
    align-items: center;
    
`

function AddCSCard(){
    return(
        <AddGrid>
            <p style={{fontSize:'60', font:'-moz-initial', fontWeight:'bold'}}>+ NEW</p>
        </AddGrid>
    )
}

export default AddCSCard