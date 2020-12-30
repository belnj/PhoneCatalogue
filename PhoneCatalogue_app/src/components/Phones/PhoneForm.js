import React, { useEffect, useState} from 'react';
import { useHistory, useParams} from "react-router-dom";
import * as Yup from 'yup';
import { useFormik, } from 'formik';

//api queries
import * as phoneService from "../../api/server";

//material-ui components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


//styles with material-ui
const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  },
  media: {
    height: 140,
  },
  submit: {
    display:'flex',
  },
  form: {
    marginTop: theme.spacing(2),
  },
}));


const PhoneForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();

  //click on the form button
  const onSubmitData = async (data) => {
    //new phone
    if(!params.id){
      await phoneService.postPhone(data);
      history.goBack(); //go to the catalogue
    }else{
      await phoneService.updatePhone(params.id,data);
      history.goBack();
    }
  }

  const [phone, setPhone] = useState({}); //Get phone from back
  //query to get the phone and save it 
  const getPhone = async (id) => { 
    const res = await phoneService.getPhoneById(id);
    setPhone(res.data);
    return res.data;
  }

useEffect(() => {
 if (params.id) getPhone(params.id);
}, [params.id]);


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  manufacturer: Yup.string().required('Manufacturer is required'),
  description: Yup.string().required('Description is required'),
  imageFileName: Yup.string().required('Image File Name is required'),
  imageUrl: Yup.string().required('Image File Url is required'),
  price: Yup.number('Must be a number').positive('Must be positive'),
  ram: Yup.number('Must be a number').positive('Must be positive').integer(),
  screen: Yup.string(),
  processor: Yup.string(),
  color: Yup.string(),
})

const validationSchema2 = Yup.object({
  name: Yup.string().required('Name is required'),
  manufacturer: Yup.string().required('Manufacturer is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number('Must be a number').positive('Must be positive'),
  ram: Yup.number('Must be a number').positive('Must be positive').integer(),
  screen: Yup.string(),
  processor: Yup.string(),
  color: Yup.string(),
})

const initialvalues = params.id ? phone : {  
  name:'',  
  manufacturer: '',  
  description: '',  
  screen: '',  
  processor: '',  
  ram: 0,  
  color: '',  
  price: 0,  
  imageFileName:'', 
  imageUrl:'' ,
}
const formik = useFormik({
  initialValues: initialvalues ,
  validationSchema: !params.id ? validationSchema: validationSchema2,
  enableReinitialize: true,
  onSubmit: (values) => onSubmitData(values),
});


  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <IconButton onClick={() => history.push(`/PhoneCatalogue`)}>
              <ArrowBackIcon />
        </IconButton>
        <Typography component="h1" variant="h5">
          {!params.id ? "Create New Phone" : "Update Phone"}
        </Typography>
       <form className={classes.form} onSubmit={formik.handleSubmit} >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} >
              <TextField 
                fullWidth 
                id="phonename" 
                name="name" 
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField 
                fullWidth 
                name="manufacturer"
                label="Manufacturer" 
                id="manufacturer" 
                value={formik.values.manufacturer}
                onChange={formik.handleChange}
                error={formik.touched.manufacturer && Boolean(formik.errors.manufacturer)}
                helperText={formik.touched.manufacturer && formik.errors.manufacturer}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} >
              <TextField 
                fullWidth 
                name="description"
                label="Description"
                id="description" 
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}                    
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField 
                fullWidth  
                name="screen" 
                label="Screen"
                id="screen" 
                value={formik.values.screen}
                onChange={formik.handleChange}
                error={formik.touched.screen && Boolean(formik.errors.screen)}
                helperText={formik.touched.screen && formik.errors.screen}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField 
                name="processor" 
                label="Processor" 
                id="processor" 
                fullWidth
                value={formik.values.processor}
                onChange={formik.handleChange}
                error={formik.touched.processor && Boolean(formik.errors.processor)}
                helperText={formik.touched.processor && formik.errors.processor}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField 
                name="ram" 
                label="Ram"
                id="ram" 
                type="Number" 
                fullWidth  
                value={formik.values.ram}
                onChange={formik.handleChange}
                error={formik.touched.ram && Boolean(formik.errors.ram)}
                helperText={formik.touched.ram && formik.errors.ram}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField 
                name="color" 
                label="Color"
                id="color" 
                fullWidth 
                value={formik.values.color}
                onChange={formik.handleChange}
                error={formik.touched.color && Boolean(formik.errors.color)}
                helperText={formik.touched.color && formik.errors.color}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField 
                name="price" 
                label="Price"
                id="price" 
                type="Number" 
                fullWidth                 
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                }}
              />
            </Grid>
          {!params.id ? 
          <>
            <Grid item xs={12} sm={6} >
              <TextField 
                name="imageFileName" 
                label="Image Name"
                id="imageFileName" 
                fullWidth 
                value={formik.values.imageFileName}
                onChange={formik.handleChange}
                error={formik.touched.imageFileName && Boolean(formik.errors.imageFileName)}
                helperText={formik.touched.imageFileName && formik.errors.imageFileName}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} >
              <TextField 
                name="imageUrl" 
                label="Image Url"
                id="imageUrl" 
                fullWidth 
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                helperText={formik.touched.imageUrl && formik.errors.imageUrl}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </>
          : ""
          }
              <Grid item xs={12} sm={12} align='right' >
              <Button type="submit" variant="contained" color="primary" className={classes.submit}                 >
                {!params.id ? "Create Phone" : "Update Phone"}
              </Button>
            </Grid>
          </Grid>
              </form>
      </div>
    </Container>
  )
}

export default PhoneForm;