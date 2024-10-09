import { Tab } from "@/interface/Tab";
import { ACTIVE_FILE } from "./activeFile";
import { FILE_SET_META_LIST } from "./fileSet";

export const TABS: Tab[] = FILE_SET_META_LIST.filter(fileSet => fileSet.type == 'file')
    .map(file => ({
        id: file.id,
        name: file.name,
        ext: file.ext,
    }))

const ACTIVE_TAB_FILE_ID = ACTIVE_FILE?.id;
const ACTIVE_TAB_IDX = TABS.findIndex(tab => tab.id === ACTIVE_TAB_FILE_ID)

export const ACTIVE_TAB: Tab = TABS[ACTIVE_TAB_IDX];
export const DEACTIVE_TABS: Tab[] = TABS.filter((_, idx) => idx != ACTIVE_TAB_IDX)