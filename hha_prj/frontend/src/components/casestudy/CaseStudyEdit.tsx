import React, { Component, useState, useEffect } from 'react'
import Header from '../layout/Header';
import { Box, TextField, Typography, Stack, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container, 
    CardMedia, Card, CardActions, CardActionArea, CardContent} from '@mui/material';
import ReactDOM from 'react-dom';
import DptRecordPage from '../dpt/DptRecordPage';
import { endpoint } from '../Endpoint';
import axios from 'axios';
import { Link, BrowserRouter as Router, useParams, useHistory} from 'react-router-dom';
import { notifyFail, notifySuccess } from '../login/Notifications';



interface csprops{
    id: any;
}


const CaseStudyEdit: React.FC = () =>{
    const[individualCaseStudy, setIndividualCaseStudy] = useState<any>([]);
    const params:any = useParams();
    const history = useHistory();
    useEffect( () => {
        //console.log(params.id);
        retrieveIndividualCaseStudy();
    }, []);

    const editClick = () => {
        //console.log(individualCaseStudy)
        //handleImageUpload();
        axios.put(endpoint + 'api/case_study/' + params.id + '/', individualCaseStudy)
            .then(res=>{
                notifySuccess("Case Study Saved Successfully");
                //console.log(res)
            })
            .catch((error)=> {
                notifyFail("Failed to Edit Case Study");
                //console.error(error)
            }
        );
        const formData = new FormData();
        formData.append('image', individualCaseStudy.selectedImages, individualCaseStudy.name);
        axios.put(endpoint + 'api/case_study/' + params.id + '/', formData)
            .then(res=>{
                notifySuccess("Case Study Picture added Successfully");
                //console.log(res)
            })
            .catch((error)=> {
                notifyFail("Failed to Edit Case Study");
                //console.error(error)
            }
        );
    }
    const dropDownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndividualCaseStudy({type: event.target.value});
    }
    const handleImageUpload = (event:any) => {
        console.log("event triggered");
        if(event.target.files[0]){
            setIndividualCaseStudy({selectedImages: event.target.files[0]||[]})
            console.log(event.target.files[0]);
        }
        //console.log("case study object is " + individualCaseStudy);
        //console.log("the image is " +individualCaseStudy.selectedImages)
    }

    const retrieveIndividualCaseStudy = () => {
        axios.get(endpoint + 'api/case_study/' + params.id + '/')
            .then(res=>{
                setIndividualCaseStudy(res.data);
                //console.log(res.data)
                //console.log({individualCaseStudy})
            })
            .catch((error)=> {
                console.error(error)
            }
        );
    }
    let types = [];
        types.push("Patient Story");
        types.push("Equipment Received");
        types.push("Training Session");
        types.push("Staff Recognition");
        types.push("Other Story");
        //console.log(individualCaseStudy);

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
                        value={individualCaseStudy.title}
                        onChange={(e)=>setIndividualCaseStudy({title: e.target.value})}
                        
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
                                value = {individualCaseStudy.type}
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
                        value={individualCaseStudy.description}
                        onChange={(e)=>setIndividualCaseStudy({description: e.target.value})}
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
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="primary"onClick={editClick}>Submit</Button>
                            <Link to = "/dptrecordpage" style={{ textDecoration: 'none' }} >
                                <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                            </Link>
                        </Stack>

                    </Grid>
                </Box>
            </div>
        );
}
export default CaseStudyEdit;