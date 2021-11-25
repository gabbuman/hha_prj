import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import { useLocation } from 'react-router';


interface DptProps{
   dptName: string,
  }

interface DptState{
    dptName: string,
  }

class DptRecordPage extends Component <DptProps, DptState>{
    constructor(props:any){
        super(props); 
        this.state = {
            dptName: props.location.state};
    }
    render() {
       var dpt_name = this.state.dptName;
        return (
            <div>
                <Header title= {"Hope Health Action / " + dpt_name}/>  
                <VerNavbar dptName={dpt_name}/>
            </div>
        );
    }
}

export default DptRecordPage
