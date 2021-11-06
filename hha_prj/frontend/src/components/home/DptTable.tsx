import * as React from 'react';
import { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TimelineIcon from '@mui/icons-material/Timeline';
import { grey } from '@mui/material/colors';
import { Box, Container, Grid, Stack, FormControl, InputLabel, Select, MenuItem, createTheme, ThemeProvider, IconButton} from '@mui/material';
import { createStyles, withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: grey[200],
      },
    },
  }),
)(TableRow);

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


function createData(
    name: string,
    value: number
  ) {
    return { name, value };
  }

  interface tableProps{

  }

  interface tableState {
    month: string;
    year: number;
}

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

const rows = [
    createData('Beds available', 159 ),
    createData('Beds available', 237),
    createData('Beds available', 262),
    createData('Beds available', 305),
  ];

const initialState: tableState = {
    month: months[(new Date()).getMonth()-1],
    year: (new Date()).getFullYear()
}


 class TableData extends Component <tableProps, tableState> {
    constructor(props: tableProps){
        super(props);
        this.state= initialState;    
    }

    render (){


        return(
            <TableContainer component={Paper}>
                <Table sx={{ width: "auto" }} aria-label="simple table">
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" width="15%"  style={{fontWeight: 700}} >
                            {row.name}
                        </TableCell>
                        <TableCell align="left" width="15%" >
                            {row.value}
                        </TableCell>
                        <TableCell align="right" width="100%" >
                            <IconButton  >
                                <TimelineIcon sx={{ color: grey[500]}}/>
                            </IconButton >
                            
                        </TableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export class DptTableView extends Component<tableProps, tableState> {

    private tabledataElement: React.RefObject<TableData>;
    constructor(props: tableProps){
        super(props);
        this.state = {
            month: months[(new Date()).getMonth()-1],
            year: (new Date()).getFullYear()
        };
        this.tabledataElement = React.createRef();
    }

    dropdownHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({month: event.target.value});
    }

    render (){

        let minOffset = 0, maxOffset = 10;
        let thisYear = (new Date()).getFullYear();
        let years = [];
        for(let x = 0; x <= maxOffset; x++) {
            years.push(thisYear - x)
        }

        return(
            <div> 
                    <Box m={5}>
                    <Container maxWidth="md" > 
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8}>
                        {   
                            <Stack direction="row" spacing={2} alignItems ="flex-end">
                            <h6>Viewing data from:</h6>  
                                <FormControl required sx={{ m: 1, minWidth: 100 }}>
                                    <InputLabel id="label">month</InputLabel>
                                    <Select
                                    labelId="label"
                                    id="select"
                                    label="month"
                                    value={this.state.month}
                                    onChange={this.dropdownHandleChange}
                                    >
                                        {months.map((month) => (
                                            <MenuItem value={month}> {month}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl> 
                                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="label">Year</InputLabel>
                                    <Select
                                    labelId="label"
                                    id="select"
                                    label="year"
                                    value={this.state.year}
                                    onChange={this.dropdownHandleChange}
                                    >
                                        {years.map((year) => (
                                            <MenuItem value={year}> {year}
                                            </MenuItem>
                                        ))}
                                        
                                    </Select>
                                </FormControl>
                            </Stack>
                            } 
                        </Grid>
                        <Grid item xs={4}>
                            { 
                                <Stack direction="row" justifyContent="flex-end">
                                    <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="neutral">Export</Button>
                                    </ThemeProvider>
                                </Stack>
                            }                   
                        </Grid>                             
                        <Grid item xs={12}>
                            <TableData ref={this.tabledataElement}/>
                        </Grid>
                        </Grid>
                        </Container>  
                    </Box>      
                </div>
        )
    }
}

export default DptTableView
