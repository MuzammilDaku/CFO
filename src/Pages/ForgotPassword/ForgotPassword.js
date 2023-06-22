import React from 'react'
import Logo from "../../Assets/Images/SmartCFOLogo.png"
import { Grid, Box, Button } from '@mui/material';
import Lock from "../../Assets/Images/Lock.png";
import Forgot from "../../Assets/Images/ForgotPassword.png";
import { Link } from 'react-router-dom';
import { ButtonTextWrapper, FormContentWrapper, FormSubTitle, FormTitleText, FromNavigateLinkWrapper, LogoWrapper, TextInputField } from '../../globalStyle/global.style';
import { useForm } from 'react-hook-form';
import "../../globalcss/global.css"
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Redux/AuthSlice';

const ForgotPassword = () => {

  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(forgotPassword(data))
  };

  return (
    <>
      <Grid container columnSpacing={{ lg: "120px", md: "30px", xs: "0px" }}>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <img src={Forgot} style={{ height: "100vh", width: "100%" }} alt='' />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7} >

          <Box sx={{ padding: "0px 20px" }}>
            <LogoWrapper>
              <img src={Logo} className='logo' alt='' />
            </LogoWrapper>


            <FormContentWrapper>
              <Box sx={{ flexGrow: 1, }}>
                <FormTitleText>FORGOT  PASSWORD?</FormTitleText>
                <FormSubTitle>No worries, we’ll send you reset Instructions</FormSubTitle>


                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <TextInputField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      fullWidth
                      sx={{
                        marginTop: "48px",
                      }}
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <Box sx={{ color: "red" }}>{errors.email.message}</Box>
                    )}
                  </Box>

                  <Box sx={{ textAlign: "end", marginTop: "20px" }}>
                    <Button type='submit'>
                      <ButtonTextWrapper>
                        {isLoading ? "Loading.." : "Forgot Password"}
                      </ButtonTextWrapper>
                      <img src={Lock} className='form-icon' alt='' />
                    </Button>
                  </Box>
                </Box>

              </Box>
            </FormContentWrapper>

            <FromNavigateLinkWrapper>
              Back To {" "}
              <Link to="/login" style={{ color: "#596CF7" }}>
                Sign In?
              </Link>
            </FromNavigateLinkWrapper>
          </Box>

        </Grid>
      </Grid >


    </>
  )
}

export default ForgotPassword