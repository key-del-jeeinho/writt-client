import { File } from "@/interface/File";
import { useMemo } from "react";

interface IProps {
  content: File;
}

export default function ContentSpace({ content }: IProps) {
    const createdAt = useMemo(() => content.createdAt.toFormat('yyyy.MM.dd'), [content.createdAt]);
    const lastModifiedAt = useMemo(() => content.lastModifiedAt.toFormat('yyyy.MM.dd'), [content.lastModifiedAt]);

    return (
        <div className="content flex-grow overflow-y-auto bg-zinc-950 flex flex-row justify-center">
            <div className="left-content w-1/2 min-w-[500px] h-full pt-20 flex flex-col">
            
              <h2 className="text-3xl font-extrabold">{content.name}</h2>
              <div className="mt-2"></div>
              <div className="flex flex-row gap-2 items-end">
                <span>{content.description}</span>
                <span className="text-sm text-zinc-500">{createdAt} - {lastModifiedAt}</span>
              </div>
              <div className="pt-6"/>
                <div dangerouslySetInnerHTML={ {__html: content.content} }>
                </div>
              <div className="mt-4"></div>
              <div>
              </div>
            </div>
          </div> 
    )
}