import { z } from "zod";
import { FileScheme } from "./File";
import { FolderScheme } from "./Folder";

export const FileSetScheme = z.union([
    FileScheme.extend({ type: z.literal('file') }),
    FolderScheme.extend({ type: z.literal('folder') }),
]);

export type FileSet = z.infer<typeof FileSetScheme>;