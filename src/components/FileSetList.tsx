import { File } from "@/interface/File";
import { FileSet } from "@/interface/FileSet";
import { Folder } from "@/interface/Folder";
import { FolderIcon } from "lucide-react";


interface IProps {
    fileSets: FileSet[]
}

export default function IndexFileSets({ fileSets }: IProps) {
    return (
        <ul className="structure-contents h-full mx-4 py-2 px-4 flex flex-col gap-2">
            { fileSets.map(fileSet => <FileSetItem key={fileSet.id} fileSet={fileSet} />) }
        </ul>
    )
}

function FileSetItem({ fileSet }: { fileSet: FileSet }) {
    switch(fileSet.type) {
        case 'file': return FileItem(fileSet)
        case 'folder': return FolderItem(fileSet)
        default: return null
    }
}

function FileItem(content: File) {
    return (<li><div className="truncate">{content.name}.{content.ext}</div></li>)
}

function FolderItem(content: Folder) {
    return (
        <li>
            <div className="flex flex-row gap-2 items-center">
                <FolderIcon className="w-4 h-4" />
                <span>{content.name}</span>
            </div>
        </li>
    )
}