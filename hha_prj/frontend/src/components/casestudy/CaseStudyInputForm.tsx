import React, { Component } from 'react'
import Header from '../layout/Header';
import VerNavbar from '../layout/VerNavbar';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';

interface CSSProps {

}
    
interface CSSState {
    title: string;
    type: string;
    content: string;// TODO: picture state variable
    
}
const initialState: CSSState = {
    title: 'Title of Case',
    type: 'Patient Story',
    content: 'Testsssssss',
}
    
export default class CaseStudySubmissionForm extends Component <CSSProps, CSSState>{
    constructor(props: CSSProps){
        super(props);
        this.state = initialState;
    }

    dropDownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({type: event.target.value});
    }
    render(){
        return(
            <div>
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
                            <MenuItem value = {1}>Patient Story</MenuItem>
                            <MenuItem value = {2}>Staff Recognition</MenuItem>
                            <MenuItem value = {3}>Training Session</MenuItem>
                            <MenuItem value = {4}>Equipment Received</MenuItem>
                            <MenuItem value = {5}>Other Story</MenuItem>

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
                <Grid item xs={12}>
                    <Stack direction="row" spacing={30} justifyContent="flex-end">
                        <Button style={{maxWidth:'120px',maxHeight:'40px', minWidth:'120px',minHeight:'40px'}}variant="contained" color="warning">Back</Button>
                    </Stack>
                </Grid>
            </div>
        );
    }
}



