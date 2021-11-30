import React, { useState, Component } from 'react';
import { Grid, Container, Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import RedDataForm from '../dpt/RedDataForm';
import GreenDataForm from '../dpt/GreenDataForm';
import axios, { AxiosResponse } from 'axios';
import { endpoint } from '../Endpoint';
import { ThreeSixtyTwoTone } from '@mui/icons-material';

interface MRProps {
    dptName: string;
}

interface MRState {
    step: number;
    isEdit: boolean;
    disabled: boolean;
    dischargedAlive_shared: number;
    stayedinward_shared: number;
    dptName: string;
    default_questions: string[];
    // red_data_shared: {[key:string]: number};
}


export class MonthlyRecord extends Component <MRProps, MRState> {
    constructor(props: MRProps){
        super(props);
        this.state = {
            step: 1,
            isEdit: true,
            disabled: false,
            dischargedAlive_shared: 0,
            stayedinward_shared: 0,
            dptName: this.props.dptName,
            default_questions: [],
        };
    }

    componentDidMount = () => {
        this.initializeMonthlyRecordPage();
    }

    initializeMonthlyRecordPage = () => {
        var self = this;
        // TODO - add dptName
        axios.get( endpoint + 'api/check_current_month_submission_status')
        .then(function (res){
            // console.log(typeof(res.data)); // boolean
            if (res.data == true){
                self.setState({
                    step: 3
                });
            } else {
                self.getDefaultQuestions();
            }
        })
        .catch(function (error){
            console.log(error);
        })
    }

    getDefaultQuestions = () => {
        var self = this;
        // const questions = ["beds_available", "bed_days", "patient_days", "hospitalized", "discharged_alive"...]
        var questions = []
        axios.get( endpoint + 'api/current_field_list/', {
            params: {
                department: self.props.dptName
            }
        })
        // axios.get( endpoint + 'api/current_field_list/' + 'Rehab/')
        .then(function (res: AxiosResponse<any>){
            console.log(res.data[0].list); 
            questions = res.data[0].list;
            self.setState({
                default_questions: questions
            })
        })
        .catch(function (error){
            console.log(error);
        })
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
                                // dptName={this.state.dptName}
                                
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
                                //dptName={this.state.dptName}
                            />                 
                        </Container>  
                    </div>
                )
            case 3:
                return (
                    <Card style={{width: '100%', height: 550, overflow: 'auto', padding: 10, margin: 10 }}>
                    <CardMedia
                      component="img"
                      alt="cong"
                      height="450"
                      image="/static/pikachu.png"
                    />
                    <CardContent>
                      <Typography align="center" variant="h5" component="div">
                        The recent month's record has been submitted!
                      </Typography>
                    </CardContent>
                  </Card>
                )
            }
        }
    }

export default MonthlyRecord
