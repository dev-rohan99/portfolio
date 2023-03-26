import { createSlice } from "@reduxjs/toolkit";
import toaster from "../../utility/toaster";
import { userSignup } from "./signupAPI";

interface signupState {
    loading : boolean,
    message : string,
    status : string
}

const initialState : signupState = {
    loading : false,
    message : "",
    status : "idle"
}

const signupSlice = createSlice({
    name : "signup",
    initialState, 
    reducers : {

    },

    extraReducers : (builder) => {
        builder.addCase(userSignup.fulfilled, (state, action) => {
            state.loading = false;
            state.status = "success";
            toaster("success", "You are welcome for joining us! Please login your account.");
            state.message = "User signup successfull!";
        }).addCase(userSignup.pending, (state, action) => {
            state.loading = true;
            state.status = "idle";
        }).addCase(userSignup.rejected, (state, action) => {
            state.loading = false;
            state.status = "failed";
            state.message = "User signup failed!";
        })
    }
});


export default signupSlice.reducer;
