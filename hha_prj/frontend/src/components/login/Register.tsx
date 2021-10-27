import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

export default function Register() {
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [departmentList, setDepartmentList] = useState<Array<any>>([]);
  const history = useHistory();

  useEffect(()=>{
    getDepartments();
    console.log(department);
  },[]);

  const getDepartments = () => {
    // axios.post(`http://142.58.2.141:8000/api/department` /* Use this endpoint for VM hosted app */
    axios.get(`http://127.0.0.1:8000/api/department/`) /* Use this endpoint if working locally */
    .then(res => {
      typeof(res.data);
      setDepartmentList(res.data);
      console.log(res.data);
      console.log(departmentList);
      console.log("test");
    })
    .catch((error) => {
      console.error(error)
    });
  }

  const notifySuccess = () => {
    toast.success('Registration success! Welcome ' + username +'!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const notifyFail = () => {
    toast.error('Sorry, the username is already in use. Please choose another one!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } 
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // axios.post(`http://142.58.2.141:8000/api/user`, {username, password, department}) /* Use this endpoint for VM hosted app */
    axios.post(`http://127.0.0.1:8000/api/user/`, {username, password, department}) /* Use this endpoint if working locally */
      .then(res => {
        notifySuccess();
        console.log(res);
        history.push("/login");
      })
      .catch((error) => {
        notifyFail();
        console.error(error)
      }
    );
  };

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
            Staff Register
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
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Department</FormLabel>
                <RadioGroup row
                  aria-label="department"
                  defaultValue="nicu"
                  name="department-buttons-group"
                  onChange={e => {setDepartment(e.target.value);}}
                >
                  {departmentList.map((item, i) => {
                    return <FormControlLabel key={i} value={i} control={<Radio />} label={item.name} />
                  })}
                </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}