import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import "./users.css";
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: "100%",
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%'
    },
    
    float: "left",
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    padding: theme.spacing(1),


    '& .MuiTextField-root': {
    
     flex:"50%",
      margin: theme.spacing(1),
    },
    '& .MuiFormControl-root': {
      width: "45%",
      margin: theme.spacing(1),
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
    '& .MuiButton-root': {
      alignItems: 'right'
    }
  }
}));
const validationSchema = yup.object({
  firstname: yup
    .string('Enter your First Name')
    .required('name is required')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastname: yup
    .string('Enter your Last Name')
    .required('name is required')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),  
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(3, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirm_password: yup
    .string('Enter your password')
    .min(3, 'Password should be of minimum 8 characters length')
    .required('Password is required')    
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Music',
  'Sport',
  'Travel',
  'Dance',
  'Movie',
];

const UserAdd = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      hobbies:[]
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>

      <Grid item xs={12} sm={12} md={12} >

        <Item elevation={1}>

          <form onSubmit={formik.handleSubmit} autocomplete="off" novalidate="novalidate">
            <div className={classes.root}>
          
              <TextField
                required
                fullWidth
                id="firstname"
                name="firstname"
                label="First Name"
                placeholder="First Name"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
                size="small"
              />

              <TextField
                required
                fullWidth
                id="lastname"
                name="lastname"
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
                size="small"
              />
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                size="small"
              />
              <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                size="small"
              />
              <TextField
                required
                fullWidth
                id="confirm_password"
                name="confirm_password"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                size="small"
              />
           


              <FormControl sx={{ m: 1 }} size="small">
                <InputLabel id="demo-multiple-checkbox-label">Hobbies</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  name="hobbies"
                  onChange={formik.handleChange}
                  value={formik.values.hobbies}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={formik.values.hobbies.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  row
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <Button fullWidth type='submit' variant="contained">Submit</Button>
          </form>

        </Item>

      </Grid>


    </>
  )
}

export default UserAdd

