import React from 'react'
import Logo from "../../Assets/Images/SmartCFOLogo.png"
import { Box, Button, Grid } from '@mui/material';
import Lock from "../../Assets/Images/reseticon.png";
import Lottie from "lottie-react";
import resetLottie from "../../Assets/Lottie/reset.json"
import { ButtonTextWrapper, FormContentWrapper, FormSubTitle, FormTitleText, FromNavigateLinkWrapper, LogoWrapper, TextInputField } from '../../globalStyle/global.style';
import { useForm } from 'react-hook-form';
import "../../globalcss/global.css"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../Redux/AuthSlice';
import axios from 'axios';

const ResetPassword = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, userData } = useSelector(state => state.user)

  console.log("userData", userData)

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      id,
      ...data
    }
    dispatch(resetPassword(newData))

  };

  return (
    <>
      <Grid container columnSpacing={{ lg: "120px", md: "30px", xs: "0px" }}>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <Box sx={{
            background: "#EAEBEB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
          }}>
            <Lottie animationData={resetLottie} loop={true} style={{ height: "50vh" }} />
          </Box>
          {/* <img src={Reset} style={{ height: "700px", minWidth: "650px" }} alt='' /> */}
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7}>
          <Box sx={{ padding: "0px 20px" }}>
            <LogoWrapper>
              <img src={Logo} className='logo' alt='' />
            </LogoWrapper>


            <FormContentWrapper>

              <Box sx={{ flexGrow: 1 }}>

                <FormTitleText>ENTER NEW PASSWORD</FormTitleText>
                <FormSubTitle>
                  Your new password must be different to previously used passwords.
                </FormSubTitle>


                <Box sx={{ mt: "30px" }} component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <Box sx={{ py: "8px" }}>
                      <TextInputField
                        type="password"
                        id="outlined-basic"
                        label="Password"
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        fullWidth
                        {...register("newpassword", {
                          required: "Password is required",
                        })} />
                      {errors.newpassword && (
                        <Box sx={{ color: "red" }}>{errors.newpassword.message}</Box>
                      )}
                    </Box>
                    <Box sx={{ py: "8px" }}>
                      <TextInputField
                        type="password"
                        label="Confirm Password"
                        id="outlined-basic"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                        variant="filled"
                        sx={{ marginTop: "10px" }}
                        {...register("confirmpassword", {
                          required: "Confirm Password is required",
                        })}
                      />
                      {errors.confirmpassword && (
                        <Box sx={{ color: "red" }}>{errors.confirmpassword.message}</Box>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ textAlign: "end", marginTop: "20px" }}>
                    <Button type='submit'>
                      <ButtonTextWrapper>
                        {isLoading ? "Loading" : "Reset Password"}
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
                Sign in?
              </Link>
            </FromNavigateLinkWrapper>

          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ResetPassword