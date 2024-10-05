import { BookmarkIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisIcon } from "lucide-react";

export default function EditorShortcuts() {
    return (
        <div className="h-12 w-full bg-zinc-950 flex flex-row gap-1 justify-between p-0">
          <div className="flex flex-row gap-2 items-center px-4">
            <ChevronLeftIcon className="w-4 h-4" />
            <ChevronRightIcon className="w-4 h-4" />
          </div>

          <div className="flex flex-row gap-2 items-center px-4">
            <EllipsisIcon className="w-4 h-4" />
            <BookmarkIcon className="w-4 h-4" />
          </div>
        </div>
    )
}