import React, { useState, Component } from 'react';
import { Grid, Container, Box } from '@mui/material';
import RedDataForm from '../dpt/RedDataForm';
import GreenDataForm from '../dpt/GreenDataForm';

interface MRProps {
    dptName: string;
}

interface MRState {
    // month: string;
    step: number;
    isEdit: boolean;
    disabled: boolean;
    dischargedAlive_shared: number;
    stayedinward_shared: number;
    dptName: string
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
            stayedinward_shared: 0,
            dptName: this.props.dptName
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

    updateShared = (e: React.ChangeEvent<HTMLInputElement>) => {
        var name = e.target.getAttribute('name') + '_shared';
        // console.log(name);
        this.setState({
            [name]: +e.target.value,
        } as unknown as Pick<MRState, keyof MRState>);
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
                                stayedinward_shared={this.state.stayedinward_shared}
                                updateShared={this.updateShared}
                                dptName={this.state.dptName}
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
                                stayedinward_shared={this.state.stayedinward_shared}
                                dptName={this.state.dptName}
                            />                 
                        </Container>  
                    </div>
                )
        }
    }
}

export default MonthlyRecord
