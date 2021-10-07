import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

export default function AlignItemsList() {
  return (
    <Card sx={{ maxWidth: 350 }}>
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
            <Divider variant="inset" component="li" />
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
            <Divider variant="inset" component="li" />
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
  );
}
