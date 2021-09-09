import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hieroglyph } from "../../interfaces/Hieroglyph";
import { getHieroglyphs } from "../../providers/providers";

interface HieroglyphsState {
    value: Hieroglyph[];
}

const initialState: HieroglyphsState = {
    value: getHieroglyphs()
}

const hieroglyphsSlice = createSlice({
    name: "hieroglyphs",
    initialState,
    reducers: {
        signValuesAssigned(state, action: PayloadAction<Hieroglyph>) {
            state.value.find(hieroglyph => hieroglyph.code === action.payload.code)!.phoneticValues = action.payload.phoneticValues;
        }
    }
});

export const { signValuesAssigned } = hieroglyphsSlice.actions;
export default hieroglyphsSlice.reducer;

