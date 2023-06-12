import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const apiSlice =  createApi ({
    baseQuery : fetchBaseQuery({baseUrl: "http://localhost:4500"}),
    tagTypes: ["Note", "User"],
    endpoints: builder => ({

    })
})


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:4500',
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token

//       if (token) {
//           headers.set("authorization", `Bearer ${token}`)
//       }
//       return headers
//   }
// })

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ["Note", "User"],
//   endpoints: (builder) => ({}),
// });