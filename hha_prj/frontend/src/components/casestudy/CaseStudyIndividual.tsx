import React, { Component } from 'react'
import Header from '../layout/Header';
import VerNavbar from '../layout/VerNavbar';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';

interface CSProps {

}

interface CSState {
    title: string;
    type: string;
    content: string;// TODO: picture state variable
    
}
const initialState: CSState = {
    title: 'Title of Case',
    type: 'Patient Story',
    content: 'Test',
}

export default class CaseStudyIndividual extends Component <CSProps, CSState>{
    constructor(props: CSProps){
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div>
                <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                '& .MuiTextField-root': { m: 2},
                }}
                >
                    <TextField
                    variant = 'outlined'
                    id="title-case-study"
                    label="Title"
                    value={this.state.title}
                    inputProps={
                        { readOnly: true, }
                    }
                    sx={{
                        width: '50ch'
                    }}
                    />
                    <TextField
                    variant = 'outlined'
                    id="type-case-study"
                    label="Type of Case Study"
                    value={this.state.type}
                    inputProps={
                        { readOnly: true, }
                    }
                    sx={{
                        width: '25ch'
                    }}
                    />
                </Box>
                <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '50ch' }, maxWidth: '100%'
                }}
                >
                    <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    disabled
                    multiline
                    rows={20}
                    defaultValue="some case study stuff here"
                />
                </Box>
            </div>
        )
    }
}
