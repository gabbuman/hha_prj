import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';


interface MRProps {

}

interface MRState {
    month: string;
    isEdit: boolean;
    disabled: boolean;
}

interface DFProps {
    disabled: boolean;
}

interface DFState {
    bedsAvailable: string;
    bedDays: string;
    patientDays: string;
    hospitalized: string;
    dischargedAlive: string;
    diedBefore: string; 
    diedAfter: string;
    daysHospitalized: string;
    referrals: string;
    transfers: string;
    selfdischarged: string;
    stayedinward: string;
    admissions: string;
}
const initialState: DFState = {
    bedsAvailable: '10',
    bedDays: '20',
    patientDays: '30',
    hospitalized: '40',
    dischargedAlive: '50',
    diedBefore: '1', 
    diedAfter: '2',
    daysHospitalized: '3',
    referrals: '1',
    transfers: '2',
    selfdischarged: '3',
    stayedinward: '4',
    admissions: '5'
}

class DataForm extends Component <DFProps, DFState> {
    constructor(props: DFProps){
        super(props);
        this.state= initialState;    
    }

    cancelData = () => {
        this.setState(initialState);
    }

    clearData = () => {
        this.setState({
            bedsAvailable: '0',
            bedDays: '0',
            patientDays: '0',
            hospitalized: '0',
            dischargedAlive: '0',
            diedBefore: '0', 
            diedAfter: '0',
            daysHospitalized: '0',
            referrals: '0',
            transfers: '0',
            selfdischarged: '0',
            stayedinward: '0',
            admissions: '0'
        });
    }
 
    render() {
        return (
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
                id="outlined-required"
                label="Beds Available"
                value={this.state.bedsAvailable}
                onChange={(e)=>{this.setState({bedsAvailable: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Bed Days"
                value={this.state.bedDays}
                onChange={(e)=>{this.setState({bedDays: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Patient Days"
                value={this.state.patientDays}
                onChange={(e)=>{this.setState({patientDays: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Hospitalized"
                value={this.state.hospitalized}
                onChange={(e)=>{this.setState({hospitalized: e.target.value})}}
                />    
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Discharged Alive"
                value={this.state.dischargedAlive}
                onChange={(e)=>{this.setState({dischargedAlive: e.target.value})}}
                />          
            </div>
            </Box>
            <Box>
            <Typography variant="h6">Duration</Typography>
            <div>
                <TextField
                required
                disabled={this.props.disabled}
                id="outlined-required"
                label="Died Before 48hr"
                value={this.state.diedBefore}
                onChange={(e)=>{this.setState({diedBefore: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Died After 48hr"
                value={this.state.diedAfter}
                onChange={(e)=>{this.setState({diedAfter: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Days Hospitalized"
                value={this.state.daysHospitalized}
                onChange={(e)=>{this.setState({daysHospitalized: e.target.value})}}
                />         
            </div>
            </Box>
            <Box>
            <Typography variant="h6">Movement</Typography>  
            <div>
                <TextField
                required
                disabled={this.props.disabled}
                id="outlined-required"
                label="Referrals"
                value={this.state.referrals}
                onChange={(e)=>{this.setState({referrals: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Transfers"
                value={this.state.transfers}
                onChange={(e)=>{this.setState({transfers: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Self-Discharged"
                value={this.state.selfdischarged}
                onChange={(e)=>{this.setState({selfdischarged: e.target.value})}}
                />
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Stayed in Ward"
                value={this.state.stayedinward}
                onChange={(e)=>{this.setState({stayedinward: e.target.value})}}
                />  
                <TextField
                required
                disabled={this.props.disabled}
                id=""
                label="Admissions"
                value={this.state.admissions}
                onChange={(e)=>{this.setState({admissions: e.target.value})}}
                />          
            </div>
            </Box>
            </Box>
        )
    }
}

export class MonthlyRecord extends Component <MRProps, MRState> {
    private dataformElement: React.RefObject<DataForm>;
    constructor(props: MRProps){
        super(props);
        this.state = {
            month: "9",
            isEdit: false,
            disabled: true
        };
        this.dataformElement = React.createRef();
    }

    dropdownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({month: event.target.value});
    };

    editClick = () => {
        this.setState({isEdit: true, 
            disabled: false});
    };

    cancelClick = () => {
        this.dataformElement.current.cancelData();
        this.setState({isEdit: false, 
            disabled: true});
    };

    clearClick = () => {
        this.dataformElement.current.clearData();
        // this.setState({isEdit: false, 
        //     disabled: false});
    };

    saveClick = () => {
        this.setState({isEdit: false, 
            disabled: true});
        window.alert("save is successful")
    }

    submitClick = () => {
        this.setState({isEdit: false, 
            disabled: true});
        window.alert("submit is successful")
    }


    render() {
		return (
            <div>
                <Box m={5}>
                <Container maxWidth="md" >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={8}>
                        <Stack direction="row" spacing={2} alignItems="flex-end">
                        <h6>Select the month:</h6>  
                            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="label">month</InputLabel>
                                <Select
                                labelId="label"
                                id="select"
                                value={this.state.month}
                                label="month"
                                onChange={this.dropdownHandleChange}
                                >
                                    <MenuItem value={6}>2021-June</MenuItem>
                                    <MenuItem value={7}>2021-July</MenuItem>
                                    <MenuItem value={8}>2021-August</MenuItem>
                                    <MenuItem value={9}>Recent</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        { this.state.isEdit ? "" :
                            <Stack direction="row" justifyContent="flex-end">
                                <Button variant="contained" color="primary" 
                                onClick={this.editClick}>Edit</Button>
                            </Stack>
                        }                   
                    </Grid>                             
                    <Grid item xs={12}>
                        <DataForm ref={this.dataformElement} disabled={this.state.disabled}/>
                    </Grid>
                    <Grid item xs={4}>
                        { this.state.isEdit ?
                        <Button variant="contained" color="error" onClick={this.cancelClick}>Cancel</Button>
                        : "" }           
                    </Grid>
                    <Grid item xs={8}>
                        { this.state.isEdit ?
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="outlined" color="error" onClick={this.clearClick}>Clear Data</Button>
                            <Button variant="contained" color="warning" onClick={this.saveClick}>Save</Button>
                            <Button variant="contained" color="success" onClick={this.submitClick}>Submit</Button>
                        </Stack>
                        : "" }
                    </Grid> 
                </Grid>  
                </Container>  
                </Box>      
            </div>
        )
    }
}

export default MonthlyRecord
