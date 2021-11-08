import React, { Component, useState } from 'react'
import Header from '../layout/Header';
import VerNavbar from '../layout/VerNavbar';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import axios from 'axios';
import { useButtonProps } from '@restart/ui/esm/Button';
interface CSSProps {

}

    
interface CSSState {
    title: string;
    type: string;
    content: string;// TODO: picture state variable
    isSubmit: boolean;
    
}
const initialState: CSSState = {
    title: 'Title of Case',
    type: 'Patient Story',
    content: 'Testsssssss',
    isSubmit: false
}

 
    
export default class CaseStudySubmissionForm extends Component <CSSProps, CSSState>{
    

    constructor(props: CSSProps){
        super(props);
        this.state = initialState;
    }

    dropDownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({type: event.target.value});
    }

    submitClick = () => {
        this.setState({ isSubmit: true}) 
        window.alert("submit is successful")

    }


    render(){
        let types = [];
        types.push("Patient Story");
        types.push("Equipment Received");
        types.push("Training Session");
        types.push("Staff Recognition");
        types.push("Other Story");

        return(
            <div>
                <Header title={`Hope Health Action/Rehab Department`} />
                <Box
                sx={{m:4}}>
                    <Box
                    sx={{
                        m:2
                    }}
                    >
                        <TextField
                        variant = 'outlined'
                        id="title-case-study"
                        label="Title"
                        value={this.state.title}
                        onChange={(e)=>{this.setState({title: e.target.value})}}
                        
                        sx={{
                            width: '50ch', '& .MuiTextField-root': { m: 2}
                        }}
                        />

                        <FormControl>
                            <InputLabel
                            sx={{
                                left:'50px'
                            }}
                            id = "case-study-type">Type Of Case Study</InputLabel>
                            <Select
                                sx={{
                                    left:'50px'
                                }}
                                labelId = "case-study-type"
                                id="caseStudyType"
                                value = {this.state.type}
                                label="typeCaseStudy"
                                onChange = {this.dropDownHandleChange}
                                
                                
                            >
                                {types.map((type) => (
                                                <MenuItem value={type}> {type}
                                                </MenuItem>
                                ))}


                            </Select>
                        </FormControl>
                    </Box>
                    
                    <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '100ch' }, maxWidth: '100%'
                    }}
                    >
                        <TextField
                        id="case-study-description"
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={20}
                        value={this.state.content}
                        onChange={(e)=>{this.setState({content: e.target.value})}}
                    />
                    </Box>
                    <Box
                    sx={{
                        m:2
                    }}
                    >
                        <h3>Upload Pictures</h3>
                        <input
                        type="file"
                        name="file"
                        />

                    </Box>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} justifyContent="center"
                        sx={{
                            width:"167ch"
                        }}>
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="primary"onClick={this.submitClick}>Submit</Button>
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                        </Stack>

                    </Grid>
                </Box>
            </div>
        );
    }
}



