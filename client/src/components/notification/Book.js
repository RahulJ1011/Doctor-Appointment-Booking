import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import unsplash from "../welcome/assets/unsplash.jpg"
import axios from 'axios'
import { userContext } from '../../context/Contextapi'
import {Link} from "react-router-dom"
const Book = () => {
    const [data,Setdata] = useState("")
    const {Token} = useContext(userContext)
    const [res,setres] = useState([])
    const handleSubmit = async(e)=>
        {
             e.preventDefault();
            try
            {
                const response = await axios.get(`http://localhost:4000/api/appoint/appointment/${data}`,{
                    headers:{
                        Authorization:`Bearer ${Token}`,
                        "Content-Type":"application/json"
                    }
                })
                setres(response.data);
                
            }
            catch(err)
            {
                console.log(err);

            } 
        }
  return (
   <Container
   sx={{
    boxShadow:
    '0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 24px rgba(17, 17, 26, 0.1), 0px 16px 56px rgba(17, 17, 26, 0.1)',
    
   }}
   >
    <form onSubmit={handleSubmit}>
    <Typography sx={{
        margin:"10px 0px"
    }}>
        Book an Appointment
    </Typography>
    <FormControl
    sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        width: '100%',
    }}
    >
        <InputLabel>Specialization</InputLabel>
        <Select
        label="Specialization"
        sx={{
            width:"60%"
        }}
        value={data}
        onChange={(e)=> Setdata(e.target.value)}
        >
         <MenuItem
         value="Heart specialist"
         sx={{
            color:"rgba(88, 84, 88, 0.8)",
            backgroundColor:"rgba(213, 140, 178, 0.8)",
          }}
         >
         Heart
         </MenuItem>   
         <MenuItem
         value="General"
         sx={{
            color:"rgba(88, 84, 88, 0.8)",
            backgroundColor:"rgba(213, 140, 178, 0.8)",
          }}
         >
         General
         </MenuItem>   
         <MenuItem
         value="ENT"
         sx={{
            color:"rgba(88, 84, 88, 0.8)",
            backgroundColor:"rgba(213, 140, 178, 0.8)",
          }}
         >
         ENT
         </MenuItem>   
         <MenuItem
         value="Dentist"
         sx={{
            color:"rgba(88, 84, 88, 0.8)",
            backgroundColor:"rgba(213, 140, 178, 0.8)",
          }}
         >
         Dentist
         </MenuItem> 
         <MenuItem
         value="Ortho"
         sx={{
            color:"rgba(88, 84, 88, 0.8)",
            backgroundColor:"rgba(213, 140, 178, 0.8)",
          }}
         >
         Ortho
         </MenuItem>   
        </Select>
    </FormControl>
    <Button
    type='submit'
    sx={{
        boxSizing:"border-box",
        backgroundColor:"rgba(213, 140, 178, 0.8)",
        color:"rgba(88, 84, 88, 0.8)",
        padding:"10px 15px",
        marginTop:"10px"
      }}

    >
        SUBMIT
    </Button>
    </form>
    {
       
        res && res.map((docs)=> (
            <>
         <Typography
         
         sx={{
            margin:"10px 0px"
         }}>
            Doctors 
        </Typography>
            <Box
            sx={{
                display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
            >
                <div>
                    <img src={docs.Image} height={75} width={75} style={{
                        borderRadius:"50%"
                    }}
                    />
                </div>
                <Typography>{`Dr. ${docs.FirstName} ${docs.LastName}`}</Typography>
                <div
                
                >
                
                <Button
                type='button'
                sx={{
                    boxSizing:"border-box",
                    backgroundColor:"rgba(213, 140, 178, 0.8)",
                    color:"rgba(88, 84, 88, 0.8)",
                    padding:"7px 13px",
                    height:"70px",
                    "&:hover":{
                        backgroundColor:"rgba(213, 140, 178, 0.5)",
                        color:"black"
                    }
                  }}
                >
                    <Link
                    to={`/appointment/${docs._id}`}
                    style={{
                        textDecoration:"none",
                        color:"rgba(88, 84, 88, 0.8)"
                    }}
                    >
                    Discover More
                    </Link>
                </Button>
                </div>
            </Box>
        </>
        ))
        
    }
   </Container>
  )
}

export default Book
