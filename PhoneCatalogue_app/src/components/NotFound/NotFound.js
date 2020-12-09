import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    component: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: theme.spacing(6),
    },
    icon:  {
      width: 400,
      height: 250,
      backgroundImage: 'url("https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80")',
      backgroundSize: 'cover',
      marginBottom: theme.spacing(6),
    }
}));
  

export default function NotFound() {
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
