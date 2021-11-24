import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';


interface DptProps{
    dptName: string,
  }
interface DptState{
    dptName: string,
  }

  const initialState: DptState = {
    dptName: "Rehab"
}

class DptRecordPage extends Component <DptProps, DptState>  {
    constructor(props: DptProps){
        super(props); 
        this.state = initialState;
        //this.setState({dptName: this.props.dptName});
    }
    render() {
        return (
            <div>
                <Header title={this.state.dptName} />
                <VerNavbar />
            </div>
        );
    }
}

export default DptRecordPage
