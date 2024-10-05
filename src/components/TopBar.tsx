import { Tab } from "@/interface/Tab";
import EditorShortcuts from "./EditorShortcuts";
import EditorTab from "./EditorTab";

interface IProps {
    activeTab: Tab;
    deactiveTabs: Tab[];
}

export default function TopBar({ activeTab, deactiveTabs }: IProps) {
    return (
        <div className="sticky top-0 self-start w-full z-10">
          <div className="h-12 w-full bg-zinc-900 flex flex-row gap-1 items-end p-0">
            <EditorTab activeTab={activeTab} deactiveTabs={deactiveTabs} />
          </div>
          <EditorShortcuts />
        </div>
    )
}