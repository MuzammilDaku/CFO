import { Container, Grid, Box, Typography, Button, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import homeImage from "../../Assets/Images/heroimg.png"
import Forbes from "../../Assets/Images/forbes.png";
import Buz from "../../Assets/Images/buz.png";
import Berg from "../../Assets/Images/berg.png";
import Time from "../../Assets/Images/time.png";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Subscribe from "../../Assets/Images/Subscrbeimg.png";
import Phone from "../../Assets/Images/phone.png";
import Money from "../../Assets/Images/money.png";
import Calculator from "../../Assets/Images/calculator.png";
import { useNavigate } from 'react-router-dom';
import "./style.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };




  return (
    <>
      <Container>
        <Grid container>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ fontWeight: "500", fontSize: "4rem" }}> Keep your </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "4rem" }}>financial plan</Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "4rem" }}>well <span style={{backgroundColor:"#F6FF82"}}>organized</span></Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "1.5rem" }}>
              We’re exist to assist you managing your financial plannings
              and celebrate your financial acheivements
            </Typography>
            <Button color='primary' variant="contained">Subscribe</Button>

          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: "flex" }}>
          <div className="flex-container">
  <img src={homeImage} alt="" className="image-responsivetwo" />
</div>
            {/* <img src={homeImage} style={{ width: "550px", height: "360px" }} alt='' /> */}

          </Grid>
        </Grid>
        <Grid container sx={{ padding: "24px" }}>
        <Grid xs={2} sm={2} md={2} lg={2}>
          </Grid>
          <Grid xs={8} sm={8} md={8} lg={8}>
            <Typography sx={{ fontSize: "3rem", fontWeight: "500" }}>Your advantage of choosing us</Typography>
            <Typography sx={{ fontSize: "3rem", fontWeight: "500" }}> as your financial planner tool</Typography>
          </Grid>
          <Grid xs={2} sm={2} md={2} lg={2}>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Container sx={{ marginTop: "42px", marginBottom: "22px" }}>
              <Box sx={{ width: '100%' }}>
                <Container>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                      <Tab label="Plan what ever you want" {...a11yProps(0)} sx={{ margin: "8px" }} />
                      <Tab label="Customize your needs" {...a11yProps(1)} sx={{ margin: "8px" }} />
                      <Tab label="Manage Subscription" {...a11yProps(2)} sx={{ margin: "8px" }} />
                      <Tab label="Cover my Bank Accounts" {...a11yProps(3)} sx={{ margin: "8px" }} />
                    </Tabs>
                  </Box>
                </Container>
                <TabPanel value={value} index={0}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center" }}>
                    <div className="flex-containerthree">
                    <img src={Subscribe} alt="" className="image-responsivethree" />
                  </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "#222222" }}>Manage your subscription</Typography>
                      <Typography sx={{ fontSize: "32px", fontWeight: "600", color: "#000000" }}>Let’s see if we can remove</Typography>
                      <Typography sx={{ fontSize: "32px", fontWeight: "600", color: "#000000" }}>your unwanted subscriptions</Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#222222" }}>We will asked your permission to remove unwanted subscriptions</Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#222222" }}>to analyzing how often you are in using them.</Typography>
                      <Box sx={{ paddingY: "24px" }}>
                        <Button color='primary' variant="contained">Subscribe</Button>
                      </Box>
                      <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <Typography sx={{ fontSize: "70px", fontWeight: "600", color: "#000000" }}>58%</Typography>
                          <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "#222222" }}>Useless expenses comes from unnecessary subscription </Typography>
                          <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "#222222" }}>Ny Times, 2023</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <Typography sx={{ fontSize: "70px", fontWeight: "600", color: "#000000" }}>67%</Typography>
                          <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "#222222" }}>Useless expenses comes from unnecessary subscription </Typography>
                          <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "#222222" }}>Ny Times, 2023</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Box>
            </Container>
          </Grid>
        </Grid>

      </Container>
      <div style={{ backgroundColor: "#222222" }}>
        <Container>
          <Grid container sx={{ paddingY: "24px" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingY: "10%" }}>

              <Typography sx={{ fontSize: "32px", fontWeight: "600", color: "#FFFFFF" }}>Let’s see if we can remove</Typography>
              <Typography sx={{ fontSize: "32px", fontWeight: "600", color: "#FFFFFF" }}>your unwanted subscriptions</Typography>
              <br />
              <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#FFFFFF" }}>We will asked your permission to remove unwanted subscriptions to </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#FFFFFF" }}>analyzing how often you are in using them.</Typography>
              <br />
              <Typography sx={{ fontSize: "18px", fontWeight: "600", color: "#FFFFFF" }}>See how users use Smart CFO </Typography>

              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Typography sx={{ fontSize: "70px", fontWeight: "600", color: "#FFFFFF" }}>58%</Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>Useless expenses comes from unnecessary subscription </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "#FFFFFF" }}>Ny Times, 2023</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Typography sx={{ fontSize: "70px", fontWeight: "600", color: "#FFFFFF" }}>67%</Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>Useless expenses comes from unnecessary subscription </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "#FFFFFF" }}>Ny Times, 2023</Typography>
                </Grid>
              </Grid>

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center", paddingY: "5%" }}>
            <div className="flex-container">
  <img src={Phone} alt="" className="image-responsive" />
</div>
            </Grid>

          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: "#222222" }}>
        <div style={{ backgroundColor: "#FFFF", width: "90%", }}>
          <Container>
            <Typography sx={{ fontSize: "3rem", fontWeight: "600" }}>Read our latest posted blog <br /> about financial planning</Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center", paddingY: "16px" }}>
                <img src={Money} alt="money" style={{ width: "350px", height: "350px" }} />
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center" }}>

                <Grid container >
                  <Grid xs={12} sm={12} md={6} lg={6} sx={{ paddingY: "5%", textAlign: "start" }} >
                    <Grid container>
                      <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "start" }} >
                        <Button variant='outlined'>Subscribe</Button>
                      </Grid>
                      <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center" }} >
                        <Typography sx={{ fontSize: "10px", color: "#222222", fontWeight: "500" }}>Feb 12, 2023</Typography>
                      </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: "12px", fontWeight: "600", paddingY: "8px" }}>Good buckles under pressure from strong <br /> dollar, looming rates hikes</Typography>
                    <Typography sx={{ fontSize: "12px", fontWeight: "500", color: "#596CF7" }}>Read More</Typography>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6} sx={{ paddingY: "5%", textAlign: "center" }} >
                    <img src={Calculator} alt="calculator" style={{ width: "100px", height: "100px" }} />
                  </Grid>
                </Grid>
                <Divider />
                <Grid container >
                  <Grid xs={12} sm={12} md={6} lg={6} sx={{ paddingY: "5%", textAlign: "start" }} >
                    <Grid container>
                      <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "start" }} >
                        <Button variant='outlined'>Subscribe</Button>
                      </Grid>
                      <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center" }} >
                        <Typography sx={{ fontSize: "10px", color: "#222222", fontWeight: "500" }}>Feb 12, 2023</Typography>
                      </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: "12px", fontWeight: "600", paddingY: "8px" }}>Good buckles under pressure from strong <br /> dollar, looming rates hikes</Typography>
                    <Typography sx={{ fontSize: "12px", fontWeight: "500", color: "#596CF7" }}>Read More</Typography>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6} sx={{ paddingY: "5%", textAlign: "center" }} >
                    <img src={Calculator} alt="calculator" style={{ width: "100px", height: "100px" }} />
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Container>
        <Grid container sx={{ textAlign: "center", padding: "24px" }}>
          <Grid xs={12} sm={12} md={3} lg={3}>
            <img src={Forbes} style={{ maxWidth: "160px" }} alt='' />
            <Box sx={{ textAllign: "center" }}>
              <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#63666A" }}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={3} lg={3}>
            <img src={Buz} style={{ maxWidth: "160px" }} alt='' />
            <Box sx={{ textAllign: "center" }}>
              <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#63666A" }}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={3} lg={3}>
            <img src={Berg} style={{ width: "160px" }} alt='' />
            <Box sx={{ textAllign: "center" }}>
              <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#63666A" }}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={3} lg={3}>
            <img src={Time} style={{ width: "160px" }} alt='' />
            <Box sx={{ textAllign: "center" }}>
              <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#63666A" }}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default Home