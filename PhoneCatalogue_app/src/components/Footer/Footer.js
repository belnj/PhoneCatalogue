import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Belén Jiménez García - '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Phone Catalogue
        </Typography>
        <Grid container spacing={2} justify="center">
            <Grid item >
              <Link color="inherit" href="https://www.linkedin.com/in/belen-jimenez-garcia/">
                <LinkedInIcon />
              </Link>{' '}
            </Grid>
            <Grid item >
              <Link color="inherit" href="https://github.com/belnj">
                <GitHubIcon/>
              </Link>{' '}
            </Grid>
        </Grid>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}