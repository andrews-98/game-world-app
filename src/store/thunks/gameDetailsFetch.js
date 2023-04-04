import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchGameDetails = createAsyncThunk('gameDetails/fetch', async (id) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)

    return response.data;

})

export { fetchGameDetails };

