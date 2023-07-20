import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button,TextField,FormControl, Typography } from "@mui/material"

function Login() {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: {
      value: '',
      error: false,
      errorMessage: 'You must enter a name'
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'You must enter an password'
    }
  })
  //styling
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);


  // ====================================
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues }
    let redirect = true;
    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;
      if (currentValue === '') {
        redirect =false;
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true
          }
        }
      }
    }

    setFormValues(newFormValues);  
    if(redirect){  
     console.log("formValues.name.value   :: ",formValues.name.value)     
     console.log("name", formValues.name.value );
     sessionStorage.setItem("Name",formValues.name.value );
     navigate('/welcome');
    }
     } 
  


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })

  function appBarLabel(label) {
    return (
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }

  const handleChange = (e) => {
    console.log("e.target :: ",e.target,"handlesumbit :",formValues)
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value
      }
    })  
  }

  return (
    <div className="App">
      <div>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={darkTheme}>
            <AppBar position="relative" color="primary">
              {/* <div><img src='ysquareLogo.png' alt='Logo'/></div> */}
              {appBarLabel('Login Page')}
            </AppBar>
          </ThemeProvider>
        </Stack>

      </div>
      <Paper
        sx={{
          p: 10,
          margin: 'auto',
          display: 'flex',
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        <Grid container >
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Login Page
                </Typography>
              </Grid>
              <Grid item>
                <form noValidate onSubmit={handleSubmit} >
                <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                  <TextField
                    id="outlined-error-helper-text"
                    label="User Name"
                    type='text'
                    required
                    onChange={handleChange}
                    name="name"
                    error={formValues.name.error}
                  />
                   <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                    name="password"
                    onChange={handleChange}
                    error={formValues.password.error}
                    label="Password"
                  />       
                  <Grid item xs>
                    <FormControl variant="outlined">
                      <Button type='submit' variant="contained" color="success">Login</Button>
                    </FormControl></Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;