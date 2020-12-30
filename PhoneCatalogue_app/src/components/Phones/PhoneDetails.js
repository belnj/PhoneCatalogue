import React, { useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

//Functions to call api
import * as phoneService from '../../api/server';

//Material-ui components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//styles with material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    padding: theme.spacing(5),
  },
  media: {
    height: '70vh',
  },
  return: {
    display:'flex',
    justifyContent:'flex-end',
  },
  image: {
    backgroundSize: 'contain',
    margin: theme.spacing(3),
    paddingTop: '100%',
  },
}));

const PhoneDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();

  const [phone, setPhone] = useState({ _id:'', name:'', manufacturer: '', description: '', screen: '', 
  processor: '', ram: null, color: '', price: null, imageFileName:''}); //Get phone from back
   
  //query to get the phone and save it 
  const getPhone = async (id) => { 
    const res = await phoneService.getPhoneById(id);
    const { _id, name, manufacturer, description, screen, processor, ram, color, price, imageFileName} = res.data;
    setPhone({ _id, name, manufacturer, description, screen, processor, ram, color, price, imageFileName});
  }

  //Get a phone if id param is received
  useEffect(() => {
    if (params.id) getPhone(params.id);
  }, [params.id]);

  return (

    <Grid container className={classes.root} >
      <Grid item xs={false} sm={false} md={1}/>
      <Grid item xs={false} sm={4} md={3}>
      { phone.imageFileName ? 
              <CardMedia
                className={classes.image}
                image={`http://localhost:4001/images/${phone.imageFileName}`}
                title={phone.name}
              />
              : ""}
        
      </Grid>
      <Grid item xs={false} sm={false} md={1}/>
      <Grid item xs={12} sm={8} md={6} >  
        <div>
          <CardContent>
            <Hidden smUp >
              { phone.imageFileName ? 
              <CardMedia
                className={classes.media}
                image={`http://localhost:4001/images/${phone.imageFileName}`}
                title={phone.name}
              />
              : ""}
            </Hidden>
            <div className={classes.return} >
              <IconButton onClick={() => history.goBack()}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <Typography component="h1" variant="h4">
              {phone.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Brand: {phone.manufacturer}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {phone.description} 
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Screen: {phone.screen}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Ram:{phone.ram}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Processor: {phone.processor}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Color: {phone.color}
            </Typography>
            <Typography component="h2" variant="h4" align='right'>
              {phone.price}€
            </Typography>
          </CardContent>
        </div>
      </Grid>
    </Grid>
  );
}

export default PhoneDetail;