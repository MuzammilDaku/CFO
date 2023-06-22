import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography, Box, Button, Divider } from '@mui/material'
import {Douggnut }from "./Charts/Dougnut";
const Index = () => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     let token = localStorage.getItem("access-token")
    //     if (!token) {
    //       navigate("/login")
    //     }
    //   })
  return (
   <>
   <Grid container>
    <Grid item sm={12} md={12} lg={12}>
      <Typography sx={{fontSize:"3rem", color:"#525256", fontWeight:"700"}}>Todays Statistics</Typography>
      <Typography sx={{fontSize:"1rem", color:"#A3A3A3", fontWeight:"400"}}>Thu, 25 May, 2023, 10.30 PM</Typography>
    </Grid>
   </Grid>
   <Grid container spacing={3} >
    <Grid item sm={4} md={4} lg={4}>
      <Box sx={{padding:"16px", backgroundColor:"#ffff", marginY:"8px"}}>
      <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography>Income</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
       <Button>Income</Button>
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography sx={{fontSize:"2rem", fontWeight:"700", color:"black"}}>$ 9460.00</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
    <Typography sx={{fontSize:"1rem", fontWeight:"700", color:"#FF2727"}}>↓ 1.5%</Typography>
       </Grid>
       </Grid>
       <Grid container sx={{ paddingY:"8px"}}>
        <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"#656575"}}>Compared to $9940 yesterday</Typography>

       </Grid>
       <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography sx={{fontSize:"1rem", fontWeight:"500", color:"#525256"}}>Last week expences</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
    <Typography sx={{fontSize:"1rem", fontWeight:"500", color:"#525256"}}>$25658.00</Typography>
       </Grid>
       </Grid>
      </Box>
      <Box sx={{padding:"16px", backgroundColor:"#ffff", marginY:"8px"}}>
      <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography>Expenses</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
       <Button>Today</Button>
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography sx={{fontSize:"2rem", fontWeight:"700", color:"black"}}>$ 9460.00</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
    <Typography sx={{fontSize:"1rem", fontWeight:"700", color:"#52C93F"}}>↑ 2.5%</Typography>
       </Grid>
       </Grid>
       <Grid container sx={{ paddingY:"8px"}}>
        <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"#656575"}}>Compared to $9940 yesterday</Typography>

       </Grid>
       <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography sx={{fontSize:"1rem", fontWeight:"500", color:"#525256"}}>Last week expences</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
    <Typography sx={{fontSize:"1rem", fontWeight:"500", color:"#525256"}}>$25658.00</Typography>
       </Grid>
       </Grid>
      </Box>
      <Box sx={{padding:"16px", backgroundColor:"#ffff", marginY:"8px"}}>
      <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography>Pay vs Cancel</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
       <Button>Today</Button>
       </Grid>
       </Grid>
       <Divider />
      
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      <Douggnut/>
      </Grid>
    </Grid>
      </Box>
      </Grid>
      <Grid item sm={8} md={8} lg={8}>
      <Box sx={{padding:"16px", backgroundColor:"#ffff", marginY:"8px"}}>
      <Grid container spacing={3} sx={{alignItems:"center", paddingY:"8px"}}>
    <Grid item sm={6} md={6} lg={6}>
       <Typography>Pay vs Cancel</Typography>
       </Grid>
       <Grid item sm={6} md={6} lg={6}>
       <Button>Today</Button>
       </Grid>
       </Grid>
       <Divider />
      
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      <Douggnut/>
      </Grid>
    </Grid>
      </Box>
      </Grid>
      </Grid>
   </>
  )
}

export default Index