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
import { Button, createTheme, ThemeProvider, Grid, IconButton, Stack, Box, Modal } from '@mui/material';
import { CSVLink } from "react-csv";
import { months } from './DptTableView';

import { PDFExport} from '@progress/kendo-react-pdf';
import { DptGraphCard } from '../home/Department Card/DptGraphCard';

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
    dptDataAll: {question: any, answer: any}[]
    dptData: {question: any, answer: any}[]
    getAllData: boolean;
    min_month: number;
    max_month:number;
    max_year: number;
    min_year: number;
    graphQuestion: string;
}

const theme = createTheme({
    palette: {
      neutral: {
        main: '#ffffff',
        contrastText: '#ff',
      },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
}

interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      neutral: true;
    }
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
    dataRecords: [],
    dptDataAll: [],
    dptData:[],
    getAllData: true,
    min_month: (new Date()).getMonth() - 12,
    max_month: (new Date()).getMonth(),
    max_year: (new Date()).getFullYear(),
    min_year: (new Date()).getFullYear() -1,
    graphQuestion: "",
}

let modalIsOpen = false;

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    outline: 0,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
        this.setState({dptName: this.props.dptName, month: this.props.newMonth, year: this.props.newYear});
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
                :{},
                this.state.getAllData && (data.department == this.state.dptName )? this.setState({dptDataAll: this.state.dptDataAll.concat({question:"Month/Year", answer:""+ months[data.month] + "/"+ data.year}), dptData: data.question_answer_list})
                :{dptData: []},
                this.state.getAllData && (data.department == this.state.dptName)? this.setState({dptDataAll: this.state.dptDataAll.concat(this.state.dptData)}): {}
            ))
            this.setState({getAllData: false});
        })
        .catch((error) => {
            console.error(error)
          }
        )
        
    }

    
    handleOpen(question: string) {
        this.setState({
            graphQuestion: question
        }),
        modalIsOpen = true;

        this.forceUpdate();
    }
    
    
    static months: number[]=[]; 
    render (){ 

        const pdfExportComponent = React.createRef<PDFExport>();
        const exportPDFWithComponent = () => {
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
        }

        const CsvReport = {
            data: this.state.dataRecords,
            filename: 'MonthlyReport_' + this.state.dptName + '_' + months[this.state.month]  + '_' + this.state.year + '.csv'
          };

        const CsvReportAll= {
            data: this.state.dptDataAll,
            filename: 'MonthlyReport_all_' + this.state.dptName + '.csv'
          };
        
        const handleClose = () => {
            modalIsOpen = false;
            this.forceUpdate();
        }
      
        return(
            <>
                <Box m={5}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={8}>
                        { 
                            <Stack direction="row" justifyContent="flex-end">
                                <ThemeProvider theme={theme}>
                                        { <Button variant="contained" color="neutral" onClick = {exportPDFWithComponent}>Export Current to PDF</Button>  }  
                                </ThemeProvider>
                            </Stack>
                        }                   
                    </Grid> 
                    <Grid item xs={4} md={4}>
                    { 
                        <Stack direction="row" justifyContent="flex-end">
                                <ThemeProvider theme={theme}>
                                    <CSVLink {...CsvReport} >
                                    <Button variant="contained" color="neutral"> Export current to CSV </Button>
                                    </CSVLink>
                                </ThemeProvider>
                            
                        </Stack>
                    }                   
                </Grid> 

                <Grid item xs={4} md={4}>
                    <Stack direction="row" justifyContent="flex-end">
                            <ThemeProvider theme={theme}>
                                <CSVLink {...CsvReport} >
                                <Button variant="contained" color="neutral"> Export current to CSV </Button>
                                </CSVLink>
                            </ThemeProvider>
                        
                    </Stack>
                </Grid>
                
                <Grid item xs={4} md={4}>
                    <Stack direction="row" justifyContent="flex-end">
                            <ThemeProvider theme={theme}>
                                <CSVLink {...CsvReportAll} >
                                <Button variant="contained" color="neutral" > Export All records to CSV </Button>
                                </CSVLink>
                            </ThemeProvider>
                        
                    </Stack>
                </Grid>
            </Grid>
            </Box>
            <Box m={5}>
            <PDFExport
                ref={pdfExportComponent}
                paperSize="A2"
                margin={'4cm'}
                fileName={`MonthlyReport_` + this.props.dptName + '_' + this.state.month +this.state.year}
                >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <TableContainer component={Paper}>
                    <Table sx={{ width: "auto" }} aria-label="simple table">
                        <TableBody>
                            {this.state.dataRecords.length == 0 ?
                                <div> <h3>No Records To View</h3> </div> :
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
                                            <IconButton onClick = {() =>this.handleOpen(row.question)}>
                                                <TimelineIcon sx={{ color: grey[500] }} />
                                            </IconButton> 
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            </PDFExport>
            <Modal
                open={modalIsOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={modalStyle}>
                    <DptGraphCard 
                        department={this.state.dptName}
                        field= {this.state.graphQuestion}
                        minMonth={this.state.min_month}
                        minYear={this.state.min_year}
                        maxMonth={this.state.max_month}
                        maxYear={this.state.max_year}
                        width={550} 
                        height={400}/>
                        
                </Box>
            </Modal>
                </Box>
                </>
            )
           
        
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default TableData
