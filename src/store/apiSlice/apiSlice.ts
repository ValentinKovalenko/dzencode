import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sliceApi = createApi({
    reducerPath: 'sliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => `http://localhost:3004/orders`,
        }),
        getProducts: builder.query({
            query: ({params}) => ({url:`http://localhost:3004/products`, params}),
        }),
    }),
})

export const { useGetOrdersQuery, useGetProductsQuery, useLazyGetProductsQuery } = sliceApi