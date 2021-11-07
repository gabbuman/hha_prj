import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { notifyFail, notifySuccess } from './../login/Notifications';
import { endpoint } from '../Endpoint'
import { validateDepartment, validatePassword, validateUsername } from './../login/FormValidation';

const theme = createTheme();

export default function CreateDepartment() {
  
  const [department, setDepartment] = useState<string>('');
  const [departmentError, setDepartmentError] = useState<string>('');
  const [file, setFile] = useState<any>();
  const [fileType, setFileType] = useState<string>('');
  const [fileError, setFileError] = useState<string>('');

  const validateForm = () => {
    if(!validateDepartment(department)) { setDepartmentError("Department must be 3 characters are longer and contain no special characters"); return false;}
    if (file==null) { setFileError("No image selected for department. Please choose an image."); return false; }
    return true;
  }

  const handleFileSelect = (event:any) => {
    if (event.target.files[0]) {
      const parts = event.target.files[0].name.split(".");
      const type = parts[parts.length - 1];
      setFile(event.target.files[0]);
      setFileType(type);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
        sendDepartmentCreateRequest();
    }
  };

  const sendDepartmentCreateRequest = () => {
    axios.post(endpoint + 'api/department/', {name:department, image:file}, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            notifySuccess(department +' successfully created!');
        })
        .catch((error) => {
            notifyFail('Department creation unsuccessful.');
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
          <Typography component="h1" variant="h5">
            Create New Department
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
            <FormLabel>Department Image
            </FormLabel>
            <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleFileSelect}
                />
                <span>    </span>
                <label htmlFor="raised-button-file">
                    <Button component="span" >
                        Upload
                    </Button>
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