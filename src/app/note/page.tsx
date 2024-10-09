import LeftBar from "@/components/LeftBar";
import Window from "@/components/Window";
import { ACTIVE_FILE } from "@/constant/activeFile";
import { FILE_SET_META_LIST } from "@/constant/fileSet";
import { ACTIVE_TAB, DEACTIVE_TABS } from "@/constant/tabs";

export default function NotePage() {
    return (
      <div className="h-full w-full flex flex-row">
        <LeftBar fileSetMetaList={FILE_SET_META_LIST}/>
        <Window
          activeTab={ACTIVE_TAB} 
          activeFile={ACTIVE_FILE} 
          deactiveTabs={DEACTIVE_TABS}
        />
      </div>
    );
  }
  