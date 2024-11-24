import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
    movie: {
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        vote_average: number;
    };
    aspectRatio?: "portrait" | "square";
    width?: number;
    height?: number;
}

const tmdbLoader = ({ src, width }: { src: string; width: number }) => {
    const cleanPath = src.startsWith('/') ? src.slice(1) : src;
    const size = Math.min(width, 250);
    return `https://image.tmdb.org/t/p/w${size}/${cleanPath}`;
}

export function MovieCard({
    movie,
    aspectRatio = "portrait",
    width = 250,
    height = 330,
    className,
    ...props
}: MovieCardProps) {
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <div className={cn("space-y-3", className)} {...props}>
            <div className="overflow-hidden rounded-md relative">
                {imageLoading && (
                    <Skeleton />
                )}
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={width}
                    height={height}
                    loading="lazy"
                    loader={tmdbLoader}
                    onLoadingComplete={() => setImageLoading(false)}
                    className={cn(
                        "h-auto w-auto object-cover transition-all hover:scale-105",
                        aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
                        imageLoading ? "opacity-0" : "opacity-100"
                    )}
                />
            </div>
            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{movie.title}</h3>
                <p className="text-xs text-muted-foreground">{movie.release_date}</p>
                <p className="text-xs text-muted-foreground">
                    Rating: {movie.vote_average}
                </p>
            </div>
        </div>
    );
}