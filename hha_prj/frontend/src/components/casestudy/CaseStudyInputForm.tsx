import React, { Component } from 'react'
import Header from '../layout/Header';
import VerNavbar from '../layout/VerNavbar';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';

interface CSProps {

}
    
interface CSState {
    title: string;
    type: string;
    content: string;// TODO: picture state variable
    
}
const initialState: CSState = {
    title: 'Title of Case',
    type: 'Patient Story',
    content: 'Test',
}
    
export default class CaseStudySubmissionForm extends Component <CSProps, CSState>{
    render(){
        return(
            <h1>hi</h1>
        );
    }
}