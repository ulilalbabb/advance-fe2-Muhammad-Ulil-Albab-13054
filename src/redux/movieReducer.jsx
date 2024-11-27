import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://671c56602c842d92c382a39e.mockapi.io/api/movie/movie";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
    const response = await axios.get(API_URL);
    return response.data;
})

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
    const response = await axios.post(API_URL, movie);
    return response.data;
})

export const deleteMovie = createAsyncThunk("movies/deleteMovie", async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
})

export const updateMovie = createAsyncThunk("movies/updateMovie", async ({ id, movie }) => {
    const response = await axios.put(`${API_URL}/${id}`, movie);
    return response.data;
})

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => { 
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addMovie.fulfilled, (state, action) => {
            state.movies.push(action.payload);
        })
        .addCase(deleteMovie.fulfilled, (state, action) => {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload);
        })
        .addCase(updateMovie.fulfilled, (state, action) => {
            const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
            if (index !== -1) {
                state.movies[index] = action.payload;
            }
        })
       },
});

export default moviesSlice.reducer;