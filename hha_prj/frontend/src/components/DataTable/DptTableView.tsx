import * as React from 'react';
import { Component } from 'react';
import Button from '@mui/material/Button';
import { Box, Container, Grid, Stack, FormControl, InputLabel, Select, MenuItem, createTheme, ThemeProvider} from '@mui/material';
import TableData from './DptTableData';

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

export const months = [
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

interface tableProps{
   dptName: string;
}

interface tableState {
    month: string;
    year: string;
}

const initialState: tableState = {    
    month: months[(new Date()).getMonth()],
    year: (new Date()).getFullYear().toString(), 
}

export class DptTableView extends Component<tableProps, tableState> {

    private tabledataElement: React.RefObject<TableData>;
    constructor(props: tableProps){
        super(props);
        this.state = initialState;
        this.tabledataElement = React.createRef();
    }

    dropdownHandleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({month: event.target.value});     
    }

    dropdownHandleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({year: event.target.value});
    }

    render (){

        let maxOffset = 10;
        let thisYear = (new Date()).getFullYear();
        let years: number[] = [];
        for(let x = 0; x <= maxOffset; x++) {
            years.push(thisYear - x)
        }

        return(
            <div> 
                    <Container maxWidth="md" > 
                    <Box m={5}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
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
                                    onChange={this.dropdownHandleMonthChange}
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
                                    onChange={this.dropdownHandleYearChange}
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
                        </Grid>
                        </Box>   
                                                   
                        <Grid item xs={12}>
                                <TableData ref={this.tabledataElement} dptName={this.props.dptName} newMonth={months.indexOf(this.state.month) + 1} newYear={parseInt(this.state.year)} />
                        
                        </Grid> 
                        </Container>  
                         
                </div>
        )
    }
} 

export default DptTableView

