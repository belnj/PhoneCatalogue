import React from 'react';

//Material-ui components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Styles with material-ui
const useStyles = makeStyles((theme) => ({
    component: {
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      width: '100vw',
    },
    content: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(6),
    },
    icon:  {
      backgroundImage: 'url("https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80")',
      backgroundSize: 'cover',
      height: 250,
      marginBottom: theme.spacing(6),
      width: 400,
    },
}));
  

const NotFound = () => {
  const styles = useStyles();

  return (
    <div className={styles.component}>
      <div className={styles.content}>
        {/*Image*/}
        <div className={styles.icon} />
        <hgroup>
          <Typography variant='h4' >
            Whoops!
          </Typography>
          <Typography variant='subtitle1'>
            We couldn't find the page you were looking for.
          </Typography>
        </hgroup>
      </div>
    </div>
  );
}

export default NotFound;