import React, { Component } from 'react'
import { Paper, Box, FormControl, InputLabel, Select, MenuItem, Typography, Stack, Button } from '@mui/material';
import { purple } from '@mui/material/colors';

interface GDFProps {
    prevStep: () => void;
    disabled: boolean;
}

interface GDFState {
    dischargeReason: string;
    dischargeOutcome_1: string;
    dischargeOutcome_2: string;
    mobility: string;
    dischargeLocation: string;
    dischargeEmployment: string;

}
const initialState: GDFState = {
    dischargeReason: '',
    dischargeOutcome_1: '',
    dischargeOutcome_2: '',
    mobility: '',
    dischargeLocation: '',
    dischargeEmployment: '',
}

class GreenDataForm extends Component <GDFProps, GDFState> {
    constructor(props: GDFProps){
        super(props);
        this.state= initialState;    
    }

    clickPrevious = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.props.prevStep();
    };

    clickSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        window.alert("submit is successful")
    };
 
    dropdownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({dischargeReason: event.target.value,
            dischargeOutcome_1: event.target.value,
            dischargeOutcome_2: event.target.value,
            mobility: event.target.value,
            dischargeLocation: event.target.value,
            dischargeEmployment: event.target.value,
        });
      };

    render() {
        // const purpleColor = deepPurple[500];

        return (
            <div>
            <Paper style={{width: '100%', height: 550, overflow: 'auto', padding: 10, margin: 10 }}>
            <Box
            component="form"
            sx={{
                '& .MuiFormControlroot': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <Typography variant="h4">September Hospital Record</Typography>
                <Box>
                <Typography variant="h6" color={purple[900]} >2 Discharged Alive</Typography>
                <Typography variant="h5">Patient #1: Discharged Alive</Typography>
                <FormControl sx={{ m: 1, minWidth: '48%' }}>
                    <InputLabel id="demo-simple-select-label">Discharge Reason</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.dischargeReason}
                        label="Discharge Reason"
                        onChange={this.dropdownHandleChange}
                    >
                        <MenuItem value={0}>All goals met</MenuItem>
                        <MenuItem value={1}>Goals partially met, sufficient for discharge</MenuItem>
                        <MenuItem value={2}>Goals not met, discharged for alternate reason</MenuItem>
                    </Select>
                </FormControl> 
                <FormControl sx={{ m: 1, minWidth: '48%' }}>
                    <InputLabel id="demo-simple-select-label">Discharge Outcome (ADLs/Self-Care) </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.dischargeOutcome_1}
                        label="Discharge Outcome (ADLs/Self-Care) "
                        onChange={this.dropdownHandleChange}
                    >
                        <MenuItem value={0}>Independent</MenuItem>
                        <MenuItem value={1}>Modified Independent </MenuItem>
                        <MenuItem value={2}>Supervision</MenuItem>
                        <MenuItem value={3}>Minimum Assistance</MenuItem>
                        <MenuItem value={4}>Moderate Assistance</MenuItem>
                        <MenuItem value={5}>Maximum Assistance</MenuItem>
                        <MenuItem value={6}>Dependent</MenuItem>
                    </Select>
                </FormControl>   
                <FormControl sx={{ m: 1, minWidth: '48%' }}>
                    <InputLabel id="demo-simple-select-label">Discharge Outcome (Transfers and Mobility) </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.dischargeOutcome_2}
                        label="Discharge Outcome (Transfers and Mobility) "
                        onChange={this.dropdownHandleChange}
                    >
                        <MenuItem value={0}>Independent</MenuItem>
                        <MenuItem value={1}>Modified Independent </MenuItem>
                        <MenuItem value={2}>Supervision</MenuItem>
                        <MenuItem value={3}>Minimum Assistance</MenuItem>
                        <MenuItem value={4}>Moderate Assistance</MenuItem>
                        <MenuItem value={5}>Maximum Assistance</MenuItem>
                        <MenuItem value={6}>Dependent</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: '48%' }}>
                    <InputLabel id="demo-simple-select-label">Mobility Aid/Assistive Device Given</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.mobility}
                        label="Mobility Aid/Assistive Device Given"
                        onChange={this.dropdownHandleChange}
                    >
                        <MenuItem value={0}>Wheelchair</MenuItem>
                        <MenuItem value={1}>Walker</MenuItem>
                        <MenuItem value={2}>Cane</MenuItem>
                        <MenuItem value={3}>Crutches</MenuItem>
                    </Select>
                </FormControl>  
                <FormControl sx={{ m: 1, minWidth: '48%' }}>
                    <InputLabel id="demo-simple-select-label">Discharge Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.dischargeLocation}
                        label="Discharge Location"
                        onChange={this.dropdownHandleChange}
                    >
                        <MenuItem value={0}>Return home, alone</MenuItem>
                        <MenuItem value={1}>Return home, with family/caregiver(s)</MenuItem>
                        <MenuItem value={2}>Admitted to hospital</MenuItem>
                    </Select>
                </FormControl> 
                <FormControl sx={{ m: 1, minWidth: '48%' }}>
                    <InputLabel id="demo-simple-select-label">Discharge Employment Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.dischargeEmployment}
                        label="Discharge Employment Status"
                        onChange={this.dropdownHandleChange}
                    >
                        <MenuItem value={0}>Employed</MenuItem>
                        <MenuItem value={1}>Unemployed, unable to find work</MenuItem>
                        <MenuItem value={2}>Unemployed, due to condition</MenuItem>
                        <MenuItem value={3}>Retired, not working due to age</MenuItem>
                    </Select>
                </FormControl>        
                </Box>
            </Box>
            </Paper>
             <Box>              
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="contained" color="success" onClick={this.clickPrevious}>Previous</Button>
                <Button variant="contained" color="success" onClick={this.clickSubmit}>Submit</Button>
                </Stack>
            </Box>      
            </div>
        )
    }
}

export default GreenDataForm
