import React from 'react'
import Navbar from '../navbar/Navbar'
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material'
import unsplash from "./assets/unsplash.jpg"
const Welcome = () => {
  return (
    <>
    <Navbar />
    <Container
    sx={{
      margin: "20px 10px",
      padding: " 0 25px",
      display: 'flex',
      flexDirection: 'row',
      gap: '30px'
    }}
    >
      <Card
      sx={{
        maxWidth:345
      }}
      >
        <CardMedia
        component="img"
        height={300}
        image={unsplash}
        />
        <CardHeader
        title='Dr.Raj'
        >
          DR.Raj
        </CardHeader>
        <CardContent>
          <Typography
          variant='body2'
          color='text.secondary'
          sx={{
             textAlign:"start",
             color:"black",
             fontWeight:"700",
             fontSize:"20px",
             cursor:"pointer"
          }}
          >
            Heart Specialist
          </Typography>
          <Typography
          sx={{
            fontWeight:"bold",
            m:1,
            textAlign:"start",
            fontSize:"17px"
        }}
          >
            Consultant Fee: ₹2,999
          </Typography>
        </CardContent>
        <CardActions>
          <Button
          type='submit'
          
          sx={{
            boxSizing:"border-box",
            backgroundColor:"rgba(213, 140, 178, 0.8)",
            color:"rgba(56, 54, 55, 0.76)",
            padding:"10px 15px"
          }}

          >
            Book
          </Button>
        </CardActions>
      </Card>
    </Container>
    </>
  )
}

export default Welcome
