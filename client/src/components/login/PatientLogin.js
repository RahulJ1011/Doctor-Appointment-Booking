import React, { useContext, useState } from 'react'
import { Box, Container, CssBaseline } from '@mui/material'
import {
    Avatar,
    Button,
    TextField,
    Typography,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import LoginIcon from "@mui/icons-material/Login";
  import {userContext} from "../../context/Contextapi"
import axios from 'axios';

const PatientLogin = () => {
    const [data,SetData] = useState({
        Email:"",
        Password:""
    })
    const navigate = useNavigate()
    const {saveToken,saveUserName,saveImage,saveId} = useContext(userContext)
    const handleChange = (e) => {
        const {name,value} = e.target;
        SetData((prev)=> {
          return {
            ...prev,
            [name]:value
          }
        })
      };
      const handleSubmit = async(e)=>
        {
            e.preventDefault();
            const res = await axios.post("http://localhost:4000/api/auth/Patientlogin",data);
            const {token} = res.data;
            const {UserName,Image,_id} = res.data.loggedUser
            saveToken(token)
            saveUserName(UserName)
            saveImage(Image)
            saveId(_id)
            navigate("/welcome")
        }
  return (
    <form onSubmit={handleSubmit}>
    <Container
    sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <CssBaseline />
        <Box
        sx={{
            
            display: "flex",
            flexDirection: "column",
            padding: "60px",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            textAlign: "center",
            borderRadius: "15px",
            boxShadow:
              "0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 24px rgba(17, 17, 26, 0.1), 0px 16px 56px rgba(17, 17, 26, 0.1)",
          }}
        >
    <Typography
    sx={{
      color:"rgba(213, 140, 178, 0.8)",
        fontWeight:"700",
      fontSize:"20px"
    }}
    >Welcome Back</Typography>
    <Avatar>
      <LoginIcon></LoginIcon>
    </Avatar>
    <TextField
      type="email"
      placeholder="Enter Your email"
      name="Email"
      required
      label="Enter your  email"
      value={data.Email}
      onChange={handleChange}
      sx={{
        borderRadius: "5px",
      }}
    />
    <TextField
      type="password"
      placeholder="Enter Your Password"
      name="Password"
      required
      label="Enter your  Password"
      value={data.Password}
      onChange={handleChange}
    />
    <Button
      variant="contained"
      type="submit"
      sx={{
        boxSizing:"border-box",
        backgroundColor:"rgba(213, 140, 178, 0.8)",
        color:"rgba(88, 84, 88, 0.8)",
        padding:"10px 15px",
        "&:hover": {
          backgroundColor: "rgba(231, 131, 183, 0.8)",
          color:"rgba(91, 86, 89, 0.8)"
        },
      }}
    >
      LOGIN
    </Button>
        </Box>
    </Container>
</form>
  )
}

export default PatientLogin
