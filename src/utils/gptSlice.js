import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptRecommendedMovies: null,
    gptRecommendedMovieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { gptRecommendedMovies, tmdbMovieResults } = action.payload;
      state.gptRecommendedMovies = gptRecommendedMovies;
      state.gptRecommendedMovieResults = tmdbMovieResults;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
