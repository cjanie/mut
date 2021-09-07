import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../interfaces/Item";

const initialState = [] as Item[];

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload); // Mutation OK inside createSlice
        },
        save(state, action) {
            state.find(item => item.id === action.payload.id)!.content = action.payload.content;
        },
        delete(state, action) {
            // TODO
        },
        reset() {
            return initialState;
        }
    }
    
});



export const { add, save, reset } = dataSlice.actions;
export default dataSlice.reducer;
