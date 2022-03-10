import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    solars: ["Solar Roof", "Solar Panels"]
}

const solarSlice = createSlice({
    name: "solar",
    initialState,
    reducers: {}
})

export const selectSolars = state => state.solar.solars

export default solarSlice.reducer