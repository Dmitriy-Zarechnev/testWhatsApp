import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PhoneNumber} from '@/services'

const initialState: PhoneNumber = {
    phoneNumber: ''
}


const slice = createSlice({
    name: 'phoneNumber',
    initialState,
    reducers: {
        setPhoneNumber: (_, action: PayloadAction<PhoneNumber>) => {
            return action.payload
        },
        updatePhoneNumber: (state, action: PayloadAction<Partial<PhoneNumber>>) => {
            return {...state, ...action.payload}
        },
        clearPhoneNumber: () => {
            return initialState
        }
    },

    selectors: {
        selectPhoneNumber: (sliceState) => sliceState.phoneNumber
    }
})


export const phoneNumberReducer = slice.reducer

export const {setPhoneNumber, updatePhoneNumber, clearPhoneNumber} = slice.actions

export const {selectPhoneNumber} = slice.selectors