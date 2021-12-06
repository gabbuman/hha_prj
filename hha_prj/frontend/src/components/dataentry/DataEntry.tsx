import React, { useState, Component, useEffect } from 'react';
import { Container, Card, CardMedia, CardContent, Box,  Typography, 
    Paper, Stack, Button, IconButton, Collapse, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Row, Col, Form, FormGroup} from "react-bootstrap";
import axios, { AxiosResponse } from 'axios';
import { endpoint } from '../Endpoint';
import { notifyFail, notifySuccess } from '../login/Notifications';

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
        answer: number,
        greendata: []
    }[];
    stayedInWardData: {
        id: number,
        question: string,
        answer: number
    }[];  
}




const DataEntry = (props: DEProps, state: DEState) => {
    const [step, setStep] = useState(1);
    const [questionAndAswer, setQuestionAndAswer] = useState([]);
    const [stayedInWardData, setStayedInWardData] = useState([]);
    const stayedInWardDataQuestions = [
        "Not ready from therapy standpoint",
        "Wound care",
        "Other medical reason (such as IV medication)",
        "Financial/no place to discharge to",
        "Stay length: 1-3 months",
        "Stay length: 3-6 months",
        "Stay length: 6 months-1 year",
        "Stay length: 1-2 years",
        "Stay length: 2-3 years",
        "Stay length: 3+ years",
    ]

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
                answer: null,
                greendata: []
            }])
        })
    }

    const updateStayedInWardData = (questions: string[]) => {
        // console.log(stayedInWardData);
        if (!stayedInWardData.length)
        {
            // console.log("check")
            questions.map((question: string, i) => {
                setStayedInWardData((oldValue) => [...oldValue, 
                {
                    id: i+1,
                    question: question,
                    answer: null
                }])
            })
        }
    }

    const handleChangeInput: any = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        const values: any = [...questionAndAswer]
        // console.log(values[i])
        values[i][e.target.name] = +e.target.value
        setQuestionAndAswer(values)
        if(values[i]["question"] == "Stayed In Ward")
        {
            if(values[i]["answer"] > 0)
            {
                // console.log("check0")
                updateStayedInWardData(stayedInWardDataQuestions);
            } else if(values[i]["answer"] == 0)
            {
                setStayedInWardData([]);
            }
        }
    }

    const handleChangeIcon: any = (i: number, openStatus: boolean) => {
        const values: any = [...questionAndAswer]
        values[i]["open"] = openStatus
        setQuestionAndAswer(values)
    }

    const handleChangeInputStayedGreen: any = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        const values: any = [...stayedInWardData]
        // console.log(values[i])
        values[i][e.target.name] = +e.target.value
        setStayedInWardData(values)
    }

    const isEmpty = (arr: any []) => {
        var empty = []
        empty = arr.filter(item => item.answer == null)
        return (empty.length > 0)
    }

    const addGreenInData = () => {
        questionAndAswer.map((cell: any, i) => {
            if( cell.question == "Stayed In Ward" )
            {
                const values:any = [... questionAndAswer]
                values[i]["greendata"] = stayedInWardData;
                setStayedInWardData(values)
            }
        })
    }

    const submitClick: any = () => {  
        // console.log(questionAndAswer);  
        var currentTime = new Date(); 
        // console.log(currentTime.getFullYear(), currentTime.getMonth()); 
        // console.log(stayedInWardData);
        addGreenInData();
        // console.log(questionAndAswer);
        if (isEmpty(questionAndAswer)){
            notifyFail('Sorry, Submit fails with empty input for red data.');
            return
        }  
        axios.post( endpoint + 'api/monthly_records/', {
            question_answer_list: questionAndAswer,
            department: props.dptName,
            year: currentTime.getFullYear(),
            month: currentTime.getMonth()
        })
        .then(function (res){
            notifySuccess('Submit success!');
            console.log(res.data);
        })
        .catch(function (error){
            notifyFail('Sorry, Submit fails.');
            console.log(error);
        })
    }

    const stayedInWard: any = (element: any) => {
        if (element.answer == 0)
        {
            return (<div></div>)
        } else {
            return (
                <Collapse in={element.open} timeout="auto" unmountOnExit>
                  <Box>
                    <Form>
                        <FormGroup>
                            {stayedInWardData.map((ele: any, i) => (
                                <div key={ele.id}>
                                    <Row className="mt-2">
                                        <Col md>
                                            {/* <Form.Label>Question {ele.id}</Form.Label> */}
                                            <Form.Control 
                                            type="text" 
                                            disabled
                                            name="question"
                                            value={ele.question}
                                            />
                                        </Col>
                                        <Col md>
                                            {/* <Form.Label>Answer {ele.id}</Form.Label> */}
                                            <Form.Control 
                                            type="number"  
                                            min="0"
                                            placeholder="Enter answer"
                                            name = "answer"
                                            value={ele.answer}
                                            onChange={e => handleChangeInputStayedGreen(i, e)} 
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </FormGroup>
                    </Form>              
                </Box>
              </Collapse>
            )
        }
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
                                        <div className="ml-4">
                                            {element.question != "Stayed In Ward"? 
                                                <div></div> :
                                                stayedInWard(element)
                                            }
                                        </div>
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

