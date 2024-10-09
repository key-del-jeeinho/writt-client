import { FileMeta } from "@/interface/File";
import { FileSetMeta } from "@/interface/FileSet";
import { FolderMeta } from "@/interface/Folder";
import { FolderIcon } from "lucide-react";


interface IProps {
    fileSetMetaList: FileSetMeta[]
}

export default function IndexFileSets({ fileSetMetaList }: IProps) {
    return (
        <ul className="structure-contents h-full mx-4 py-2 px-4 flex flex-col gap-2">
            { fileSetMetaList.map(fileSet => <FileSetItem key={fileSet.id} meta={fileSet} />) }
        </ul>
    )
}

interface ItemIProps { meta: FileSetMeta }
function FileSetItem({ meta }: ItemIProps) {
    switch(meta.type) {
        case 'file': return <FileItem meta={meta}/>
        case 'folder': return <FolderItem meta={meta}/>
        default: return null
    }
}

interface FileIProps { meta: FileMeta }
function FileItem({ meta }: FileIProps) {
    return (<li><div className="truncate">{meta.name}.{meta.ext}</div></li>)
}

interface FolderIProps { meta: FolderMeta }
function FolderItem({ meta }: FolderIProps) {
    return (
        <li>
            <div className="flex flex-row gap-2 items-center">
                <FolderIcon className="w-4 h-4" />
                <span>{meta.name}</span>
            </div>
        </li>
    )
}