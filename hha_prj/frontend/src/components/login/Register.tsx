import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { validateUsername, validatePassword, validateNotNull } from './FormValidation';
import { notifyFail, notifySuccess } from './Notifications';
import { getRoles, getDepartments } from './RoleDepartmentLists'
import { endpoint } from './Endpoint'

const theme = createTheme();

export default function Register() {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [departmentList, setDepartmentList] = useState<Array<any>>([]);
  const [roleList, setRoleList] = useState<Array<any>>([]);
  const history = useHistory();

  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [departmentError, setDepartmentError] = useState<string>('');
  const [roleError, setRoleError] = useState<string>('');

  useEffect(()=>{
    setDepartmentList(getDepartments());
    setRoleList(getRoles());
    console.log(departmentList);
    console.log(roleList);
  },[]);

  const validateForm = () => {
    if (!validateUsername(username)) { setUsernameError("Username must be 5 characters or longer. They may not include special characters other than underscore."); return false; }
    if (!validatePassword(password)) { setPasswordError("Password must contain minimum eight characters, at least one letter, one number and one special character."); return false; }
    if (!validateNotNull(department)) { setDepartmentError("Please select a department for this user."); return false; }
    if (!validateNotNull(role)) { setRoleError("Please select a role for this user."); return false; }
    return true;
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()){
      sendCreateUserRequest();
    }
  };

  const sendCreateUserRequest = () => {
    axios.post( endpoint + 'api/user/', {username:username, password:password, department:department, role:role})
      .then(res => {
        notifySuccess('Registration success! Welcome ' + username +'!');
        console.log(res);
        history.push("/login");
      })
      .catch((error) => {
        notifyFail('Sorry, the username is already in use. Please choose another one!');
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
            Staff Register
          </Typography>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            noValidate 
            sx={{ mt: 1 }}
          >
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
            <FormControl component="fieldset" fullWidth margin="normal">
              <InputLabel id="select-department">Department</InputLabel>
              <Select
                labelId="select-department"
                id="select-department"
                value={department}
                label="Department"
                fullWidth
                required
                onChange={e => {
                  setDepartment(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {departmentList.map((item, i) => {
                  return <MenuItem value={item.name}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl component="fieldset" fullWidth margin="normal">
              <InputLabel id="select-role">Role</InputLabel>
              <Select
                labelId="select-role"
                id="select-role"
                value={role}
                label="Role"
                fullWidth
                required
                onChange={e => {
                  setRole(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {roleList.map((item, i) => {
                  return <MenuItem value={item.name}>{item.name}</MenuItem>
                })}
              </Select>
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