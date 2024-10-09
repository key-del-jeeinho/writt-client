import { z } from "zod";

export const FolderScheme = z.object({
    id: z.string().uuid(),
    name: z.string(),
});

export type Folder = z.infer<typeof FolderScheme>;

export const FolderMetaScheme = FolderScheme.pick({
    id: true,
    name: true,
})

export type FolderMeta = z.infer<typeof FolderMetaScheme>
