import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://671c56602c842d92c382a39e.mockapi.io/api/movie/movie";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
    try {
        const response = await axios.post(API_URL, movie);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const deleteMovie = createAsyncThunk("movies/deleteMovie", async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
});

export const editMovie = createAsyncThunk("movies/editMovie", async ({id, name, series, rating}) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, {name, series, rating});
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    extraReducers: (builder) => {
        builder
        .addCase(getMovies.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(addMovie.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        .addCase(deleteMovie.fulfilled, (state, action) => {
            return state.filter((movie) => movie.id !== action.payload);
        })
        .addCase(editMovie.fulfilled, (state, action) => {
            const index = state.findIndex((movie) => movie.id === action.payload.id);
            state[index] = action.payload;
        });
    },
});

export default moviesSlice.reducer;