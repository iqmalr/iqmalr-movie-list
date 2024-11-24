// import productReducer from "@/store/slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import trendingMovieSlice from "./slices/trending-movie-slice";

export const store = configureStore({
  reducer: {
    // products: productReducer,
        trendingMovies: trendingMovieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
