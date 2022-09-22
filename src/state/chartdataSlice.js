import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const chartdataSlice = createSlice({
    name: 'chartdata',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            if (state.series[0].data.length > 20) {
                state.series[0].data.shift();
            }
            state.series[0].data.push(action.payload);
            return state;
        },
    },
});

export const { add } = chartdataSlice.actions;
export default chartdataSlice.reducer;