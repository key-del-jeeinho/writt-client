import LeftBar from "@/components/LeftBar";
import Window from "@/components/Window";
import { DEFAULT_CONTENT } from "@/dummy/JsonContent.dummy";
import { File, FileScheme } from "@/interface/File";
import { FileSet } from "@/interface/FileSet";
import { Tab } from "@/interface/Tab";
import { randomUUID } from "crypto";
import { DateTime } from "luxon";

const fileSet: FileSet[] = [
  { 
    id: randomUUID(), 
    name: "직소",
    type: 'file',
    ext: "md",
    description: "다자이 오사무 作 소설",
    content: DEFAULT_CONTENT,
    createdAt: DateTime.fromObject({year: 2024, month: 9, day: 29, hour: 12, minute: 30, second: 15}),
    lastModifiedAt: DateTime.now(),
  },
  { id: randomUUID(), name: "어릿광대의 꽃", type: 'file', ext: "md", content: DEFAULT_CONTENT, description: '', createdAt: DateTime.fromObject({year: 2024, month: 9, day: 29, hour: 13, minute: 27, second: 43}), lastModifiedAt: DateTime.now() },
  { id: randomUUID(), name: "인간실격", type: 'file', ext: "md", content: DEFAULT_CONTENT, description: '', createdAt: DateTime.fromObject({year: 2024, month: 10, day: 1, hour: 3, minute: 1, second: 33}), lastModifiedAt: DateTime.now() },
  { id: randomUUID(), name: "어린왕자", type: 'file', ext: "md", content: DEFAULT_CONTENT, description: '', createdAt: DateTime.fromObject({year: 2024, month: 10, day: 2, hour: 19, minute: 54, second: 1}), lastModifiedAt: DateTime.now() },
  { id: randomUUID(), name: "J. J. 루소", type: 'folder' },
  { id: randomUUID(), name: "한비자", type: 'folder' },
  { id: randomUUID(), name: "T.모어", type: 'folder' },
]

const filesIn1depth: File[] = fileSet
  .filter(content => content.type === 'file')
  .map(file => FileScheme.parse(file));

const tabs: Tab[] = filesIn1depth.map(content => ({
  id: content.id,
  name: content.name,
  ext: content.ext,
}))

const activeTab = tabs[0];
const activeFile = filesIn1depth[0];
const deactiveTabs = tabs.slice(1);

export default function NotePage() {
    return (
      <div className="h-full w-full flex flex-row">
        <LeftBar fileSets={fileSet}/>
        <Window
          activeTab={activeTab} 
          activeFile={activeFile} 
          deactiveTabs={deactiveTabs}
        />
      </div>
    );
  }
  