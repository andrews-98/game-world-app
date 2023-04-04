import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { gamesReducer } from "./slices/gamesSlice";



export const store = configureStore({
   reducer: {
      games: gamesReducer,
      auth: authReducer
   }
})

export * from "./thunks/gamesFetch";
export * from "./thunks/gamesFetchByGenre";
export * from "./thunks/gameDetailsFetch";