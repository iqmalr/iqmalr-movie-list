'use client'
// import { useFetchTrendingMovies } from "@/hooks/fetch-trending-movie"
import MediaTab from "@/features/media/media-tab"
import { fetchTrendingMovies } from "@/hooks/use-fetch-trending-movie"
import { AppDispatch } from "@/store/store"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchTrendingMovies());
    }, [dispatch]);
    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
                <MediaTab />
            </div>
        </div>
    )
}

export default HomePage