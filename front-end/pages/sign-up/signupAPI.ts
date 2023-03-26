import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toaster from "../../utility/toaster";



export const userSignup = createAsyncThunk("devrohan/userSignup", async (data : object, router : any) => {
    await axios.post(`http://localhost:8080/api/v1/user/sign-up`, data).then((res) => {
        router.push("/login");
        
        return res.data;
    }).catch((err) => {
        return toaster("warn", err.response.data.message);
    });
    
});

