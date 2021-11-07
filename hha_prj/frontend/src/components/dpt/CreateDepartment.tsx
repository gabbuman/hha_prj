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
import { notifyFail, notifySuccess } from './../login/Notifications';
import { endpoint } from '../Endpoint'
import { validateDepartment, validatePassword, validateUsername } from './../login/FormValidation';

const theme = createTheme();

export default function SignIn() {
  
  const [department, setDepartment] = useState<string>('');
  const [departmentError, setDepartmentError] = useState<string>('');
  const [file, setFile] = useState<any>();
  const history = useHistory();

  const validateForm = () => {
    if(!validateDepartment(department)) { setDepartmentError("Department must be 3 characters are longer and contain no special characters"); return false;}
    return true;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
        sendDepartmentCreateRequest();
    }
  };

  const sendDepartmentCreateRequest = () => {
    axios.post(endpoint + 'api/token/obtain', {department, file} as any)
      .then(res => {
        notifySuccess('Login success! Welcome back ' + department +'!');
        console.log(localStorage.getItem('department'));
        history.push("/homepage");
      })
      .catch((error) => {
        notifyFail('Sorry, the department and password entered does not match any account.');
        console.error(error)
      }
    );
  }

  const fileSelectedHandler = (e:any) => {
      setFile(e.target.files[0]);
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
          <Typography component="h1" variant="h5">
            Staff Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="department"
              label="Department"
              name="department"
              autoComplete="department"
              autoFocus
              onChange={e => {setDepartment(e.target.value);}}
              helperText={departmentError}
            />
            <label>
                <input type="file" accept="image/png, image/jpeg" onChange={fileSelectedHandler}>
                </input>
            </label>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Department
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}