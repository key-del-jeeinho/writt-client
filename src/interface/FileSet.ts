import { z } from "zod";
import { FileMetaScheme, FileScheme } from "./File";
import { FolderMetaScheme, FolderScheme } from "./Folder";

export const FileSetScheme = z.union([
    FileScheme.extend({ type: z.literal('file') }),
    FolderScheme.extend({ type: z.literal('folder') }),
]);

export type FileSet = z.infer<typeof FileSetScheme>;

export const FileSetMetaScheme = z.union([
    FileMetaScheme.extend({ type: z.literal('file') }),
    FolderMetaScheme.extend({ type: z.literal('folder') }),
]);

export type FileSetMeta = z.infer<typeof FileSetMetaScheme>;