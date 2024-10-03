import { z } from "zod";

export const TabScheme = z.object({
    id: z.string().uuid(),
    name: z.string(),
    ext: z.string(),
})

export type Tab = z.infer<typeof TabScheme>;