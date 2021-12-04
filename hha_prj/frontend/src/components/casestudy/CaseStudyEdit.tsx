import React, { Component, useState, useEffect } from 'react'
import Header from '../layout/Header';
import { Box, TextField, Typography, Stack, Button,
    FormControl, MenuItem, InputLabel, Select, Grid, Container, 
    CardMedia, Card, CardActions, CardActionArea, CardContent} from '@mui/material';
import { endpoint } from '../Endpoint';
import axios from 'axios';
import { Link, BrowserRouter as Router, useParams, useHistory} from 'react-router-dom';
import { notifyFail, notifySuccess } from '../login/Notifications';
import Paper from '@mui/material/Paper';
import { type } from 'os';



interface csprops{
    id: any;
}


const CaseStudyEdit: React.FC = () =>{
    const[imageUrl, setImageUrl] = useState<string>('');
    const[title, Title] = useState<string>('');
    const[type, Type] = useState<string>('');
    const[description, Description] = useState<string>('');
    const[imageObject, setImageObject] = useState<any>([]);
    const params:any = useParams();
    const history = useHistory();
    useEffect( () => {
        retrieveIndividualCaseStudy();
    }, []);

    const editClick = () => {
        const formData = new FormData();
        if(imageObject.selectedImages == null){
            formData.append('title', title);
            formData.append('type', type);
            formData.append('description', description);
            axios.put(endpoint + 'api/case_study/' + params.id + '/', formData)
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
        else if (imageObject.selectedImages != null){
            formData.append('image', imageObject.selectedImages, imageObject.selectedImages.name);
            formData.append('title', title);
            formData.append('type', type);
            formData.append('description', description);
            axios.put(endpoint + 'api/case_study/' + params.id + '/', formData)
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


    const dropDownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        Type(event.target.value)
    }
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        Title(event.target.value)

    }
    const handleDesciptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        Description(event.target.value)
    }
    const handleImageUpload = (event:any) => {
        console.log("event triggered");
        if(event.target.files[0]){
            setImageObject({selectedImages: event.target.files[0]||[]})
            setImageUrl(URL.createObjectURL(event.target.files[0]));
            console.log(event.target.files[0]);
        }
        else{
            setImageObject({selectedImages:null})
            setImageUrl(null)
        }
    }

    const retrieveIndividualCaseStudy = () => {
        axios.get(endpoint + 'api/case_study/' + params.id + '/')
            .then(res=>{
                Description(res.data['description']);
                setImageUrl(res.data['image']);
                Title(res.data['title'])
                Type(res.data['type'])
                console.log(res.data)
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
                        value={title}
                        onChange={handleTitleChange}
                        
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
                                value = {type}
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
                        value={description}
                        onChange={handleDesciptionChange}
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
                        {imageUrl ? 
                            <div style={{marginTop:'10px'}}>
                              <Paper elevation={3}>
                                <img src={imageUrl} 
                                  style={{maxWidth:'800px', width:'100%', height:'auto', padding:'5%'}}>
                                </img>
                              </Paper>
                            </div>
                            :
                            <div></div>}

                    </Box>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} justifyContent="center"
                        sx={{
                            width:"170ch"
                        }}>
                            <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="primary"onClick={editClick}>Submit</Button>
                            <Button onClick={() => history.goBack()} style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                        </Stack>

                    </Grid>
                </Box>
            </div>
        );
}
export default CaseStudyEdit;