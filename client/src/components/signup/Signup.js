import React, { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from "../config";
import {
  Box,
  Container,
  CssBaseline,
  Avatar,
  Button,
  TextField,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { AppRegistration } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import upload from "./upload.jpg";
import axios from 'axios';

const Signup = () => {
  const navigate  = useNavigate()
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    UserName: '',
    Email: '',
    Password: '',
    PhNumber: '',
    Age: '',
    Image: '',
    Gender: '',
  });
  const [imageUpload, SetImageUpload] = useState(null);
  
  const uploadImage = (file) => {
    const PostId = Date.now().toString();
    const imageRef = ref(storage, `post/${PostId}`);

    if (file === null) {
      return;
    }

    uploadBytes(imageRef, file).then(() => {
      alert("Uploaded");
      getDownloadURL(imageRef).then((url) => {
        setData((prevData) => ({
          ...prevData,
          Image: url,
        }));
      });
    });
  };

  const toggleShowPassword = () => {
    setShow(!show);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", data);
      if (res.status === 201) {
        navigate('/patlogin');
      } else {
        // handle other status codes appropriately
        console.log('Registration failed', res.status);
      }
    } catch (error) {
      // handle error
      console.error('There was an error registering the user!', error);
    }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    document.getElementById('imageUpload').click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      SetImageUpload(file);
      uploadImage(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '4em',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            textAlign: 'center',
            borderRadius: '15px',
            boxShadow:
              '0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 24px rgba(17, 17, 26, 0.1), 0px 16px 56px rgba(17, 17, 26, 0.1)',
          }}
        >
          <Typography variant="h5"
            sx={{
              color: "rgba(213, 140, 178, 0.8)",
              fontWeight: "700"
            }}
          >
            REGISTER
          </Typography>
          <Avatar>
            <AppRegistration />
          </Avatar>
          <TextField
            type="text"
            placeholder="Enter UserName"
            name="UserName"
            required
            label="Enter UserName"
            value={data.UserName}
            onChange={handleChange}
            sx={{
              borderRadius: '5px',
              width: '100%',
            }}
          />
          <div
          style={{
            display:"flex",
            flexDirection:"column"
          }}
          >
            <label>Upload your photo</label>
            <img
              src={data.Image || upload}
              height={150}
              width={150}
              style={{ borderRadius: "50%", cursor: 'pointer' }}
              alt="Profile"
              onClick={handleImageClick}
            />
            <input
              type='file'
              id='imageUpload'
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
          <TextField
            type="text"
            placeholder="Enter your Email"
            name="Email"
            required
            label="Enter your Email"
            value={data.Email}
            onChange={handleChange}
            sx={{
              borderRadius: '5px',
              width: '100%',
            }}
          />
          <TextField
            type={show ? 'text' : 'password'}
            placeholder="Enter your Password"
            name="Password"
            required
            label="Enter your Password"
            value={data.Password}
            onChange={handleChange}
            sx={{
              borderRadius: '5px',
              width: '100%',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    type="button"
                    onClick={toggleShowPassword}
                    sx={{
                      padding: '0px',
                      minWidth: 'auto',
                      margin: '0px',
                    }}
                  >
                    {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="text"
            placeholder="Enter your Age"
            name="Age"
            required
            label="Enter your Age"
            value={data.Age}
            onChange={handleChange}
            sx={{
              borderRadius: '5px',
              width: '100%',
            }}
          />
          <TextField
            type="text"
            placeholder="Enter your Mobile.No"
            name="PhNumber"
            required
            label="Enter your Mobile.No"
            value={data.PhNumber}
            onChange={handleChange}
            sx={{
              borderRadius: '5px',
              width: '100%',
            }}
          />
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              width: '100%',
            }}
          >
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              sx={{ width: '100%' }}
              value={data.Gender}
              name="Gender"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', gap: "10px" }}>
            <Typography>
              <Link
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "rgba(64, 101, 213, 0.8)",
                  textDecoration: "none"
                }}
                to={'/doclogin'}
              >
                Doctor
              </Link>
            </Typography>
            <Typography>
              <Link
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "rgba(156, 175, 231, 0.8)",
                  textDecoration: "none"
                }}
                to={'/patlogin'}
              >
                Already have an account
              </Link>
            </Typography>
          </Box>
          <Button
            type='submit'
            sx={{
              boxSizing: "border-box",
              backgroundColor: "rgba(213, 140, 178, 0.8)",
              color: "rgba(88, 84, 88, 0.8)",
              padding: "10px 15px"
            }}
          >
            Register
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default Signup;
