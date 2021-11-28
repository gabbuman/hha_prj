import React, { useState, Component } from 'react';
import { Grid, Container, Box, Card, CardMedia, CardContent, Typography, Paper, Stack, Button } from '@mui/material';
import axios from 'axios';
import { endpoint } from '../Endpoint';
import { ThreeSixtyTwoTone } from '@mui/icons-material';

interface QLProps {
}

interface QLState {
    // month: string;
    isEdit: boolean;
    disabled: boolean;

    default_questions: string[];
    // red_data_shared: {[key:string]: number};
}


export class QuestionList extends Component <QLProps, QLState> {
    constructor(props: QLProps){
        super(props);
        this.state = {
            // month: "9",
            isEdit: true,
            disabled: false,
 
            default_questions: [],
        };
    }

    componentDidMount = () => {
       
    }

    clickSubmit = () => {

    }

    render() {

        return (             
            <div>
                <Container >                   
                <div>
                    <Paper style={{width: '100%', height: 550, overflow: 'auto', padding: 10, margin: 10 }}>
                    <Box
                    component="form"
                    sx={{
                        '& .MuiFormControlroot': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <Typography variant="h5">Customize Questions</Typography>
                        <Box>
                        </Box>
                    </Box>
                    </Paper>
                    <Box>              
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant="contained" color="success" onClick={this.clickSubmit}>Submit</Button>
                        </Stack>
                    </Box>      
                </div>              
                </Container>  
            </div>
        )
    }
}

export default QuestionList
