import React, { useState } from 'react'


import { Alert as MuiAlert, Button, TextField, Grid, Container, Typography } from "@mui/material";
import ContactImage from "../../Assets/Images/conatact.png";
const Contactus = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: ""
  });
  const handleFormSubmit = () => {
    console.log(formData);
    alert("Form submitted successfully!");
  };
  const countryCodeOptions = [
    { label: "+1", value: "US" },
    { label: "+44", value: "UK" },
    // Add more country code options as needed
  ];
  const handleCountryCodeChange = (event, value) => {
    setSelectedCountryCode(value);
  };
  return (
    <>
      <Container>
        <Grid container>
          <Grid sm={12} xs={12} md={6} lg={6}>
            <Typography sx={{ color: "#596CF7", fontSize: "3rem", fontWeight: "700" }}>Talk to our product analytics expert</Typography>
            <Typography sx={{ color: "#222222", fontSize: "1rem", fontWeight: "400" }}>Need help with something? Want a Demo? Get in touch with our friendly team and we’ll get in touch with you.</Typography>
            <Grid container sx={{ paddingY: "21px" }}>
              <Grid xs={6} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" label="First Name" variant="standard" margin="normal" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={6}>
                <TextField id="standard-basic" label="Last Name" variant="standard" margin="normal" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <TextField id="standard-basic" label="Email" fullWidth variant="standard" margin="normal" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <TextField id="standard-basic" label="Company Name" fullWidth variant="standard" margin="normal" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <TextField
                  margin="normal"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  id="standard-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="standard"
                />
              </Grid>

            </Grid>
            {/* <Autocomplete
  id="country-code-select"
  options={countryCodeOptions}
  getOptionLabel={(option) => option.label}
  value={selectedCountryCode}
  onChange={handleCountryCodeChange}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Country Code"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <span>+ </span>
          </InputAdornment>
        ),
      }}
    />
  )}
/>
<TextField
  id="phone-number-input"
  label="Phone Number"
  variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        {selectedCountryCode && <span>{selectedCountryCode.label}</span>}
      </InputAdornment>
    ),
  }}
/> */}
            <Grid container>
              <Grid item xs={12} sm={12} lg={12} md={12} sx={{ textAlign: "center", paddingY: "21px" }}>
                <Button color='primary' variant="contained" onClick={handleFormSubmit}>Get in Touch</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm={12} xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
            <img src={ContactImage} style={{ maxWidth: "450px" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contactus