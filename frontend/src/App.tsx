import { ComponentProps, useState } from "react"
import { ModeToggle } from "./components/mode-toggle"
import { useTheme } from "./components/theme-provider"
import { Button } from "./components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card"
import { cn } from "./lib/utils"
import { File, Settings } from "lucide-react"
import { Badge } from "./components/ui/badge"

const CodeText = (props: ComponentProps<"span">) => {
    return (
        <span
            {...props}
            className={cn(
                props.className,
                "bg-muted text-muted-foreground rounded font-mono text-sm p-1"
            )}
        />
    )
}

function App() {
    const [count, setCount] = useState(0)
    const { theme } = useTheme()
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
            <div className="container flex h-full min-h-screen gap-2 mt-4">
                <div className="w-[400px] min-h-[500px] bg-secondary rounded-lg p-4">
                    <Button variant={"outline"} className="w-full gap-4">
                        <File className="text-teal-700" />
                        List of notes
                    </Button>
                </div>
                <div className="w-full min-h-[500px] rounded-lg border p-4">
                    <h2 className="mb-6">Notes created on 16th May 2024</h2>
                    <div className="flex p-4 bg-secondary justify-between">
                        <div className="flex flex-col items-start">
                            <div className="flex gap-4">
                                <img
                                    src="/notes-icon/note-1.png"
                                    alt="note-1"
                                    className="h-16"
                                />
                                <div>
                                    <h3 className="text-lg font-bold md:text-xl xl:text-2xl 3xl:text-3xl">
                                        My Note #1
                                        <p className="text-sm md:text-md xl:text-lg 3xl:text-xl">
                                            webpage: unsplash.com
                                        </p>
                                    </h3>
                                </div>
                            </div>
                            <div className="flex mt-4 mb-2 gap-1">
                                <p className="mr-6">Tags</p>
                                <Badge>Water</Badge>
                                <Badge>Aquatic life</Badge>
                                <Badge>Marine fish</Badge>
                            </div>
                            <div className="flex mb-2">
                                <p className="mr-6">Highlights</p>
                                <p>
                                    Water is an inorganic compound with
                                    the chemical formula H2O. It is a
                                    transparent, tasteless,
                                    odorless,[c] and nearly colorless chemical
                                    substance.
                                </p>
                            </div>
                            <div className="flex">
                                <p className="mr-6">Notes</p>
                                <p>
                                    My first note for research on a topic
                                    associated with water for my projrct
                                </p>
                            </div>
                        </div>
                        <div>11:05 AM</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
