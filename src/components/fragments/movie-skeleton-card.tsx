import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
interface SkeletonCardProps {
    className?: string;
    style?: React.CSSProperties;
}
export function MovieSkeletonCard({ className, style }: SkeletonCardProps) {
    return (
        <div className={cn("flex flex-col space-y-3", className)} style={style}>
            <Skeleton className="h-[330px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
        //   className={cn("animate-pulse rounded-md bg-red-600", className)}
    );
}
