import { Tab } from "@/interface/Tab";
import EditorShortcuts from "./EditorShortcuts";
import EditorTab from "./EditorTab";
import EditorView from "./EditorView";
import { File } from "@/interface/File";

interface IProps {
    activeTab: Tab
    activeFile: File
    deactiveTabs: Tab[]
}

export default function Window({
    activeTab,
    activeFile,
    deactiveTabs
}: IProps) {
    return (
        <div className="w-full flex flex-col">
            <div className="sticky top-0 self-start w-full z-10">
            <div className="h-12 w-full bg-zinc-900 flex flex-row gap-1 items-end p-0">
                <EditorTab activeTab={activeTab} deactiveTabs={deactiveTabs} />
            </div>
            <EditorShortcuts />
            </div>
            <EditorView file={activeFile}/>
        </div>
    )
}