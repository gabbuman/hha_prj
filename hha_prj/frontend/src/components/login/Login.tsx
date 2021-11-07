import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { notifyFail, notifySuccess } from './Notifications';
import { endpoint } from '../Endpoint'
import { validatePassword, validateUsername } from './FormValidation';

const theme = createTheme();

export default function SignIn() {
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!validateUsername(username)) { setUsernameError("Username must be 5 characters or longer. They may not include special characters other than underscore."); }
    if(!validatePassword(password)) { setPasswordError("Password must contain minimum eight characters, at least one letter, one number and one special character."); }
    sendUserLoginRequest();
  };

  const storeUser = (data:any) => {
    localStorage.setItem('user', JSON.stringify(data));
  }

  const sendUserLoginRequest = () => {
    axios.post(endpoint + 'api/token/obtain', {username, password} as any)
      .then(res => {
        notifySuccess('Login success! Welcome back ' + username +'!');
        storeUser(res.data)
        history.push("/homepage");
      })
      .catch((error) => {
        notifyFail('Sorry, the username and password entered does not match any account.');
        console.error(error)
      }
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Staff Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e => {setUsername(e.target.value);}}
              helperText={usernameError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => {setPassword(e.target.value);}}
              helperText={passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot Username/password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}