import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MovieTab from "@/features/movie/movie-tab"
import TVTab from "@/features/tv/tv-tab"
import { PlusCircle } from "lucide-react"
const MediaTab = () => {
    return (
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
    )
}

export default MediaTab