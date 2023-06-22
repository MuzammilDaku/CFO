import React, { useEffect } from 'react'
import Sign from "../../Assets/Images/SignUp.png"
import Logo from "../../Assets/Images/SmartCFOLogo.png"
import { Grid, Button, Box, MenuItem } from '@mui/material';
import Signuplogo from "../../Assets/Images/signup-logo.png";
import { ButtonTextWrapper, FormContentWrapper, FormSubTitle, FormTitleText, FromNavigateLinkWrapper, LogoWrapper, TextInputField } from '../../globalStyle/global.style';
import { useForm } from 'react-hook-form';
import "../../globalcss/global.css"
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  // country select button values
  const country = [
    {
      value: 'pakistan',
      label: 'Pakistan',
    },
    {
      value: 'bangladesh',
      label: 'Bangladesh',
    },
    {
      value: 'india',
      label: 'India',
    },
    {
      value: 'usa',
      label: 'USA',
    },
  ];
  const { message, userData, isLoading, token } = useSelector(state => state.user)
  console.log("userData", userData)
  console.log("message", message)
  console.log("token", token)

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signUpUser(data))
    // console.log(data)
  };
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("access-token")
    if (token) {
      navigate("/")
    }
  })

  return (
    <>
      <Grid container columnSpacing={{ lg: "120px", md: "30px", xs: "0px" }}>

        <Grid item xs={12} sm={5} md={5} lg={5}>
          <img src={Sign} style={{ height: "100vh", width: "100%" }} alt='' />
        </Grid>

        <Grid item xs={12} sm={7} md={7} lg={7}>
          <Box sx={{ padding: "0px 20px" }}>

            <LogoWrapper>
              <img src={Logo} className="logo" alt='' />
            </LogoWrapper>

            <FormContentWrapper>
              <Box sx={{ flexGrow: 1 }}>
                <FormTitleText>Welcome to Smart CFO</FormTitleText>
                <FormSubTitle>Enter your Information to access more</FormSubTitle>

                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "45px",
                    py: "8px"
                  }}>
                    <Box sx={{ width: "100%" }}>
                      <TextInputField
                        type="text"
                        label="First Name"
                        id="outlined-basic"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                        variant="filled"
                        sx={{ marginTop: "10px" }}
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                      />
                      {errors.firstName && (
                        <Box sx={{ color: "red" }}>{errors.firstName.message}</Box>
                      )}
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <TextInputField
                        type="text"
                        label="Last name"
                        id="outlined-basic"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                        variant="filled"
                        sx={{ marginTop: "10px" }}
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                      />
                      {errors.lastName && (
                        <Box sx={{ color: "red" }}>{errors.lastName.message}</Box>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ py: "8px" }}>
                    <TextInputField
                      type="email"
                      label="Email"
                      id="outlined-basic"
                      fullWidth
                      InputProps={{ disableUnderline: true }}
                      variant="filled"
                      sx={{ marginTop: "10px" }}
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <Box sx={{ color: "red" }}>{errors.email.message}</Box>
                    )}
                  </Box>

                  <Box sx={{ py: "8px" }}>
                    <TextInputField
                      type="password"
                      label="Password"
                      id="outlined-basic"
                      fullWidth
                      InputProps={{ disableUnderline: true }}
                      variant="filled"
                      sx={{ marginTop: "10px" }}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <Box sx={{ color: "red" }}>{errors.password.message}</Box>
                    )}
                  </Box>

                  <Box sx={{ py: "8px" }}>
                    <TextInputField
                      type="text"
                      label="Company"
                      id="outlined-basic"
                      fullWidth
                      InputProps={{ disableUnderline: true }}
                      variant="filled"
                      sx={{ marginTop: "10px" }}
                      {...register("company", {
                        required: "Company is required",
                      })}
                    />
                    {errors.company && (
                      <Box sx={{ color: "red" }}>{errors.company.message}</Box>
                    )}
                  </Box>

                  <Box sx={{ py: "8px" }}>
                    <TextInputField
                      select
                      label="Country"
                      // defaultValue=""
                      fullWidth
                      id="outlined-basic"
                      InputProps={{ disableUnderline: true }}
                      variant="filled"
                      sx={{ marginTop: "10px" }}
                      {...register("country", {
                        required: "Country is required",
                      })}

                    >
                      {country.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextInputField>
                    {errors.country && (
                      <Box sx={{ color: "red" }}>{errors.country.message}</Box>
                    )}
                  </Box>

                  <Box sx={{ textAlign: "end", marginTop: "20px" }}>
                    <Button type='submit'>
                      <ButtonTextWrapper>
                        {isLoading ? "Loading..." : "Sing Up"}
                      </ButtonTextWrapper>
                      <img src={Signuplogo} className='form-icon' alt='' />
                    </Button>
                  </Box>
                </Box>
              </Box>


            </FormContentWrapper>

            <FromNavigateLinkWrapper>
              Already have an account? {" "}
              <Link to="/login" style={{ color: "#596CF7" }}>
                Sign in
              </Link>
            </FromNavigateLinkWrapper>
          </Box>
        </Grid>
      </Grid >
    </>
  )
}

export default Signup