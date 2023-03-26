import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toaster from "../../utility/toaster";


export const userLogin = createAsyncThunk("devrohan/userLogin", async (data : object, router : any) => {
    await axios.post(`http://localhost:8080/api/v1/user/login`, data).then((res) => {
        router.push("/dashboard");
        toaster("success", "Welcome back!");
        console.log(res.data.user);
        return res.data.user;
    }).catch((err) => {
        return toaster("warn", err.response.data.message);
    });
    
});


