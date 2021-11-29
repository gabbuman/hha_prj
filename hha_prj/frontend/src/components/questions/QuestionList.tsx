import React, { useState, Component, useEffect } from 'react';
import { Grid, Container, Box, Card, CardMedia, CardContent, Typography, 
    Paper, Stack, Button, IconButton  } from '@mui/material';
import {Row, Col, Form, FormGroup} from "react-bootstrap";
import axios from 'axios';
import { endpoint } from '../Endpoint';
import { ThreeSixtyTwoTone } from '@mui/icons-material';
import { green, orange } from '@mui/material/colors';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { SentimentSatisfiedAltSharp } from '@material-ui/icons';


interface QLProps {
    dptName: string
}

interface QLState {
    dptName: string;
    // questions: {[key: string]: any}[];
    questions: string [];
}

const QuestionList = (props: QLProps, state: QLState) => {
    // const [dptName, setDptName] = useState(props.dptName);
    // const [questions, setQuestions] = useState([{
    //     id: 1,
    //     question: ''
    // }])

    const [questions, setQuestions] = useState([])

    // similar as componentDidMount
    // Reference: https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
    useEffect(() => {
        getRecentQuestions();
    }, []);

    const getRecentQuestions = () => {
        axios.get( endpoint + 'api/get_current_field_list/department_name/' + props.dptName)
        .then(function (res){
            setQuestions(res.data);
        })
        .catch(function (error){
            console.log(error);
        })
    }
    const handleChangeInput: any = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        const values: any = [...questions]
        // console.log(values[i])
        values[i][e.target.name] = e.target.value
        setQuestions(values)
    }

    // const addClick: any = () => {
    //     console.log(questions.length);
    //     setQuestions([...questions, {id: questions.length + 1, question: ''}])
    // }

    const addClick: any = () => {
        // console.log(questions.length);
        setQuestions([...questions, ''])
    }

    const removeClick: any = (i: number) => {
        const values: any = [...questions]
        values.splice(i, 1)
        setQuestions(values)
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
                                        <div key={question}>
                                            <Row className="mt-2">
                                                <Col md>
                                                    <Form.Label>Question {i+1}</Form.Label>
                                                    <Form.Control type="text" 
                                                    placeholder="Enter question"
                                                    name = "question"
                                                    value={question}
                                                    onChange={e => handleChangeInput(i, e as any)} 
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
                    <Button variant="contained" color="success" >Submit</Button>
                    </Stack>
                </Box>      
            </div>              
            </Container>  
        </div>
    )
}

export default QuestionList