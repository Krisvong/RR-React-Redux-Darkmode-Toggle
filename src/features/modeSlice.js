import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://i.stack.imgur.com/q89AO.jpg'
}

const mode2 = {
    darkMode: false,
    color1: '#E56B6F',
    color2: '#F9A26C', 
    color3: '#FAD7A0', 
    color4: '#FEF3C7', 
    color5: '#F0E5D8', 
    // color1: '#6E44FF',
    // color2: '#B892FF',
    // color3: '#FFC2E2',
    // color4: '#FF90B3',
    // color5: '#EF7A85',
    photo: 'https://placekitten.com/200/300'
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        lightMode: () => {
            return mode2
        },
        darkMode: () => {
            return mode1
        }
    }
})

export const { lightMode, darkMode } = modeSlice.actions

export default modeSlice.reducer
