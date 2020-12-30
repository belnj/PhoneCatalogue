import React from 'react';
import PropTypes from 'prop-types';
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

//styles with material-ui
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardMedia: {
    backgroundSize: 'contain',
    margin: theme.spacing(3),
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const PhoneItem = ({phone, onClickDelete}) => {
    const {imageFileName, name, description, _id} = phone;
    const classes = useStyles();
    const history = useHistory();

    return (
      <Card className={classes.card}>
        {imageFileName ? 
          <CardMedia
            className={classes.cardMedia}
            image={`http://localhost:4001/images/${imageFileName}`}
            title={name}
          />
          : ""}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" color="primary" onClick={() => history.push(`/PhoneDetail/${_id}`)}>
            View
          </Button>
          <Button size="small" color="primary" onClick={() => history.push(`/UpdatePhone/${_id}`)}>
            Edit
          </Button>
          <Button size="small" onClick={onClickDelete}>
            <DeleteIcon color="error"  />
          </Button>
        </CardActions>
      </Card>
    );
}

PhoneItem.propTypes = {
  
}

export default PhoneItem;