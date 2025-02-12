import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

import {bestTestApi} from './api/bestTestApi'
import {instanceInfoReducer} from './slices/instanceSlice'
import {useDispatch} from 'react-redux'
import {phoneNumberReducer} from '@/services/slices/phoneNumberSlice'

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bestTestApi.middleware),
    reducer: {
        [bestTestApi.reducerPath]: bestTestApi.reducer,
        instanceInfo: instanceInfoReducer,
        phoneNumber: phoneNumberReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)
