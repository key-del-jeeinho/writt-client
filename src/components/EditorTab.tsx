import { Tab } from "@/interface/Tab";
import { XIcon } from "lucide-react";

interface IProps {
    activeTab: Tab;
    deactiveTabs: Tab[];
}

export default function EditorTab({ activeTab, deactiveTabs }: IProps) {
    return (
        <div className="flex flex-row">
            <ActivedEditorTab tab={activeTab} />
            { deactiveTabs.map(deactiveTabs =>
            <DeactivedEditorTab key={deactiveTabs.id} tab={deactiveTabs} />) }
        </div>
    )
}

function ActivedEditorTab({ tab }: { tab: Tab }) {
    return (
        <div className="flex flex-row">
          <div className="w-48 h-10 bg-zinc-950 flex items-center px-4 rounded-t justify-between">
            <span>{tab.name}.{tab.ext}</span>
            <XIcon className="w-4 h-4" />
          </div>
        </div>
    )
}

function DeactivedEditorTab({ tab }: { tab: Tab }) {
    return (
        <div className="flex flex-row h-10 items-center">
          <div className="w-48 h-8 bg-zinc-900 flex items-center px-4 rounded justify-between">
            <span>{tab.name}.{tab.ext}</span>
            <XIcon className="w-4 h-4" />
          </div>
        </div>
    )
}