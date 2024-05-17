import { cn } from "@/lib/utils"

import { ModeToggle } from "@/components/mode-toggle"
import { Command } from "lucide-react"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(className)}>
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Command />
                    <p className="text-center text-sm leading-loose md:text-left">
                        Built by{" "}
                        <a
                            href={"twitter.com/rohansen856"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            rcsen
                        </a>
                        . Illustrations by{" "}
                        <a
                            href="https://popsy.co"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Popsy
                        </a>
                        . The source code is available on{" "}
                        <a
                            href={"github.com/rohansen856"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <ModeToggle />
            </div>
        </footer>
    )
}
