import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Container, TextField, IconButton, Box } from '@mui/material';
import NewsLetter from "../../src/Assets/Images/newsletter.png"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   <>
     <Grid container sx={{backgroundColor:"#A3A0FB80", padding:"24px"}}>
    <Grid item xs={12} sm={12} md={6} lg={6} sx={{display:"flex", justifyContent:"center"}}>

    <img src={NewsLetter} style={{maxWidth:"50px", height:"50px"}}/>
   
    <Typography sx={{fontsize:"1.5rem", marginLeft:"8px", fontWeight:"500", marginTop:"3px"}}>Join the newsletter and read <br/> about the new service first </Typography>
  
   
  
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} sx={{display:"flex", justifyContent:"center"}}>
    <TextField id="outlined-basic" placeholder='Email' variant="outlined" sx={{marginRight:"12px", backgroundColor:"#FFFFFF"}} />
    <Button color='light' variant="contained">Subscribe</Button>
    </Grid>
   </Grid>
   <Grid container sx={{backgroundColor:"#222222", padding:"24px"}}>
    <Grid item md={4} lg={4}>
    
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
    <Container sx={{textAlign:"center"}}>
      <Typography sx={{fontSize:"0.5", color:"#FFFFFF"}}>Are you ready?</Typography>
      <Typography sx={{fontSize:"1.5rem", color:"#FFFFFF", paddingY:"12px"}}>Lets get sarted</Typography>
      <Button  color="secondary" variant="contained">Get Started</Button>
      <br/>
      <Grid container spacing={3} sx={{color:"white", marginY:"12px", textAlign:"center"}}>
        <Grid xs={12} sm={12} md={3} lg={3}>
      <Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link> 
      </Grid>
      <Grid  xs={12} sm={12} md={3} lg={3} ><Link style={{color:"white", textDecoration:"none"}}  to="/aboutus">About Us</Link></Grid>
      <Grid  xs={12} sm={12} md={3} lg={3}> <Link style={{color:"white", textDecoration:"none"}}  to="">Blog</Link></Grid>
      <Grid  xs={12} sm={12} md={3} lg={3}> <Link style={{color:"white", textDecoration:"none"}}  to="/coontactus">Contact us</Link></Grid>
      </Grid>
      <Typography sx={{fontSize:"0.5", color:"#FFFFFF", paddingY:"12px"}}>Copyright © 2020. Smart CFO. All rights reserved.</Typography>
    </Container>
    </Grid>
    <Grid item  md={4} lg={4}>
    
    </Grid>
   </Grid>
   </>
  )
}

export default Footer