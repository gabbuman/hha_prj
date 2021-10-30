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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
    getDepartments();
    getRoles();
    console.log(departmentList);
    console.log(roleList);
  },[]);

  const getDepartments = () => {
    // axios.post(`http://142.58.2.141:8000/api/department` /* Use this endpoint for VM hosted app */
    axios.get(`http://127.0.0.1:8000/api/department/`) /* Use this endpoint if working locally */
    .then(res => {
      typeof(res.data);
      setDepartmentList(res.data);
      console.log(res.data);
      console.log(departmentList);
    })
    .catch((error) => {
      console.error(error)
    });
  }

  const getRoles = () => {
    // axios.post(`http://142.58.2.141:8000/api/department` /* Use this endpoint for VM hosted app */
    axios.get(`http://127.0.0.1:8000/api/role/`) /* Use this endpoint if working locally */
    .then(res => {
      typeof(res.data);
      setRoleList(res.data);
      console.log(res.data);
      console.log(roleList);
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

  const validateUsername = () => {
    const regexp = /^[a-zA-Z0-9_]{5,}$/;
    return regexp.test(username);
  }

  const validatePassword = () => {
    // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regexp.test(password);
  }

  const validateDepartment = () => {
    return department != "";
  }

  const validateRole = () => {
    return role != "";
  }

  const validateForm = () => {
    if (!validateUsername()) { setUsernameError("Username must be 5 characters or longer. They may not include special characters other than underscore."); return false; }
    if (!validatePassword()) { setPasswordError("Password must contain minimum eight characters, at least one letter, one number and one special character."); return false; }
    if (!validateDepartment()) { setDepartmentError("Please select a department for this user."); return false; }
    if (!validateRole()) { setRoleError("Please select a role for this user."); return false; }
    return true;
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()){
      sendCreateUserRequest();
    }
  };

  const sendCreateUserRequest = () => {
    // axios.post(`http://142.58.2.141:8000/api/user`, {username, password, department}) /* Use this endpoint for VM hosted app */
    axios.post(`http://127.0.0.1:8000/api/user/`, {username:username, password:password, department:department, role:role}) /* Use this endpoint if working locally */
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