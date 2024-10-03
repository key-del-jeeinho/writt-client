import { Content } from "@/interface/Content";
import StructureShortcuts from "./StructureShortcuts";
import IndexSpaceShortcuts from "./IndexSpaceShortcuts";
import IndexContents from "./IndexContents";

interface IProps {
    contents: Content[]
}

export default function LeftBar({ contents }: IProps) {
    return (
        <div className="w-1/6 min-w-[200px] h-screen bg-zinc-900 flex flex-col divide-y-[1px] divide-zinc-800  sticky top-0 self-start">
            <IndexSpaceShortcuts />
            <StructureShortcuts />
            <IndexContents contents={contents} />
        </div>
    )
}