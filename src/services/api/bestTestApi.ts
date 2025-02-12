import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {handleError} from '../handleError'

export const bestTestApi = createApi({
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BEST_TEST_API_URL
        })(args, api, extraOptions)

        handleError(api, result)

        return result
    },

    endpoints: () => ({}),
    reducerPath: 'bestTestApi'
})
