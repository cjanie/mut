import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import textsReducer from "../features/texts/texts-slice";
import availableIdReducer from "../features/availableId/availableId-slice";
import hieroglyphsReducer from "../features/hieroglyphs/hieroglyphs-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({ // createStore ++
    reducer: { // { } cf combine reducers
        counter: counterReducer,
        texts: textsReducer,
        availableId: availableIdReducer,
        hieroglyphs: hieroglyphsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>