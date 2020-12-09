import React from 'react';
import {  BrowserRouter,  Switch,  Route, Redirect } from "react-router-dom";

//Components
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import Drawer from './Drawer/Drawer'
import PhoneList from './Phones/PhoneList/PhoneCatalogue';
import PhoneForm from './Phones/PhoneForm'
import PhoneDetail from './Phones/PhoneDetails'
import NotFound from './NotFound/NotFound'

//Material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


//styles 
const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar, // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
    const classes = useStyles();

    //State for open or close the drawer
    const [openDrawer, setOpenDrawer] = React.useState(false);
    //Change the state of the drawer (open or close)
    const handlerOpenDrawer = () => {
        setOpenDrawer(!openDrawer);
    };


  return (
    <BrowserRouter>
        <CssBaseline />
        {/*header*/}
        <NavBar handlerOpenDrawer={handlerOpenDrawer}/>
        <Drawer variant="temporary" open={openDrawer} onClose={handlerOpenDrawer} onClick={handlerOpenDrawer}/>
        {/*main*/}  
        <main>
          <div className={classes.toolbar}></div>
            <Switch>
              <Route path="/PhoneCatalogue" component={PhoneList} />
              <Route path="/PhoneDetail/:id" component={PhoneDetail} />
              <Route path="/NewPhone" component={PhoneForm} />
              <Route path="/UpdatePhone/:id" component={PhoneForm} />
              <Route exact path="/">
                <Redirect to="/PhoneCatalogue" />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
        </main>  
        {/*footer*/}
        <Footer />      
    </BrowserRouter>
    
  );
}

