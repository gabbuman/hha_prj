import React, { Component } from 'react'
import { Paper, Box, TextField, Typography, Stack, Button } from '@mui/material';


interface RDFProps {
    nextStep: () => void;
    disabled: boolean;
}

interface RDFState {
    bedsAvailable: number;
    bedDays: number;
    patientDays: number;
    hospitalized: number;
    dischargedAlive: number;
    diedBefore: number; 
    diedAfter: number;
    daysHospitalized: number;
    referrals: number;
    transfers: number;
    selfdischarged: number;
    stayedinward: number;
    admissions: number;
}
const initialState: RDFState = {
    bedsAvailable: 10,
    bedDays: 20,
    patientDays: 30,
    hospitalized: 40,
    dischargedAlive: 50,
    diedBefore: 1, 
    diedAfter: 2,
    daysHospitalized: 3,
    referrals: 1,
    transfers: 2,
    selfdischarged: 3,
    stayedinward: 4,
    admissions: 5
}

class RedDataForm extends Component <RDFProps, RDFState> {
    constructor(props: RDFProps){
        super(props);
        this.state= initialState;    
    }

    clickNext = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <div>
            <Paper style={{width: '100%', height: 550, overflow: 'auto', padding: 10, margin: 10 }}>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <Typography variant="h5">September Hospital Record</Typography>
                <Box>
                <Typography variant="h6">Overview</Typography>
                <div>
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id="outlined-required"
                    label="Beds Available"
                    value={this.state.bedsAvailable}
                    onChange={(e)=>{this.setState({bedsAvailable: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Bed Days"
                    value={this.state.bedDays}
                    onChange={(e)=>{this.setState({bedDays: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Patient Days"
                    value={this.state.patientDays}
                    onChange={(e)=>{this.setState({patientDays: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Hospitalized"
                    value={this.state.hospitalized}
                    onChange={(e)=>{this.setState({hospitalized: +e.target.value})}}
                    />    
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Discharged Alive"
                    value={this.state.dischargedAlive}
                    onChange={(e)=>{this.setState({dischargedAlive: +e.target.value})}}
                    />          
                </div>
                </Box>
                <Box>
                <Typography variant="h6">Duration</Typography>
                <div>
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id="outlined-required"
                    label="Died Before 48hr"
                    value={this.state.diedBefore}
                    onChange={(e)=>{this.setState({diedBefore: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Died After 48hr"
                    value={this.state.diedAfter}
                    onChange={(e)=>{this.setState({diedAfter: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Days Hospitalized"
                    value={this.state.daysHospitalized}
                    onChange={(e)=>{this.setState({daysHospitalized: +e.target.value})}}
                    />         
                </div>
                </Box>
                <Box>
                <Typography variant="h6">Movement</Typography>  
                <div>
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id="outlined-required"
                    label="Referrals"
                    value={this.state.referrals}
                    onChange={(e)=>{this.setState({referrals: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Transfers"
                    value={this.state.transfers}
                    onChange={(e)=>{this.setState({transfers: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Self-Discharged"
                    value={this.state.selfdischarged}
                    onChange={(e)=>{this.setState({selfdischarged: +e.target.value})}}
                    />
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Stayed in Ward"
                    value={this.state.stayedinward}
                    onChange={(e)=>{this.setState({stayedinward: +e.target.value})}}
                    />  
                    <TextField
                    required
                    disabled={this.props.disabled}
                    type="number"
                    id=""
                    label="Admissions"
                    value={this.state.admissions}
                    onChange={(e)=>{this.setState({admissions: +e.target.value})}}
                    />          
                </div>
                </Box>
            </Box>
            </Paper>
             <Box>              
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="contained" color="success" onClick={this.clickNext}>Next</Button>
                </Stack>
            </Box>      
            </div>
        )
    }
}

export default RedDataForm