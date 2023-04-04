import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchGamesByGenre = createAsyncThunk('gamesByGenre/fetch', async (genre) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&genres=${genre}&page_size=50`)

    return response.data.results
})

export { fetchGamesByGenre };