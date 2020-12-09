import React, { useEffect, useState} from "react";

//Components
import PhoneItem from './PhoneItem';
import PhoneHero from './PhoneHero';

//Functions to call server
import * as phoneServices from '../../../api/server'

//Material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

//Styles
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));


const PhoneList = () => {
  const classes = useStyles(); //css styles

  const [phones, setPhones] = useState([]) //Phone list returned from api
  const [loading, setLoading] = useState(true) //Loading phones 
  const [loadingError, setLoadingError] = useState(false) //Error when try to load phones
  
  //query to get all phones and save them 
  const loadPhones = async () => { 
    const res = await phoneServices.getPhones();
    
    if(res==="error"){ //Error 
      setLoading(false);
      setLoadingError(true); 
    }else{ //Phones load correctly
      setPhones(res.data);
      setLoading(false); //Phones have already been loaded
    }
  }

  useEffect(() => {
    loadPhones();  //Return all phones
  }, []);

  //Function to delete a phone when we click the delete button of an item in the list
  async function deletePhone(id) {
    await phoneServices.deletePhone(id);
    loadPhones();
  }
  
  //loading phones
  if(loading){
    return(
      <Grid container justify="center" className={classes.content}>
          <CircularProgress />
      </Grid>
    )
  }

  //Phone load finished, 2 options
  //Option 1: an error occurs when we tried to retrieve phones
  if(loadingError){ 
    return(
      <div className={classes.content}>
            <Typography component="h4" variant="h5" align="center" color="error">
              There are an error contact with the administrator.
            </Typography>
        </div>
    ) 
  }

  //option 2: phones retrieved correctly
  return (
    <React.Fragment>
        {/* Hero unit */}
        <PhoneHero />
        {/* End Hero -> Phone List (2 options: There aren't phones yet, there are phones)*/}
        {phones.length === 0 ?
          <Typography component="h4" variant="h5" align="center" color="error" className={classes.content}>
            There are no phones yet. Create a new one!
          </Typography>
        :
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {phones.map((phone)=>(
              <Grid item key={phone._id} xs={12} sm={6} md={4}>
                <PhoneItem phone={phone} onClickDelete={() => deletePhone(phone._id)}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        }
        {/* End Phone List */}
    </React.Fragment>
  );
}

export default PhoneList