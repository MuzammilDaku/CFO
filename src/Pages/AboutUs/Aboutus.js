import React from 'react'
import "./Aboutus.css"
import { Typography, Grid, Container, Button, Box } from '@mui/material'
import Banner from '../../Assets/Images/about-us-banner.png';
import coins from '../../Assets/Images/coins.png'
import analysis from '../../Assets/Images/predictive-analysis.png'
import group from '../../Assets/Images/predictive-analysis-group.png'
import Service from '../../Assets/Images/service-circle.png'
import Star from "../../Assets/Images/star.png"
import Review from "../../Assets/Images/review.png";
import Clock from "../../Assets/Images/clock.png";
import peopleGroup from "../../Assets/Images/group.png";



const Aboutus = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ paddingY: "28px", alignItems: "end" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "60px" }}> Managing business payments has <span style={{ color: "#596CF7" }}>never been easier </span> </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ color: "#000000", fontWeight: "400", fontSize: "18px" }}>We’re exist to assist you managing your financial plannings and celebrate your financial acheivements. We’re exist to assist you managing your financial plannings and celebrate your financial acheivements. We’re exist to assist you managing your financial plannings and celebrate your financial acheivements.</Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>

          <Container>
            <div class="container-image">
              <img src={Banner} alt='image' />
              <div class="bottom-left">
                <Typography sx={{ color: "#222222", fontSize: "30px", fontWeight: "600" }}>Why We Do This</Typography>
                <br />
                <Typography sx={{ color: "#222222", fontSize: "14px", fontWeight: "400" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <br />
                <Button color='primary' variant="contained">Read Our Blog</Button>
              </div>
            </div>
          </Container>
        </Grid>
      </Grid>
      <Container>
        <Grid container sx={{ paddingY: "32px" }}>
          <Grid item  md={6} lg={6}>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ color: "#222222", fontSize: "30px", fontWeight: "600" }}>We design tools that help millions of professionals be more effective at their job </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} sx={{ paddingY: "32px", alignItems: "center" }}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box className="About-us-box">
              <img src={coins} alt='image' />
              <br />
              <Typography sx={{ color: "#222222", fontSize: "30px", fontWeight: "600" }}>Expert in Finance</Typography>
              <br />
              <Typography sx={{ color: "#222222", fontSize: "14px", fontWeight: "400" }}>From the beginning we were focused on serving customer exclusively in the Saas space.</Typography>
              <br />
              <Container>
                <img src={analysis} alt='image' />
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box className="About-us-box">
              <img src={coins} alt='image' />
              <br />
              <Typography sx={{ color: "#222222", fontSize: "30px", fontWeight: "600" }}>Flawless Communication</Typography>
              <br />
              <Typography sx={{ color: "#222222", fontSize: "14px", fontWeight: "400" }}>From the beginning we were focused on serving customer exclusively in the Saas space.</Typography>

            </Box>
            <br />
            <Box className="About-us-box-center">

              <Typography sx={{ color: "#ffff", fontSize: "30px", fontWeight: "600" }}>Want to see how we apply these in practice</Typography>
              <br />
              <Button color="secondary" variant="contained">See Template</Button>

            </Box>
            <br />
            <Box className="About-us-box">
              <img src={coins} alt='image' style={{ color: "#ffff" }} />
              <br />
              <Typography sx={{ color: "#222222", fontSize: "30px", fontWeight: "600" }}>True Design Leadership</Typography>
              <br />
              <Typography sx={{ color: "#222222", fontSize: "14px", fontWeight: "400" }}>We are a true design partner, guiding you through the process.</Typography>

            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box className="About-us-box">
              <img src={coins} alt='image' />
              <br />
              <Typography sx={{ color: "#222222", fontSize: "30px", fontWeight: "600" }}>Flawless Communication</Typography>
              <br />
              <Typography sx={{ color: "#222222", fontSize: "14px", fontWeight: "400" }}>From the beginning we were focused on serving customer exclusively in the Saas space.</Typography>
              <br />
              <Container>
                <img src={group} alt='image' />
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box className="about-us-box-other">
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7}>

              <Typography sx={{ color: "#FFFFFF", fontSize: "40px", fontWeight: "600" }}>Explore our service range</Typography>
              <br />
              <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "400" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
              <br />

              <Button color="secondary" variant="contained">Learn about our services</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} sx={{ textAlign: "center" }}>
              <img src={Service} alt="image" />
            </Grid>

          </Grid>
        </Box>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "center", paddingY: "28px" }}>
            <Typography sx={{ color: "#000000", fontWeight: "600", fontSize: "48px" }}>Why Choose Us</Typography>
            <Typography sx={{ color: "#000000", fontWeight: "400", fontSize: "18px" }}>We will asked your permission to remove unwanted subscriptions to analyzing how often you are in using them.</Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} sx={{ paddingY: "28px" }}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <div class="container-box">

              <div class="top-left">
                <img src={Star} alt='' />
              </div>
              <br />
              <Typography sx={{ fontSize: "30px", fontWeight: "600", paddingY: "28px" }}>Expertise</Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "400", paddingY: "8px" }}>We have extensive experience in designing and developing websites for clients across various industries</Typography>

            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <div class="container-box">

              <div class="top-left">
                <img src={peopleGroup} alt='' />
              </div>
              <br />
              <Typography sx={{ fontSize: "30px", fontWeight: "600", paddingY: "28px" }}>Attention to Detail</Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "400", paddingY: "8px" }}>We take pride in my work, and I pay close attention to every detail to ensure that product is ot the highest Quality.</Typography>

            </div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} sx={{ paddingY: "28px" }}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <div class="container-box">

              <div class="top-left">
                <img src={Review} alt='' />
              </div>
              <br />
              <Typography sx={{ fontSize: "30px", fontWeight: "600", paddingY: "28px" }}>Expertise</Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "400", paddingY: "8px" }}>We have extensive experience in designing and developing websites for clients across various industries</Typography>

            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <div class="container-box">

              <div class="top-left">
                <img src={Clock} alt='' />
              </div>
              <br />
              <Typography sx={{ fontSize: "30px", fontWeight: "600", paddingY: "28px" }}>Attention to Detail</Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "400", paddingY: "8px" }}>We take pride in my work, and I pay close attention to every detail to ensure that product is ot the highest Quality.</Typography>

            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Aboutus