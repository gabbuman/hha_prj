import React, { useState, useEffect } from 'react';
import { Container, Box,  Typography, 
    Paper, Stack, Button, IconButton  } from '@mui/material';
import {Row, Col, Form, FormGroup} from "react-bootstrap";
import { endpoint } from '../Endpoint';
import { green, orange } from '@mui/material/colors';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import axios, { AxiosResponse } from 'axios';
import { notifyFail, notifySuccess } from '../login/Notifications';

interface QLProps {
    dptName: string
}

interface QLState {
    dptName: string;
    questions: string [];
}

const QuestionList = (props: QLProps, state: QLState) => {
    const [questions, setQuestions] = useState([])

    // similar as componentDidMount
    // Reference: https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
    useEffect(() => {
        getRecentQuestions();
    }, []);

    const getRecentQuestions = () => {
        axios.get( endpoint + 'api/current_field_list/', {
            params: {
                department: props.dptName
            }
        })
        .then(function (res: AxiosResponse<any>){
            setQuestions(res.data[0].list);
        })
        .catch(function (error){
            console.log(error);
        })
    }
    const handleChangeInput: any = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        const values: any = [...questions]
        // console.log(values[i])
        values[i] = e.target.value
        setQuestions(values)
    }

    const addClick: any = () => {
        // console.log(questions.length);
        setQuestions([...questions, ''])
    }

    const removeClick: any = (i: number) => {
        const values: any = [...questions]
        values.splice(i, 1)
        setQuestions(values)
    }

    const isDuplicates = (arr: string []) => {
        var duplicates = []
        duplicates = arr.filter((item, index) => arr.indexOf(item) != index)
        return (duplicates.length > 0)
    }

    const isEmpty = (arr: string []) => {
        var empty = []
        empty = arr.filter(item => item == '')
        return (empty.length > 0)
    }

    const submitClick: any = () => {
        // console.log(isDuplicates(questions));
        if (isDuplicates(questions)){
            notifyFail('Sorry, Submit fails with duplicated questions.');
            // console.log(questions)
            return
        }   
        if (isEmpty(questions)){
            notifyFail('Sorry, Submit fails with empty questions.');
            return
        }            
        axios.put( endpoint + 'api/current_field_list/' + props.dptName + '/', {
            list: questions,
            department: props.dptName
        })
        .then(function (res){
            notifySuccess('Submit success!');
            // console.log(res.data);
        })
        .catch(function (error){
            notifyFail('Sorry, Submit fails.');
            // console.log(error);
        })
    }

    return (             
        <div>
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
                    <Typography variant="h5">Customize Questions</Typography>
                    <Box>
                            <Form>
                                <FormGroup>
                                    {questions.map((question, i) => (
                                        <div key={i+1}>
                                            <Row className="mt-2">
                                                <Col md>
                                                    <Form.Label>Question {i+1}</Form.Label>
                                                    <Form.Control type="text" 
                                                    placeholder="Enter question"
                                                    name = "question"
                                                    value={question}
                                                    onChange={e => handleChangeInput(i, e)} 
                                                    />
                                                </Col>
                                                <Col md>
                                                    <IconButton className="mt-4" sx={{ color: green[500] }} onClick={() => addClick()}>
                                                        <AddBoxIcon/>
                                                    </IconButton>
                                                    <IconButton className="mt-4" sx={{ color: orange[500] }} onClick={() => removeClick(i)}>
                                                        <IndeterminateCheckBoxIcon/>
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
        </div>
    )
}

export default QuestionList
