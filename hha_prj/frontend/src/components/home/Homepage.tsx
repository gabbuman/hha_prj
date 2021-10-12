import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import CSPreview from '../home/CSPreview';
import Rank from '../home/Rank';
import {dpts_Data} from './DptData';
import DptCard, { DptOverview } from './DptCard';



class HomePage extends Component  {
    render() {
        return (
            <div>
                <Header title={`Hope Health Action`} />
                <DptOverview departmentData={dpts_Data}/>
                <Rank/>
                <CSPreview/>
            </div>
        );
    }
}

export default HomePage
