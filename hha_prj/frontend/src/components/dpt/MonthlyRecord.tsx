import React, { Component } from 'react';
import { Box, TextField, Typography, Stack, Button, 
    FormControl, MenuItem, InputLabel, Select, Grid, Container} from '@mui/material';
import RedDataForm from '../dpt/RedDataForm';

interface MRProps {
}

interface MRState {
    // month: string;
    step: number;
    isEdit: boolean;
    disabled: boolean;
    greenData: string;
}


export class MonthlyRecord extends Component <MRProps, MRState> {
    constructor(props: MRProps){
        super(props);
        this.state = {
            // month: "9",
            step: 1,
            isEdit: true,
            disabled: false,
            greenData: '',
        };
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

     // Go back to prev step
     prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    submitClick = () => {
        window.alert("submit is successful")
    }

    render() {
        const { step } = this.state;

        switch(step){
            case 1:
                return (
                    <RedDataForm 
                        nextStep={this.nextStep}
                        disabled={this.state.disabled} 
                    />
                )
            case 2:
                return (
                    <h1>green form</h1>
                )
        }
		// return (
        //     <div>
        //         <Box m={5}>
        //         <Container maxWidth="md" >
        //         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        //             <Grid item xs={12}>
        //                 <RedDataForm disabled={this.state.disabled}/>
        //             </Grid>
        //             <Grid item xs={4}>
        //             </Grid>
        //             <Grid item xs={8}>
        //                 <Stack direction="row" spacing={2} justifyContent="flex-end">
        //                     <Button variant="contained" color="success" onClick={this.submitClick}>Submit</Button>
        //                 </Stack>
        //             </Grid> 
        //         </Grid>  
        //         </Container>  
        //         </Box>      
        //     </div>
        // )
    }
}

export default MonthlyRecord
