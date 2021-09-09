import { createSlice } from "@reduxjs/toolkit";

interface AvailableIdState {
    value: number
}

const initialState: AvailableIdState = {
    value: 1
}

const availableIdSlice = createSlice({
    name: "availableId",
    initialState,
    reducers: {
        incrementedAvailableId(state) {
            state.value++;
        }
    }
});

export const { incrementedAvailableId } = availableIdSlice.actions;
export default availableIdSlice.reducer;