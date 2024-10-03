import { z } from "zod";

export const FolderScheme = z.object({
    id: z.string().uuid(),
    name: z.string(),
});

export type Folder = z.infer<typeof FolderScheme>;
