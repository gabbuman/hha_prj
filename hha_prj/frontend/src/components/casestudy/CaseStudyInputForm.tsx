import React, { Component, useState, useEffect } from 'react'
import Header from '../layout/Header';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import axios from 'axios';
import { Link, BrowserRouter as Router, useHistory, useLocation} from 'react-router-dom';
import { endpoint } from '../Endpoint';
import { notifyFail, notifySuccess } from '../login/Notifications';

interface CSSProps {
    dptName: any;
}

 
    
const CaseStudyInputForm: React.FC<CSSProps> = ({dptName}: CSSProps)=>{
    const department = useLocation()
    dptName = department.state
    useEffect( () => {
        setDepartment();
    }, []);
    const[caseStudyInputPicture, setCaseStudyInputPicture] = useState<any>([]);
    const[caseStudyInputTitle, setCaseStudyInputTitle] = useState<any>();
    const[caseStudyInputType, setCaseStudyInputType] = useState<any>();
    const[caseStudyInputDescription, setCaseStudyInputDescription] = useState<any>();
    const[caseStudyInputDepartment, setCaseStudyInputDepartment] = useState<any>();
    const history = useHistory();

    const setDepartment = () => {
        setCaseStudyInputDepartment({department: dptName})
    }
    const submitClick = () => {
        uploadCaseStudy();
    }

    const dropDownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setCaseStudyInputType({type: event.target.value});
    }
    const handleImageUpload = (event:any) => {
        if(event.target.files[0]){
            setCaseStudyInputPicture({selectedImages: event.target.files[0]||[]})
        }
    }



    const uploadCaseStudy = () =>{
        const formData = new FormData();
        if(caseStudyInputPicture.selectedImages == null){
            formData.append('title', caseStudyInputTitle.title);
            formData.append('type', caseStudyInputType.type);
            formData.append('description',caseStudyInputDescription.description);
            formData.append('department', caseStudyInputDepartment.department);
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
        else if (caseStudyInputPicture.selectedImages != null){
            formData.append('image', caseStudyInputPicture.selectedImages, caseStudyInputPicture.selectedImages.name);
            formData.append('title', caseStudyInputTitle.title);
            formData.append('type', caseStudyInputType.type);
            formData.append('description', caseStudyInputDescription.description);
            formData.append('department', caseStudyInputDepartment.department);
            axios.post(endpoint + 'api/case_study/', formData)
                .then(res=>{
                    notifySuccess("Case Study Saved Successfully");
                    console.log(res)
                })
                .catch((error)=> {
                    notifyFail("Failed to Save Case Study");
                    console.error(error)
                    console.log(formData);
                }
            );
        }


    }


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
                        onChange={(e)=>setCaseStudyInputTitle({title: e.target.value})}
                        
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
                                    left:'50px', width: '21ch', '& .MuiTextField-root': { m: 2}
                                }}
                                labelId = "case-study-type"
                                id="caseStudyType"
                                label="typeCaseStudy"
                                onChange = {dropDownHandleChange}
                                
                                
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
                        onChange={(e)=>setCaseStudyInputDescription({description: e.target.value})}
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
                        onChange={handleImageUpload}
                        />

                    </Box>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} justifyContent="center"
                        sx={{
                            width:"170ch"
                        }}>
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="primary"onClick={submitClick}>Submit</Button>
                            <Button onClick={() => history.goBack()} style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                        </Stack>

                    </Grid>
                </Box>
            </div>
        );
}
export default CaseStudyInputForm;


