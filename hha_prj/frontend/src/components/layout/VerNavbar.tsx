import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Grid, Button} from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DataEntry from '../dataentry/DataEntry';
import DptTableView from '../DataTable/DptTableView';
import CaseStudyGridView from '../casestudy/CaseStudyGridView';
import CaseStudyIndividual from '../casestudy/CaseStudyIndividual';
import CaseStudySubmissionForm from '../casestudy/CaseStudyInputForm';
import DptPage from '../dpt/DptPage';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { RecordData } from '../home/Department Card/RecordData';
import {DptGraphCard} from '../home/Department Card/DptGraphCard';
import { render } from 'react-dom';
import { Component } from 'react';
import Biosuptform from '../biomechanicalform/Biosuptform';
import ViewBioform from '../biomechanicalform/ViewBioform';
import QuestionList from '../questions/QuestionList';
import Header from './Header';
import DepartmentGraphPage from '../home/Department Card/DptGraphPage'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (      
    <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    tabs: {
      "& .MuiTab-wrapper": {
        flexDirection: "row",
        justifyContent: "flex-start"
      }
    }
  }));

  interface verNavProps{
    dptName: string
  }

  interface verNavState{
    value: number,
    dptName: string
  }

  const initialState: verNavState = {
    value: 1,
    dptName: ""
  }
export default class verNavbar extends Component<verNavProps, verNavState> {
  constructor(props:any){
    super(props); 
    this.state = {
        value: props.location.state.value,
        dptName: props.location.state.dptName};
  }
  render(){

     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
       {newValue}
      this.setState({value: newValue});
    };

  return (
     <> 
    <Header title= {"Hope Health Action / " + this.state.dptName}/> 
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 1000 }}
    >
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={this.state.value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}

      >
        <Button sx={{justifyContent: 'flex-start', textTransform: 'none' , color: "black"}} variant="outlined" startIcon={<ArrowBackIcon />} href="/homepage">
            Back to Home
        </Button>
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Data Record Archive" {...a11yProps(1)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Graphs" {...a11yProps(2)} /> 
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Data Entry" {...a11yProps(3)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Question List Template" {...a11yProps(4)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Case Study" {...a11yProps(5)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Biomechanical Support" {...a11yProps(6)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="View Biomechanical Requests" {...a11yProps(7)} /> 
      </Tabs>

      <Grid item xs={10}>
        <TabPanel value={this.state.value} index={1}>
          <DptTableView dptName={this.state.dptName}/>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <DepartmentGraphPage departmentName={this.state.dptName}/>
        </TabPanel>
        <TabPanel  value={this.state.value} index={3}>
          <DataEntry dptName={this.state.dptName}/>
        </TabPanel>
        <TabPanel  value={this.state.value} index={4}>
          <QuestionList dptName={this.state.dptName}/>
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          <CaseStudyGridView dptName={this.state.dptName}/>
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          <Biosuptform dptName={this.state.dptName}/>
        </TabPanel>
        <TabPanel value={this.state.value} index={7}>
          <ViewBioform dptName={this.state.dptName}/>
        </TabPanel>
      </Grid>
    </Box>
    </>
  );
  }
}
