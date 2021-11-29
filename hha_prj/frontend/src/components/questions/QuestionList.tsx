import React, { useState, Component } from 'react';
import { Grid, Container, Box, Card, CardMedia, CardContent, Typography, 
    Paper, Stack, Button, IconButton  } from '@mui/material';
import {Row, Col, Form, FormGroup} from "react-bootstrap";
import axios from 'axios';
import { endpoint } from '../Endpoint';
import { ThreeSixtyTwoTone } from '@mui/icons-material';
import { green, orange } from '@mui/material/colors';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


interface QLProps {
    dptName: string
}

interface QLState {
    dptName: string;
    questions: string[];
    // red_data_shared: {[key:string]: number};
}


const QuestionList = (props: QLProps, state: QLState) => {
    const [dptName, setDptName] = useState(props.dptName);

    const addClick: any = () => {

    }

    const removeClick: any = () => {

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
                                    <Row className="mt-5">
                                        <Col md>
                                            <Form.Label>Question</Form.Label>
                                            <Form.Control type="text" placeholder="Enter question" />
                                        </Col>
                                        <Col md>
                                            <IconButton className="mt-4" sx={{ color: green[500] }} onClick={() => addClick()}>
                                                <AddBoxIcon/>
                                            </IconButton>
                                            <IconButton className="mt-4" sx={{ color: orange[500] }} onClick={() => removeClick()}>
                                                <IndeterminateCheckBoxIcon/>
                                            </IconButton>
                                        </Col>
                                    </Row>
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