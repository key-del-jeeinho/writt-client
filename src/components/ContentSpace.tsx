import { Tab } from "@/interface/Tab";
import { useMemo } from "react";

interface IProps {
    activeTab: Tab;
}

export default function ContentSpace({ activeTab }: IProps) {
    const createdAt = useMemo(() => activeTab.createdAt.toFormat('yyyy.MM.dd'), [activeTab.createdAt]);
    const lastModifiedAt = useMemo(() => activeTab.lastModifiedAt.toFormat('yyyy.MM.dd'), [activeTab.lastModifiedAt]);

    return (
        <div className="content flex-grow overflow-y-auto bg-zinc-950 flex flex-row justify-center">
            <div className="left-content w-1/2 min-w-[500px] h-full pt-20 flex flex-col">
            
              <h2 className="text-3xl font-extrabold">{activeTab.name}</h2>
              <div className="mt-2"></div>
              <div className="flex flex-row gap-2 items-end">
                <span>{activeTab.description}</span>
                <span className="text-sm text-zinc-500">{createdAt} - {lastModifiedAt}</span>
              </div>
              <div className="pt-6"/>
                <div dangerouslySetInnerHTML={ {__html: activeTab.content} }>
                </div>
              <div className="mt-4"></div>
              <div>
              </div>
            </div>
          </div> 
    )
}