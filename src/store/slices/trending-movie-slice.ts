import { Movie } from "@/type/Movie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TrendingMovieState{
    trendingMovies:Movie[]
    loading:boolean
    error:string|null
}
const initialState:TrendingMovieState={
    trendingMovies:[],
    loading:true,
    error:null,
}

const trendingMovieSlice=createSlice({
    name:"trendingMovie",
    initialState,
    reducers:{
        setTrendingMovies(state, action:(PayloadAction<Movie[]>)){
            state.trendingMovies=action.payload
            state.loading=false
            state.error=null
        },
        setLoading(state){
            state.loading=true
        },
           setError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    }
})
export const { setTrendingMovies, setLoading, setError } = trendingMovieSlice.actions;
export default trendingMovieSlice.reducer;