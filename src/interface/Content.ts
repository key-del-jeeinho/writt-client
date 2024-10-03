import { z } from "zod";
import { FileScheme } from "./File";
import { FolderScheme } from "./Folder";

export const ContentScheme = z.union([
    FileScheme.extend({ type: z.literal('file') }),
    FolderScheme.extend({ type: z.literal('folder') }),
]);

export type Content = z.infer<typeof ContentScheme>;