import React from "react";
import { Link } from "react-router-dom";

//Material-ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Styles
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  link:{
    textDecoration: 'none'
  },
}));


const PhoneHero = () => {
    const classes = useStyles(); //css styles

    return (
    <div className={classes.heroContent}>
        <Container maxWidth="sm">
        <hgroup>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Phone Catalogue
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            You can edit or view the detail of all the phones in the list. Also you can add a new one.
            </Typography>
        </hgroup>
        <Grid container spacing={2} justify="center">
            <Grid item>
            <Link to="/NewPhone" className={classes.link}>
                <Button variant="contained" color="primary" >
                Create a new phone
                </Button>
            </Link>
            </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default PhoneHero;