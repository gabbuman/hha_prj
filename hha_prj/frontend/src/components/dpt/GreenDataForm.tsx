import React, { Component } from 'react'
import { Paper, Box, FormControl, InputLabel, Select, MenuItem, Typography, Stack, Button, TextField } from '@mui/material';
import { purple } from '@mui/material/colors';

interface GDFProps {
    prevStep: () => void;
    disabled: boolean;
    dischargedAlive_shared: number;
    stayedinward_shared: number;
    // dptName: string;
}

interface GDFState {
    dischargeReason: string;
    dischargeOutcome_1: string;
    dischargeOutcome_2: string;
    mobility: string;
    dischargeLocation: string;
    dischargeEmployment: string;
    standpoint: number;
    woundCare: number;
    otherReason: number;
    financialReason: number;
    time1To3month: number;
    time3To6month: number;
    time6MonthTo1Year: number;
    time1To2Year: number;
    time2To3Year: number;
    time3PlusYear: number;
}
const initialState: GDFState = {
    dischargeReason: '',
    dischargeOutcome_1: '',
    dischargeOutcome_2: '',
    mobility: '',
    dischargeLocation: '',
    dischargeEmployment: '',
    standpoint: 0,
    woundCare: 0,
    otherReason: 0,
    financialReason: 0,
    time1To3month: 0,
    time3To6month: 0,
    time6MonthTo1Year: 0,
    time1To2Year: 0,
    time2To3Year: 0,
    time3PlusYear: 0,
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
        this.setState({
                [event.target.name]: event.target.value
            } as unknown as Pick<GDFState, keyof GDFState>);
      };

    render() {
        const generateDischargedAliveRecords = (numRecords: number) => {
            let content = [];
            for (let i = 1; i <= numRecords; i++) {
                content.push(
                    <div>
                        <Typography variant="h6">Patient #{i}: Discharged Alive</Typography>
                        <FormControl sx={{ m: 1, minWidth: '48%' }}>
                            <InputLabel id="demo-simple-select-label">Discharge Reason</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"                                                                                                                                                                                                
                                id="demo-simple-select"
                                value={this.state.dischargeReason}
                                name="dischargeReason"
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
                                name="dischargeOutcome_1"
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
                                name="dischargeOutcome_2"
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
                                name="mobility"
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
                                name="dischargeLocation"
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
                                name="dischargeEmployment"
                                label="Discharge Employment Status"
                                onChange={this.dropdownHandleChange}
                            >
                                <MenuItem value={0}>Employed</MenuItem>
                                <MenuItem value={1}>Unemployed, unable to find work</MenuItem>
                                <MenuItem value={2}>Unemployed, due to condition</MenuItem>
                                <MenuItem value={3}>Retired, not working due to age</MenuItem>
                            </Select>
                        </FormControl>
                    </div> 
                )
            }
            return content;
        };

        const generateStayedInWardRecord = () => {
            return (
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <Typography variant="h6">Reason Not Yet Discharged</Typography>  
                        <div>
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id="outlined-required"
                            label="Not ready from therapy standpoint"
                            value={this.state.standpoint}
                            onChange={(e)=>{this.setState({standpoint: +e.target.value})}}
                            />
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="Wound Care"
                            value={this.state.woundCare}
                            onChange={(e)=>{this.setState({woundCare: +e.target.value})}}
                            />
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="Other medical reason (such as IV medication)"
                            value={this.state.otherReason}
                            onChange={(e)=>{this.setState({otherReason: +e.target.value})}}
                            />
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="Financial/no place to discharge to"
                            value={this.state.financialReason}
                            onChange={(e)=>{this.setState({financialReason: +e.target.value})}}
                            />  
                        </div>  
                    <Typography variant="h6">Length of Stay of Current Inpatients </Typography>  
                        <div>
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id="outlined-required"
                            label="1-3 months"
                            value={this.state.time1To3month}
                            onChange={(e)=>{this.setState({time1To3month: +e.target.value})}}
                            />
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="3-6 months"
                            value={this.state.time3To6month} 
                            onChange={(e)=>{this.setState({time3To6month: +e.target.value})}}
                            />
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="6 months-1 year"
                            value={this.state.time6MonthTo1Year}
                            onChange={(e)=>{this.setState({time6MonthTo1Year: +e.target.value})}}
                            />
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="1-2 years"
                            value={this.state.time1To2Year}
                            onChange={(e)=>{this.setState({time1To2Year: +e.target.value})}}
                            />  
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="2-3 years"
                            value={this.state.time2To3Year}
                            onChange={(e)=>{this.setState({time2To3Year: +e.target.value})}}
                            />  
                            <TextField
                            required
                            disabled={this.props.disabled}
                            type="number"
                            inputProps={{ min: 0}}
                            id=""
                            label="3+ years"
                            value={this.state.time3PlusYear}
                            onChange={(e)=>{this.setState({time3PlusYear: +e.target.value})}}
                            />  
                        </div>        
                </Box>
            )     
        }

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
                {/* <div>The shared value is {this.props.dischargedAlive_shared}</div>  */}
                 <div>The shared value is {this.props.stayedinward_shared}</div> 
                <Typography variant="h5">September Hospital Record</Typography>
                <Box>
                    { this.props.dischargedAlive_shared == 0? "" :
                        <div>
                            <Typography variant="h6" color={purple[900]} >{this.props.dischargedAlive_shared} Discharged Alive</Typography>
                            {generateDischargedAliveRecords(this.props.dischargedAlive_shared)}
                        </div>
                    }
                    { this.props.stayedinward_shared == 0? "" :
                        <div>
                            <Typography variant="h6" color={purple[900]} >{this.props.stayedinward_shared} Stayed in the Ward</Typography>
                            {generateStayedInWardRecord()}
                        </div>
                    }
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
