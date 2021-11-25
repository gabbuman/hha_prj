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

  const initialState: DptState = {
    dptName: ""
}

class DptRecordPage extends Component <DptProps, DptState>{
    constructor(props:any){
        super(props); 
        this.state = {
            dptName: props.location.state};
    }
    render() {
       
        return (
            <div>
                <Header title= {this.state.dptName}/>  
                <VerNavbar dptName={this.state.dptName}/>
            </div>
        );
    }
}

export default DptRecordPage
