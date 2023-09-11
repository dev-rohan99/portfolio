import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({ baseUrl : "https://portfolio-9853.onrender.com/api/v1", credentials : "include" }),
    endpoints : (builder) => ({

        register : builder.mutation({
            query : (payload) => ({
                url : "/users/register",
                method : "POST",
                body : payload
            })
        }),

        login : builder.mutation({
            query : (payload) => ({
                url : "/users/login",
                method : "POST",
                body : payload
            })
        }),

        updateUser : builder.mutation({
            query : (payload) => ({
                url : "/users/update",
                method : "PUT",
                body : payload
            })
        }),

        getPortfolioItems : builder.query({
            query : () => ({
                url : `/user/portfolio/get`,
                method : "GET"
            })
        }),

        getPackagesItems : builder.query({
            query : ({priceRange, cat, serviceName}) => ({
                url : `/user/packages/get?&service=${serviceName}${cat}`,
                method : "GET"
            })
        }),

        clientMessageSend : builder.mutation({
            query : (payload) => ({
                url : `/user/client-mail`,
                method : "POST",
                body : payload
            })
        }),

        downloadResume : builder.query({
            query : () => ({
                url : `/user/download-my-resume`,
                method : "GET"
            })
        }),

    })
});


export const { useRegisterMutation, useLoginMutation, useUpdateUserMutation, useGetPortfolioItemsQuery, useClientMessageSendMutation, useDownloadResumeQuery, useGetPackagesItemsQuery } = apiSlice;
