import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Text } from "../../interfaces/Text";

interface TextsState {
    value: Text[]
}

const initialState: TextsState = {
    value : []
};

const textsSlice = createSlice({
    name: "texts",
    initialState,
    reducers: {
        added(state, action: PayloadAction<Text>) {
            state.value.push(action.payload);
        },
        saved(state, action: PayloadAction<Text>) {
            state.value.find(text => text.id === action.payload.id)!.content = action.payload.content;
        },
        reset() {
            return initialState;
        }
    }
});

export const { added, saved, reset } = textsSlice.actions;
export default textsSlice.reducer;


