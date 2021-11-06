import React, { Component, useState } from 'react'
import Header from '../layout/Header';
import VerNavbar from '../layout/VerNavbar';
import { Box, TextField, Typography, Stack, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container, 
    CardMedia, Card, CardActions, CardActionArea, CardContent} from '@mui/material';
import express from "express";
import * as mongoDB from "mongodb";

const user = "admin";
const userPassword = "pword";
const cluster = "hhadb.tm3pa";
const dbName = "HHA"
const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

const client: mongoDB.MongoClient = new mongoDB.MongoClient(url);
client.connect().then(r => console.log("connected to client") );
const db: mongoDB.Db = client.db(dbName);
console.log(`connected to database: ${dbName}`);

interface CSProps {

}

interface CSState {
    title: string;
    type: string;
    content: string;
    image: string;   
}
const initialState: CSState = {
    title: 'Title of Case',
    type: 'Patient Story',
    content: 'Test',
    image: 'https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/fiercehealthcare/1535133097/hospitalsign1.jpg/hospitalsign1.jpg?VersionId=smS8Wmfai8cv9CBOJbQYNlKmHFNeF3O9&itok=XGIwJD8O',
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
                        width: '75ch'
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
                    value={this.state.content}
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
                        src={this.state.image}
                    />
                </Box>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={30} justifyContent="flex-end">
                        <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                    </Stack>
                </Grid>
            </div>
        )
    }
}