import IndexShortcuts from "./IndexShortcuts";
import SpaceShortcuts from "./SpaceShortcuts";
import IndexFileSets from "./FileSetList";
import { FileSet } from "@/interface/FileSet";

interface IProps {
    contents: FileSet[]
}

export default function LeftBar({ contents }: IProps) {
    return (
        <div className="w-1/6 min-w-[200px] h-screen bg-zinc-900 flex flex-col divide-y-[1px] divide-zinc-800  sticky top-0 self-start">
            <SpaceShortcuts />
            <IndexShortcuts />
            <IndexFileSets fileSets={contents} />
        </div>
    )
}