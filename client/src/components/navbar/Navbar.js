import { AppBar, Box,InputAdornment ,TextField, Toolbar,IconButton, Select, MenuItem, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import {NotificationAdd, Search} from "@mui/icons-material"
import HistoryIcon from '@mui/icons-material/History';
import History from '@mui/icons-material/History';
import MedicationIcon from '@mui/icons-material/Medication';
import {Link} from "react-router-dom"
import {userContext} from "../../context/Contextapi"
import "./navbar.css"
const Navbar = () => {
    const {userName,image} = useContext(userContext)
    const [data,setData] = useState("")
    const [Profile,SetProfile] = useState(userName)
    
    
    const handleChange = (e)=>
        {

        }
        const handleProfileChange = (e)=>
            {
              SetProfile(e.target.value)
              if (e.target.value === "logout") {
                localStorage.setItem("token", null);
                window.location.href = '/login'; 
              }
            }
            const handleSubmit = (e)=>
                {

                }
  return (
    <Box
    sx={{
        flexGrow:1,
        backgroundColor:"rgba(213, 140, 178, 0.8)"
    }}
    >
        <AppBar
            position='static'
            component='nav'
            sx={{
                backgroundColor:"rgba(213, 140, 178, 0.8)"
            }}
        >
           <Toolbar
           sx={{
            display:"flex",
            justifyContent:"space-between"
           }}
           >
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
          >
            <AdUnitsIcon />
            <p>AmaFLip</p>
          </IconButton>
          <TextField
        type='text'
        placeholder='Search doctor'
        required
        value={data}
        onChange={(e) => setData(e.target.value)}
        sx={{
            flex:1,
            borderRadius:"10px",
            outline:"none",
            border:"1px solid grey",
          backgroundColor:"rgba(186, 170, 178, 0.58)",
          '&:hover fieldset': {
            border: '1px solid grey',
          },
          '&:focus fieldset': {
            border: '1px solid grey',
          },
         '&.Mui-focused fieldset': {
      border: '1px solid grey',
    },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
             <Button
             onClick={handleSubmit}
             type='submit'
             >
             <Search />
             </Button>
            </InputAdornment>
          ),
        }}
      />
          <div className='items'>
          <div className='item'>
                <Link
                style={{
                  textDecoration:"none",
                  color:"white"
                }}
                to={'/history'}>
                <History />
                History
                </Link>
            </div>
            <div className='item'>
                <Link
                to={'/notifications'}
                style={{
                  color:"white",
                  textDecoration:"none"
                }}
                >
                <NotificationAdd />
                Notification
                </Link>
            </div>
            <div className='item'>
                <Link
                to={'/appointment'}
                style={{
                  textDecoration:"none",
                  color:"white"
                }}
                >
                <MedicationIcon />
                Appointment
                </Link>
            </div>
          </div>
          <Select
            value={Profile}
            onChange={handleProfileChange}
            sx={{
                width: "200px",
                height: "60px",
                border: "0.5px solid black",
                marginLeft: "10px",
            }}
          >
           <MenuItem value={Profile}>
           <IconButton>
                 <img src={`${image}`} height={50} width={50} style={
                  {
                    borderRadius:"50%"
                  }
                 } />
                </IconButton>
                {userName}
           </MenuItem> 
           <MenuItem value={"logout"}><Link
              to={'/login'}
              >
              LOGOUT
              </Link>
              </MenuItem>
          </Select>
           </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
