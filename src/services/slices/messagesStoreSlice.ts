import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Message, MessagesState} from '@/services'

const initialState: MessagesState = {
    sendMessage: [],
    responseMessage: []
}


const slice = createSlice({
    name: 'messagesStore',
    initialState,
    reducers: {
        addSendMessage: (state, action: PayloadAction<Message & { isMine: boolean }>) => {
            state.sendMessage.push(action.payload)
        },
        addResponseMessage: (state, action: PayloadAction<Message>) => {
            state.responseMessage.push(action.payload)
        },
        clearMessages: () => {
            return initialState
        }
    },

    selectors: {
        selectSendMessage: (sliceState) => sliceState.sendMessage,
        selectResponseMessage: (sliceState) => sliceState.responseMessage
    }
})


export const messagesStoreReducer = slice.reducer

export const {addSendMessage, addResponseMessage, clearMessages} = slice.actions

export const {selectSendMessage, selectResponseMessage} = slice.selectors
