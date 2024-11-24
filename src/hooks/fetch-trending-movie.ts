// 'use client';
// import { Movie } from "@/type/Movie";
// import { useCallback, useEffect, useState } from "react";

// export const useFetchMovies = () => {
//     const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // const fetchMovies = useCallback(async () => {
//     //     try {
//     //         const response = await fetch(
//     //             `${process.env.NEXT_PUBLIC_TMDB_BASE_URL!}/trending/movie/day?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY!}`
//     //         );
            
//     //         if (!response.ok) {
//     //             throw new Error("Failed to fetch trending movies");
//     //         }

//     //         const data = await response.json();
//     //         setTrendingMovies(data.results);
//     //         setLoading(false);
//     //     } catch (error) {
//     //         setError(error.message || "An error occurred");
//     //         setLoading(false);
//     //     }
//     // }, []);
    
// const fetchMovies = useCallback(async () => {
//     setLoading(true); // Set loading ke true sebelum memulai fetch
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL!}/trending/movie/day?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY!}`);
        
//         if (!response.ok) {
//             throw new Error("Failed to fetch trending movies"); // Buat error jika response tidak ok
//         }

//         const data = await response.json();
//         setTrendingMovies(data.results);
//     } catch (error) {
//         if (error instanceof Error) {
//             setError(error.message); // Tangani error dengan tipe yang lebih spesifik
//         } else {
//             setError("An unexpected error occurred"); // Tangani error yang tidak terduga
//         }
//     } finally {
//         setLoading(false); // Set loading ke false setelah selesai
//     }
// }, []);
//     useEffect(() => {
//         fetchMovies();
//     }, [fetchMovies]);

//     return { trendingMovies, loading, error };
// };
