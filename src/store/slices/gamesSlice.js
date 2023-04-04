import { createSlice } from "@reduxjs/toolkit";
import { fetchGames } from "../thunks/gamesFetch";
import { fetchGamesByGenre } from "../thunks/gamesFetchByGenre";
import { fetchGameDetails } from "../thunks/gameDetailsFetch";


const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        isLoading: false,
        gameList: [],
        gameDetails: [],
        error: null
    },
    extraReducers(buider) {
        //FETCH GAMES
        buider.addCase(fetchGames.pending, (state, action) => {
            state.isLoading = true;
        })
        buider.addCase(fetchGames.fulfilled, (state, action) => {
            state.isLoading = false;
            state.gameList = action.payload;
        })
        buider.addCase(fetchGames.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
        //FETCH GAMES BY GENRE
        buider.addCase(fetchGamesByGenre.pending, (state, action) => {
            state.isLoading = true;
        })
        buider.addCase(fetchGamesByGenre.fulfilled, (state, action) => {
            state.isLoading = false;
            state.gameList = action.payload;
        })
        buider.addCase(fetchGamesByGenre.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
        //FETCH GAMEDETAILS
        buider.addCase(fetchGameDetails.pending, (state) => {
            state.isLoading = true;
        })
        buider.addCase(fetchGameDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.gameDetails = action.payload;
        })
        buider.addCase(fetchGameDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export const gamesReducer = gamesSlice.reducer;