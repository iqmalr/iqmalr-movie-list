import { setError, setLoading, setTrendingMovies } from "@/store/slices/trending-movie-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTrendingMovies = createAsyncThunk(
    'trendingMovies/fetch',
    async (_, { dispatch }) => {
        dispatch(setLoading());
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL!}/trending/movie/day?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY!}`);
            if (!response.ok) {
                throw new Error("Failed to fetch trending movies");
            }
            const data = await response.json();
            dispatch(setTrendingMovies(data.results));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setError(error.message));
            } else {
                dispatch(setError("An unexpected error occurred"));
            }
        }
    }
);
// export const fetchTrendingMovies = () => {
//     return async(dispatch:AppDispatch)=>{
//         dispatch(setLoading())
//         try {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL!}/trending/movie/day?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY!}`);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch trending movies");
//             }
//             const data = await response.json();
//             dispatch(setTrendingMovies(data.results));
//         } catch (error) {
//             if (error instanceof Error) {
//                 dispatch(setError(error.message));
//             } else {
//                 dispatch(setError("An unexpected error occurred"));
//             }
//         }
//     }
// }