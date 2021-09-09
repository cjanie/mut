// DUCKS Pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState { // Type of state
    value: number;
}

const initialState: CounterState = { // Initial value
    value: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented(state) {
            state.value++; // Toolkit: 'immer' makes it immutable
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;