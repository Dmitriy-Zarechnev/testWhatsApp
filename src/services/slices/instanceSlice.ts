import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InstanceInfo} from '@/services'

const initialState: InstanceInfo = {
    idInstance: '1103191268',
    apiTokenInstance: '99c81963e57047fda8366fa5cb499cb37bcef8cd69d34312b6'
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

export const {setInstanceInfo, updateInstanceInfo, clearInstanceInfo} = slice.actions

export const {selectIdInstance, selectApiTokenInstance} = slice.selectors