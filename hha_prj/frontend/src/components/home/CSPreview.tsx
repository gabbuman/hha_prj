import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import axios from 'axios';
import { endpoint } from '../Endpoint'

export class CSPreview extends Component<{}, { caseStudyList: any }> {

    componentDidMount(){
        this.retrieveCaseStudies();
    }

    retrieveCaseStudies = () => {
        axios.get(endpoint + 'api/retrieve_case_studies_for_preview')
          .then(res => {
            console.log("cspreview!!!!!!!!!")
            console.log(res.data)
            this.setState({
                caseStudyList:res.data,
            });
          })
          .catch((error) => {
            console.error(error)
          }
        );
    }

    render (){
        return(
            <Card sx={{ maxWidth: 300, boxShadow:3}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {this.state?.caseStudyList.map((item:any, i:number) => {
                        return  <div>
                            <ListItem alignItems="center" key={i}>
                                <ListItemButton component={Link as any} to={{pathname:"/csindividual", state:item?.id}}>
                                    <ListItemText
                                    primary={item?.title}
                                    secondary={
                                        <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="#B46FBC"
                                        >
                                            {item?.department_id} - {item?.type_id}
                                        </Typography>
                                        <br></br>{item?.description}
                                        </React.Fragment>
                                    }
                                    />
                                    <ArrowForward style={{fill: "#B46FBC"}}/>
                                </ListItemButton>
                            </ListItem>
                            {this.state?.caseStudyList.length - 1 === i ? <div></div> : <Divider component="li" /> }
                        </div>
                    })}
                </List>
            </Card>
        )
    }
}

export default CSPreview
