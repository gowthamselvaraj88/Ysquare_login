import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';    
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Welcome from './Welcome';


function Login() {



  //styling
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  //=========================================================================

  const [name, setName] = useState("");
  const [password] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose wisely');

  const navigate = useNavigate();



  const handleChange = (event) => {
    setName(event.target.value);
    setHelperText(' ');
    setError(false);
    // console.log("name",name);
  };

  // useEffect(() => {
  //     navigate("/Welcome");
  // }, [sessionStorage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //redirects to an external URL
      // window.location.replace('http://localhost:3000/Welcome');
  }, [2000000])  
  });


  // error
  const handleSubmit = () => {
    // event.preventDefault();
    navigate('./Welcome');
          // window.location.replace("http://localhost:3000/Welcome");

    sessionStorage.setItem("Name", name);
    const pattern = '[a-zA-Z]'
    if (name === pattern) {
      setHelperText('You got it!');
      setError(false);
    } else if (name === ' ') {
      setHelperText('Sorry, Enter the Name!');
      setError(true);
    } else {
      setHelperText('Please Enter the text!');
      setError(true);
    }
   
    // navigate('./Welcome');
    console.log("name",name);
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
                  <form onSubmit={handleSubmit}>
                    {/* <Container maxWidth="sm"> */}
                    <FormControl>
                      <TextField
                      error
                        value={name}
                        id="outlined-error-helper-text"
                        label="User Name:"
                        defaultValue="Enter the Name"
                        onChange={handleChange}
                        type='text'
                      />
                      <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                    <FormControl  variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password:</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment value={password} position="end">
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
                        label="Password"
                      />
                      </FormControl>
                      <Grid item xs>
                       <FormControl  variant="outlined">
                        <Button type='submit' variant="contained" color="success">Login</Button>
                    </FormControl></Grid>
                    {/* </Container> */}
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
