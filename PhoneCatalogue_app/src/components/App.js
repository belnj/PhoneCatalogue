/* Main component 
1. Render common components to all screens (NavBar, Drawer, Footer)
2. Functionality required to open and close Drawer component
3. React Router components to routing dynamically. Set app routes and the component that each one renders.
   Url -> Component           /PhoneCatalogue or /  ->  PhoneList
                              /PhoneDetail/:id      ->  PhoneDetail
                              /UpdatePhone/:id      ->  PhoneForm
                              /NewPhone             ->  PhoneForm
                              other route           ->  NotFound
*/

import React from 'react';
import {  BrowserRouter,  Switch,  Route, Redirect } from "react-router-dom";

//Components
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Drawer from './Drawer/Drawer';
import PhoneList from './Phones/PhoneList/PhoneCatalogue';
import PhoneForm from './Phones/PhoneForm';
import PhoneDetail from './Phones/PhoneDetails';
import NotFound from './NotFound/NotFound';

//Material-ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withTheme } from '@material-ui/core/styles';

//styles with material-ui
const useStyles = makeStyles(theme => ({
  main:{
    backgroundColor: 'white',
  },
  toolbar: theme.mixins.toolbar, // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

 const App = () => {
    const classes = useStyles();

    //State for open or close the drawer
    const [openDrawer, setOpenDrawer] = React.useState(false);
    //Change the state of the drawer (open or close)
    const handlerOpenDrawer = () => setOpenDrawer(!openDrawer);  

  return (
    <BrowserRouter>
        <CssBaseline />
        {/*header*/}
        <NavBar handlerOpenDrawer={handlerOpenDrawer}/>
        <Drawer variant="temporary" open={openDrawer} onClose={handlerOpenDrawer} onClick={handlerOpenDrawer}/>
        {/*main*/}  
        <main className={classes.main}>
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

export default App;