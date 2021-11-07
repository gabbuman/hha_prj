import * as React from 'react';
import { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TimelineIcon from '@mui/icons-material/Timeline';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import axios from 'axios';
import { endpoint } from '../Endpoint';
import { grey } from '@mui/material/colors';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import { IconButton } from '@mui/material';

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: grey[200],
      },
    },
  }),
)(TableRow);

function createData(
    question: string,
    value: number
  ) {
    return { question, value };
  }

  interface tableProps{

  }

  interface tableState {
    loading: boolean,
    month: string;
    year: string;
}

const rows = [
    createData('Beds available', 5 ),
    createData('Bed Days', 0),
    createData('Patient Days', 3),
    createData('Hospitalized', 5),
    createData('Discharged alive', 5),
    createData('Died before 48h', 2),
    createData('Referrals', 1),
    createData('Transfers', 1),
    createData('Self-discharged', 1),
    createData('Stayed in the ward', 1),
    createData('Admissions', 1),
  ];

  const secondaryDataQuestions = [
    "Discharged alive",
    "Died before 48h",
    "Self-discharged",
    "Stayed in the ward",
    "Admissions",
    "Hospitalized"
  ];


const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
]

const initialState: tableState = {
    loading: true,
    month: months[(new Date()).getMonth()-1],
    year: (new Date()).getFullYear().toString()
}


export class TableData extends Component <tableProps, tableState> {
    constructor(props: tableProps){
        super(props);
        this.state= initialState;    
    }
    
    
     async getDptData() {
        this.setState({loading: false})
        fetch(endpoint + '/api/rehab_department')
       .then(async res =>{
           const data = await res.json();
            if(!res.ok){
                    const error = res.statusText;
                } 
            console.log(data);
            this.setState({loading: false})
        })
        .catch(error =>{
            console.error("Error....", error);
        });   
    }
   
    
    render (){ 

        return(
            <><div>{this.state.loading ? (<div>loading..</div>) : (<div> done..</div>)}</div>
            <TableContainer component={Paper}>
                <Table sx={{ width: "auto" }} aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow
                                key={row.question}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" width="15%" style={{ fontWeight: 700 }}>
                                    {row.question}
                                </TableCell>
                                <TableCell align="left" width="15%">
                                    {row.value}
                                </TableCell>
                                <TableCell align="right" width="100%">
                                    {secondaryDataQuestions.includes(row.question) &&
                                        <IconButton>
                                            <NotesOutlinedIcon sx={{ color: grey[500] }} />
                                        </IconButton>}
                                </TableCell>
                                <TableCell align="right" width="100%">
                                    <IconButton>
                                        <TimelineIcon sx={{ color: grey[500] }} />
                                    </IconButton>
                                </TableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
        )
    }
}

export default TableData