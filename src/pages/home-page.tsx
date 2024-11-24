'use client'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MovieTab from "@/features/movie/movie-tab"
import TVTab from "@/features/tv/tv-tab"
// import { useFetchTrendingMovies } from "@/hooks/fetch-trending-movie"
import { fetchTrendingMovies } from "@/hooks/use-fetch-trending-movie"
import { AppDispatch } from "@/store/store"
import { PlusCircle } from "lucide-react"
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
                <Tabs defaultValue="movies" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="movies" className="relative">
                                Movies
                            </TabsTrigger>
                            <TabsTrigger value="tv series">TV series</TabsTrigger>
                            <TabsTrigger value="live" disabled>
                                Live
                            </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto mr-4">
                            <Button>
                                <PlusCircle />
                                Add Movies
                            </Button>
                        </div>
                    </div>
                    <TabsContent
                        value="movies"
                        className="border-none p-0 outline-none"
                    >
                        <MovieTab />
                    </TabsContent>
                    <TabsContent
                        value="tv series"
                        className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                        <TVTab />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default HomePage