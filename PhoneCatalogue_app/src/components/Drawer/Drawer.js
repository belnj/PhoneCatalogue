import React from 'react';

import DrawerList from './DrawerList';

//Material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

//Styles with material-ui
const useStyles = makeStyles(theme => ({
    drawer: {
        flexShrink: 0,
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));


const MenuDrawer = ({variant, open, onClose}) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            classes={{paper: classes.drawerPaper,}}
            anchor="left"
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}
            onClick={onClose}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <DrawerList/>
        </Drawer>
    )
}

export default MenuDrawer;
