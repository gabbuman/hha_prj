import { grid } from '@mui/system';
import React, { Component } from 'react';
import styled from 'styled-components';
import { StringLiteralLike } from 'typescript';
import { Box, TextField, Typography, Stack, IconButton, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const main_color = "#b7b5b6"

const AddGrid = styled.button `
    width: 350px;
    height: 225px;
    padding: 15px 15px 15px 15px;
    box-shadow: 0 10px 20px ${main_color}77;
    border: none;
    outline: none;
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-radius: 10px;
    grid-gap: 0;
    margin: 0 0;
    justify-items: center;
    align-items: center;
    position: relative;
    background-image: url("/static/37.svg");
`

const CardBackground = styled.img `
    position: absolute;
    top: 0; 
    height: 100%;
    z-index: -1;
`


function AddCSCard(){
    return(
        <AddGrid>
            <h3 style={{fontSize:'40px', fontWeight:'bold', cursor:'pointer'}}>+ NEW</h3>
        </AddGrid>
    )
}

export default AddCSCard