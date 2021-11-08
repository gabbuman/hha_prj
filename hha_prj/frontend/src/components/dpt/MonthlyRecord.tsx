import React, { useState, Component } from 'react';
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
    dischargedAlive_shared: number;
}


export class MonthlyRecord extends Component <MRProps, MRState> {
    constructor(props: MRProps){
        super(props);
        this.state = {
            // month: "9",
            step: 1,
            isEdit: true,
            disabled: false,
            dischargedAlive_shared: 0,
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

    updateShared = (dischargedAlive_shared_value: number) => {
        this.setState({
            dischargedAlive_shared: dischargedAlive_shared_value
        });
    }

    render() {
        const { step } = this.state;

        switch(step){
            case 1:
                return (
                    <div>
                        <Container >   
                            {/* <div>The shared value is {this.state.dischargedAlive_shared}</div> */}
                            <RedDataForm 
                                nextStep={this.nextStep}
                                disabled={this.state.disabled} 
                                dischargedAlive_shared={this.state.dischargedAlive_shared}
                                updateShared={this.updateShared}
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
                                dischargedAlive_shared={this.state.dischargedAlive_shared}
                            />                 
                        </Container>  
                    </div>
                )
        }
    }
}

export default MonthlyRecord
