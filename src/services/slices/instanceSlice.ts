import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InstanceInfo} from '@/services'

const initialState: InstanceInfo = {
    idInstance: '',
    apiTokenInstance: ''
}

const slice = createSlice({
    name: 'instanceInfo',
    initialState,
    reducers: {
        setInstanceInfo: (_, action: PayloadAction<InstanceInfo>) => {
            return action.payload
        },
        updateInstanceInfo: (state, action: PayloadAction<Partial<InstanceInfo>>) => {
            return {...state, ...action.payload}
        },
        clearInstanceInfo: () => {
            return initialState
        }
    },

    selectors: {
        selectIdInstance: (sliceState) => sliceState.idInstance,
        selectApiTokenInstance: (sliceState) => sliceState.apiTokenInstance
    }
})

export const instanceInfoReducer = slice.reducer

export const {setInstanceInfo} = slice.actions

export const {selectIdInstance, selectApiTokenInstance} = slice.selectors
