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

interface tableProps{
    dptName: string,
    newMonth: number,
    newYear: number
  }

  interface tableState {
    dptName: string,
    month: number;
    year: number;
    dataRecords: {question: string, answer: number}[]
}


const secondaryDataQuestions = [
    "Discharged alive",
    "Died before 48h",
    "Self-discharged",
    "Stayed in the ward",
    "Admissions",
    "Hospitalized"
  ];


  const initialState: tableState = {
    dptName: "",
    month: null,
    year: null,
    dataRecords: []
}



class TableData extends Component <tableProps, tableState> {
    _isMounted = false;
    prevProps: any;
    prevProp: any;
    constructor(props: tableProps){
        super(props);  
        this.state = initialState;
    }
   
    componentDidMount() {
        this._isMounted = true;
        this.setState({dptName: this.props.dptName, month: this.props.newMonth, year: this.props.newYear})
        this.getDptData();
    }

    componentDidUpdate(prevProps: tableProps){
        if (this.props.newMonth !== prevProps.newMonth || this.props.newYear !== prevProps.newYear) {
            this.setState({month: this.props.newMonth, year: this.props.newYear})
            this.setState({dataRecords: initialState.dataRecords});
            this.getDptData();
          }
    }

    async getDptData() {
        fetch(endpoint + 'api/monthly_records/')
        .then(res =>res.json()) 
         .then(  (result)=>{ 
            result.map((data: any)=> (
                data.department == this.state.dptName && data.month == this.state.month && data.year== this.state.year ? this.setState({dataRecords: data.question_answer_list})
                :{}
            ))
        })
        .catch((error) => {
            console.error(error)
          }
        )
    }

    static months: number[]=[]; 
    render (){ 
        return(
            
            <TableContainer component={Paper}>
                <Table sx={{ width: "auto" }} aria-label="simple table">
                    <TableBody>
                        {
                        this.state.dataRecords.length == 0 ?
                        <div > <h3>No Records To View</h3> </div>:
                        this.state.dataRecords.map((row) => (
                            <StyledTableRow
                                key={row.question}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" width="15%" style={{ fontWeight: 700 }}>
                                    {row.question}
                                </TableCell>
                                <TableCell align="left" width="15%">
                                    {row.answer}
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
            </TableContainer>
            )
           
        
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default TableData