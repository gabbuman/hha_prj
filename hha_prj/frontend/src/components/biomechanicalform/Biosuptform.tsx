import React, { Component } from 'react'
import { Box, TextField, Typography, Stack, Button, Grid, Paper} from '@mui/material';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { endpoint } from '../Endpoint';
import { notifyFail, notifySuccess } from '../login/Notifications';

interface CSSProps {
    dptName: string;
}

interface CSSState {
    name: string;
    issue: string;
    isSubmit: boolean;
    selectedImages: any;
    file: any;
}

const initialState: CSSState = {
    name: '',
    issue: '',
    isSubmit: false,
    selectedImages: null,
    file: null,
}

export default class BiomechanicalSupportForm extends Component <CSSProps, CSSState>{
    
    constructor(props: CSSProps){
        super(props);
        this.state = initialState;
    }

    submitClick = () => {
        this.setState({ isSubmit: true})
        this.uploadBioForm();
    }

    handleImageUpload = (event:any) => {
        if(event.target.files[0]){
            this.setState({selectedImages: event.target.files[0]||[]})
            this.setState({file: URL.createObjectURL(event.target.files[0])})
        }
    }

    uploadBioForm = () =>{
        const formData = new FormData();
        if(this.state.selectedImages == null){
            formData.append('name', this.state.name);
            formData.append('issue',this.state.issue);
            formData.append('department',this.props.dptName);
            axios.post(endpoint + 'api/bio_support/', formData)
                .then(res=>{
                    notifySuccess("Biomechanical issue Reported");
                    console.log(res)
                })
                .catch((error)=> {
                    notifyFail("Failed to report Biomechanical issue");
                    console.error(error)
                }
            );
        }
        else if (this.state.selectedImages != null){
            formData.append('image', this.state.selectedImages,this.state.selectedImages.name);
            formData.append('name', this.state.name);
            formData.append('issue',this.state.issue);
            formData.append('department',this.props.dptName);
            axios.post(endpoint + 'api/bio_support/', formData)
                .then(res=>{
                    notifySuccess("Biomechanical issue Reported");
                    console.log(res)
                })
                .catch((error)=> {
                    notifyFail("Failed to report Biomechanical issue");
                    console.error(error)
                }
            );
        }
    }


    render(){

        return(
            <div>
                <Box
                sx={{m:4}}>
                    <Box
                    sx={{
                        m:2
                    }}
                    >
                    <Typography component="h1" variant="h5">Biomechanical Support Form</Typography>
                    </Box>
                    <Box
                    sx={{
                        m:2
                    }}
                    >
                        <TextField
                        variant = 'outlined'
                        id="Bio-supt-title"
                        label="Equipment Name"
                        value={this.state.name}
                        onChange={(e)=>{this.setState({name: e.target.value})}}
                        
                        sx={{
                            width: '100ch', '& .MuiTextField-root': { m: 2}
                        }}
                        />
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
                        id="Bio-supt-description"
                        label="Issue Description"
                        variant="outlined"
                        multiline
                        rows={15}
                        value={this.state.issue}
                        onChange={(e)=>{this.setState({issue: e.target.value})}}
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
                        {this.state.file ? 
                            <div style={{marginTop:'5px'}}>
                                <img src={this.state.file} 
                                    style={{maxWidth:'30ch', height:'30ch',padding:'2%'}}>
                                </img>
                            </div>
                            :
                            <div></div>}
                    </Box>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} justifyContent="center"
                        sx={{
                            width:"170ch"
                        }}>
                            <Link to = "/homepage" style={{ textDecoration: 'none' }} >
                                <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Cancel</Button>
                            </Link>
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="primary"onClick={this.submitClick}>Submit</Button>
                        </Stack>

                    </Grid>
                </Box>
            </div>
        );
    }
}