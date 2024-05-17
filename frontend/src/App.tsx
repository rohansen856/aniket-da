import { ComponentProps, useEffect, useState } from "react"
import { ModeToggle } from "./components/mode-toggle"
import { useTheme } from "./components/theme-provider"
import { Button } from "./components/ui/button"
import { cn } from "./lib/utils"
import { File, Settings } from "lucide-react"
import { Badge } from "./components/ui/badge"
import { SiteFooter } from "./footer"
import axios from "axios"

interface Note {
    image: string;
    title: string;
    webpage: string;
    tags: string[];
    highlights: string;
    notes: string;
}


function App() {
    const [isOpened, setOpened] = useState(false)
    const [notes, setNotes] = useState<Note[]>([])
    async function getData() {
        const { data } = await axios.get("http://192.168.108.214:3333/data")
        const result = data as Note[]
        console.log(data)

        setNotes(result)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <header className="px-8 w-full bg-secondary">
                <div className="container h-20 flex items-center justify-between">
                    <div className="h-20 w-20 flex gap-4 items-center p-2">
                        <img src="/image.png" alt="" className="" />
                        <h1 className="text-lg font-extrabold md:text-xl xl:text-2xl 3xl:text-3xl">
                            Canvas
                        </h1>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Settings />
                        <ModeToggle />
                        <Button variant={"outline"}>Logout</Button>
                    </div>
                </div>
            </header>
            <div className="container flex h-full min-h-screen gap-2 mt-4 flex-col lg:flex-row mb-12">
                <div className="lg:w-[400px] lg:min-h-[500px] bg-secondary rounded-lg p-4 w-full">
                    <Button
                        variant={"outline"}
                        className="w-full gap-4 hover:bg-background"
                        onClick={() => setOpened(!isOpened)}
                    >
                        <File className="text-teal-700" />
                        List of notes
                    </Button>
                </div>
                <div
                    className={cn(
                        "duration-500 overflow-x-hidden",
                        isOpened ? "w-full h-full" : "lg:w-0 h-0"
                    )}
                >
                    <div className="w-full min-h-[500px] rounded-lg border p-4 space-y-4">
                        <h2 className="mb-6">Notes created on 16th May 2024</h2>
                        {notes.map((item) => (
                            <div className="flex p-4 bg-secondary rounded-md justify-between">
                                <div className="flex flex-col items-start">
                                    <div className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt="note-1"
                                            className="h-16"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold md:text-xl xl:text-2xl 3xl:text-3xl">
                                                {item.title}
                                                <p className="text-sm md:text-md xl:text-lg 3xl:text-xl">
                                                    webpage: {item.webpage}
                                                </p>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex mt-4 mb-2 gap-1">
                                        <p className="mr-6 font-bold">Tags</p>
                                        {item.tags.map((tag) => (
                                            <Badge>{tag}</Badge>
                                        ))}
                                    </div>
                                    <div className="flex mb-2">
                                        <p className="mr-6 font-bold">
                                            Highlights
                                        </p>
                                        <p>{item.highlights}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="mr-6 font-bold">Notes</p>
                                        <p>{item.notes}</p>
                                    </div>
                                </div>
                                <div>11:05 AM</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SiteFooter />
        </>
    )
}

export default App
