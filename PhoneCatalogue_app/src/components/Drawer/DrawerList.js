import React from 'react';
import { NavLink } from "react-router-dom";

import DashboardIcon from '@material-ui/icons/Dashboard';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link:{
        textDecoration: 'none',
        color: '#000',
    },
});

export default function DrawerList() {
    
    const classes = useStyles();

    return (
        <List component="nav" aria-label="cicle" >
            <NavLink to="/PhoneCatalogue" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Phone Catalogue" />
                </ListItem>
            </NavLink>
            <NavLink to="/NewPhone" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                    <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Phone" />
                </ListItem>
            </NavLink>
        </List>
    )
}