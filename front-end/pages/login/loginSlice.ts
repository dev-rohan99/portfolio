import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./loginAPI";

interface authState {
    user : any,
    loginState : boolean,
    loading : boolean,
    message : string,
    status : string
}

const initialState : authState = {
    user : null,
    loginState : false,
    status : "idle",
    loading : false,
    message : ""
}

const loginSlice = createSlice({
    name : "login",
    initialState,
    reducers : {
        
        register : () => {

        }

    },

    extraReducers : (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loginState = true;
            state.status = "success";
            state.loading = false;
            state.user = action.payload;
            state.message = "User login successfull!";
        }).addCase(userLogin.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.message = "User login request!";
        }).addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.status = "failed";
            state.message = "User login failed!";
        })
    }
});


export const { register } = loginSlice.actions;

export default loginSlice.reducer;
