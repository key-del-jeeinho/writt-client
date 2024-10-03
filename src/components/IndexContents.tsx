import { File } from "@/interface/File";
import { Folder } from "@/interface/Folder";
import { Content } from "@/interface/Content";
import { FolderIcon } from "lucide-react";


interface IProps {
    contents: Content[]
}

export default function IndexContents({ contents }: IProps) {
    return (
        <ul className="structure-contents h-full mx-4 py-2 px-4 flex flex-col gap-2">
            { contents.map(content => <ContentItem key={content.id} content={content} />) }
        </ul>
    )
}

function ContentItem({ content }: { content: Content }) {
    switch(content.type) {
        case 'file': return FileContentItem(content)
        case 'folder': return FolderContentItem(content)
        default: return null
    }
}

function FileContentItem(content: File) {
    return (<li><div className="truncate">{content.name}.{content.ext}</div></li>)
}

function FolderContentItem(content: Folder) {
    return (
        <li>
            <div className="flex flex-row gap-2 items-center">
                <FolderIcon className="w-4 h-4" />
                <span>{content.name}</span>
            </div>
        </li>
    )
}