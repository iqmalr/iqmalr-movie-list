'use client'
import { MovieSkeletonCard } from "@/components/fragments/movie-skeleton-card";
import { Movie } from "@/type/Movie";
import { useMemo } from "react";

export const useTrendingMovieSkeletons = (
    trendingMovies: Movie[],
    loading: boolean
) => {
    const skeletons = useMemo(
        () =>
            Array.from({ length: trendingMovies?.length || 10 }).map((_, index) => (
                <MovieSkeletonCard
                    className="transition-opacity duration-300"
                    style={{ opacity: loading ? 1 : 0 }}
                    key={index}
                />
            )),
        [loading, trendingMovies?.length]
    );

    return { skeletons };
};
