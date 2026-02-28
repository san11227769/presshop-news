import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filters {
    lat: string;
    lon: string;
    miles: string;
}

interface NewsFilterState {
    filters: Filters;
}

const initialState: NewsFilterState = {
    filters: {
        lat: "22.5918214",
        lon: "88.3897482",
        miles: "2",
    },
};

export const newsFilterSlice = createSlice({
    name: "newsFilter",
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Filters>) => {
            state.filters = action.payload;
        },
    },
});

export const { setFilters } = newsFilterSlice.actions;
export default newsFilterSlice.reducer;
