import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-hot-toast";



export const signUpUser = createAsyncThunk("authentication/signUpUser", async (data) => {
    const res = await axios.post("http://localhost:4000/auth/signup", { ...data });
    return res.data
})

export const signInUser = createAsyncThunk("authentication/signInUser", async (data) => {
    const res = await axios.post("http://localhost:4000/auth/login", { ...data })
    return res.data
})

export const forgotPassword = createAsyncThunk("authentication/forgotPassword", async (data) => {
    const res = await axios.post("http://localhost:4000/auth/user-forget-link", { ...data })
    return res.data
})

export const resetPassword = createAsyncThunk("authentication/resetPassword", async (data) => {
    const res = await axios.post("http://localhost:4000/auth/changePassword", { ...data })
    return res.data
})

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        isLoading: false,
        userData: {},
        error: null,
        message: "",
        token: ""
    },
    extraReducers: (builder) => {
        /*
         * sign in credential
         */

        builder.addCase(signInUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
            state.error = null;
            state.message = action.payload.message;
            state.token = action.payload.token
            if (state.token) {
                toast.success(state.message, { duration: 6000, })
                localStorage.setItem("access-token", JSON.stringify(state.token))
            }
            else {
                toast.error(state.message, { duration: 6000, })
            }
        })
        builder.addCase(signInUser.rejected, (state, action) => {
            state.isLoading = false;
            state.userData = {};
            state.error = action.payload.message
            toast.error(state.error ? state.error : "User credential is wrong!, Please try agin", { duration: 6000, })
        });
        /*
         * sign up credential
         */
        builder.addCase(signUpUser.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
            state.error = null;
            state.message = action.payload.message;
            state.token = action.payload.token
            if (state.token) {
                toast.success(state.message, { duration: 6000, })
                // localStorage.setItem("access-token", JSON.stringify(state.token))
                window.location.replace("/login")
            }
            else {
                toast.error(state.message, { duration: 6000, })
            }
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.isLoading = false;
            state.userData = {};
            state.error = action.payload.message
            toast.error(state.error ? state.error : "User credential is wrong!, Please try agin", { duration: 6000, })
        });
        /*
         * Forgot password credential
         */
        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
            state.message = action.payload.message;
            state.error = null;
            toast.success(state.message + "Please verify your email", { duration: 6000, })
        })
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.userData = {};
            state.error = action.payload.message
            toast.error(state.error, { duration: 6000, })
        });
        /*
        * reset password credential
        */
        builder.addCase(resetPassword.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
            // state.message = action.payload.message;
            state.error = null;
            // toast.success(state.message, { duration: 6000, })
        })
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.userData = {};
            // state.error = action.payload.message
            // toast.error(state.error, { duration: 6000, })
        });
    }
})


export default authSlice.reducer 