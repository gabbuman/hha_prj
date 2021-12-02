import React, { Component, useState, useEffect } from 'react'
import Header from '../layout/Header';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import axios from 'axios';
import { Link, BrowserRouter as Router} from 'react-router-dom';
import { endpoint } from '../Endpoint';
import { notifyFail, notifySuccess } from '../login/Notifications';
interface CSSProps {

}

    
interface CSSState {
    title: string;
    type: string;
    content: string;
    isSubmit: boolean;
    selectedImages: any;
    
}


const initialState: CSSState = {
    title: 'Title of Case Study',
    type: 'Patient Story',
    content: 'Test',
    isSubmit: false,
    selectedImages: null
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
        //console.log(this.state.selectedImages);
        this.uploadCaseStudy();
    }

    handleImageUpload = (event:any) => {
        if(event.target.files[0]){
            this.setState({selectedImages: event.target.files[0]||[]})
            //console.log(event.target.files[0]);
        }
    }



    uploadCaseStudy = () =>{
        const formData = new FormData();
        if(this.state.selectedImages == null){
            formData.append('title', this.state.title);
            formData.append('type', this.state.type);
            formData.append('description',this.state.content);
            axios.post(endpoint + 'api/case_study/', formData)
                .then(res=>{
                    notifySuccess("Case Study Saved Successfully");
                    console.log(res)
                })
                .catch((error)=> {
                    notifyFail("Failed to Save Case Study");
                    console.error(error)
                }
            );
        }
        else if (this.state.selectedImages != null){
            formData.append('image', this.state.selectedImages,this.state.selectedImages.name);
            formData.append('title', this.state.title);
            formData.append('type', this.state.type);
            formData.append('description',this.state.content);
            axios.post(endpoint + 'api/case_study/', formData)
                .then(res=>{
                    notifySuccess("Case Study Saved Successfully");
                    console.log(res)
                })
                .catch((error)=> {
                    notifyFail("Failed to Save Case Study");
                    console.error(error)
                }
            );
        }


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
                        accept="image/*"
                        type="file"
                        name="file"
                        onChange={this.handleImageUpload}
                        />

                    </Box>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} justifyContent="center"
                        sx={{
                            width:"170ch"
                        }}>
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="primary"onClick={this.submitClick}>Submit</Button>
                            <Link to = "/dptrecordpage" style={{ textDecoration: 'none' }} >
                                <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                            </Link>
                        </Stack>

                    </Grid>
                </Box>
            </div>
        );
    }
}



