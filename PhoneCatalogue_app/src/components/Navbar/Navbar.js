import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  iconMenuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
      flexGrow: 1
  },
}));


const NavBar = (props) => {
  const classes = useStyles();

  return (
      <AppBar>
        <Toolbar>
          <MenuIcon 
            className={classes.iconMenuButton} 
            color="inherit"
            aria-label="open-drawer"
            onClick={() => props.handlerOpenDrawer()}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Phone Catalogue
          </Typography>
        </Toolbar>
      </AppBar> 
  )
}

export default NavBar