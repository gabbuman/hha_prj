import React, { Component } from 'react'
import { Paper, Box, TextField, Typography, Stack, Button } from '@mui/material';


interface RDFProps {
    nextStep: () => void;
    disabled: boolean;
    dischargedAlive_shared: number;
    stayedinward_shared: number;
    updateShared: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dptName: string;
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

class RedDataForm extends Component <RDFProps, RDFState> {
    constructor(props: RDFProps){
        super(props);       
        const {dischargedAlive_shared, stayedinward_shared} = props;
        this.state = {
            bedsAvailable: 0,
            bedDays: 0,
            patientDays: 0,
            hospitalized: 0,
            dischargedAlive: dischargedAlive_shared, // initialize and update with parent state
            diedBefore: 0, 
            diedAfter: 0,
            daysHospitalized: 0,
            referrals: 0,
            transfers: 0,
            selfdischarged: 0,
            stayedinward: stayedinward_shared,
            admissions: 0,   // NaN could be empty input
        };    
    }

    clickNext = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.props.nextStep();
    };

    updateShared = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: +e.target.value,
        } as unknown as Pick<RDFState, keyof RDFState>);
        this.props.updateShared(e);
    }

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
                        inputProps={{ min: 0}}
                        id="outlined-required"
                        label="Beds Available"
                        value={this.state.bedsAvailable}
                        onChange={(e)=>{this.setState({bedsAvailable: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Bed Days"
                        value={this.state.bedDays}
                        onChange={(e)=>{this.setState({bedDays: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Patient Days"
                        value={this.state.patientDays}
                        onChange={(e)=>{this.setState({patientDays: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Hospitalized"
                        value={this.state.hospitalized}
                        onChange={(e)=>{this.setState({hospitalized: +e.target.value})}}
                        />    
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Discharged Alive"
                        name="dischargedAlive"
                        value={this.state.dischargedAlive}
                        onChange={this.updateShared}
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
                        inputProps={{ min: 0}}
                        id="outlined-required"
                        label="Died Before 48hr"
                        value={this.state.diedBefore}
                        onChange={(e)=>{this.setState({diedBefore: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Died After 48hr"
                        value={this.state.diedAfter}
                        onChange={(e)=>{this.setState({diedAfter: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
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
                        inputProps={{ min: 0}}
                        id="outlined-required"
                        label="Referrals"
                        value={this.state.referrals}
                        onChange={(e)=>{this.setState({referrals: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Transfers"
                        value={this.state.transfers}
                        onChange={(e)=>{this.setState({transfers: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Self-Discharged"
                        value={this.state.selfdischarged}
                        onChange={(e)=>{this.setState({selfdischarged: +e.target.value})}}
                        />
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
                        id=""
                        label="Stayed in Ward"
                        name="stayedinward"
                        value={this.state.stayedinward}
                        onChange={this.updateShared}
                        />  
                        <TextField
                        required
                        disabled={this.props.disabled}
                        type="number"
                        inputProps={{ min: 0}}
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
