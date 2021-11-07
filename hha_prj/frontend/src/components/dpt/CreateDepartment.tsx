import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { notifyFail, notifySuccess } from './../login/Notifications';
import { endpoint } from '../Endpoint'
import { validateDepartment } from './../login/FormValidation';
import Image from 'material-ui-image';
import Paper from '@mui/material/Paper';

const theme = createTheme();

export default function CreateDepartment() {
  
  const [department, setDepartment] = useState<string>('');
  const [departmentError, setDepartmentError] = useState<string>('');
  const [image, setImage] = useState<any>();
  const [file, setFile] = useState<any>();

  const validateForm = () => {
    if(!validateDepartment(department)) { setDepartmentError("Department must be 3 characters are longer and contain no special characters."); return false;}
    if (!image) { alert("No image selected for department. Please choose an image."); return false; }
    return true;
  }

  const handleFileSelect = (event:any) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
      setFile(URL.createObjectURL(event.target.files[0]));
      console.log(event.target.files);
    } else {
      setImage(null);
      setFile(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
        sendDepartmentCreateRequest();
    }
  };

  const sendDepartmentCreateRequest = () => {
    const formData = new FormData();
    formData.append('name',department);
    formData.append('image',image,image.name);
    console.log(formData);
    axios.post(endpoint + 'api/department/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
          notifySuccess(department +' successfully created!');
      })
      .catch((error) => {
          notifyFail('Department creation unsuccessful.');
          console.error(error);
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
            <h5>Department Image</h5>
              <input
                accept="image/*"
                type="file"
                onChange={handleFileSelect}
              />
              <span>    </span>
              {file ? 
                <div style={{marginTop:'10px'}}>
                  <Paper>
                    <img src={file} 
                      style={{maxWidth:'800px', width:'100%', height:'auto', padding:'5%'}}>
                    </img>
                  </Paper>
                </div>
                :
                <div></div>}
              {/* {file ? 
           
                <Image 
                  object-fit="contain" 
                  src={file}
                  style={{widht:'auto',height:'auto'}}
                  imageStyle={{width:'100%', height:'inherit', padding:'5%'}}
                /> : <div></div> } */}
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