import { configureStore } from "@reduxjs/toolkit";
import newsFilterReducer from "./slices/newsFilterSlice";

export const store = configureStore({
    reducer: {
        newsFilter: newsFilterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
