import React, { useEffect } from 'react'
import Sign from "../../Assets/Images/LoginBanner.png"
import Logo from "../../Assets/Images/SmartCFOLogo.png"
import { Grid, Button, Box } from '@mui/material';
import Signuplogo from "../../Assets/Images/Login.png";
import { ButtonTextWrapper, FormContentWrapper, FormSubTitle, FormTitleText, FromNavigateLinkWrapper, LogoWrapper, TextInputField } from '../../globalStyle/global.style';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import "../../globalcss/global.css"
import { signInUser } from '../../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {


  const { isLoading } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signInUser(data))
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

              <Box sx={{ flexGrow: 1, }}>
                <FormTitleText>Welcome to Smart CFO</FormTitleText>
                <FormSubTitle>Enter your Information to access more</FormSubTitle>


                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                  <Box sx={{ position: "relative" }}>
                    <Box sx={{ py: "8px" }}>
                      <TextInputField
                        type="password"
                        label="Password"
                        // defaultValue='First Name'
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

                    <Box sx={{ position: "absolute", right: "15px", top: "35px" }}>
                      <Link to="/forgotpassword" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.3)" }}>FORGOT</Link>
                    </Box>
                  </Box>

                  <Box sx={{ textAlign: "end", marginTop: "20px" }}>
                    <Button type='submit'>
                      <ButtonTextWrapper>
                        {isLoading ? "Loading..." : "Sing In"}
                      </ButtonTextWrapper>
                      <img src={Signuplogo} className='form-icon' alt='' />
                    </Button>

                  </Box>

                </Box>
              </Box>
            </FormContentWrapper>

            <FromNavigateLinkWrapper>
              Don’t have account? {" "}
              <Link to="/signup" style={{ color: "#596CF7" }}>
                Sign up
              </Link>
            </FromNavigateLinkWrapper>
          </Box>

        </Grid>
      </Grid>
    </>
  )
}

export default Login