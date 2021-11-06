import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MonthlyRecord from '../dpt/MonthlyRecord';
import CaseStudyGridView from '../casestudy/CaseStudyGridView';
import CaseStudyIndividual from '../casestudy/CaseStudyIndividual';

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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 1000 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}

      >
       
        <Button sx={{justifyContent: 'flex-start', textTransform: 'none' , color: "black"}} variant="outlined" startIcon={<ArrowBackIcon />} href="/homepage">
            Back to Home
        </Button>
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Monthly Records" {...a11yProps(1)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Biomechanical Support" {...a11yProps(2)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Employee Of the Month" {...a11yProps(3)} />
        <Tab sx={{alignItems: 'flex-start', textTransform: 'none'}} label="Case Study" {...a11yProps(4)} />

      </Tabs>
      <TabPanel  value={value} index={1}>
        <MonthlyRecord />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CaseStudyIndividual />
      </TabPanel>
    </Box>
  );
}
