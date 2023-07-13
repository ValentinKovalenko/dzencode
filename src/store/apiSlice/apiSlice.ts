import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sliceApi = createApi({
    reducerPath: 'sliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => `https://dzencode-server-jzgj.vercel.app/orders`,
        }),
        getProducts: builder.query({
            query: ({params}) => ({url:`https://dzencode-server-jzgj.vercel.app/products`, params}),
        }),
    }),
})

export const { useGetOrdersQuery, useGetProductsQuery, useLazyGetProductsQuery } = sliceApi