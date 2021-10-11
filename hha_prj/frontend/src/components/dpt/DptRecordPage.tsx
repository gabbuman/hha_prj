import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';



class DptRecordPage extends Component  {
    render() {
        return (
            <div>
                <Header title={`Hope Health Action/Rehab Department`} />
                <VerNavbar />
            </div>
        );
    }
}

export default DptRecordPage
