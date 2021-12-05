import React, { useState, Component, useEffect } from 'react';
import { Container, Card, CardMedia, CardContent, Box,  Typography, 
    Paper, Stack, Button, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Row, Col, Form, FormGroup} from "react-bootstrap";
import axios, { AxiosResponse } from 'axios';
import { endpoint } from '../Endpoint';

interface DEProps {
    dptName: string;
}

interface DEState {
    step: number;
    isEdit: boolean;
    disabled: boolean;
    questionAndAswer: {
        open: boolean,
        id: number,
        question: string,
        answer: string,
        greendata: []
    }[];
}




const DataEntry = (props: DEProps, state: DEState) => {
    const [step, setStep] = useState(1);
    const [questionAndAswer, setQuestionAndAswer] = useState([]);

    useEffect(() => {
        initializeDataEntryPage();
    }, []);

    const initializeDataEntryPage = () => {
        // TODO - add dptName
        axios.get( endpoint + 'api/check_current_month_submission_status')
        .then(function (res: AxiosResponse<any>){
            console.log("record exist: " + res.data);
            if (res.data == true){
                setStep(2);
            } else {
                setStep(1);
                getRecentQuestions();
            }
        })
        .catch(function (error){
            console.log(error);
        })
    }

    const getRecentQuestions = () => {
        var questions: any = [];
        axios.get( endpoint + 'api/current_field_list/', {
            params: {
                department: props.dptName
            }
        })
        .then(function (res: AxiosResponse<any>){
            questions = res.data[0].list
            console.log(questions);
            initializeQuestionAndAswer(questions);
            console.log(questionAndAswer);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    const initializeQuestionAndAswer = (questions: string[]) => {
        questions.map((question: string, i) => {
            setQuestionAndAswer((oldValue) => [...oldValue, 
            {
                open: false,
                id: i+1,
                question: question,
                answer: '',
                greendata: []
            }])
        })
    }

    const handleChangeInput: any = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        const values: any = [...questionAndAswer]
        // console.log(values[i])
        values[i][e.target.name] = e.target.value
        setQuestionAndAswer(values)
    }

    const handleChangeIcon: any = (i: number, openStatus: boolean) => {
        const values: any = [...questionAndAswer]
        values[i]["open"] = openStatus
        setQuestionAndAswer(values)
    }

    const submitClick: any = () => {          
        // axios.put( endpoint + 'api/current_field_list/' + props.dptName + '/', {
        //     list: questions,
        //     department: props.dptName
        // })
        // .then(function (res){
        //     notifySuccess('Submit success!');
        //     // console.log(res.data);
        // })
        // .catch(function (error){
        //     notifyFail('Sorry, Submit fails.');
        //     // console.log(error);
        // })
    }

    const StepOne = () => {
        return (
                <Container >   
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
                    <Typography variant="h5">Data Entry</Typography>
                    <Box>
                        <Form>
                            <FormGroup>
                                {questionAndAswer.map((element: any, i) => (
                                    <div key={element.id}>
                                        <Row className="mt-2">
                                            <Col md>
                                                <Form.Label>Question {element.id}</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                disabled
                                                name="question"
                                                value={element.question}
                                                />
                                            </Col>
                                            <Col md>
                                                <Form.Label>Answer {element.id}</Form.Label>
                                                <Form.Control 
                                                type="number"  
                                                min="0"
                                                placeholder="Enter answer"
                                                name = "answer"
                                                value={element.answer}
                                                onChange={e => handleChangeInput(i, e)} 
                                                />
                                            </Col>
                                            <Col md>
                                                <IconButton
                                                    className="mt-4"
                                                    aria-label="expand row"
                                                    size="small"
                                                    onClick={e => handleChangeIcon(i, !element.open)}
                                                >
                                                    {element.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </FormGroup>
                        </Form>              
                    </Box>
                    </Box>
                </Paper>
                <Box>              
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button variant="contained" color="success" onClick={() => submitClick()}>Submit</Button>
                    </Stack>
                </Box>      
                </div>                  
                </Container>  
        )
    }

    const StepTwo = () => {
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
                The recent month's data has been submitted!
              </Typography>
            </CardContent>
          </Card>
        )
    }
        
    if (step == 1)
    {
        return StepOne();
    } else if (step == 2)
    {
        return StepTwo();
    } else 
    {
        return (<div></div>);
    }
}

export default DataEntry

