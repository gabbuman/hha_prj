import React, { Component, useState, useEffect } from 'react'
import Header from '../layout/Header';
import { Box, TextField, Typography, Stack, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container, 
    CardMedia, Card, CardActions, CardActionArea, CardContent} from '@mui/material';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import DptRecordPage from '../dpt/DptRecordPage';
import { endpoint } from '../Endpoint';
import axios from 'axios';



interface csprops{
    dptName: string;
}



const CaseStudyEdit: React.FC = () =>{
    const[individualCaseStudy, setIndividualCaseStudy] = useState<any>([]);
    useEffect( () => {
        //retrieveIndividualCaseStudy();
    }, []);

    const retrieveIndividualCaseStudy = () => {
        axios.get(endpoint + 'api/case_study/' + 'dwaeqeq/')
            .then(res=>{
                setIndividualCaseStudy(res.data);
                console.log(res.data)
                console.log({individualCaseStudy})
            })
            .catch((error)=> {
                console.error(error)
            }
        );
    }
    return (
        <div>
            <Header title={`Hope Health Action/Rehab Department`} />
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
                value= {individualCaseStudy.title}
                inputProps={
                    { readOnly: true, }
                }
                sx={{
                    width: '75ch'
                }}
                />
                <TextField
                variant = 'outlined'
                id="type-case-study"
                label="Type of Case Study"
                value={individualCaseStudy.type}
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
                '& .MuiTextField-root': { m: 2, width: '75ch' }, maxWidth: '100%',
            }}
            >
                <TextField
                id="case-study-description"
                label="Description"
                variant="outlined"
                multiline
                rows={20}
                inputProps={
                    { readOnly: true, }
                }
                value={individualCaseStudy.description}
                />

                <Box
                    component="img"
                    m={2}
                    sx={{
                    height: 400,
                    width: 400,
                    maxHeight: { xs: 400, md: 400 },
                    maxWidth: { xs: 400, md: 400 },
                    }}
                    alt=""
                    src={individualCaseStudy.image}
                />
            </Box>
            <Grid item xs={2}>
                <Stack direction="row" spacing={10} justifyContent="flex-end"  sx={{
                            width:"135ch"
                    }}>
                    <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Edit</Button>
                    <Link to = "/dptrecordpage" style={{ textDecoration: 'none' }} >
                        <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                    </Link>
                </Stack>
            </Grid>
        </div>
    )
}
export default CaseStudyEdit;