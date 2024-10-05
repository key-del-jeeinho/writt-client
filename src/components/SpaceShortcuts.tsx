import { FolderIcon, SearchIcon, BookmarkIcon, PanelLeftClose } from "lucide-react";

export default function SpaceShortcuts() {
    return (
        <div className="h-12 mx-4 flex flex-row justify-between px-4 items-center flex-shrink-0 flex-grow-0">
            <div className="flex flex-row gap-4">
                <FolderIcon className="w-4 h-4" />
                <SearchIcon className="w-4 h-4" />
                <BookmarkIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-row gap-2">
                <PanelLeftClose className="w-4 h-4" />
            </div>
        </div>
    )
}