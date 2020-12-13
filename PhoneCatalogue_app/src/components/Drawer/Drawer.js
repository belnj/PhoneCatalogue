import React from 'react';
import DrawerList from './DrawerList';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));


const MenuDrawer = (props) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            classes={{paper: classes.drawerPaper,}}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
            onClick={props.onClose}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <DrawerList/>
        </Drawer>
    )
}

export default MenuDrawer;
