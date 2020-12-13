import React from 'react';
import {useHistory} from 'react-router-dom';

//Components from material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

//styles
const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
    backgroundSize: 'contain',
    margin: theme.spacing(3),
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const PhoneItem = (props) => {
    const classes = useStyles();
    const history = useHistory();

    return (
      <Card className={classes.card}>
        { props.phone.imageFileName ? 
          <CardMedia
            className={classes.cardMedia}
            image={`http://localhost:4001/images/${props.phone.imageFileName}`}
            title={props.phone.name}
          />
          : ""}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.phone.name}
          </Typography>
          <Typography>
            {props.phone.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" color="primary" onClick={() => history.push(`/PhoneDetail/${props.phone._id}`)}>
            View
          </Button>
          <Button size="small" color="primary" onClick={() => history.push(`/UpdatePhone/${props.phone._id}`)}>
            Edit
          </Button>
          <Button size="small" onClick={props.onClickDelete}>
            <DeleteIcon color="error"  />
          </Button>
        </CardActions>
      </Card>
    );
  }

export default PhoneItem 