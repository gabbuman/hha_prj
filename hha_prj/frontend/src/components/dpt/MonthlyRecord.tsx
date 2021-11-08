import React, { Component } from 'react';
import { Grid, Container, Box } from '@mui/material';
import RedDataForm from '../dpt/RedDataForm';
import GreenDataForm from '../dpt/GreenDataForm';

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

    render() {
        const { step } = this.state;

        switch(step){
            case 1:
                return (
                    <div>
                        <Container >                    
                            <RedDataForm 
                                nextStep={this.nextStep}
                                disabled={this.state.disabled} 
                            />                     
                        </Container>  
                    </div>
                )
            case 2:
                return (             
                    <div>
                        <Container >                   
                            <GreenDataForm 
                                prevStep={this.prevStep}
                                disabled={this.state.disabled} 
                            />                 
                        </Container>  
                    </div>
                )
        }
    }
}

export default MonthlyRecord
