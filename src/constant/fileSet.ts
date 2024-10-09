import { FileSetMeta } from "@/interface/FileSet";
import { randomUUID } from "crypto";

export const FILE_SET_META_LIST: FileSetMeta[] = [
    { id: randomUUID(), name: "직소", type: 'file', ext: "md" },
    { id: randomUUID(), name: "어릿광대의 꽃", type: 'file', ext: "md" },
    { id: randomUUID(), name: "인간실격", type: 'file', ext: "md" },
    { id: randomUUID(), name: "어린왕자", type: 'file', ext: "md" },
    { id: randomUUID(), name: "J. J. 루소", type: 'folder' },
    { id: randomUUID(), name: "한비자", type: 'folder' },
    { id: randomUUID(), name: "T.모어", type: 'folder' },
] 