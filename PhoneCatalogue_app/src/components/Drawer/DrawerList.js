import React from 'react';
import { NavLink } from "react-router-dom";

//Material-ui components
import DashboardIcon from '@material-ui/icons/Dashboard';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

//Styles with material-ui
const useStyles = makeStyles({
    link:{
        color: '#000',
        textDecoration: 'none',
    },
});

const DrawerList = () => {
    
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

export default DrawerList;