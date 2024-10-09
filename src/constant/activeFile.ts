import { File, FileMeta } from "@/interface/File";
import { FILE_SET_META_LIST } from "./fileSet";
import { DEFAULT_CONTENT } from "@/dummy/JsonContent.dummy";
import { DateTime } from "luxon";

export const ACTIVE_FILE_META: FileMeta = FILE_SET_META_LIST
    .filter(fileSet => fileSet.type === 'file')
    .find(file => file.name === '직소')!

export const ACTIVE_FILE: File = {
    ...ACTIVE_FILE_META,
    description: "다자이 오사무 作 소설",
    content: DEFAULT_CONTENT,
    createdAt: DateTime.fromObject({year: 2024, month: 9, day: 29, hour: 12, minute: 30, second: 15}),
    lastModifiedAt: DateTime.now(),
}