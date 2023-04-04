import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchGames = createAsyncThunk('games/fetch', async () => {
   const apiKey = process.env.REACT_APP_API_KEY;

   const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=30`)

   return response.data.results
})

export { fetchGames };