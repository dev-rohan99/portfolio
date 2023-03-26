import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import loginSlice from "../pages/login/loginSlice";


const makeStore = () => {

    return configureStore({
        reducer : {
            login : loginSlice
        }
    })

};


export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
