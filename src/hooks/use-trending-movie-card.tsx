'use client'
import { MovieCard } from "@/features/trending-movie/movie-card";
import { Movie } from "@/type/Movie";
import RenderEach from "@/utils/render-each";
import { useMemo } from "react";

export const useTrendingMovieCards = (
    trendingMovies: Movie[],
) => {

    const movieCards = useMemo(
        () => (
            <RenderEach
                of={trendingMovies}
                render={(movie: Movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        className="w-[250px]"
                        aspectRatio="portrait"
                        width={250}
                        height={330}
                    />
                )}
            />),
        // trendingMovies?.map((movie: Movie) => (
        //     <MovieCard
        //         key={movie.id}
        //         movie={movie}
        //         className="w-[250px]"
        //         aspectRatio="portrait"
        //         width={250}
        //         height={330}
        //     />
        // )),
        [trendingMovies]
    );

    return { movieCards };
};
