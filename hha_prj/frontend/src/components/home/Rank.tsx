import React, { Component } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Card from "@mui/material/Card";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";

export class Rank extends Component {
    render() {
		return (
            <Card sx={{ maxWidth: 300, boxShadow: 2 }}>
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
              <ListItem alignItems="center">
                <ListItemButton>
                  <ListItemText primary="Rehab" />
                  <LooksOneOutlinedIcon style={{ fill: "#59B030" }} />
                </ListItemButton>
              </ListItem>
              <Divider variant="middle" />
              <ListItem alignItems="center">
                <ListItemButton>
                  <ListItemText primary="Maternity" />
                  <LooksTwoOutlinedIcon style={{ fill: "#59B030" }} />
                </ListItemButton>
              </ListItem>
              <Divider variant="middle" />
              <ListItem alignItems="center">
                <ListItemButton>
                  <ListItemText primary="Community Health" />
                  <Looks3OutlinedIcon style={{ fill: "#59B030" }} />
                </ListItemButton>
              </ListItem>
              <Divider variant="middle" />
              <ListItem alignItems="center">
                <ListItemButton>
                  <ListItemText primary="NICU" />
                  <Looks4OutlinedIcon style={{ fill: "#59B030" }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Card>
        )
    }
}

export default Rank
