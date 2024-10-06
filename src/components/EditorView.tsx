import { File } from "@/interface/File";
import { useMemo } from "react";
import Editor from "./Editor";

interface IProps {
  file: File;
}

export default function EditorView({ file }: IProps) {
    const createdAt = useMemo(() => file.createdAt.toFormat('yyyy.MM.dd'), [file.createdAt]);
    const lastModifiedAt = useMemo(() => file.lastModifiedAt.toFormat('yyyy.MM.dd'), [file.lastModifiedAt]);

    return (
        <div className="content flex-grow overflow-y-auto bg-zinc-950 flex flex-row justify-center">
            <div className="left-content w-1/2 min-w-[500px] h-full pt-20 flex flex-col">
            
              <h2 className="text-3xl font-extrabold">{file.name}</h2>
              <div className="mt-2"></div>
              <div className="flex flex-row gap-2 items-end">
                <span>{file.description}</span>
                <span className="text-sm text-zinc-500">{createdAt} - {lastModifiedAt}</span>
              </div>
              <div className="pt-6"/>
                <Editor fileId={file.id} initialContent={file.content}></Editor>
              <div className="mt-4"></div>
              <div>
              </div>
            </div>
          </div> 
    )
}