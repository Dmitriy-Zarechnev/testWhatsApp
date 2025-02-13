import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MessagesState} from '@/services'

const initialState: MessagesState[] = []


const slice = createSlice({
    name: 'messagesStore',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<MessagesState>) => {
            state.push(action.payload)
        },
        clearMessages: () => {
            return initialState
        }
    },
    selectors: {
        selectAllMessages: (state) => state
    }
})


export const messagesStoreReducer = slice.reducer

export const {addMessage, clearMessages} = slice.actions

export const {selectAllMessages} = slice.selectors
