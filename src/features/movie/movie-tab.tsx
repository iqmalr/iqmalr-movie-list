import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useTrendingMovieCards } from "@/hooks/use-trending-movie-card";
import { useTrendingMovieSkeletons } from "@/hooks/use-trending-movie-skeleton";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { AlbumArtwork } from "../music/components/album-artwork";
import { madeForYouAlbums } from "../music/data/albums";

const MovieTab = () => {
    // const { trendingMovies, loading, error } = useFetchTrendingMovies();
    const { trendingMovies, loading, error } = useSelector((state: RootState) => state.trendingMovies);

    // const skeletonCount = trendingMovies?.length || 10;
    const { movieCards } = useTrendingMovieCards(trendingMovies);
    const { skeletons } = useTrendingMovieSkeletons(trendingMovies, loading);
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">Trending Now</h2>
                    <p className="text-sm text-muted-foreground">
                        Top movies for you. Updated daily.
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {loading ? (
                            skeletons
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            movieCards || <p>No trending movies available</p>
                        )}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
                <p className="text-sm text-muted-foreground">
                    Your personal playlists. Updated daily.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {madeForYouAlbums.map((album) => (
                            <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                            />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
}

export default MovieTab