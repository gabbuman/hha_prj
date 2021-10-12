import * as React from 'react';
import { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';

export class CSPreview extends Component {
    render (){
        return(
            <Card sx={{ maxWidth: 300, boxShadow:3}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="center">
                        <ListItemButton>
                            <ListItemText
                            primary="Patient Story"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Maternity
                                </Typography>
                                {" — Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                                </React.Fragment>
                            }
                            />
                            <ArrowForward style={{fill: "#B46FBC"}}/>
                        </ListItemButton>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="center">
                        <ListItemButton>
                            <ListItemText
                            primary="Staff Recognition"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Rehab
                                </Typography>
                                {" — Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                                </React.Fragment>
                            }
                            />
                            <ArrowForward style={{fill: "#B46FBC"}}/>
                        </ListItemButton>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="center">
                        <ListItemButton>
                            <ListItemText
                            primary="Equiptment Recieved"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    NICU
                                </Typography>
                                {' — Lorem ipsum dolor sit amet, consectetur adipiscing elit...'}
                                </React.Fragment>
                            }
                            />
                            <ArrowForward style={{fill: "#B46FBC"}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Card>
        )
    }
}

export default CSPreview
