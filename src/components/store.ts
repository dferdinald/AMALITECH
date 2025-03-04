import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "../components/document-slice";

export const store = configureStore({
  reducer: {
    docs: documentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
