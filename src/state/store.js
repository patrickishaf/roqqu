import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import chartdataReducer from './chartdataSlice'

export default configureStore({
    reducer: {
        chart: chartdataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['add'],
            ignnoredActionPaths: ['payload.x'],
            ignoredPaths: ['series'],
        }
    }),
});