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
import axios, { AxiosResponse } from 'axios';
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
    record: {question: string, value: number}[]
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


const initialState: tableState = {
    loading: true,
    month: "",
    year: (new Date()).getFullYear().toString(),
    record: []
}


export class TableData extends Component <tableProps, tableState> {
    constructor(props: tableProps){
        super(props);
        this.state= initialState;  
    }
   
    
    componentDidMount(){
        this.getDptData();
    }

    // async getDptData() {
    //     axios.get(endpoint + 'api/rehab_records/?format=json')
    //     .then(res => {
    //         //this.setMonthList(res.data);
    //         //this.setQuesValueList(res.data);
           
    //         console.log(res);
    //         this.setState({loading: false})
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //       }
    //     )
    // }
    async getDptData() {
        fetch(endpoint + 'api/rehab_records/?format=json')
        .then(res =>res.json())
            
         .then(  (result)=>{ 
            var dataString =JSON.stringify(result);
            
            
            this.setState({loading: false, record: JSON.parse(dataString)})
            //console.log("record" + this.state.record[0]);
            //this.setMonthList(result);
            //this.getQuesValueLists(result);
        })
        .catch((error) => {
            console.error(error)
          }
        )
    }
    static months: string[]
    getMonthList(monthlyRecord: Array<{question: string, value: any}>){
        monthlyRecord.map((record: {question: string, value: any})=> (
           record.question == "month_name" ? (TableData.months.push(record.value)): {}
        ))  
    }
    
    dataRecords: {question: string, value: number}[] []
    // getQuesValueLists(monthlyRecord: Array<object>){
        
    //     monthlyRecord.map((record: object)=> (
    //        //this.dataRecords = Object.keys(record).map((key)=> {key, (record as any)[key]})));
    //        //console.log(this.dataRecords);
    //     )    )
    // }

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